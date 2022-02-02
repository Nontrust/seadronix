const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const router = express.Router();

const app = express();

//https://developers.kakao.com/console/app/556943
const native_Key = "4f7d060a0b6fce5758421929f32179d9";
const rest_Key = "bfd2ef023622c801d13292b505f12daf";
const javascript_Key = "8d219d84a8edf091e805d5ccc17b4200";
const Admin_Key = "f30e8b03566d7730aad042cab787e460";

// db 연결 설정
const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database: 'seadronix_db'
  }); 
  //mysql connect
  con.connect();
  
  app.use(session({
    secret : 'seadronix_key', //session Key
    resave : false, // 재저장 /X
    saveUninitialized : true //store 전 초기화 X
  }))

  app.use(express.json);
  app.use(express.urlencoded({extended:true}));


let params = { 
    title: 'seadronix-first task', 
    javascript_Key : javascript_Key,
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('map', params);
});

router.post('/insert', function(req, res, next){
    let xPos = req.body.xPos;
    let yPos = req.body.yPos;
    let title = req.body.map_title ;
    let user_seq = req.session.userSeq;

    con.query('insert into SDRNX_MAP(user_seq, title, xPos, yPos) values (?,?,?,?)', [user_seq, title, xPos, yPos],function(err,rows){
      if(err) throw err
      res.json({"result":'ok'})
    });
  });

  router.post('/selectPoint', function(req, res, next){
    let user_seq = req.session.userSeq;

    con.query('select * from SDRNX_MAP where user_seq=?', [user_seq],function(err,rows){
      if(err) throw err;
      else {
        console.log(rows);
        res.json({'data':rows});
        
      }
    });
  });



module.exports = router;

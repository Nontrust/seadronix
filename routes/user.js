const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const router = express.Router();

const app = express();

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
  
/* GET home page. */
router.get('/login', function(req, res, next) {  
  res.render('index', { title: 'seadronix' });
});

router.post('/login', function(req, res, next){
  const id = req.body.id
  const pw = req.body.pw

  let sql_insert={
    id:id ,pw:pw
  };
  con.query('select id from SDRNX_MEMBER where id=?',[id],function(err,rows){
    if(rows.length) {
      if(err){throw err;}
      console.log("id check",rows);
      
      if(rows[0].id == id){
        
        con.query('select id, user_seq from SDRNX_MEMBER where id=? and pw=?',[id,pw],function(err,pw_rows){
          console.log('pw check',pw_rows);
          if(pw_rows.length) {
            
            req.session.userName=pw_rows[0].id;
            req.session.userSeq=pw_rows[0].user_seq;
            req.session.isLogin=true;
            console.log('loginSuccess');
            req.session.save(function(){
              res.json({'result':'ok'})
              //res.redirect('/map',{session:req.session})
            });
          }else{  console.log('not length')
          res.json({'result':'no'});}
        })
      }
    }if(!rows.length) {
      console.log('not length')
      res.json({'result':'no'});
    }
  });
});


module.exports = router;
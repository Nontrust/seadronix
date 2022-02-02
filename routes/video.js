//참조 1_Striming 서비스 https://javafa.gitbooks.io/nodejs_server_basic/content/chapter11.html
//참조 2_Canvas API https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Manipulating_video_using_canvas

const express = require('express');

const router = express.Router();

var title = 'seadronix-second task'

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('video/video', { title: title });
});

router.get('/blend', function(req, res, next) {
  res.render('video/blend', { title: title, message:'' });
});

router.get('/blend/:message', function(req, res, next) {
  console.log("dd"+req.params.message);
  res.render('video/blend', { title: title, message:req.params.message})
});

router.get('/blendimg', function(req, res, next) {
  res.render('video/blendimg', { title: title, message:'' });
});

router.get('/size', function(req, res, next) {
  res.render('video/size', { title:title });
});
router.get('/stream', function(req, res, next) {
  res.render('video/stream', { title: title });
});


module.exports = router;

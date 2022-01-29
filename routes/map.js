const express = require('express');
const router = express.Router();

//https://developers.kakao.com/console/app/556943
const native_Key = "4f7d060a0b6fce5758421929f32179d9";
const rest_Key = "bfd2ef023622c801d13292b505f12daf";
const javascript_Key = "8d219d84a8edf091e805d5ccc17b4200";
const Admin_Key = "f30e8b03566d7730aad042cab787e460";

let params = { 
    title: 'seadronix-first task', 
    javascript_Key : javascript_Key,
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('map', params);
});

module.exports = router;

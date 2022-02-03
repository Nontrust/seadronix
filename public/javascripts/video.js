 // 캔버스콘텍스트 가져오기
 var canvas = document.querySelector('.canvas');
 var ctx = canvas.getContext('2d');
 let cHeight = canvas.offsetHeight;
 let cWidth = canvas.offsetWidth;
 
 // 폰트 및 색상 세팅!
 ctx.font = 'bold 50px gordic';
  ctx.fillStyle = 'red';
 
 const $video = document.querySelector('.video');
 const $assignBtn = document.querySelector('.textAssign');
 $video.addEventListener('canplaythrough', render);
 $assignBtn.addEventListener('click', assignMesssages);

 
 
 //var messages =  [{time: getRandomInt(0,5), message:"<%=message%>", x: getRandomInt(1, cHeight), y: getRandomInt(1,cWidth)}]
 var messages =  [{time: getRandomInt(0,5), message:"<%=message%>", x: getRandomInt(1, cHeight), y: getRandomInt(1,cWidth)}]
   

 function render() {
     this.cWidth = canvas.offsetWidth;
     this.cHeight = canvas.offsetHeight;

     ctx.drawImage($video, 0, 0, cWidth, cHeight);
     
     for (let i = 0; i < messages.length; i++) {
         if ($video.currentTime > messages[i].time) {
             ctx.fillText(messages[i].message, messages[i].x, messages[i].y);
           }
       }
       requestAnimationFrame(render);
   }
   
   function assignMesssages(){
       let textVal = document.querySelector('.renderText').value;
       location.href="/video/blend/"+textVal;
   }
   function getRandomInt(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
   }


 var isEmpty = function(value){ if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){ return true }else{ return false } };


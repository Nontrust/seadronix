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

 function render() {
     this.cWidth = canvas.offsetWidth;
     this.cHeight = canvas.offsetHeight;

     ctx.drawImage($video, 0, 0, cWidth, cHeight);
     let img = new Image (); //이미지 객체 생성
     img.src = "/images/seadronix.png" ; //code.jpg라는 이미지 파일을 로딩 시작
     img.onload = function () //이미지 로딩 완료시 실행되는 함수
     {
      //(20,20)을 중심으로 100*100의 사이즈로 이미지를 그림 
      ctx.drawImage (img,20,20,100,100)
      requestAnimationFrame(render);
     }
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


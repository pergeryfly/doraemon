!function(){
    var duration = 50
    $('.actions').on('click', 'button', function(e){
      let $button = $(e.currentTarget) // button
      let speed = $button.attr('data-speed')
      $button.addClass('active')
        .siblings('.active').removeClass('active')
      switch(speed){
        case 'slow':
          duration = 100
          break
        case 'normal':
          duration = 50
          break
        case 'fast':
          duration = 0
          break
      }
    })
    function writeCode(prefix, code, fn){
      let container = document.querySelector('#code')
      let styleTag = document.querySelector('#styleTag')
      let n = 0
      let id
      id = setTimeout(function run(){
        n+=1
        container.innerHTML = code.substring(0,n)
        styleTag.innerHTML = code.substring(0,n)
        container.scrollTop = container.scrollHeight
        if(n < code.length){
          id = setTimeout(run, duration)
        }else{
          fn && fn.call()
        }
      }, duration)
    }
    let code = `
    /*让我们来画一个哆啦A梦吧*/
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	list-style: none;
	text-decoration: none;
}
/*给一个背景色*/
body {background: #D4ECF9}

.main {
  width: 600px;
  height: auto;
  position: relative;
  margin: 5% auto;
  animation: volar 1s linear 2s infinite alternate;
}
h1 {text-align: center;}

.cajaovalo {
	width: 100px;
	height: 5px;
	background: transparent;
	margin: 0 auto;
	position: relative;
	margin-bottom: 10px
}

.ovalo {
width: 100px;
height: 5px;
margin: 0 auto;
background-color: gray;
border-radius: 5px;
border-radius: 100px / 30px;*/
border: 2px solid gray;
z-index: 100;
opacity: 0.6; 
position: absolute;
top: 5px;
    animation-name: rotar;
    animation-duration: .1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes rotar {
    from{transform:rotate3D(0,1,0,0deg);}
    to{transform:rotate3D(0,1,0,360deg);}
}

.semi-circulo {
     width: 20px; 
     height: 10px; 
     display: block;
     border: 2px solid #555; 
     background: #BD8D22;
     border-radius: 100px 100px 0 0;
    
     position: absolute; 
     right: 0;
     top: 0;
     left: 0;
     bottom: 0;
     margin: auto;
    z-index: 2;
 }

.palo {
	width: 7px;
	height: 30px;
  z-index: 1;
	background: #FCC136;
    position: relative;
    top: 7px;
	border: 2px solid black;
	margin: 0 auto;
}

.cabeza {
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: 2px solid black;
	margin: 0 auto;
	position: relative;
	background: #35A1C9;
  z-index: 100;
  overflow: hidden;
}

.circulo-dos {
	width: 170px;
	height: 170px;
	border-radius: 100%;
	background: white;
	border: 2px solid black;
  position: absolute; 
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto
}

.boca {
     width: 140px; 
     height: 70px; 
     border-radius: 140px 140px 0 0;
     background: #B11635;
     overflow: hidden;
     margin: 0 auto;
     position: relative;
     top: -13px;
     -moz-transform: rotate(180deg);
     -webkit-transform: rotate(180deg);
}

.pupila {
    width: 23px;
    height: 15px;
    background: black;
    border-radius: 100%;
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    position: absolute;
    top: 20px;
    left: 58px;
}

.pupila2 {
    width: 23px;
    height: 15px;
    background: black;
    border-radius: 100%;
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    position: absolute;
    top: 20px;
    right: 58px;
}

._navegacion {
  margin: 0 auto;
}

._navegacion li {
  margin: 0 0;
  background: white;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  border: 1px solid black;
  overflow: hidden;

}

.elemento {
  width: 48px;
  height: 48px;
  background-color: white;
  position: relative;
  overflow: hidden;
    animation-name: pulse;
    animation-duration: 1s;
    animation-iteration-count: 3;
  z-index: 100;
}

.elemento:after {
  content: "⌒";
  width: 48px;
  line-height: 2.5;
  font-size: 30px;
  color: #000;
  position: absolute;

  text-align: center;
  font-weight: bold;
}

@keyframes pulse {
  to {
    bottom: 100px;
  }
  from {
    bottom: 0;
  }
}

._navegacion li a {display: block;}

._navegacion a {
    height:100%;
    width: 100%;
    display: block;
}

._navegacion {
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.nariz {
  background: #B11735;
  width: 34px;
  height: 34px;
  border-radius: 100%;
  border: 1px solid black;
  margin: 0 auto;
  position: relative;
  top: -8px;
}

.palonariz {
    width: 2px;
    height: 20px;
    margin: 0 auto;
    background-color: black;
    position: relative;
    top: -8px;
}

.lunar {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: 1px solid #fff;
  position: absolute;
  background: white; 
  top: 6px;
  left: 8px;
}

.iris1 {
    width: 6px;
    height: 3px;
    background: white;
    border-radius: 100%;
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    position: absolute; 
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto
}

.iris2 {
    width: 6px;
    height: 3px;
    background: white;
    border-radius: 100%;
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    position: absolute; 
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto
}

.corazon {
    position: relative;
    width: 100px;
    height: 90px;
    margin: 0 auto;
    top: -50px;
    transform: rotate(180deg);   
}

.corazon::before, .corazon::after {
    content: "";
    position: absolute;
    left: 50px;
    top:0;
    width: 50px;
    display: block;
    height: 80px;
    background: #CA2533;     
    border-radius: 50px 50px 0 0; 
    transform: rotate(-45deg);   
    transform-origin: 0 100%;   
}

.corazon::after {
    left: 0;
    transform: rotate(45deg);   
    transform-origin: 100% 100%;   
}

.huevo {
    width: 142px;
    height: 172px;
    background: #35A1C9;
    border: 2px solid black;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    margin: 0 auto;
    position: relative;
    top: -100px;
    z-index: 2;
}

.ovalocesta {
    width: 100px;
    height: 60px;
    margin: 0 auto;
    background: white;
    border-radius: 100px / 60px;
    position: relative;
    top: 40px;
}

.cesta {
     width: 60px; 
     height: 30px; 
     border-radius: 60px 60px 0 0;
     background: white;
     border: 2px solid black;
     position: absolute; 
     right: 0;
     top: 0;
     left: 0;
     bottom: -20px;
     margin: auto;
     z-index: 2;
     -moz-transform: rotate(180deg);
     -webkit-transform: rotate(180deg);
}

.campana {
    width: 35px;
    height: 35px;
    border: 2px solid black;
    border-radius: 100%;
    background-color: #F19629;
    position: absolute; 
    right: 0;
    top: 0;
    left: 0;
    bottom: -60px;
    margin: auto;
    z-index: 3;
}

.bolanegra {
    width: 8px;
    height: 8px;
  
    border-radius: 100%;
    background-color:black;
    position: absolute; 
    right: 0;
    top: 8px;
    left: 0;
    bottom: 0;
    margin: auto;
}

.palonegro {
   width: 2px;
   height: 15px;
   background-color: black;
   margin: 0 auto;
   -moz-transform: rotate(180deg);
   -webkit-transform: rotate(90deg);
   position: relative;
   top: 18px;
}

.bufanda {
   width: 100px;
   height: 50px;
   margin: 0 auto;
   background:#A1172E;
   border-radius: 100px / 50px; 
   position: relative;
   top: 55px;
   z-index: 2;
}

._pie {
  margin: 0 auto;
}

._pie li {
  margin: -2px;
}

._pie li a {display: block;}

._pie a {
    height:100%;
    width: 100%;
    display: block;
}

._pie {
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  bottom: 150px;
}


.pie1 {
   width: 55px;
   height: 77px;
   margin: 0 auto;
   background: white;
   -moz-border-radius: 55px / 77px;
   -webkit-border-radius: 55px / 77px;
   border-radius: 55px / 77px;
   border: 2px solid black; 
   transform: rotate(180deg);
}

.pie2 {
   width: 55px;
   height: 77px;
   margin: 0 auto;
   background: white;
   border-radius: 55px / 77px;
   border: 2px solid black; 
   transform: rotate(180deg);
}

._brazos {
  margin: 0 auto;
}

._brazos li {
  margin: 0;
}

._brazos li a {display: block;}

._brazos a {
    height:100%;
    width: 100%;
    display: block;
}

._brazos {
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}


.brazo1 {
   width: 55px;
   height: 85px;
   margin: 0 auto;
   background: #35A1C9;
   border-radius: 55px / 85px;
   border: 2px solid black; 
   transform: rotate(-45deg);
   position: relative;
   top: -90px;
   left: -46px;
}

.brazo2 {
   width: 55px;
   height: 77px;
   margin: 0 auto;
   background: #35A1C9;
   border-radius: 55px / 85px;
   border: 2px solid black; 
   transform: rotate(45deg);
   position: relative;
   top: -90px;
   right: -46px;
}

.mano1 {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: white;
    border: 2px solid black;
    position: absolute;
    right: -3px;
    top: -34px;
}

.mano2 {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: white;
    border: 2px solid black;
    position: absolute;
    left: -3px;
    top: -34px;
}

.bigotes {
    z-index: 9999;
    position: relative;
    float: left;
    display: inline-block;
    top: 59px;
    left: 16px;

}

.b1 {
    width: 60px;
    height: 2px;
    background-color: black;
    margin: 0 auto;
     margin-bottom: 18px;
    transform: rotate(25deg);
}

.b2 {
    width: 60px;
    height: 2px;
    background-color: black;
    margin: 0 auto;
    margin-bottom: 10px;
}

.b3 {
    width: 60px;
    height: 2px;
    background-color: black;
    margin: 0 auto;
    transform: rotate(-10deg);

}

.bigotes2 {
    z-index: 9999;
    position: relative;
    float: right;
    display: inline-block;
    top: 59px;
    right: 16px;

}

.b1_ {
    width: 60px;
    height: 2px;
    background-color: black;
    margin: 0 auto;
     margin-bottom: 18px;
    transform: rotate(-25deg);  
}

.b2_ {
    width: 60px;
    height: 2px;
    background-color: black;
    margin: 0 auto;
    margin-bottom: 10px;
}

.b3_ {
    width: 60px;
    height: 2px;
    background-color: black;
    margin: 0 auto;
    transform: rotate(10deg);  
}
@keyframes volar{
    0%   {top:0px;}
    25%  {top:0px;}
    50%  {top:50px;}
    75%  {top:50px;}
    100% {top:0px;}
}
/*来领取你的哆啦A梦吧*/
  `
    writeCode('',code)
  
  }.call()
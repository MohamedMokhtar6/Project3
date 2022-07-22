let land =document.querySelector(".landing");
let imgesArray = ["00.jpg","01.png","02.png","03.jpg"];
setInterval(()=>{
    let roundom=Math.floor(Math.random()*imgesArray.length);
    land.style.backgroundImage= 'url("imgs/'+imgesArray[roundom]+'")';
    
},5000)

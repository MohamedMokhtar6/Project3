let maincolor=localStorage.getItem("color-op");
if(maincolor!=null){
    document.documentElement.style.setProperty("--main-color",maincolor);
    document.querySelectorAll(".option-box ul li").forEach(element =>{

        element.classList.remove("active");
        if(element.dataset.color===maincolor){
            element.classList.add("active");
        }
    });

}






document.querySelector(".icon .fa-gear").onclick=function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".setting").classList.toggle("open");
    
};
const colorlis=document.querySelectorAll(".links li");

colorlis.forEach(li =>{
    li.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
        localStorage.setItem("color-op",e.target.dataset.color);
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{

            element.classList.remove("active");
        });
        e.target.classList.add("active");
        
    });
});






let imgesArray = ["./imgs/00.jpg","./imgs/01.png","./imgs/02.png","./imgs/03.jpg"];
let land =document.querySelector(".landing");
const images=document.querySelectorAll(".imges li");
images.forEach(li=>{
    li.addEventListener("click",(e)=>{
        land.style.backgroundImage='url('+imgesArray[e.target.dataset.num]+')';
        localStorage.setItem("background",e.target.dataset.num);

    });
});
let back=localStorage.getItem("background");
if(back!==null){

    land.style.backgroundImage='url('+imgesArray[localStorage.getItem("background")]+')';

};






let ourSkills=document.querySelector(".skills");
window.onscroll=function(){
    let skillofftop=ourSkills.offsetTop;
    let skillhaight=ourSkills.offsetHeight;
    let windhaight=this.innerHeight;
    let windtop=this.pageYOffset;

    if(windtop>(skillofftop+skillhaight-windhaight)){
        let allskills=document.querySelectorAll(".prog span");
        allskills.forEach(skill =>{
            skill.style.width=skill.dataset.prog;
        });
        };
};




let gallary=document.querySelectorAll(".gallary img");
gallary.forEach(imge =>{
    imge.addEventListener("click",(e)=>{
        let overlay=document.createElement("div");
        overlay.className="popup";
        document.body.appendChild(overlay);
        let popupBox=document.createElement("div");
        popupBox.className="pop-box";
        let popimg=document.createElement("img");
        popimg.src=imge.src;
        popupBox.appendChild(popimg);
        document.body.appendChild(popupBox);
        let botX=document.createElement("span");
        let botText=document.createTextNode("x");
        botX.appendChild(botText);
        popupBox.appendChild(botX);
        botX.className="close";

    });
    document.addEventListener("click",(e)=>{
        if(e.target.className=="close"){

            e.target.parentNode.remove();
            document.querySelector(".popup").remove();
        }
    })
});










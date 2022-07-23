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
let imgesArray = ["../imgs/00.jpg","../imgs/01.png","../imgs/02.png","../imgs/03.jpg"];
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

}










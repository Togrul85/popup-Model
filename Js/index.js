const imagesOnGallery =document.querySelectorAll(".gallery a");
const popup =document.querySelector(".popup");
const sliderImg =document.querySelector(".slider .biggestImg img");
const closeBtn = document.querySelector(".close-icons");


imagesOnGallery.forEach((img)=>{
    // console.log(img);

    img.addEventListener("click",function(e){
        e.preventDefault();

        console.log(this.nextElementSibling);
// console.log(this);
let imgSrc =this.getAttribute("href");

console.log(sliderImg);
sliderImg.setAttribute("src",imgSrc);
popup.style.display ="flex";

    });

});

document.addEventListener("click",(e)=>{
console.log(e.target);

if(e.target.classList.contains("popup")){
    console.log(e.target);
    popup.style.display ="none";
}
});


closeBtn.addEventListener("click",function(){
    popup.style.display ="none";
});
// slider

const uploadIcons = document.querySelector(".icons i");
const inputFile = document.querySelector("input");
const images = document.querySelector(".images");
uploadIcons.addEventListener("click",function(e){
    // console.log(this.nextElementSibling);
    this.nextElementSibling.click(); 
});

inputFile.addEventListener("change",function(e){
// console.log(e.target.files);

const {files} = e.target;
const alist = document.querySelector(".row");
const images = document.querySelector(".row a");


// for( let file in files){
// console.log(file);
// }



for( let file of  files){

    const fileReader =new FileReader();
    // console.log(file);
    fileReader.onloadend =(e)=>{
        // console.log(e);
        const {result} =e.target;
        // console.log(result);
        const img = document.createElement("img");
        img.setAttribute("src",result);
        const a = document.createElement("a");
        a.setAttribute("href",result)
        alist.append(a);
        images.append(img);
    };

    fileReader.readAsDataURL(file)
   
}

});







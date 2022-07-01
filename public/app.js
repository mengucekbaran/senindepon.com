const burger = document.querySelector(".burger");
const nav = document.querySelector(".navbar");
const navLinks=document.querySelectorAll(".navlinks li a");
const depoCesitleri = document.querySelector(".navbar ul li:nth-child(2)"); //depo çeşitleri list item
const hakkımızda = document.querySelector(".navbar ul li:nth-child(4)"); //hakkımızda list item

const childDepoCesitleri = document.querySelector(".navbar ul li:nth-child(2) ul"); //açılan liste
const childHakkımızda = document.querySelector(".navbar ul li:nth-child(4) ul"); //açılan liste
const icon1 = document.querySelector(".navbar ul li:nth-child(2) .ok");
const icon2 = document.querySelector(".navbar ul li:nth-child(4) .ok");

let slideIndex = 1;

const step1 = document.querySelector(".step");
const step2 = document.querySelector(".step:nth-child(2)");
const step3 = document.querySelector(".step:nth-child(3)");
// const step3 = document.querySelector(".step");


const mc_menu = document.querySelector(".mc_menu");
const img_c = document.querySelector(".mc_menu img:nth-child(2)");
const mc_icerikler = document.querySelector(".mc_icerikler");
const itemTitle = document.querySelectorAll(".item-title");
console.log(itemTitle.length);

console.log(itemTitle);
function eventListeners(){
    burger.addEventListener("click", animationNavbar);    
    depoCesitleri.addEventListener("click",dropDownDepo);
    hakkımızda.addEventListener("click",dropDownHakkimizda);
    for(let i=0;i<itemTitle.length;i++){
      itemTitle[i].addEventListener("click",dropDownItems);
    }
    mc_menu.addEventListener("click",show_mc_icerik);
    showSlides(slideIndex);

     step1.addEventListener("click",focusStep);
     step2.addEventListener("click",focusStep);
     step3.addEventListener("click",focusStep);
}
function dropDownItems(e){
  let itemContent = e.target.parentElement.nextElementSibling;

  $(itemContent).slideToggle(); //aşağı açılır kapanır jquery kodu
  
  for(let i=0;i<itemTitle.length;i++){
    if(e.target.parentElement.getAttribute('data-no')==i+1){
      e.target.parentElement.classList.add("aktif");
      // itemContent.style.display="block";
    }
    else  if(e.target.parentElement.getAttribute('data-no')==null){
      //Doing nothing
    }
    else{
      // itemContent.style.display="none";
      itemTitle[i].classList.remove("aktif");
      itemTitle[i].nextElementSibling.style.display="none";//itemContenti yok etme
    }
  }
  

}



//Tıklanan resme odaklanır ve içeriği gösterir
function show_mc_icerik(e){
  const length_mc_menu = mc_menu.children.length;
  for(let i=0 ; i<length_mc_menu;i++){
    if(e.target.getAttribute('data-no')==i+1){
      mc_icerikler.children[i].style.display="block";
      e.target.classList.add('c');
    }
    else if(e.target.getAttribute('data-no')==null){
      // doing nothing
    }   
    else{
      mc_icerikler.children[i].style.display="none";
      mc_menu.children[i].classList.remove("c");
    }
  }
 
}


// Burgere tıklandığında navigation bar açılacak
function animationNavbar(){
  //Toggle nav
     //burgere tıklandığında navigation barın classı nav-active olacak
     nav.classList.toggle("nav-active");   //
     //Animate Links
     navLinks.forEach((link,index) =>{
         
     if(link.style.animation){
         link.style.animation = '';
     }else{
         link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+2}s`;
     }
 });
} 

//List item a tıklandığında childları listelenecek

function dropDownDepo(){
  const mediaQuery1 = window.matchMedia("(max-width: 768px)"); 
  if(mediaQuery1.matches) { //eğer koşul sağlanıyorsa
    if(window.getComputedStyle(childDepoCesitleri).display=="none"){
      childDepoCesitleri.style.cssText ="display:block;";
      icon1.style.cssText= "transform:rotate(180deg);float:right;";
    }
    else{
        childDepoCesitleri.style.cssText ="display:none;";
        icon1.style.cssText= "transform:rotate(0deg);float:right;";
     }
  }
}
function dropDownHakkimizda(){
  const mediaQuery2 = window.matchMedia("(max-width: 768px)"); 
  if(mediaQuery2.matches) { //eğer koşul sağlanıyorsa
    if(window.getComputedStyle(childHakkımızda).display=="none"){
      childHakkımızda.style.cssText ="display:block;";
      icon2.style.cssText= "transform:rotate(180deg);float:right;";
    }
    else{
        childHakkımızda.style.cssText ="display:none;";
        icon2.style.cssText= "transform:rotate(0deg);float:right;";
     }
  }
}


//GİRİŞ İMAGE ANİMATİON KISMI

   // Next/previous controls
   function plusSlides(n) {
    showSlides(slideIndex += n);
  }
    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
      }


      // 3 ADIMDA EŞYALARI DEPOLAYIN KISMI
    function focusStep(){
      if(this.id =="step1"){
        this.classList.toggle("step-active");
        this.nextElementSibling.className="step";
        this.nextElementSibling.nextElementSibling.className="step";
      }
      if(this.id =="step2"){
        this.classList.toggle("step-active");
        this.previousElementSibling.className="step";
        this.nextElementSibling.className = "step";
      }
      if(this.id =="step3"){
        this.classList.toggle("step-active");
        this.previousElementSibling.className = "step";
        this.previousElementSibling.previousElementSibling.className = "step";
      }
    }

  $(function(){
    $('.owl-carousel').owlCarousel({
      items : 1,
    }
    );
  });

eventListeners();





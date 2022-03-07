const toTop=document.querySelector('.toTop')

addEventListener('scroll',()=>{
 if(window.pageYOffset>90){
      toTop.classList.add('show');
  }else{
      toTop.classList.remove('show');
  }
});


//위로 부드럽게 스크롤

toTop.addEventListener('click',(e)=>{
    e.preventDefault();
    scrollTo({top:0,behavior:'smooth'});
});

//toggle menu
const menu=document.querySelector('.gnb2');
const hiddenMenu=document.querySelector('.menu');
menu.addEventListener('click',()=>{
    hiddenMenu.classList.toggle('menu_on')
})
const menuPC=document.querySelector('.gnb1');
menuPC.addEventListener('click',()=>{
    hiddenMenu.classList.toggle('menu_on')
})

//768px 이상인경우 slide 개수 3개로 변함


const swiperContainer=document.querySelectorAll('.container');
for(item of swiperContainer){
item.classList.add('mySwiper')};
for(item of swiperContainer){
item.classList.add('swiper')};

const swiperWrapper=document.querySelectorAll('.box');
for(inItem of swiperWrapper){
    inItem.classList.add('swiper-wrapper')
}

const slide=document.querySelectorAll('.lights');
for(product of slide){
    product.classList.add('swiper-slide')
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    768:{
      slidesPerView:3, 
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    }
  }
});

/* Ajax */


$.ajax({
  url:"js/JSON.json",
  dataType:"json",
  success:function(data){
      console.log(data);
      if(data.length>0){
          for(let el in data) {
              let desc=data[el].description;
              let url=data[el].url;
              let pr=data[el].price;
              let sort=data[el].sort;
              $('.box2 li').eq(el).append(`<a href="#"><img src=${url}></a><p class="expln">${sort}</p><a href="#"><p class="name">${desc}</p></a><p class="price">${pr}</p>`);
          }
      }
  }
});
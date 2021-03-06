
var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    //spaceBetween: 30,
    loop: true, // 4->1로 자연스럽게 넘어가게 함
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay:{delay:2500}, //2.5초 대기 후 자동 실행
  });

/* 모바일 슬라이드 메뉴 */
$('.slideMenu').on('click',()=>{
  $('.moContents').slideToggle();
});

/* pc버전 슬라이드 메뉴 */
const pcNav=document.querySelector('.pcNav');
pcNav.addEventListener('mouseover',()=>{
    let slidesNav = document.querySelectorAll('.slidesNav');
    slidesNav.forEach(function(e){
        e.classList.add('show');
    })
})
pcNav.addEventListener('mouseleave',()=>{
    let slidesNav = document.querySelectorAll('.slidesNav');
    slidesNav.forEach(function(e){
        e.classList.remove('show');
    })
})

/*검색창*/
const search=document.querySelector('.search');
search.addEventListener('click',()=>{
    let searchWindow = document.querySelector('form');
    searchWindow.classList.toggle('searchSlide');
})


$('.pc_ver').on('mouseenter',()=>{
  $('.slides').stop().slideDown();
});
$('.pc_ver').on('mouseleave',()=>{
  $('.slides').stop().slideUp();
});

/*슬라이드 내리면 nav 크기 작아짐*/

addEventListener('scroll',()=>{ 
  let top=document.querySelector('.topTitle');
  if(scrollY>top.offsetTop){
      pcNav.classList.add('active');
  }else{
      pcNav.classList.remove('active');
  }
});

const moNav=document.querySelector('.moNav');
addEventListener('scroll',()=>{ 
  let top=document.querySelector('.topTitle');
  if(scrollY>top.offsetTop){
      moNav.classList.add('active');
  }else{
      moNav.classList.remove('active');
  }
});

/*nav 크기 작아지면 search창도 올라감*/

addEventListener('scroll',()=>{ 
  let searchWindow = document.querySelector('form');
  let top=document.querySelector('.topTitle');
  if(scrollY>top.offsetTop){
      searchWindow.classList.add('move');
  }else{
      searchWindow.classList.remove('move');
  }
});

//유튜브 플레이어
$("#youtube_1").YTPlayer();
$("#youtube_2").YTPlayer();
$("#youtube_3").YTPlayer();

//card position
$('#article1').on('mouseenter',()=>{
  $('#article2').stop().animate({'left':'40vw'},600),
  $('#article3').stop().animate({'left':'57vw'},600),
  $('#article4').stop().animate({'left':'69vw'},600)
});
$('#article1').on('mouseleave',()=>{
  $('#article2').stop().animate({'left':'15vw'},600),
  $('#article3').stop().animate({'left':'30vw'},600),
  $('#article4').stop().animate({'left':'45vw'},600)
});
$('#article2').on('mouseenter',()=>{
  $('#article3').stop().animate({'left':'57vw'},600),
  $('#article4').stop().animate({'left':'69vw'},600)
});
$('#article2').on('mouseleave',()=>{
  $('#article3').stop().animate({'left':'30vw'},600),
  $('#article4').stop().animate({'left':'45vw'},600)
});
$('#article3').on('mouseenter',()=>{
  $('#article4').stop().animate({'left':'69vw'},600)
});
$('#article3').on('mouseleave',()=>{
  $('#article4').stop().animate({'left':'45vw'},600)
});

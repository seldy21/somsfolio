
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

/* 슬라이드 메뉴 */
$('.menu').on('click',()=>{
  $('.slide_menu').slideToggle();
});


$('.pc_ver').on('mouseenter',()=>{
  $('.slides').stop().slideDown();
});
$('.pc_ver').on('mouseleave',()=>{
  $('.slides').stop().slideUp();
});

/*슬라이드 내리면 nav 크기 작아짐*/

const nav=document.querySelector('nav');
addEventListener('scroll',()=>{ 
  let top=document.querySelector('.topTitle');
  if(scrollY>top.offsetTop){
      nav.classList.add('active');
  }else{
      nav.classList.remove('active');
  }
});

//유튜브 플레이어
$("#youtube_1").YTPlayer();
$("#youtube_2").YTPlayer();
$("#youtube_3").YTPlayer();

//card position
$('#article1').on('mouseenter',()=>{
  $('#article2').stop().animate({'left':'45vw'},600),
  $('#article3').stop().animate({'left':'57vw'},600),
  $('#article4').stop().animate({'left':'69vw'},600)
});
$('#article1').on('mouseleave',()=>{
  $('#article2').stop().animate({'left':'21vw'},600),
  $('#article3').stop().animate({'left':'33vw'},600),
  $('#article4').stop().animate({'left':'45vw'},600)
});
$('#article2').on('mouseenter',()=>{
  $('#article3').stop().animate({'left':'57vw'},600),
  $('#article4').stop().animate({'left':'69vw'},600)
});
$('#article2').on('mouseleave',()=>{
  $('#article3').stop().animate({'left':'33vw'},600),
  $('#article4').stop().animate({'left':'45vw'},600)
});
$('#article3').on('mouseenter',()=>{
  $('#article4').stop().animate({'left':'69vw'},600)
});
$('#article3').on('mouseleave',()=>{
  $('#article4').stop().animate({'left':'45vw'},600)
});

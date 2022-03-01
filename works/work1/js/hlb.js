//vegas 적용
//$("대상").method();
$(".main_images").vegas({/*vegas.min.css, vegas.min.js 와 연결해야 함*/
    delay:6000,
    slides: [
        { src: "images/mainImg.png"},/*이미지 경로 입력*/
        { src: "images/mainImg2.jpg" },
        { src: "images/mainImg3.jpg" }
    ],
    timer:true,
    animation:['kenburnsUp','kenburnsDown','kenburnsRight']
});

//aos적용
AOS.init();

//swiper 적용
        
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
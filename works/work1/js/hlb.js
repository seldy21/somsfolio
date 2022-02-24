//vegas 적용
//$("대상").method();
$(".swiper").vegas({/*vegas.min.css, vegas.min.js 와 연결해야 함*/
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

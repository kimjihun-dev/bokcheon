// slider
$(function(){

});

$(document).on("click", 'a[href="#"]', function(e){
    // a link 를 클릭할시 화면 맨위로 올라가는것을 방지. 
    e.preventDefault();
});

// 모바일 메뉴 오픈
const showMobileMenu = (openBtn, closeBtn, nav) => {
    const open = document.getElementById(openBtn)
    const close = document.getElementById(closeBtn)
    const navMenu = document.getElementById(nav)

    if (open && navMenu) {
        open.addEventListener('click', () => {
            navMenu.classList.toggle('show')
        })
    } 

    if (close) {
        close.addEventListener('click', () => {
            navMenu.classList.remove('show')
        })        
    }
}

showMobileMenu('openBtn', 'closeBtn', 'mNav')


$(document).ready(function(){
    // 모바일 메뉴 아코디언
    $(".accodion").on("click", function(){
        if($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        $(this).next(".depth_2").slideToggle(200);
    });
    // slick 슬라이더
    $('.visual .slide').slick({
        arrows: false, // 화살표
        dots: false, // 인디케이트 해제
        fade: true, // 페이드
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false
    });
    // bxslider 
    $(".bxslider").bxSlider({
        auto: true,
        autoControls: false,
        controls: false,
    });
    // scrolla
    $(".animate").scrolla({
        moblie: true, //모바일버전시 활성화
        once: false  //스크롤시 딱 한번만 하고싶을땐 true
    });
    // 온라인박물관 tab
    $(".online .viewArea .tabBox .tab li a").on("click", function(){
        const num = $(".online .viewArea .tabBox .tab li a").index($(this));
        $(".online .viewArea .videoBox .video li").removeClass("on");
        $(".online .viewArea .tabBox .tab li").removeClass("on");
        $('.online .viewArea .videoBox .video li:eq('+ num +')').addClass("on");
        $('.online .viewArea .tabBox .tab li:eq('+ num +')').addClass("on");
    });
});


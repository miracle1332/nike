$(function () {
    let winWidth;
    $(window).resize(function () {//window의 창크기를 변경하면 함수를실행
        winWidth=$(this).width();
        if(winWidth <= 1024) {
            $('.main-menu').off('mouseenter');//off는 이벤트 제거
            $('.main-menu').off('mouseleave');
            $('nav').prependTo('.h-top');
            $('.jordan-logo').find('img').attr('src','images/AIR-JORDAN-LOGO-b.svg');
        }else {
            $('nav').appendTo('header');
            $('.jordan-logo').find('img').attr('src','images/AIR-JORDAN-LOGO.svg');
            $('.main-menu').on({
                mouseenter: function () {
                    $('.sub-menu, .sub-bg').stop().show();
                },
                mouseleave: function () {
                    $('.sub-menu, .sub-bg').stop().hide();
                }
            });
        }
    });
    //resize이벤트 종료
    $(window).trigger('resize');//강제 이벤트 발생
    $('.menu-btn').click(function (event){
        event.stopPropagation();
        $('.index-wrap').css('filter','blur(10px)');
        $('body','html').css({
            height:'100vh',
            overflow:'hidden'
        });
        $('.menu-area').show();
        $('.h-top').animate({
            right:'0%'
        },'fast');
    });//테블릿, 모바일에서 사용하는 메뉴 종료
    $('.main-menu>li>a').click(function (event) {
        event.stopPropagation();
        $(this).siblings('.sub-menu').animate({
            left:'0%'
        },'fast');//siblings는 형제들
    });
    $('.all>a').click(function (event) {
        event.stopPropagation();
        $(this).parents('.sub-menu').animate({
            left:'150%'
        },'fast');
    });
    $('.menu-area').click(function () {
        $('.index-wrap').css('filter','blur(0px)');
        $('.h-top').animate({
            right:'-100%'
        },'fast',function () {
            $('.menu-area').hide();
        });
    });
    if(winWidth<=480) {
        $('.main-01 img').attr('src','images/M-01-mobile.png');
        $('.main-02 img').attr('src','images/M-02-mobile.png');
        $('.main-03 img').attr('src','images/M-02-mobile.png');
    }else {
        $('.main-01 img').attr('src','images/M-01.png');
        $('.main-02 img').attr('src','images/M-02.png');
        $('.main-03 img').attr('src','images/M-02.png');
    }
    //swiper 플러그인
    let swiperSlide=new Swiper('.Featured-slide', {
        //모바일 기준(기본이 모바일로 되어있음)
         slidesPerView:'auto',
         spaceBetween:8,
         pagination:{
            el:'.f-pager',
            clickable:true,
            type:'fraction' //faction으로 타입을 넣으면 밑 navigation이 들어감
         },
         navigation: {
            prevEl:'.f-prev',
            nextEl:'.f-next'
         },
        //반응형(화면 넓이에 따라 레이아웃 변경)
        breakpoints:{
            1025: {
                slidesPerView:3,
                spaceBetween:24
            },
            480: {
                slidesPerView:'auto',
                spaceBetween:16
            }
        }
    });
});
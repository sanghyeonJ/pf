$(function(){
    $('header').addClass('transparent');
})
$(window).resize(function(){ 
    if (window.innerWidth > 1500) {
        // 원페이지 스크롤
        window.addEventListener("mousewheel", function(e){
            e.preventDefault();
        },{passive : false});
        var $html = $("html");
        var page = 1;
        var lastPage = 4;
        var timeScrollAnimation = 750;
        $(window).on("wheel", function(e){
            if($html.is(":animated")) return;
            if(e.originalEvent.deltaY > 0){
                if(page == lastPage) return;
                page++;
            }else if(e.originalEvent.deltaY < 0){
                if(page == 1) return;
                page--;
            }
            var posTop = (page-1) * ($(window).height());
            $html.animate({scrollTop : posTop}, timeScrollAnimation);

            //헤더
            if(page == 1 && !$('.btn_search').hasClass('search_on')){
                $('header').addClass('transparent');
            } else {
                $('header').removeClass('transparent');
            }

            //배경
            if(page == 1){
                $('.sectionBgBox').removeClass('on');
                $('.section1 .sectionBgBox').addClass('on');
            } else if(page == 2){
                $('.sectionBgBox').removeClass('on');
                $('.section2 .sectionBgBox').addClass('on');
            } else{
                $('.sectionBgBox').removeClass('on');
            }
        });

        $(document).on('click', '.scrollTop', function(){
            page = 1;
            var posTop = (page-1) * ($(window).height());
            $html.animate({scrollTop : posTop}, timeScrollAnimation);
        
            if(page == 1 && !$('.btn_search').hasClass('search_on')){
                $('header').addClass('transparent');
            } else {
                $('header').removeClass('transparent');
            }
        });
        window.onload = function() {
            setTimeout (function () {
                scrollTo(0,0);
            },100);
        };
        // 마우스오버
        $(function(){
            $('header').on('mouseover', function(){ 
                if(page == 1){
                    $('header').removeClass('transparent');
                }
            }).on('mouseout', function(){
                if(page == 1 && !$('.btn_search').hasClass('search_on')){
                    $('header').addClass('transparent');
                }
            })
        });

        // 검색영역
        $(function(){
            $('.btn_search').on('click', function(){
                $(this).toggleClass('search_on');
                if($(this).hasClass('search_on')){
                    $('.headerSearchWrap').stop(true).slideDown(300);
                    $('header').removeClass('transparent');
                }else{
                    $('.headerSearchWrap').stop(true).slideUp(300);
                    if(page == 1){
                        $('header').addClass('transparent');
                    }
                }
            })
        });

    } else {

        $(window).on("scroll", function(){
            var scrollTop = $(window).scrollTop();
            if (scrollTop == 0) {
                $('header').addClass('transparent');
            } else {
                $('header').removeClass('transparent');
            }
        });

        // 검색영역
        $(function(){
            $('.btn_search').on('click', function(){
                $('.headerSearchWrap').show();
            });
            $('.headerSearchWrap .btn_back').on('click', function(){
                $('.headerSearchWrap').hide();
            });
        });

        
    }
    
}).resize(); 

// section1
$(document).on('mouseover', '.chartSelectItem button.title', function(){
    $('.chartSelectItem').stop(true).removeClass('on');
    $(this).parents('.chartSelectItem').stop(true).addClass('on');
    $('.statsBox').stop(true).slideUp(300);
    $(this).parents('.chartSelectItem').find('.statsBox').stop(true).slideDown(300);
    chartRandom2()
    section1Chart.update()
});

// section2
$(document).on('click', '.section2ChartWrap .chartSelectBox button', function(){
    $('.section2ChartWrap .chartSelectBox button').removeClass('on');
    $(this).addClass('on');

    let btnText = $(this).find('p').text();
    $('.section2ChartWrap .chartTitle h4').text(btnText);

    // 임시
    chartRandom();
    sec2chart1.update();
    sec2chart2.update();
    sec2chart3.update();
    sec2chart4.update();
    sec2chart5.update();

})

// 임시
let imsiArray = [];
function chartRandom(){
    for(i = 0; i < 2; i++){
        let imsiNum = Math.random() * 100;
        let imsiNumFloor = Math.floor(imsiNum);
        imsiArray[i] = imsiNumFloor;
    }
}
chartRandom()

let imsiArray2 = [];
function chartRandom2(){
    for(j = 0; j < 12; j++){
        let imsiNum = Math.random() * 100;
        let imsiNumFloor = Math.floor(imsiNum);
        imsiArray2[j] = imsiNumFloor;
    }
}
chartRandom2()


if (window.innerWidth > 1500) {
    // 검색영역
    $(function(){
        $('.btn_search').on('click', function(){
            $(this).toggleClass('search_on');
            if($(this).hasClass('search_on')){
                $('.headerSearchWrap').slideDown(300);
            }else{
                $('.headerSearchWrap').slideUp(300);
            }
        })
    });
}else{
    // 검색영역
    $(function(){
        $('.btn_search').on('click', function(){
            $('.headerSearchWrap').slideDown(300);
        });
        $('.headerSearchWrap .btn_back').on('click', function(){
            $('.headerSearchWrap').slideUp(300);
        });
    });
}

$(function(){
    // faq
    $(document).on('click', '.faqItem .question p', function() {
        $(this).parents('.faqItem').find('.answerBox').slideToggle(300);
        $(this).parents('.faqItem').toggleClass('on')
    })

    // 한눈에보는 지표
    $(document).on('click', '.MajorCategory1', function(){
        $('.mobileMajorCategory button').not(this).removeClass('on')
        $(this).addClass('on')
        $('.majorItem').not('.majorItem1').hide();
        $('.majorItem1').show();
    });
    $(document).on('click', '.MajorCategory2', function(){
        $('.mobileMajorCategory button').not(this).removeClass('on')
        $(this).addClass('on')
        $('.majorItem').not('.majorItem2').hide();
        $('.majorItem2').show();
    });
    $(document).on('click', '.MajorCategory3', function(){
        $('.mobileMajorCategory button').not(this).removeClass('on')
        $(this).addClass('on')
        $('.majorItem').not('.majorItem3').hide();
        $('.majorItem3').show();
    });

    // 통계DB
    $(document).on('click', '.statsDBSelectList .topList > li > button', function(){
        $(this).toggleClass('on');
        $(this).next('.minList').slideToggle(300);
    })
    $(document).on('click', '.statsDBSelectList .minList > li > button', function(){
        $(this).toggleClass('on');
        $(this).next('.botList').slideToggle(300);
    })
    $(document).on('click', '.statsDBSelectList .botList > li > button', function(){
        $('.statsDBSelectList .botList > li > button').not(this).removeClass('on');
        $(this).addClass('on');
    })

    // 통계DB 상세
    $(document).on('click', '.btn_statsView.open', function(){
        $(this).css({display: 'none'});
        $('.btn_statsView.close').css({display: 'flex'});
        $('.statsViewToggleTable').slideDown(300)
    })
    $(document).on('click', '.btn_statsView.close', function(){
        $(this).css({display: 'none'});
        $('.btn_statsView.open').css({display: 'flex'});
        $('.statsViewToggleTable').slideUp(300)
    })


})
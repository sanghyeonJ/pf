/*========================================================================

	----------------------------------------------------------------------
	* Date		:	
	* Name		:	
	----------------------------------------------------------------------
	
	- Description -
	01. 

========================================================================*/


$(function(){
    /* 메뉴버튼 */
    $('.menu-trigger').click(function () {
        if($(window).width() >1530) {
            $('.siteMap_wrap').css({ display: 'block' });
            $('.siteMap_wrap').stop().animate({ opacity:"1" });
        } else{
            $('.m_menu_area').css({display:'block'});
            $('.m_menu_bg').stop().animate({opacity:'1'});
            $('.m_menu').stop().animate({right:'0',},500);
            $('.m_menu').css({display:'block'});
            
            $('body').css({overflow:'hidden'});
        }

    });

    /* 사이트맵 닫기 */
    $('button.siteMap_close').on('click', function(){
        $('.siteMap_wrap').stop().animate({opacity:'0'},500);
        setTimeout(function(){
            jQuery('.siteMap_wrap').css({display:'none'});
        },500);
    });


    /* 모바일 메뉴 닫기 */
    $('.m_menuclose, .m_menu_bg').on('click', function(){
        $('.m_menu_bg').stop().animate({opacity:'0'});
        $('.m_menu').stop().animate({right:'-500px'},500);
        setTimeout(function(){
            jQuery('.m_menu_area').css({display:'none'});
            jQuery('.m_menu').css({display:'none'});
            jQuery('body').css({overflow:'auto'});
        },500);
    });
    /* 모바일 서브메뉴 */
    $('.m_gnb > li').on('click', function(){
        $(this).find('.m_lnb').stop().slideToggle();
        $(this).find('a').stop().toggleClass('on');
    });
    


    /* 검색 */
    $('.header_search_toggle').click(function () {
        if($(window).width() >1530) {
            $('.header_search').toggleClass('active');
        } else{
            $('.m_search_area').css({ display:'flex' });
        }
    });
    $('.m_searchClose').on('click', function(){
        $('.m_search_area').css({ display:'none' });
    });


    /*pc메뉴*/
    $(document).ready(function() {
        $('.gnb > li').on('mouseover', function(){
            $(this).find('.lnb').stop().slideDown(300);
        });
        $('.gnb > li').on('mouseout', function(){
            $(this).find('.lnb').stop().slideUp(300);
        });
    });



});


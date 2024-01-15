/*========================================================================

	----------------------------------------------------------------------
	* Date		:	
	* Name		:	
	----------------------------------------------------------------------
	
	- Description -
	01. 

========================================================================*/


$(function(){
    // 메뉴
    $('.gnb').on('mouseover', function(){
        if($(window).width() > 1200){
            $('header').addClass('dropBg');
            $('.lnb').stop(true).slideDown(200, 'linear');
        }
    }).on('mouseout', function(){
        if($(window).width() > 1200){
            $('header').removeClass('dropBg');
            $('.lnb').stop(true).slideUp(200, 'linear');
        }
    });

    // 사이트맵
    $('.btn_siteamp').on('click', function(){
        $('.sitemapWrap').css({display: 'block'}).animate({opacity: 1}, 300);
        $('.sitemap').addClass('view');
        for(i=1; i<6; i++){
            $('.sitemapGnb > li:nth-child('+i+')').delay(i*100).animate({ opacity: '1'}, 300);
        }
    })
    $('.btn_sitemapClose').on('click', function(){
        $('.sitemapWrap').animate({opacity: 0}, 300, function(){
            $('.sitemapWrap').css({display: 'none'});
            $('.sitemapGnb > li').css({ opacity: '0'});
        })
        $('.sitemap').removeClass('view');
    })

    // 모바일 메뉴
    $('.mobileMenu').on('click', function(){
        $('.headerContent').animate({'left': 0},300)
    })
    $('.mMenuClose').on('click', function(){
        $('.headerContent').animate({'left': '100%'},300)
    })

});
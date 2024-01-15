/*========================================================================

	----------------------------------------------------------------------
	* Date		:	
	* Name		:	
	----------------------------------------------------------------------
	
	- Description -
	01. 

========================================================================*/


$(function(){
    if (window.innerWidth > 1500) {
        $('.gnb, header::before').on('mouseover', function(){
            $('header').addClass('dropBg');
            $('.lnb').stop(true).slideDown(200, 'linear');
        }).on('mouseout', function(){
            $('header').removeClass('dropBg');
            $('.lnb').stop(true).slideUp(200, 'linear');
        })
    } else{
        // 메뉴
        $('.gnb').hide();
        $('.btn_ham').on('click', function(){
            $('.gnb').show();
        });
        $('.m_menuClose').on('click', function(){
            $('.gnb').hide();
        });
    }
});


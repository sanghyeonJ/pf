/*========================================================================

	----------------------------------------------------------------------
	* Date		:	
	* Name		:	
	----------------------------------------------------------------------
	
	- Description -
	01. 

========================================================================*/


$(function(){

    /* qna */
    $(document).ready(function() {
        $('.listTable2 tr.tr_question td a').on('click', function(){
            $(this).toggleClass('on');
            
            if( $(this).hasClass("on") == true){
                $(this).parent().parent().nextUntil('tr.tr_question').css({ display:'table-row' });
            }else{
                $(this).parent().parent().nextUntil('tr.tr_question').css({ display:'none' });
            } 
        });
    });



    
    /* 팝업 */
    $(document).ready(function() {
        $('.btn_popup').on('click', function(){
            $('.popup1').css({display:'block'});
            $('.popup1').stop().animate({opacity: '1'},500);

            $('body').css({overflowY:'hidden'});
        });

        $('.btn_popup-close').on('click', function(){
            $('.popup1').stop().animate({opacity: '0'},500);
            setTimeout(function(){
                jQuery('.popup1').css({display:'none'});
            },500);

            $('body').css({overflowY:'scroll'});
        });
    });
    /* 팝업2 */
    $(document).ready(function() {
        $('.btn_popup2').on('click', function(){
            $('.popup2').css({display:'block'});
            $('.popup2').stop().animate({opacity: '1'},500);

            $('body').css({overflowY:'hidden'});
        });

        $('.btn_popup-close2').on('click', function(){
            $('.popup2').stop().animate({opacity: '0'},500);
            setTimeout(function(){
                jQuery('.popup2').css({display:'none'});
            },500);

            $('body').css({overflowY:'scroll'});
        });
    });
    /* 팝업3 */
    $(document).ready(function() {
        $('.btn_popup3').on('click', function(){
            $('.popup3').css({display:'block'});
            $('.popup3').stop().animate({opacity: '1'},500);

            $('body').css({overflowY:'hidden'});
        });

        $('.btn_popup-close3').on('click', function(){
            $('.popup3').stop().animate({opacity: '0'},500);
            setTimeout(function(){
                jQuery('.popup3').css({display:'none'});
            },500);

            $('body').css({overflowY:'scroll'});
        });
    });
    /* 팝업4 */
    $(document).ready(function() {
        $('.btn_popup4').on('click', function(){
            $('.popup4').css({display:'block'});
            $('.popup4').stop().animate({opacity: '1'},500);

            $('body').css({overflowY:'hidden'});
        });

        $('.btn_popup-close4').on('click', function(){
            $('.popup4').stop().animate({opacity: '0'},500);
            setTimeout(function(){
                jQuery('.popup4').css({display:'none'});
            },500);

            $('body').css({overflowY:'scroll'});
        });
    });
    /* 팝업5 */
    $(document).ready(function() {
        $('.btn_popup5').on('click', function(){
            $('.popup5').css({display:'block'});
            $('.popup5').stop().animate({opacity: '1'},500);

            $('body').css({overflowY:'hidden'});
        });

        $('.btn_popup-close5').on('click', function(){
            $('.popup5').stop().animate({opacity: '0'},500);
            setTimeout(function(){
                jQuery('.popup5').css({display:'none'});
            },500);

            $('body').css({overflowY:'scroll'});
        });
    });
    /* 팝업6 */
    $(document).ready(function() {
        $('.btn_popup6').on('click', function(){
            $('.popup6').css({display:'block'});
            $('.popup6').stop().animate({opacity: '1'},500);

            $('body').css({overflowY:'hidden'});
        });

        $('.btn_popup-close6').on('click', function(){
            $('.popup6').stop().animate({opacity: '0'},500);
            setTimeout(function(){
                jQuery('.popup6').css({display:'none'});
            },500);

            $('body').css({overflowY:'scroll'});
        });
    });
    /* 팝업7 */
    $(document).ready(function() {
        $('.btn_popup7').on('click', function(){
            $('.popup7').css({display:'block'});
            $('.popup7').stop().animate({opacity: '1'},500);

            $('body').css({overflowY:'hidden'});
        });

        $('.btn_popup-close7').on('click', function(){
            $('.popup7').stop().animate({opacity: '0'},500);
            setTimeout(function(){
                jQuery('.popup7').css({display:'none'});
            },500);

            $('body').css({overflowY:'scroll'});
        });
    });




});


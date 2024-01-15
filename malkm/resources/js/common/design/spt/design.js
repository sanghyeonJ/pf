/*========================================================================

	----------------------------------------------------------------------
	* Date		:	
	* Name		:	
	----------------------------------------------------------------------
	
	- Description -
	01. 

========================================================================*/


$(function(){
    // 브라우저 탭제외 높이
    // height:calc(var(--vh, 1vh) * 100)
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();
    window.addEventListener('resize', setScreenSize);


    // 인풋 클리어
    $(document).ready(function() {
        let inputClearCount = [];
        let inputClearMaxW = [];
        inputClearCount = $('.inputClear');
        for(i = 0; i < inputClearCount.length; i++){ 
            inputClearMaxW[i] = document.defaultView.getComputedStyle(inputClearCount[i]).getPropertyValue('max-width');
            $(inputClearCount[i]).wrap('<div class="inputClear_wrap" style="max-width: ' + inputClearMaxW[i] + '"></div>')
        }
        $('.inputClear').after('<button type="button" class="inputClearBtn"><img src="/resources/images/spt/inputClear.png" alt="초기화"></button>');
        $(document).on('focus', '.inputClear_wrap', function() {
            $(this).find('.inputClearBtn').css({ visibility: 'visible' })
            $(this).find('input').css({ paddingRight: '30px' })
        })
        $(document).on('mousedown', '.inputClearBtn', function() {
            $(this).siblings('.inputClear').val('');
        })
        $(document).on('blur', '.inputClear_wrap', function() {
            $(this).find('.inputClearBtn').css({ visibility: 'hidden' })
            $(this).find('input').css({ paddingRight: '10px' })
        })
    });

});
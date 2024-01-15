/* Korean initialisation for the jQuery calendar extension. */
/* Written by DaeKwon Kang (ncrash.dk@gmail.com), Edited by Genie and Myeongjin Lee. */
( function( factory ) {
	"use strict";

	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
} )( function( datepicker ) {
"use strict";

datepicker.regional.ko = {
	closeText: "닫기",
	prevText: "이전달",
	nextText: "다음달",
	currentText: "오늘",
	monthNames: [ "1", "2", "3", "4", "5", "6",
	"7", "8", "9", "10", "11", "12" ],
	monthNamesShort: [ "1", "2", "3", "4", "5", "6",
	"7", "8", "9", "10", "11", "12" ],
	dayNames: [ "일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일" ],
	dayNamesShort: [ "일", "월", "화", "수", "목", "금", "토" ],
	dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ],
	weekHeader: "주",
	dateFormat: "yy-mm-dd",
	firstDay: 0,
    changeYear:true,
    changeMonth:true,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: "." };
datepicker.setDefaults( datepicker.regional.ko );

return datepicker.regional.ko;

} );


/* datepicker */
$(document).ready(function() {
	$(".everyDate").datepicker({
    });

    $(".everyStartDate").datepicker({ onClose: function( selectedDate ) { $(".everyEndDate").datepicker( "option", "minDate", selectedDate ); } });
    $(".everyEndDate").datepicker({ onClose: function( selectedDate ) { $(".everyStartDate").datepicker( "option", "maxDate", selectedDate ); } });

});
$(document).ready(function() {
    $('.date').attr("readonly",true);
	if($('.date').hasClass("readonly")){
		$('.date.readonly').datepicker('option', 'disabled', true);
	}
});
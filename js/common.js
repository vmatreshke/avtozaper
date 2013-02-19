$(document).ready(function() {

	$('.inp-arr').hover(
		function () {
			$(this).children('.hint').fadeIn();
		},
		function () {
			$(this).children('.hint').fadeOut();
		}
	);

	$('.brand__content ul li a').click(function() {
		$('.input_model').val($(this).html());
		return false;
	});

	$('.brand__nav li').click(function(){
		if (!($(this).hasClass('active'))) $(this).addClass('active').siblings().removeClass('active')
			.parents('.brand').find('.brand__content ul').eq($(this).index()).fadeIn(150).siblings('.brand__content ul').hide();
		return false;
	});

	var flag = 0;
	$('.inp-arr_c input').each(function (i) {
		if ($(this).val() == "") flag = 1;
	});
	if (flag == 0) $('.btn-arr').removeClass('btn_gray');
		else $('.btn-arr').addClass('btn_gray');

	$('.inp-arr_c input').keyup(function(){
		if ($(this).val() == "") $(this).parent().parent('.inp-arr').addClass('inp-arr_err');
		else $(this).parent().parent('.inp-arr').removeClass('inp-arr_err');
		flag = 0;
		$('.inp-arr_c input').each(function (i) {
			if ($(this).val() == "") flag = 1;
		});
		if (flag == 0) $('.btn-arr').removeClass('btn_gray');
			else $('.btn-arr').addClass('btn_gray');
	});

	$('.location-name').click(function(){
		$(this).hide().next('input').val($(this).html()).show();
	});

	/*$('.btn-arr').click(function(){
		var flag = 0;
		$('.inp-arr_c input').each(function (i) {
			if ($(this).val() == "") {
				$(this).parent().parent('.inp-arr').addClass('inp-arr_err');
				flag = 1;
			}
			else $(this).parent().parent('.inp-arr').removeClass('inp-arr_err');
		});
		if (flag == 0) $(this).removeClass('btn_gray');
	});*/
});
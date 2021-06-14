//播放器初始化
window.q = window.QPlayer;
window.$ = q.$;
$(function () {
	//播放器显示
    $('#QPlayer').addClass('QPlayer-show');
	$('#QPlayer-btn-mode').addClass('QPlayer-shuffle');
    //$('#QPlayer-more').addClass('QPlayer-list-show QPlayer-lyrics-show');
	$('#QPlayer-more').addClass('QPlayer-list-show');
	//$('#QPlayer-more').addClass('');
    $('#js').val($('#js-code').text());
});


//播放器切换
function switchMusicMode(){
    var music = document.cookie.replace(/(?:(?:^|.*;\s*)music\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
    if(music == '0'){
        //document.body.classList.add('music');
		window.q = window.QPlayer;
		window.$ = q.$;
		$(function () {
		$('#QPlayer').removeClass('QPlayer-show');
		$('#QPlayer-btn-mode').addClass('QPlayer-shuffle');
		//$('#QPlayer-more').addClass('QPlayer-list-show QPlayer-lyrics-show');
		$('#QPlayer-more').addClass('QPlayer-list-show');
		//$('#QPlayer-more').addClass('');
		$('#js').val($('#js-code').text());
		});
        document.cookie = "music=1;path=/"
    }else{
        //document.body.classList.remove('music');
		window.q = window.QPlayer;
		window.$ = q.$;
		$(function () {
		//播放器显示
		$('#QPlayer').addClass('QPlayer-show');
		$('#QPlayer-btn-mode').addClass('QPlayer-shuffle');
		//$('#QPlayer-more').addClass('QPlayer-list-show QPlayer-lyrics-show');
		$('#QPlayer-more').addClass('QPlayer-list-show');
		//$('#QPlayer-more').addClass('');
		$('#js').val($('#js-code').text());
		});
        document.cookie = "music=0;path=/"
    }

}
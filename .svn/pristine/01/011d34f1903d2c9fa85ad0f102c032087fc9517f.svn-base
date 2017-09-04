var url = document.getElementById('yali-im').src;
var regex = /^((?:\w+):\/\/([^\/:]*)(?::\d+)?)\/([^?]*)(?:\?(.*))?$/gi;
var host = url.replace(regex, '$1');
yali.config({
	dir: host + '/static/lib/layui/',
	base: host + '/static/lib/layui/plugins/'
}).extend({
	yali: 'layui.config.pc',
	yaliim: 'yaliim'
});
yali.use(['yaliim'], function() {
	'use strict';
	var $ = yali.jquery;
	var yaliim = yali.yaliim;	
	yaliim.init();


	$('.yali-floater-box').find('.yali-floater-colspan').click(function(e){
		$(this).parent().toggleClass('colspan');
	})
	
});

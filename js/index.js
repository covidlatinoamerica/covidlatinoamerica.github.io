(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/madewithsparkle-570.png' : 'images/madewithsparkle-380.png') : 'images/madewithsparkle-190.png');
$('.img-2').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/madewithsparkle-570-2.png' : 'images/madewithsparkle-380-2.png') : 'images/madewithsparkle-190-2.png');
$('.img-3').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/madewithsparkle-570-3.png' : 'images/madewithsparkle-380-3.png') : 'images/madewithsparkle-190-3.png');};
$(window).resize(r);
r();

});
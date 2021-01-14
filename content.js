//on load

//document.querySelector('html:not(img)').style.filter = 'invert(100%)';

$(function() {
    $("html").css('filter', 'invert(1) hue-rotate(180deg)');
    $("img").css('filter', 'invert(1) hue-rotate(180deg)');
    $(".footer_links").css('filter', 'invert(1) hue-rotate(180deg)');
})

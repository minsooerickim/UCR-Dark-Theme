//on load

//fix up coloring on multiple websites and shades of black
//document.querySelector('html:not(img)').style.filter = 'invert(100%)';

$(function() {
    $("html").css('filter', 'invert(1) hue-rotate(180deg)');
    //exceptions
    $("img").css('filter', 'invert(1) hue-rotate(180deg)');
    $("a").css('filter', 'invert(1) hue-rotate(180deg)');
    $(".footer_links").css('filter', 'invert(1) hue-rotate(180deg)');
})

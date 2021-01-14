//toggle for dark theme
//FIX UP preferable dark mode theme
function hello() {
  chrome.tabs.executeScript({
    code: `
    $(function(){ 

      if ($("html").css('filter') == 'invert(1) hue-rotate(180deg)') {
        $("html").css('filter', '');
        $("img").css('filter', '');
        $(".footer_links").css('filter', '');
      }
      else {
          $("html").css('filter', 'invert(1) hue-rotate(180deg)');
          $("img").css('filter', 'invert(1) hue-rotate(180deg)');
          $(".footer_links").css('filter', 'invert(1) hue-rotate(180deg)');
      }

    })`
  }); 
}

document.querySelector('.slider.round').addEventListener('click', hello);


/*
console.log("dark.js test");

$(function(){
    $("#button").click(function(){
        chrome.tabs.executeScript({
            file: "content.js"
        });
    });
});
*/

console.log("test");

//FIX UP preferable dark mode theme
function hello() {
  chrome.tabs.executeScript({
    code: `if (document.querySelector('html').style.filter == 'invert(100%)') {
      document.querySelector('html').style.filter = "";
    }
    else {
      document.querySelector('html').style.filter = 'invert(100%)';
    }`
  }); 
}

document.querySelector('.slider.round').addEventListener('click', hello);


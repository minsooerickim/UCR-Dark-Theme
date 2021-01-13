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

function hello() {
    chrome.tabs.executeScript({
      file: 'content.js'
    }); 
  }
  
document.querySelector('.slider.round').addEventListener('click', hello);

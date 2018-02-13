(function(window) {
	"use strict";
  var baseUrl = "https://ddnsto.b0.upaiyun.com/new-year-2018/";
  //var baseUrl = "./";
  var div = document.createElement('div');
  var img = document.createElement('img');
  var close = document.createElement('img');
  window.closePopup=function(){
    var div=document.getElementById('$$popup');
    div.parentNode.removeChild(div);
    localStorage.popupClosed3="1";
  };
  div.id = "$$popup";
  div.style.cssText = 'max-width:500px;position:fixed;bottom:0;right:0;-moz-border-radius:100px;-moz-box-shadow: 0px 0px 8px #fff;display:block;cursor:pointer;';
  div.onclick=window.closePopup;
  img.src=baseUrl + "koolshare-new-year-2018.png";
  img.style.cssText = 'width:100%;';
  close.style.cssText = 'width:25px;height:25px;position:absolute;top:0;right:0;margin-right:8px;'
  close.src=baseUrl + "if_misc-_close__1276877.png";
  div.appendChild(img);
  div.appendChild(close);
  if(Number(localStorage.popupClosed3)!==1){
    document.body.appendChild(div);
  }
} )(window);

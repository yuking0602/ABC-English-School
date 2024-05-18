// ハンバーガーメニュー
const burger = document.querySelector(".burger");
const nav = document.querySelector(".header-list");
const navLinks = document.querySelectorAll(".header-list li");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if(link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.4}s`;
    }
  });
  burger.classList.toggle("toggle");
});

// スライドショー
jQuery(function($) {
  $('.bg-slider').bgSwitcher({
    images: ['images/eigo1.jpg', 'images/eigo2.jpg', 'images/eigo3.jpg'], // 切り替える背景画像
    interval: 5000, // 背景画像を切り替える間隔 1000=1秒
    loop: true, // 切り替えを繰り返すか true=繰り返す　false=繰り返さない
    shuffle: true, // 背景画像の順番をシャッフルするか true=する　false=しない
    effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
    duration: 2000, // エフェクトの時間 1000=1秒
    easing: "swing" // エフェクトのイージングをlinear,swingから指定
  });
});

// スライドイン
let winHeight,winScroll,scrollPos;
$(window).on('load scroll',function(){
	winScroll = $(window).scrollTop();
	winHeight = $(window).height();
	scrollPos = winHeight * 0.9 + winScroll;
	$(".slidein").each(function(){
		if($(this).offset().top <= scrollPos){
			$(this).addClass("show");
		}else{
			$(this).removeClass("show");
		}
	});
});
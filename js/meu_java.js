$('.menu_pc a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

$('.menu_mobile a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset
	}, 1500);
});

const botao_open = document.querySelector(".botao_menu_open")
const botao_close = document.querySelector(".botao_menu_close")
const menu = document.querySelector(".menu_mobile")


botao_open.addEventListener("click", function()
{
	menu.classList.remove("menu_mobile_close")
	menu.classList.add("menu_mobile_open")
})

botao_close.addEventListener("click", function()
{
	menu.classList.remove("menu_mobile_open")
	menu.classList.add("menu_mobile_close")
})
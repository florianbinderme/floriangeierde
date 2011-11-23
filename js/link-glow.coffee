$(document).ready ->
	$('a').mouseenter (e) ->
		fadeTime = 'fast'
		opacityHover = 0.8
		$(this).animate({ opacity: opacityHover }, fadeTime)
		$(this).mouseleave ->	$(this).animate({ opacity: 1.0 }, fadeTime)
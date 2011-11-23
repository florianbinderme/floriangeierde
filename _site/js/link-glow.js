(function() {
  $(document).ready(function() {
    return $('a').mouseenter(function(e) {
      var fadeTime, opacityHover;
      fadeTime = 'fast';
      opacityHover = 0.8;
      $(this).animate({
        opacity: opacityHover
      }, fadeTime);
      return $(this).mouseleave(function() {
        return $(this).animate({
          opacity: 1.0
        }, fadeTime);
      });
    });
  });
}).call(this);

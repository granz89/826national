var unslider = $('.banner').unslider({
    speed: 500,
    delay: 3000,
    complete: function() {},
    keys: true,
    dots: true,
    fluid: true
});


$('.Count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 1000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});
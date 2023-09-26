(function(jQuery) {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  jQuery.fn.airChars = function(options) {
    var params = jQuery.extend(
      {
        duration: 1,
        upperLimit: 150,
        sizeInterval: [15, 80]
      },
      options
    );
    jQuery(this).keypress(function(e) {
      console.log(this.selectionStart)
      var rand = getRandomInt(1, 9);
      var randP = Math.floor(Math.random() * 10);
      randP < 5 ? (randP = rand) : (randP = rand - rand * 2);

      var c = String.fromCharCode(e.which);
      jQuery(this).parent().append("<span class='cl" + rand + "'>" + c + "</span>");

      jQuery(this)
        .parent()
        .find("span.cl" + rand + "")
        .css({
          left: getRandomInt(0, 90) + "%",
          "font-size": getRandomInt(
            params.sizeInterval[0],
            params.sizeInterval[1]
          )
        })
        .fadeIn(100, function() {
          jQuery(this)
            .css({
              "margin-bottom": getRandomInt(
                params.upperLimit - params.upperLimit / 2
                  ? params.upperLimit / 2
                  : 0,
                params.upperLimit
              ),
              "margin-left": randP * 10
            })
            .fadeOut(params.duration * 1000, function() {
              jQuery(this).remove();
            });
        });
    });
  };
})(jQuery);

(function($) {
  $(document).ready(function() {
    var cortanaSlidebars = new $.slidebars();
    $(window).load(function () {
      cortanaSlidebars.open('left');
    });
    $('#open-left').on('click', function(event) {
      event.preventDefault();
      cortanaSlidebars.toggle('left');
    });

  });
}) (jQuery);
/*global  jQuery */

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

(function($) {
  $(document).ready(function() {
    $("p, h1, h2, h3, h4, h5, h6, table").not(".cortana-header h1, .codeExample p, .codeExample table, .codeExample h1, .codeExample h2, .codeExample h3, .codeExample h4, .codeExample h5, .codeExample h6").wrap('<div class="cortana-content"></div>');
  });
}) (jQuery);
/*global  jQuery */

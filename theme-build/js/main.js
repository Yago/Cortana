/* ==========================================================
 * inside-navigation.js
 * Inside nav script to keep it fixed depend of the scroll position
 *
 * Author: Yann Gouffon, hello@yago.io
 *
 * Copyright 2014 Yann Gouffon
 * Licensed under MIT
 ========================================================== */

(function($) {
  
}) (jQuery_no_conflict);
/*global  jQuery */

/* ==========================================================
 * sidenav.js
 * Side nav init script
 *
 * Author: Yann Gouffon, hello@yago.io
 *
 * Copyright 2014 Yann Gouffon
 * Licensed under MIT
 ========================================================== */

(function($) {
  $(window).load(function() {
    var cortanaSlidebars = new $.slidebars();
    // $(window).load(function () {
    //   cortanaSlidebars.open('left');
    // });
    $('#open-left').on('click', function(event) {
      event.preventDefault();
      cortanaSlidebars.toggle('left');
    });

  });
}) (jQuery_no_conflict);

/* ==========================================================
 * template-helper.js
 * Add the missing class to doc content
 *
 * Author: Yann Gouffon, hello@yago.io
 *
 * Copyright 2014 Yann Gouffon
 * Licensed under MIT
 ========================================================== */

(function($) {
  $(document).ready(function() {
    // Add wrapper to all styleguide content
    $("p, h1, h2, h3, h4, h5, h6, table, ul, ol, dl, blockquote, q").not(".cortana-header h1, .codeExample p, .codeExample table, .codeExample h1, .codeExample h2, .codeExample h3, .codeExample h4, .codeExample h5, .codeExample h6, .codeExample ul, .codeExample dl, .codeExample ol, .codeExample blockquote, .codeExample q, blockquote p, q p").wrap('<div class="cortana-content"></div>');
  });
}) (jQuery_no_conflict);
/*global  jQuery */

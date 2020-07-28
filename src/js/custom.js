(function($) {
  "use strict"; // Start of use strict

  _2ClickIframePrivacy.init({
    'enableCookies':false
  });

  // bootstrap modals
  // 2DO: use data-file
  $("#dynamicModal").click(function(){
    $.get({
      url: 'imprint.html',
      success: function(response){
        console.log('sucess',response);
        // Add response in Modal body
        $('#exampleModal .modal-body').html(response);
        // Display Modal
        $('#exampleModal').modal('show');
      }
    });

  });

  // scrollProgress
  const progressElement = document.querySelector('.progress-bar');

  const progressObserver = new ScrollProgress((x, y) => {
    progressElement.style.width = y * 100 + '%';
  });


})(jQuery); // End of use strict

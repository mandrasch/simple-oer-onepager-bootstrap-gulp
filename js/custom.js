(function($) {
  "use strict"; // Start of use strict

  _2ClickIframePrivacy.init('');

  // bootstrap modals

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

  })


})(jQuery); // End of use strict

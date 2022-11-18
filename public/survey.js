const canvas = document.getElementById('canv');
var $ = canvas.getContext('2d');


var col = function(x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1,1);
}
var R = function(x, y, t) {
  return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
}

var G = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
}

var B = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}

var t = 0;

var run = function() {
  for(x=0;x<=35;x++) {
    for(y=0;y<=35;y++) {
      col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
    }
  }
  t = t + 0.02;
  window.requestAnimationFrame(run);
}

run();

/* Modal Logic For Friend Match */
//When the submit btn is clicked, the modal is made visible (opened)
jQuery('#surveySubmit').on('click', function(e){
    e.preventDefault();
    console.log('Survey submitted');
    //gather user input
    const userInput = {
        name: jQuery('#userFriendName').val().trim(),
        photo: jQuery('#userFriendImg').val().trim(),
        description: jQuery('#userFriendDesc').val().trim(),
        scores: [
            jQuery('#question1').val(),
            jQuery('#question2').val(),
            jQuery('#question3').val(),
            jQuery('#question4').val(),
            jQuery('#question5').val(),
            jQuery('#question6').val(),
            jQuery('#question7').val(),
            jQuery('#question8').val(),
            jQuery('#question9').val(),
            jQuery('#question10').val(),
            jQuery('#question11').val(),
            jQuery('#question12').val(),
            jQuery('#question13').val(),
            jQuery('#question14').val(),
            jQuery('#question15').val()
        ]
    };
    jQuery.post('/api/friends', userInput)
    .done(function(data){
        console.log('User Match: ' + JSON.stringify(data));
        //set friend values based on user input for friend match
        jQuery('#userFriendName').text(data.name);
        jQuery('#userFriendImg').attr("src", data.photo);
        jQuery('#userFriendDesc').text(data.description);
        //add active class to make modal visible
        jQuery('.modal-bg').addClass('modal-bg-active');
        console.log('Modal Opened');
    });
});
//When the close modal btn (X) is clicked, the modal removes active class and is no longer visible
jQuery('.modal-close').on('click', function(){
    jQuery('.modal-bg').removeClass('modal-bg-active');
    console.log('Modal Closed');
});
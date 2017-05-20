

// Hides the title/log after a set time
setTimeout(function() {
    $('#title').fadeOut('fast');
}, 2000); // time in milliseconds


$(document).ready(function() {     
    $('#student_page').click(function() {
        $('#login_page').hide();
        $('#student_page').show();
    });    
});

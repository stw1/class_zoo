

// Hides the title/log after a set time
setTimeout(function() {
    $('#title').fadeOut('fast');
}, 1000); // time in milliseconds


$(document).ready(function() {     
    $('#parent_icon').click(function() {
        $('#login_page').hide();
        $('#parent_page').show();
        console.log("parent");
    });    
   
    $('#student_icon').click(function() {
        $('#login_page').hide();
        $('#student_page').show();
        console.log("student");
    });    
    
    $('#teacher_icon').click(function() {
        $('#login_page').hide();
        $('#teacher_page').show();
        console.log("teacher");
    });    
   
    $('#back_icon').click(function() {
    	$('#teacher_page').hide();
    	$('#parent_page').hide();
    	$('#student_page').hide();	
        $('#login_page').show();
        console.log("back_icon");
 
    });    

    $('#back_icon2').click(function() {
    	$('#teacher_page').hide();
    	$('#parent_page').hide();
    	$('#student_page').hide();	
        $('#login_page').show();
        console.log("back_icon");
 
    });    

    $('#back_icon3').click(function() {
    	$('#teacher_page').hide();
    	$('#parent_page').hide();
    	$('#student_page').hide();	
        $('#login_page').show();
        console.log("back_icon");
 
    });    
});
/*jshint esversion: 6 */

emailjs.init('0Srwr_bwVJqHDTfFz');

/**
 * function for the contact form on the home page
 * @param {event} e - the event passed into the function when submit event occurs
 * */ 
function sendMail(e){
    e.preventDefault();

    emailjs.send(
        "service_g84hf2i", "template_afgnwq7", 
        {
            from_name: e.target.elements[0].value,
            from_subject: e.target.elements[2].value,
            from_email: e.target.elements[1].value,
            from_message: e.target.elements[3].value   
        }, 
        "0Srwr_bwVJqHDTfFz"
    )
    .then( function() {
        //feedback to user that message has been sent
        document.querySelector('#contact-section .message-feedback').innerHTML = 'Message Sent';

        //empty all fields once the message has been sent
        document.querySelectorAll('.form-item').forEach( function(input) {
            input.value ='';
        });

        //remove the text from message feedback after 2 seconds
        setTimeout(function(){
            document.querySelector('#contact-section .message-feedback').innerHTML = '';
        }, 2000);        

    },function(error) {
        console.error('error:', error);
        document.querySelector('#contact-section .message-feedback').innerHTML = 'Something Went Wrong';
    });
    
}

document.querySelector('#feedback-form').addEventListener('submit', sendMail);
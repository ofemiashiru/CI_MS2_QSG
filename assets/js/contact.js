emailjs.init('0Srwr_bwVJqHDTfFz');

// Code for the contact form on the home page
const sendMail = function(contactForm){
    emailjs.send(
        "service_g84hf2i", "template_afgnwq7", 
        {
            from_name: contactForm.name.value,
            from_subject: contactForm.subject.value,
            from_email: contactForm.emailaddress.value,
            from_message: contactForm.message.value   
        }, 
        "0Srwr_bwVJqHDTfFz"
    )
    .then( () => {
        //feedback to user that message has been sent
        document.querySelector('#contact-section .message-feedback').innerHTML = 'Message Sent'

        //empty all fields once the message has been sent
        document.querySelectorAll('.form-item').forEach((input)=>{
            input.value =''
        });

        //remove the text from message feedback after 2 seconds
        setTimeout(function(){
            document.querySelector('#contact-section .message-feedback').innerHTML = ''
        }, 2000);        

    },(error) => {
        console.error('error:', error);
        document.querySelector('#contact-section .message-feedback').innerHTML = 'Something Went Wrong'
    });
    
    return false // prevents page refreshing
}
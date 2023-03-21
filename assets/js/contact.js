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
    .then(respsone => {
        console.log('SUCCESS', respsone);

    },(error) => {
        console.error('error:', error);
    })
    


    return false // prevents page refreshing
}
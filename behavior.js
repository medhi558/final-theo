document.addEventListener("DOMContentLoaded", function(event) {

	var thumbnailElement = document.getElementById("smart_thumbnail");

	thumbnailElement.addEventListener("click", function() {
        this.classList.toggle('small'); 
        
    });

             
    var submit = document.getElementById("submit");     
    submit.addEventListener("click", function(event)
    {
        var templateParams = {
            from_name: document.getElementById("name").value,
            message: document.getElementById("msg").value,
            email: document.getElementById("mail").value
        };

        event.preventDefault();
        submit.disabled = true; //On bloque le button le temps d'envoyer le message
        //VERIFIER SI LES INPUTS CONTIENT DU TEXT
        emailjs.send('default_service', 'contact', templateParams).then(function(response) {
           alert("message envoyé");
           submit.disabled = false;
        }, function(error) {
           alert("echec de l'envoie du message");
           submit.disabled = false;
        })
    });
});

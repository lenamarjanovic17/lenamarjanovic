function proveraForme() {
    var ime = document.forms["forma"]["username"].value;
    var email = document.forms["forma"]["email"].value;
    var naslov = document.forms["forma"]["subject"].value;
    var poruka = document.forms["forma"]["message"].value;

    if(ime.length >= 3) {
        if(email.length != 0) {
            if(naslov.length != 0) {
                if(poruka.length > 10) {
                    alert("Uspesna prijava!");
                }
            }
        }
    }
}
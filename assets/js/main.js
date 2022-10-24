



function submitContact(event) {
    let myform = document.getElementById('myform');
    myform.addEventListener('submit', function (evt) {
        let error = false;
        if (error) {
            evt.preventDefault();
        } else {

            event.preventDefault();
            let fistname = document.getElementById("firstname").value;
            let lastname = document.getElementById("lastname").value;
            let email = document.getElementById("email").value;
            let msg = document.getElementById("textarea").value;
            let check = document.getElementById("checkbox");
            console.log(fistname);
            console.log(lastname);
            console.log(email);
            console.log(msg);
            console.log(check.checked);

            if (window.confirm('We have recieved the following Message! ' + msg)) {
                window.location = "../../index.html";
            }
        }
    });
}
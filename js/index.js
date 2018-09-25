var message = document.getElementById("message").value;
function formValidation() {
    "use strict";
    var username = document.getElementById("myName").value,
        email = document.getElementById("myEmail").value,
        subject = document.getElementById("subject").value;
    if (username === "" || email === "" || subject === "") {
        alert("please fill all fields");
        return false;
    } else {
        return true;
    }
}
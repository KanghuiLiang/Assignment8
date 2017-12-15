$(document).ready(function() {
    $("#signup").click(function() {
        var name = $("#username").val();
        var email = $("#email").val();
        var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
        var password = $("#password").val();
        var cpassword = $("#confirmpassword").val();
        if (name == '' || email == '' || password == '' || cpassword == '') {
            alert("You haven't filled all!!");
        } else if ((name.length) < 8) {
            alert("Uername should be more tha 8 characters!");
        } else if ((password.length) < 8) {
            alert("Password should more than 8 characters!!!!!!");
        } else if (!(password).match(cpassword)) {
            alert("Your passwords don't match.");
        } else if (!(email).match(regex)) {
            alert("Please enter a valid email");
        } else {
            alert("Congradulations! Now you can log in.");
        }
    });
});
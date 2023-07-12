var fullname = document.getElementById("name");                                             // creating instances of the classes and id
var email = document.getElementById("email-id");
var phone = document.getElementById("phone");
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm-password");

function validate(event) {
    if (fullname.value === "" || email.value === "" || phone.value === "" || password.value === "" || confirm_password.value === "") {
        alert("Please enter all the details !!!");
    }
    else {
        if (phone.value === "1234567890" || phone.value === "0123456789" || phone.value === "9876543210" || phone.value === "0987654321") { // checking if the mobile number is fake
            alert("Please enter a correct phone number");
        }

        if (phone.value.length != 10) {                                                     // checking if the length of the mobile number is 10
            alert("Please enter a 10 - digit mobile number");
        }

        if (password.value === "password" || password.value === "Password" || password.value === "PASSWORD" || password.value === "PassWord" || password.value === fullname.value || password.value === phone.value) { // checking if the password is strong
            alert("Password is not strong");
        }
        else {
            if (confirm_password.value === password.value) {                            // checking if confirm password matches the password
                // nothing will happen
            }
            else {
                alert("Password and Confirm Password doesn't match !!!")
            }
            if (phone.value.length == 10 && confirm_password.value === password.value) {        // checking if all the details entered are right
                alert("Login Successful !!!");
            }
        }

    }

    // event.preventDefault();


}
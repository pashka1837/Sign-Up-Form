var firstName
var lastName;
var email;
var password;
$("#claimBtn").removeClass("btn:active");


$("#claimBtn").click(function() {
  firstName = $("#firstName").val();
  lastName = $("#lastName").val();
  email = $("#email").val();
  password = $("#password").val();
  checkInputs();
});


function checkInputs() {
  if (firstName.length === 0) {
    $("#firstName").removeAttr("placeholder");
    $("#firstName").addClass("warning");
    $("#firstNameHelp").text("First Name cannot be empty");
  } else {
    $("#firstName").removeClass("warning");
    $("#firstNameHelp").text("");
  }

  if (password.length === 0) {
    $("#password").removeAttr("placeholder");
    $("#password").addClass("warning");
    $("#passwordHelp").text("Password cannot be empty");
  } else {
    $("#password").removeClass("warning");
    $("#passwordHelp").text("");
  }

  if (lastName.length === 0) {
    $("#lastName").removeAttr("placeholder");
    $("#lastName").addClass("warning");
    $("#lastNameHelp").text("Last Name cannot be empty");
  } else {
    $("#lastName").removeClass("warning");
    $("#lastNameHelp").text("");
  }

  isEmail(email);

  if (!isEmail(email)) {
    $("#email").val("");
    $("#email").removeAttr("placeholder");
    $("#email").addClass("warning");
    $("#emailHelp").text("Looks like this is not email");
  } else {
    $("#email").removeClass("warning");
    $("#emailHelp").text("");
  }
}


function isEmail($email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test($email);
}

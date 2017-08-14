$(document).ready(function() {
  
  var fnameInput = $("#fname");
  var lnameInput = $("#lname");
  var usernameInput = $("#userName");
  var passwordInput = $("#password");
  var emailInput  = $("#email");

 
  $(document).on("submit", "#signup-form", handleUserFormSubmit);
 
  function handleUserFormSubmit(event) {
    event.preventDefault();
   
    if (!usernameInput.val().trim()) {   
      return;
    }
   
    upsertUser({
      FirstName:fnameInput .val() .trim(),
      LastName: lnameInput .val() .trim(),
      username: usernameInput .val() .trim(),
      password: passwordInput .val(),
      email:    emailInput .val() .trim()
    });
  }

  function upsertUser(userData) {
    $.post("/api/users", userData)

    .then(function () {   
      displayItin();
    });
      }

  function displayItin () {
    $("#signup-form").empty();
     document.location="itinerary.html";
  }
});
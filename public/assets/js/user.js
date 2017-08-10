$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  var fnameInput = $("#fname");
  var lnameInput = $("#lname");
  var usernameInput = $("#username");
  var passwordInput = $("#password");
  var emailInput  = $("#email");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#signup-form", handleUserFormSubmit);
  // $(document).on("click", ".delete-author", handleDeleteButtonPress);

  // Getting the intiial list of Authors
  // getAuthors();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleUserFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
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

  // A function for creating an author. Calls getAuthors upon completion
  function upsertUser(userData) {
    $.post("/api/users", userData)
    .then(function () {
      displayItin();
    })
      }

  function displayItin () {
    $("#signup-form").empty();
    document.location="itinerary.html"

  }

  // Function for creating a new list row for authors
//   function createAuthorRow(authorData) {
//     var newTr = $("<tr>");
//     newTr.data("author", authorData);
//     newTr.append("<td>" + authorData.name + "</td>");
//     newTr.append("<td> " + authorData.Posts.length + "</td>");
//     newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
//     newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
//     newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
//     return newTr;
//   }

//   // Function for retrieving authors and getting them ready to be rendered to the page
//   function getAuthors() {
//     $.get("/api/authors", function(data) {
//       var rowsToAdd = [];
//       for (var i = 0; i < data.length; i++) {
//         rowsToAdd.push(createAuthorRow(data[i]));
//       }
//       renderAuthorList(rowsToAdd);
//       nameInput.val("");
//     });
//   }

//   // A function for rendering the list of authors to the page
//   function renderAuthorList(rows) {
//     authorList.children().not(":last").remove();
//     authorContainer.children(".alert").remove();
//     if (rows.length) {
//       console.log(rows);
//       authorList.prepend(rows);
//     }
//     else {
//       renderEmpty();
//     }
//   }

//   // Function for handling what to render when there are no authors
//   function renderEmpty() {
//     var alertDiv = $("<div>");
//     alertDiv.addClass("alert alert-danger");
//     alertDiv.html("You must create an Author before you can create a Post.");
//     authorContainer.append(alertDiv);
//   }

//   // Function for handling what happens when the delete button is pressed
//   function handleDeleteButtonPress() {
//     var listItemData = $(this).parent("td").parent("tr").data("author");
//     var id = listItemData.id;
//     $.ajax({
//       method: "DELETE",
//       url: "/api/authors/" + id
//     })
//     .done(getAuthors);
//   }
 });
// // JavaScript Document
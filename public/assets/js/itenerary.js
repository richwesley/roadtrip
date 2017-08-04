$(document).ready(function() {
  /* global moment */

  // blogContainer holds all of our iteneraries
  var blogContainer = $(".blog-container");
  var postCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handlePostDelete);
  $(document).on("click", "button.edit", handlePostEdit);
  // Variable to hold our iteneraries
  var iteneraries;

  // The code below handles the case where we want to get blog iteneraries for a specific user
  // Looks for a query param in the url for user_id
  var url = window.location.search;
  var userId;
  if (url.indexOf("?user_id=") !== -1) {
    userId = url.split("=")[1];
    getItenerary(userId);
  }
  // If there's no userId we just get all iteneraries as usual
  else {
    getIteneraries();
  }


  // This function grabs iteneraries from the database and updates the view
  function getIteneraries(user) {
    userId = user || "";
    if (userId) {
      userId = "/?user_id=" + userId;
    }
    $.get("/api/iteneraries" + userId, function(data) {
      console.log("Iteneraries", data);
      iteneraries = data;
      if (!iteneraries || !iteneraries.length) {
        displayEmpty(user);
      }
      else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete iteneraries
  function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/iteneraries/" + id
    })
    .done(function() {
      getIteneraries(postCategorySelect.val());
    });
  }

  // InitializeRows handles appending all of our constructed post HTML inside blogContainer
  function initializeRows() {
    blogContainer.empty();
    var itenerariesToAdd = [];
    for (var i = 0; i < iteneraries.length; i++) {
      itenerariesToAdd.push(createNewRow(iteneraries[i]));
    }
    blogContainer.append(itenerariesToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(post) {
    var formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    var newPostPanel = $("<div>");
    newPostPanel.addClass("panel panel-default");
    var newPostPanelHeading = $("<div>");
    newPostPanelHeading.addClass("panel-heading");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-info");
    var newPostTitle = $("<h2>");
    var newPostDate = $("<small>");
    var newPostuser = $("<h5>");
    newPostuser.text("Written by: " + post.User.name);
    newPostUser.css({
      float: "right",
      color: "blue",
      "margin-top":
      "-10px"
    });
    var newPostPanelBody = $("<div>");
    newPostPanelBody.addClass("panel-body");
    var newPostBody = $("<p>");
    newPostTitle.text(post.title + " ");
    newPostBody.text(post.body);
    newPostDate.text(formattedDate);
    newPostTitle.append(newPostDate);
    newPostPanelHeading.append(deleteBtn);
    newPostPanelHeading.append(editBtn);
    newPostPanelHeading.append(newPostTitle);
    newPostPanelHeading.append(newPostUser);
    newPostPanelBody.append(newPostBody);
    newPostPanel.append(newPostPanelHeading);
    newPostPanel.append(newPostPanelBody);
    newPostPanel.data("post", post);
    return newPostPanel;
  }

  // This function figures out which post we want to delete and then calls deletePost
  function handlePostDelete() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    deletePost(currentPost.id);
  }

  // This function figures out which post we want to edit and takes it to the appropriate url
  function handlePostEdit() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    window.location.href = "/cms?post_id=" + currentPost.id;
  }

  // This function displays a messgae when there are no iteneraries
  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for User #" + id;
    }
    blogContainer.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("No iteneraries yet" + partial + ", navigate <a href='/cms" + query +
    "'>here</a> in order to get started.");
    blogContainer.append(messageh2);
  }

});
// JavaScript Document
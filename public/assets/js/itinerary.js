$(document).ready(function() {

 

   var activityInput = $("#activityInput");
   var confInput = $("#confInput");
   var resTime = $("resTime");
    

   $(document).on("submit", "#form-submit", handleActivityFormSubmit);

    function handleActivityFormSubmit(event) {
    event.preventDefault();
   
    if (!activityInput.val().trim()) {
      return;
      }
    };
   
    upsertItinerary({
      itinType: activityInput .val() .trim(),
      confNum: confInput .val() .trim()
      //arrivalTime: resTime .val() .trim()
    });
  
     function upsertItinerary(itinData) {
    $.post("/api/itineraries", itinData)
    
    .then(function () {
      displayItin();
    })
      };

  function displayItin () {
   $("#activity-form").empty();
    // document.location="itinerary.html"

  }
 
  // var url = window.location.search;
  // var userId;
  // if (url.indexOf("?user_id=") !== -1) {
  //   userId = url.split("=")[1];
  //   getItinerary(userId);
  // }
  // // If there's no userId we just get all itineraries as usual
  // else {
  //   getItineraries();
  // }


  // // This function grabs itineraries from the database and updates the view
  // function getItineraries(user) {
  //   userId = user || "";
  //   if (userId) {
  //     userId = "/?user_id=" + userId;
  //   }
  //   $.get("/api/itineraries" + userId, function(data) {
  //     console.log("Itineraries", data);
  //     itineraries = data;
  //     if (!itineraries || !itineraries.length) {
  //       displayEmpty(user);
  //     }
  //     else {
  //       initializeRows();
  //     }
  //   });
  // }

  // // This function does an API call to delete itineraries
  // function deletePost(id) {
  //   $.ajax({
  //     method: "DELETE",
  //     url: "/api/itineraries/" + id
  //   })
  //   .done(function() {
  //     getItineraries(postCategorySelect.val());
  //   });
  // }

  // // InitializeRows handles appending all of our constructed post HTML inside blogContainer
  // function initializeRows() {
  //   blogContainer.empty();
  //   var itinerariesToAdd = [];
  //   for (var i = 0; i < itineraries.length; i++) {
  //     itinerariesToAdd.push(createNewRow(itineraries[i]));
  //   }
  //   blogContainer.append(itinerariesToAdd);
  // }

  // // This function constructs a post's HTML
  // function createNewRow(post) {
  //   var formattedDate = new Date(post.createdAt);
  //   formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
  //   var newPostPanel = $("<div>");
  //   newPostPanel.addClass("panel panel-default");
  //   var newPostPanelHeading = $("<div>");
  //   newPostPanelHeading.addClass("panel-heading");
  //   var deleteBtn = $("<button>");
  //   deleteBtn.text("x");
  //   deleteBtn.addClass("delete btn btn-danger");
  //   var editBtn = $("<button>");
  //   editBtn.text("EDIT");
  //   editBtn.addClass("edit btn btn-info");
  //   var newPostTitle = $("<h2>");
  //   var newPostDate = $("<small>");
  //   var newPostuser = $("<h5>");
  //   newPostuser.text("Written by: " + post.User.name);
  //   newPostUser.css({
  //     float: "right",
  //     color: "blue",
  //     "margin-top":
  //     "-10px"
  //   });
  //   var newPostPanelBody = $("<div>");
  //   newPostPanelBody.addClass("panel-body");
  //   var newPostBody = $("<p>");
  //   newPostTitle.text(post.title + " ");
  //   newPostBody.text(post.body);
  //   newPostDate.text(formattedDate);
  //   newPostTitle.append(newPostDate);
  //   newPostPanelHeading.append(deleteBtn);
  //   newPostPanelHeading.append(editBtn);
  //   newPostPanelHeading.append(newPostTitle);
  //   newPostPanelHeading.append(newPostUser);
  //   newPostPanelBody.append(newPostBody);
  //   newPostPanel.append(newPostPanelHeading);
  //   newPostPanel.append(newPostPanelBody);
  //   newPostPanel.data("post", post);
  //   return newPostPanel;
  // }

  // // This function figures out which post we want to delete and then calls deletePost
  // function handlePostDelete() {
  //   var currentPost = $(this)
  //     .parent()
  //     .parent()
  //     .data("post");
  //   deletePost(currentPost.id);
  // }

  // // This function figures out which post we want to edit and takes it to the appropriate url
  // function handlePostEdit() {
  //   var currentPost = $(this)
  //     .parent()
  //     .parent()
  //     .data("post");
  //   window.location.href = "/cms?post_id=" + currentPost.id;
  // }

  // // This function displays a messgae when there are no itineraries
  // function displayEmpty(id) {
  //   var query = window.location.search;
  //   var partial = "";
  //   if (id) {
  //     partial = " for User #" + id;
  //   }
  //   blogContainer.empty();
  //   var messageh2 = $("<h2>");
  //   messageh2.css({ "text-align": "center", "margin-top": "50px" });
  //   messageh2.html("No itineraries yet" + partial + ", navigate <a href='/cms" + query +
  //   "'>here</a> in order to get started.");
  //   blogContainer.append(messageh2);
  // }

 });
// JavaScript Document
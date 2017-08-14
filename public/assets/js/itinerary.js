"use strict";
$(document).ready(function() {

   var activityInput = $("#activity");
   var confInput = $("#confnum")
   var userid = 1;
  
   $(document).on("submit", "#add-activity", handleActivityFormSubmit);

    function handleActivityFormSubmit(event) {
    event.preventDefault();
   
    if (!activityInput.val().trim()) {
       return;
   
    }
   
    upsertItinerary({
      itinType: activityInput .val() .trim(),
      userId: userid,
    });
  }
  
     function upsertItinerary(itinData) {
        
    $.post("/api/itinerary", itinData)
       .then(function () {
      
      displayItin();
     });   
    }
  function displayItin () {
  
   $("#addActivity").empty();
   document.location="itinerary.html";
      }
     
    });
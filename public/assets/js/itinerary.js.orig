$(document).ready(function() {

   var activityInput = $("#activity");
   var confInput = $("#confnum")
   var userid = 1;
  
   $(document).on("submit", "#addActivity", handleActivityFormSubmit);

    function handleActivityFormSubmit(event) {
    event.preventDefault();
   
    if (!activityInput.val().trim()) {
       return;
   
    }
   
    upsertItinerary({
      itinType: activityInput .val() .trim(),
      confNum: confInput .val() .trim(),
      userId: userid
    });
  
     function upsertItinerary(itinData) {
    $.post("/api/itineraries", itinData)
     
    .then(function () {
       console.log(itinData);
      displayItin();
     });
      

  function displayItin () {
   console.log(itinData);
   $("#addActivity").empty();
   document.location="itinerary.html";
      }
     }
    }
    function createUserList(user) {
      $.get("/api/authors");
    var listOption = $("<option>");
    listOption.attr("value", user.id);
    listOption.text(user.name);
    return listOption;
  }
})  
  
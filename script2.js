$(document).ready(function(){
  

  // Init Firebase
  var config = {
    apiKey: "AIzaSyA0Ryp2imYltU8aTdzvXCkXf56rYVtRRzg",
    authDomain: "roadtrip-cf7e3.firebaseapp.com",
    databaseURL: "https://roadtrip-cf7e3.firebaseio.com",
    projectId: "roadtrip-cf7e3",
    storageBucket: "roadtrip-cf7e3.appspot.com",
    messagingSenderId: "269615186947"
  };
  firebase.initializeApp(config);

  //Run Clock  
  setInterval(function(){
    $('.current-time').html(moment().format('hh:mm:ss A'))
  }, 1000);


//flight portion//
  var database = firebase.database();

  var airportAddr = "";
  var airlineInfo = "";
  var flightConf = "";
  var flightDate = "";
  var flightTime = "";
  var flightCost = "";


  $(".submit-flight").on("click", function(e){
    e.preventDefault();
    airportAddr = $("#airportAddr"). val().trim();
    airlineInfo = $("#airlineInfo").val().trim();
    flightConf = $("#flightConf").val().trim();
    flightDate = $("#flightDate").val().trim();
    flightTime = $("#flightTime").val().trim();
    flightCost = $("#flightCost").val().trim();



    console.log(airportAddr, ", " + airlineInfo  + flightConf + flightDate + flightTime + flightCost);

    //Each time a new value is added that is the "child_added" event
    database.ref().push( {
        airportAddr: airportAddr,
        airlineInfo: airlineInfo,
        flightConf: flightConf,
        flightDate: flightDate,
        flightTime: flightTime,
        flightCost: flightCost,
  
    });

        $('#airportAddr').val('');
      $('#airlineInfo').val('');
      $('#flightConf').val('');
      $('#flightDate').val('');
      $('#flightTime').val('');
      $('#flightCost').val('');

  });

    //Firebase watcher
    database.ref().on("child_added", function(snapshot) {

      // console.log(snapshot.val());  //logs everything
      // console.log(snapshot.val().airportAddr);
      // console.log(snapshot.val().airlineInfo);
      // console.log(snapshot.val().flightConf);
      // console.log(snapshot.val().flightDate);
      // console.log(snapshot.val().flightTime);
      // console.log(snapshot.val().flightCost);

      var flightClass = snapshot.key;

      

      var airportAddr = snapshot.val().airportAddr;
      var airlineInfo = snapshot.val().airlineInfo;
      var flightConf = snapshot.val().flightConf;
      var flightDate = snapshot.val().flightDate;
      var flightTime = snapshot.val().flightTime;
      var flightCost = snapshot.val().flightCost;

    
      //add row data 

      var tableRow = $("<tr class='flights-tr'>");
      var tableData = $("<td class='flights-td'>");
      var tableButton = $("</td><td><button class='edit btn' data-flight=" + flightClass + "><i class='glyphicon glyphicon-pencil'></i></button> <button class='delete btn' data-flight=" + flightClass + "><i class='glyphicon glyphicon-remove'></i></button></td></tr>");

      tableData.append(airportAddr);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(airlineInfo);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(flightConf);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(flightDate);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(flightTime);
      tableRow.append(tableData);
      var tableData = $("<td>");
      tableRow.append(tableButton);

      tableData.append(flightTime);
      tableRow.append(tableData);
      var tableData = $("<td>");
      tableRow.append(tableButton);

      tableData.append(flightCost);
      tableRow.append(tableData);
      var tableData = $("<td>");
      tableRow.append(tableButton);
      $(".flight-table").append(tableRow);

    });





     // Reference Firebase when children are updated
     database.ref().child('flights').on('child_changed', function(childSnapshot){
      
      var trainClass = childSnapshot.key;
      var trainId = childSnapshot.val();



      var tableRow = $("<tr>");
      var tableData = $("<td>");
      // var tableButton = $("</td><td><button class='edit btn' data-flight=" + flightClass + "><i class='glyphicon glyphicon-pencil'></i></button> <button class='delete btn' data-flight=" + flightClass + "><i class='glyphicon glyphicon-remove'></i></button></td></tr>");
      var tableButton = $("</td><td> <button class='delete btn' data-flight=" + flightClass + "><i class='glyphicon glyphicon-remove'></i></button></td></tr>");

      tableData.append(airportAddr);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(airlineInfo);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(flightConf);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(flightDate);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(flightTime);
      tableRow.append(tableData);
      var tableData = $("<td>");
      tableRow.append(tableButton);

      tableData.append(flightCost);
      tableRow.append(tableData);
      var tableData = $("<td>");
      tableRow.append(tableButton);

      $(".flight-table").append(tableRow);
    });





$("body").on("click", ".delete", function(){
     $(this).closest ('tr').remove();
     getKey = $(this).parent().parent().attr('data-flight');
     database.child(getKey).remove();
});


    $(document).on('click','.edit', function(){
     getKey = $(this).parent().parent().attr('data-flight');
     database.child(getKey).once('value').then(function(snapshot) {
        $('#airportAddr').val(snapshot.val().airportAddr);
        $('#airlineInfo').val(snapshot.val().airlineInfo);
          $('#flightDate').val(snapshot.val().flightDate);
        $('#flightTime').val(snapshot.val().flightTime);
        $('#flightConf').val(snapshot.val().flightConf);
        $('#flightCost').val(snapshot.val().flightCost);

      });
      
    });

//train portion=============================//
var carAddress = "";
  var carModel = "";
  var carConf = "";
  var rentalPeriod = "";
  var carCost = "";



  $(".submit-car").on("click", function(){
    e.preventDefault();
    carAddress = $("#carAddress"). val().trim();
    carModel = $("#carModel").val().trim();
    carConf = $("#carConf").val().trim();
    rentalPeriod = $("#rentalPeriod").val().trim();
    carCost = $("#carCost").val().trim();



    console.log(carAddress, ", " + carModel  + carConf + rentalPeriod + carCost);

    //Each time a new value is added that is the "child_added" event
    database.ref().push( {
        carAddress: carAddress,
        carModel: carModel,
        carConf: carConf,
        rentalPeriod: rentalPeriod,
        carCost: carCost,
  
    });

        $('#carAddress').val('');
      $('#carModel').val('');
      $('#carConf').val('');
      $('#rentalPeriod').val('');
      $('#carCost').val('');


  });

    //Firebase watcher
    database.ref().on("child_added", function(snapshot) {

      // console.log(snapshot.val());  //logs everything
      // console.log(snapshot.val().carAddress);
      // console.log(snapshot.val().carModel);
      // console.log(snapshot.val().carConf);
      // console.log(snapshot.val().rentalPeriod);
      // console.log(snapshot.val().carCost);

        var carClass = snapshot.key;

      

      var carAddress = snapshot.val().carAddress;
      var carModel = snapshot.val().carModel;
      var carConf = snapshot.val().carConf;
      var rentalPeriod = snapshot.val().rentalPeriod;
      var carCost = snapshot.val().carCost;

    
      //add row data 

      var tableRow = $("<tr>");
      var tableData = $("<td>");
      var tableButton = $("</td><td><button class='edit btn' data-car=" + carClass + "><i class='glyphicon glyphicon-pencil'></i></button> <button class='delete btn' data-flight=" + carClass + "><i class='glyphicon glyphicon-remove'></i></button></td></tr>");

      tableData.append(carAddress);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(carModel);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(carConf);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(rentalPeriod);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(carCost);
      tableRow.append(tableData);
      var tableData = $("<td>");
      tableRow.append(tableButton);


      $(".car-table").append(tableRow);

    });





     // Reference Firebase when children are updated
     database.ref().child('cars').on('child_changed', function(childSnapshot){
      
      var carClass = childSnapshot.key;
      var carId = childSnapshot.val();



      var tableRow = $("<tr>");
      var tableData = $("<td>");
      // var tableButton = $("</td><td><button class='edit btn' data-flight=" + flightClass + "><i class='glyphicon glyphicon-pencil'></i></button> <button class='delete btn' data-flight=" + flightClass + "><i class='glyphicon glyphicon-remove'></i></button></td></tr>");
      var tableButton = $("</td><td> <button class='delete btn' data-car=" + carClass + "><i class='glyphicon glyphicon-remove'></i></button></td></tr>");

      tableData.append(carAddress);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(carModel);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(carConf);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(rentalPeriod);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(carCost);
      tableRow.append(tableData);
      var tableData = $("<td>");
      tableRow.append(tableButton);


      $(".car-table").append(tableRow);
    });





$("body").on("click", ".delete", function(){
     $(this).closest ('tr').remove();
     getKey = $(this).parent().parent().attr('data-car');
     database.child(getKey).remove();
});


    $(document).on('click','.edit', function(){
     getKey = $(this).parent().parent().attr('data-car');
     database.child(getKey).once('value').then(function(snapshot) {
        $('#carAddress').val(snapshot.val().carAddress);
        $('#carModel').val(snapshot.val().carModel);
          $('#carConf').val(snapshot.val().carConf);
        $('#rentalPeriod').val(snapshot.val().rentalPeriod);
        $('#carCost').val(snapshot.val().carCost);

      });
      
    });


//hotel portion===========================================================//

var hotelAddr = "";
  var hotelRoom = "";
  var hotelConf = "";
  var stayingPeriod = "";
  var hotelCost = "";



  $(".submit-hotel").on("click", function(e){
    e.preventDefault();
    hotelAddr = $("#hotelAddr"). val().trim();
    hotelRoom = $("#hotelRoom").val().trim();
    hotelConf = $("#hotelConf").val().trim();
    stayingPeriod = $("#stayingPeriod").val().trim();
    hotelCost = $("#hotelCost").val().trim();



    console.log(hotelAddr, ", " + hotelRoom  + hotelConf + stayingPeriod + hotelCost);

    //Each time a new value is added that is the "child_added" event
    database.ref().push( {
        hotelAddr: hotelAddr,
        hotelRoom: hotelRoom,
        hotelConf: hotelConf,
        stayingPeriod: stayingPeriod,
        hotelCost: hotelCost,
  
    });

        $('#hotelAddr').val('');
      $('#hotelRoom').val('');
      $('#hotelConf').val('');
      $('#stayingPeriod').val('');
      $('#hotelCost').val('');


  });

    //Firebase watcher
    database.ref().on("child_added", function(snapshot) {

      // console.log(snapshot.val());  //logs everything
      // console.log(snapshot.val().hotelAddr);
      // console.log(snapshot.val().hotelRoom);
      // console.log(snapshot.val().hotelConf);
      // console.log(snapshot.val().stayingPeriod);
      // console.log(snapshot.val().hotelCost);

        var hotelClass = snapshot.key;

      

      var hotelAddr = snapshot.val().hotelAddr;
      var hotelRoom = snapshot.val().hotelRoom;
      var hotelConf = snapshot.val().hotelConf;
      var stayingPeriod = snapshot.val().stayingPeriod;
      var hotelCost = snapshot.val().hotelCost;

    
      //add row data 

      var tableRow = $("<tr>");
      var tableData = $("<td>");
      var tableButton = $("</td><td><button class='edit btn' data-hotel=" + hotelClass + "><i class='glyphicon glyphicon-pencil'></i></button> <button class='delete btn' data-flight=" + hotelClass + "><i class='glyphicon glyphicon-remove'></i></button></td></tr>");

      tableData.append(hotelAddr);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(hotelRoom);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(hotelConf);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(stayingPeriod);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(hotelCost);
      tableRow.append(tableData);
      var tableData = $("<td>");
      tableRow.append(tableButton);


      $(".hotel-table").append(tableRow);

    });





     // Reference Firebase when children are updated
     database.ref().child('cars').on('child_changed', function(childSnapshot){
      
      var carClass = childSnapshot.key;
      var carId = childSnapshot.val();



      var tableRow = $("<tr>");
      var tableData = $("<td>");
      // var tableButton = $("</td><td><button class='edit btn' data-flight=" + flightClass + "><i class='glyphicon glyphicon-pencil'></i></button> <button class='delete btn' data-flight=" + flightClass + "><i class='glyphicon glyphicon-remove'></i></button></td></tr>");
      var tableButton = $("</td><td> <button class='delete btn' data-hotel=" + hotelClass + "><i class='glyphicon glyphicon-remove'></i></button></td></tr>");

      tableData.append(hotelAddr);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(hotelRoom);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(hotelConf);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(stayingPeriod);
      tableRow.append(tableData);
      var tableData = $("<td>");

      tableData.append(hotelCost);
      tableRow.append(tableData);
      var tableData = $("<td>");
      tableRow.append(tableButton);


      $(".hotel-table").append(tableRow);
    });





$("body").on("click", ".delete", function(){
     $(this).closest ('tr').remove();
     getKey = $(this).parent().parent().attr('data-hotel');
     database.child(getKey).remove();
});


    $(document).on('click','.edit', function(){
     getKey = $(this).parent().parent().attr('data-hotel');
     database.child(getKey).once('value').then(function(snapshot) {
        $('#hotelAddr').val(snapshot.val().hotelAddr);
        $('#hotelRoom').val(snapshot.val().hotelRoom);
          $('#hotelConf').val(snapshot.val().hotelConf);
        $('#stayingPeriod').val(snapshot.val().stayingPeriod);
        $('#hotelCost').val(snapshot.val().hotelCost);

      });
      
    });








});

  
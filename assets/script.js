  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA2v6r2k1Gkv8FOuFdM9dFwrAqX8BE4TQA",
    authDomain: "train-times-dfd4e.firebaseapp.com",
    databaseURL: "https://train-times-dfd4e.firebaseio.com",
    projectId: "train-times-dfd4e",
    storageBucket: "",
    messagingSenderId: "919363791404",
    appId: "1:919363791404:web:2c73346e77894c3b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var database = firebase.database();


$(".submit-btn").on("click", function(event) {
  event.preventDefault();

  var trainName = $("#train-input").val().trim();
  var trainDest = $("#destination-input").val().trim();
  var trainTime = moment($("#train-time-input").val().trim(), "HH:mm").format("X");
  var freq = $("#frequency-input").val().trim();

  var newTrain = {
    name: trainName,
    destination: trainDest,
    start: trainTime,
    frequency: freq,
  };

  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.start);
  console.log(newTrain.frequency);

  alert("Choo Choo!");

  // Clears all of the text-boxes
  $("#train-input").val("");
  $("#destination-input").val("");
  $("#train-time-input").val("");
  $("#frequency-input").val("");
});


database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().name;
  var trainDest = childSnapshot.val().role;
  var trainTime = childSnapshot.val().start;
  var freq = childSnapshot.val().rate;

  console.log(trainName);
  console.log(trainDest);
  console.log(trainTime);
  console.log(freq);

// Do the  math :()

  var newRow = $("<tr>").append(
    $("<td>").text(empName),
    $("<td>").text(empRole),
    $("<td>").text(empStartPretty),
    $("<td>").text(empMonths),
    $("<td>").text(empRate),
    $("<td>").text(empBilled)
  );

  $("#train-sched > tbody").append(newRow);
});
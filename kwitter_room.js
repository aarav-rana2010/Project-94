// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBHbmPt3ZTLP41dJmIodG78q7oDZwnouRw",
      authDomain: "kwitter-f04e3.firebaseapp.com",
      databaseURL: "https://kwitter-f04e3-default-rtdb.firebaseio.com",
      projectId: "kwitter-f04e3",
      storageBucket: "kwitter-f04e3.appspot.com",
      messagingSenderId: "1012289592205",
      appId: "1:1012289592205:web:f8500f645c2a6c1c64fbc4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("User_Name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name+ "!";
function addroom(){
Room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(Room_name).update({
      RoomName: "Adding a Room Name..."
      });
      localStorage.setItem("Room_Name",Room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Rooms_name "+ Room_names);
      row="<div class='room_name' id= "+ Room_names +" onclick='redirecttoroomname(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirecttoroomname(Room){
console.log("Room"+Room);
localStorage.setItem("Room_Name",Room);
window.location="kwiiter_page.html";
}

const firebaseConfig = {
      apiKey: "AIzaSyC2cHkQsXZgHw2MXMMZnvDA80aEQRL2ZTM",
      authDomain: "chatkwitter.firebaseapp.com",
      databaseURL: "https://chatkwitter-default-rtdb.firebaseio.com",
      projectId: "chatkwitter",
      storageBucket: "chatkwitter.appspot.com",
      messagingSenderId: "265373872701",
      appId: "1:265373872701:web:eec8ba74d07e27bbffb054"
    };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
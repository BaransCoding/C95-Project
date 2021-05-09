var firebaseConfig = {
apiKey: "AIzaSyCW-UIg7RPzwUurRFmF6CZNV3wbvxjdLtA",
    authDomain: "c94-project.firebaseapp.com",
    databaseURL: "https://c94-project-default-rtdb.firebaseio.com",
    projectId: "c94-project",
    storageBucket: "c94-project.appspot.com",
    messagingSenderId: "672669460566",
    appId: "1:672669460566:web:bd91ec1cf51819a2a973f7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); 
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose: "addinguser"});
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names); 
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row; 
      });
     });
     } 
     getData();
       //Start code
      
       function redirectToRoomName(name) 
       { 
        console.log(name); 
        localStorage.setItem("room_name", name); 
        window.location = "kwitter_page.html"; 
      }
      
      function addRoom() 
      { 
        room_name = document.getElementById("room_name").value; 
        
        firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" 
      }); 
      
      localStorage.setItem("room_name", room_name); 
      
      window.location = "kwitter_page.html"; 
      
    }
    function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}
      //End code
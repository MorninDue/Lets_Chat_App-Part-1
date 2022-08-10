const firebaseConfig = {
    apiKey: "AIzaSyCW1_nQtBtEkAyTgeX5qcizgWxMEtPNA6A",
    authDomain: "classtest-6d58a.firebaseapp.com",
    databaseURL: "https://classtest-6d58a-default-rtdb.firebaseio.com",
    projectId: "classtest-6d58a",
    storageBucket: "classtest-6d58a.appspot.com",
    messagingSenderId: "529141855308",
    appId: "1:529141855308:web:c92faaabfd9ce75ebfb0e9",
    measurementId: "G-CG94HTB1KT"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
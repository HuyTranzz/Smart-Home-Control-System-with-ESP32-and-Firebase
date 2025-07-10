// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnx82zkckuGxppZcpqaFMRPn6-BRufs_E",
    authDomain: "ttiot-ht.firebaseapp.com",
    projectId: "ttiot-ht",
    storageBucket: "ttiot-ht.firebasestorage.app",
    messagingSenderId: "990195811209",
    appId: "1:990195811209:web:6e991985ace457bb751758"
  };
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const switch05 = document.getElementById("sw05");

database.ref("/SmartHome/Spotlights").on("value",function(snapshot){
    let t = snapshot.val();
    console.log(t);

    if(t==0){
        switch05.checked = false;}
    else {
        switch05.checked = true;
    }
})

  switch05.onchange = function () {
    if (switch05.checked) {
      // Bật đèn
      database.ref("/SmartHome").update({
        "Spotlights": 1
      });
    } else {
      // Tắt đèn
      database.ref("/SmartHome").update({
        "Spotlights": 0
      });
    }
  };
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

const switch03 = document.getElementById("sw03");

database.ref("/SmartHome/Conditioner").on("value",function(snapshot){
    let t = snapshot.val();
    console.log(t);

    if(t==0){
        switch03.checked = false;}
    else {
        switch03.checked = true;
    }
})

  switch03.onchange = function () {
    if (switch03.checked) {
      // Bật đèn
      database.ref("/SmartHome").update({
        "Conditioner": 1
      });
    } else {
      // Tắt đèn
      database.ref("/SmartHome").update({
        "Conditioner": 0
      });
    }
  };
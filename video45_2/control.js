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
// Khai bao bien va lien ket the ben HTML
// Lấy phần tử switch và hình ảnh từ HTML
const switch01 = document.getElementById("sw01");
const light_01 = document.getElementById("light_01");
const switch02 = document.getElementById("sw02");
const light_02 = document.getElementById("light_02");
const switch03 = document.getElementById("sw03");
const light_03 = document.getElementById("light_03");
const switch04 = document.getElementById("sw04");
const light_04 = document.getElementById("light_04");
const switch05 = document.getElementById("sw05");
const light_05 = document.getElementById("light_05");
const switch06 = document.getElementById("sw06");
const light_06 = document.getElementById("light_06");

 //update temp and hum
 const hum = document.getElementById("hum");
 database.ref("/SmartHome/Hum").on("value",function(snapshot){
     let t = snapshot.val();
     hum.innerHTML = t;
 
     console.log(t);
 })
 
 const temp = document.getElementById("temp");
 database.ref("/SmartHome/Temp").on("value",function(snapshot){
     let t = snapshot.val();
     temp.innerHTML = t;
 
     console.log(t);
 })
 database.ref("/SmartHome/TV").on("value",function(snapshot){
    let t = snapshot.val();
    console.log(t);

    if(t==0){
        light_01.src = "../icon/red.png"
        switch01.checked = false;
      }
    else {
        light_01.src = "../icon/green.png"
        switch01.checked = true;
    }
})
database.ref("/SmartHome/Router").on("value",function(snapshot){
    let t = snapshot.val();
    console.log(t);

    if(t==0){
         light_02.src = "../icon/red.png"
        switch02.checked = false;}
    else {
        light_02.src = "../icon/green.png"
        switch02.checked = true;
    }
})
database.ref("/SmartHome/Conditioner").on("value",function(snapshot){
    let t = snapshot.val();
    console.log(t);

    if(t==0){
         light_03.src = "../icon/red.png"
        switch03.checked = false;}
    else {
        light_03.src = "../icon/green.png"
        switch03.checked = true;
    }
})
database.ref("/SmartHome/Speaker").on("value",function(snapshot){
    let t = snapshot.val();
    console.log(t);

    if(t==0){
         light_04.src = "../icon/red.png"
        switch04.checked = false;}
    else {
        light_04.src = "../icon/green.png"
        switch04.checked = true;
    }
})
database.ref("/SmartHome/Spotlights").on("value",function(snapshot){
    let t = snapshot.val();
    console.log(t);

    if(t==0){
         light_05.src = "../icon/red.png"
        switch05.checked = false;}
    else {
        light_05.src = "../icon/green.png"
        switch05.checked = true;
    }
})
database.ref("/SmartHome/Alarm").on("value",function(snapshot){
    let t = snapshot.val();
    console.log(t);

    if(t==0){
         light_06.src = "../icon/red.png"
        switch06.checked = false;}
    else {
        light_06.src = "../icon/green.png"
        switch06.checked = true;
    }
})
// Xử lý sự kiện khi người dùng bật/tắt switch
switch01.onchange = function () {
  if (switch01.checked) {
    // Bật đèn
    light_01.src = "../icon/green.png";
    database.ref("/SmartHome").update({
      "TV": 1
    });
  } else {
    // Tắt đèn
    light_01.src = "../icon/red.png";
    database.ref("/SmartHome").update({
      "TV": 0
    });
  }
};
switch02.onchange = function () {
    if (switch02.checked) {
      // Bật đèn
      light_02.src = "../icon/green.png";
      database.ref("/SmartHome").update({
        "Router": 1
      });
    } else {
      // Tắt đèn
      light_02.src = "../icon/red.png";
      database.ref("/SmartHome").update({
        "Router": 0
      });
    }
  };
  switch03.onchange = function () {
    if (switch03.checked) {
      // Bật đèn
      light_03.src = "../icon/green.png";
      database.ref("/SmartHome").update({
        "Conditioner": 1
      });
    } else {
      // Tắt đèn
      light_03.src = "../icon/red.png";
      database.ref("/SmartHome").update({
        "Conditioner": 0
      });
    }
  };
  switch04.onchange = function () {
    if (switch04.checked) {
      // Bật đèn
      light_04.src = "../icon/green.png";
      database.ref("/SmartHome").update({
        "Speaker": 1
      });
    } else {
      // Tắt đèn
      light_04.src = "../icon/red.png";
      database.ref("/SmartHome").update({
        "Speaker": 0
      });
    }
  };
  switch05.onchange = function () {
    if (switch05.checked) {
      // Bật đèn
      light_05.src = "../icon/green.png";
      database.ref("/SmartHome").update({
        "Spotlights": 1
      });
    } else {
      // Tắt đèn
      light_05.src = "../icon/red.png";
      database.ref("/SmartHome").update({
        "Spotlights": 0
      });
    }
  };
  switch06.onchange = function () {
    if (switch06.checked) {
      // Bật đèn
      light_06.src = "../icon/green.png";
      database.ref("/SmartHome").update({
        "Alarm": 1
      });
    } else {
      // Tắt đèn
      light_06.src = "../icon/red.png";
      database.ref("/SmartHome").update({
        "Alarm": 0
      });
    }
  };
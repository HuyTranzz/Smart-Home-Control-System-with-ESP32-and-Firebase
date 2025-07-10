#include <WiFi.h>
#include <FirebaseESP32.h>

// Thông tin WiFi
#define WIFI_SSID "Wi-MESH - HCMUTE"                                                       //(1/4)
#define WIFI_PASSWORD "hcmute@2024"                                              //(2/4)

// Thông tin Firebase
#define FIREBASE_HOST "https://ttiot-ht-default-rtdb.firebaseio.com/"          //(3/4)
#define FIREBASE_AUTH "C2h7TedjAfalNx5LjtEPXPQryG4b0uEC1Amt7A0j"                //(4/4)

// Chân GPIO của ESP32
int LED01 = 2;
int LED02 = 12;
int LED03 = 13;
int LED04 = 14;
int LED05 = 27;
int LED06 = 18;
int temp = 0;
int hum = 0;

unsigned long lastTempTime = 0;
unsigned long lastHumTime = 0;
const unsigned long tempInterval = 3000; // 3 giây
const unsigned long humInterval = 5000;  // 5 giây

// Khởi tạo Firebase
FirebaseData firebaseData;
FirebaseAuth auth;
FirebaseConfig config;
String path = "/";

void setup() {
  pinMode(LED01, OUTPUT); // Cài đặt chân LED là OUTPUT
  digitalWrite(LED01, LOW); // Tắt LED ban đầu
  pinMode(LED02, OUTPUT); // Cài đặt chân LED là OUTPUT
  digitalWrite(LED02, LOW); // Tắt LED ban đầu
  pinMode(LED03, OUTPUT); // Cài đặt chân LED là OUTPUT
  digitalWrite(LED03, LOW); // Tắt LED ban đầu
  pinMode(LED04, OUTPUT); // Cài đặt chân LED là OUTPUT
  digitalWrite(LED04, LOW); // Tắt LED ban đầu
  pinMode(LED05, OUTPUT); // Cài đặt chân LED là OUTPUT
  digitalWrite(LED05, LOW); // Tắt LED ban đầu
  pinMode(LED06, OUTPUT); // Cài đặt chân LED là OUTPUT
  digitalWrite(LED06, LOW); // Tắt LED ban đầu

  Serial.begin(115200); // Khởi tạo Serial Monitor với baud rate 115200
 
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD); // Kết nối WiFi
  // Chờ kết nối WiFi
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected.");

  // Cấu hình Firebase
  config.host = FIREBASE_HOST;
  config.signer.tokens.legacy_token = FIREBASE_AUTH;

  // Kết nối Firebase
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  // Tối ưu kết nối Firebase
  Firebase.setReadTimeout(firebaseData, 1000); // Sửa lại firebaseData
  Firebase.setwriteSizeLimit(firebaseData, "tiny"); // Sửa lại firebaseData
}

void loop() {
  unsigned long currentMillis = millis();

  // Gửi nhiệt độ mỗi 3 giây
  if (currentMillis - lastTempTime >= tempInterval) {
    lastTempTime = currentMillis;
    temp = random(20, 40); // Random nhiệt độ
    if (Firebase.setInt(firebaseData, "/SmartHome/Temp", temp)) {
      Serial.print("Temp is sent to Firebase: ");
      Serial.println(temp);
    } else {
      Serial.print("Failed to send Temp: ");
      Serial.println(firebaseData.errorReason());
    }
  }

  // Gửi độ ẩm mỗi 5 giây
  if (currentMillis - lastHumTime >= humInterval) {
    lastHumTime = currentMillis;
    hum = random(20, 40); // Random độ ẩm
    if (Firebase.setInt(firebaseData, "/SmartHome/Hum", hum)) { 
      Serial.print("Hum is sent to Firebase: ");
      Serial.println(hum);
    } else {
      Serial.print("Failed to send Hum: ");
      Serial.println(firebaseData.errorReason());
    }
  }

  // Nhận lệnh điều khiển đèn từ Firebase
  if (Firebase.getInt(firebaseData, "/SmartHome/TV")) {
    int L1 = firebaseData.intData();
    digitalWrite(LED01, L1 ? HIGH : LOW);
    Serial.println(L1 ? "TV is ON" : "TV is OFF");
  } else {
    Serial.print("Failed to get TV: ");
    Serial.println(firebaseData.errorReason());
  }

  if (Firebase.getInt(firebaseData, "/SmartHome/Router")) {
    int L2 = firebaseData.intData();
    digitalWrite(LED02, L2 ? HIGH : LOW);
    Serial.println(L2 ? "Router is ON" : "Router is OFF");
  } else {
    Serial.print("Failed to get Router: ");
    Serial.println(firebaseData.errorReason());
  }

  if (Firebase.getInt(firebaseData, "/SmartHome/Conditioner")) {
    int L3 = firebaseData.intData();
    digitalWrite(LED03, L3 ? HIGH : LOW);
    Serial.println(L3 ? "Conditioner is ON" : "Conditioner is OFF");
  } else {
    Serial.print("Failed to get Conditioner: ");
    Serial.println(firebaseData.errorReason());
  }

  if (Firebase.getInt(firebaseData, "/SmartHome/Speaker")) {
    int L4 = firebaseData.intData();
    digitalWrite(LED04, L4 ? HIGH : LOW);
    Serial.println(L4 ? "Speaker is ON" : "Speaker is OFF");
  } else {
    Serial.print("Failed to get Speaker: ");
    Serial.println(firebaseData.errorReason());
  }

   if (Firebase.getInt(firebaseData, "/SmartHome/Spotlights")) {
    int L5 = firebaseData.intData();
    digitalWrite(LED05, L5 ? HIGH : LOW);
    Serial.println(L5 ? "Spotlights is ON" : "Spotlights is OFF");
  } else {
    Serial.print("Failed to get Spotlights: ");
    Serial.println(firebaseData.errorReason());
  }

   if (Firebase.getInt(firebaseData, "/SmartHome/Alarm")) {
    int L6 = firebaseData.intData();
    digitalWrite(LED06, L6 ? HIGH : LOW);
    Serial.println(L6 ? "Alarm is ON" : "Alarm is OFF");
  } else {
    Serial.print("Failed to get Alarm: ");
    Serial.println(firebaseData.errorReason());
  }

  delay(1000); // delay nhỏ 1s để tránh spam quá nhanh Firebase
}

# 🏠 Mô tả dự án

Phát triển hệ thống điều khiển nhà thông minh với giao diện web thân thiện với người dùng, cho phép **giám sát và điều khiển các thiết bị gia dụng theo thời gian thực** như TV, điều hòa, đèn, loa, báo động, bộ định tuyến, v.v.

- 💻 Giao diện người dùng được xây dựng bằng **HTML/CSS/JavaScript** giao tiếp với **Firebase Realtime Database**, đóng vai trò trung gian giữa giao diện và vi điều khiển **ESP32**.
- 🌡️ **ESP32** thu thập dữ liệu môi trường (nhiệt độ và độ ẩm) thông qua cảm biến **DHT11** và cập nhật dữ liệu này lên Firebase.
- 🔁 Tín hiệu điều khiển từ giao diện web được gửi đến Firebase và **đồng bộ hóa với ESP32**, giúp bật/tắt các thiết bị tương ứng (biểu thị bằng đèn LED).

---

# 📸 Hình ảnh kết quả thực hiện

<p align="center">
  <img src="https://github.com/HuyTranzz/Smart-Home-Control-System-with-ESP32-and-Firebase/blob/master/anh.png?raw=true" alt="Giao diện hệ thống" width="500"/>
  <br/>
  <img src="https://github.com/HuyTranzz/Smart-Home-Control-System-with-ESP32-and-Firebase/blob/master/2.png?raw=true" alt="Ảnh 2" width="500"/>
  <br/>
  <img src="https://github.com/HuyTranzz/Smart-Home-Control-System-with-ESP32-and-Firebase/blob/master/3.png?raw=true" alt="Ảnh 3" width="500"/>
  <br/>
  <img src="https://github.com/HuyTranzz/Smart-Home-Control-System-with-ESP32-and-Firebase/blob/master/4.png?raw=true" alt="Ảnh 4" width="500"/>
  <br/>
  <img src="https://github.com/HuyTranzz/Smart-Home-Control-System-with-ESP32-and-Firebase/blob/master/5.jpg?raw=true" alt="Ảnh 5" width="500"/>
</p>




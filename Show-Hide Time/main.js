function showTime() {
  var date = new Date();
  var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  var time = hour + ":" + minute + ":" + second;

  document.getElementById("time").innerText = time;
  document.getElementById("showTimeBtn").innerText = "Saati yenile"
}

function hideTime() {
  document.getElementById("time").innerText = "";
  document.getElementById("showTimeBtn").innerText = "Saati göster"
}

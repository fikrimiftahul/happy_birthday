// Function untuk countdown menuju ulang tahun
function countdown() {
    var countDate = new Date("February 29, 2023 00:00:00").getTime();
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDate - now;
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("countdown").innerHTML = "Countdown menuju ulang tahunmu: " + days + " hari " + hours + " jam " + minutes + " menit " + seconds + " detik";
  
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Selamat Ulang Tahun!";
        document.getElementById("audio").play();
      }
    }, 1000);
  }
  
  // Event listener untuk mengatur animasi gambar dan teks pada saat scroll
  var count = 0;
  window.addEventListener("scroll", function() {
    var img = document.getElementsByTagName("img")[0];
    var p = document.getElementsByTagName("p")[count];
  
    if (window.scrollY > 50) {
      img.style.opacity = 1;
      p.classList.add("animate");
      count++;
    }
  });
  
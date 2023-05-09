function showAlert() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pesan = document.getElementById("pesan").value;

  if (name === "" || email === "" || pesan === "") {
    alert("Silakan isi data terlebih dahulu");
  } else {
    var message = "Nama Lengkap: " + name + "\nEmail: " + email + "\nPesan: " + pesan;
    alert(message);
  }
}

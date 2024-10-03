function register() {
   const username = document.getElementById('uname').value;
   const password = document.getElementById('pass').value;

   if (username === "" || password === "") {
      alert("Belum Diisi")
   } else if (username === "Budi" || username === "Iwan") {
      alert("Username Sudah Terdaftar")
   } else {
      alert("Registrasi Berhasil")
   }
}
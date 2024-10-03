function nilai() {
   const cekNilai = document.getElementById('nilai');

   if (cekNilai >= 80) {
      alert("A")
   } else if (cekNilai <= 80) {
      alert("B+")
   } else if (cekNilai <= 75) {
      alert("B")
   } else if (cekNilai <= 70) {
      alert("C+")
   }
}
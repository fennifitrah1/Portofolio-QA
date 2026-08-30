const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let dataUsia = [];

//Function untuk menentukan kategori usia dan jumlah per kategori
function hitungKategoriUsia(dataUsia) {
  let jumlahPerKategori = {
    "Anak-anak": 0,
    Remaja: 0,
    Dewasa: 0,
    Lansia: 0,
  };

  for (let i = 0; i < dataUsia.length; i++) {
    let usia = dataUsia[i];

    if (usia >= 0 && usia <= 12) {
      jumlahPerKategori["Anak-anak"]++;
    } else if (usia >= 13 && usia <= 17) {
      jumlahPerKategori["Remaja"]++;
    } else if (usia >= 18 && usia <= 59) {
      jumlahPerKategori["Dewasa"]++;
    } else {
      jumlahPerKategori["Lansia"]++;
    }
  }
  return jumlahPerKategori;
}

//Function untuk menampung data usia yang diinput
function inputDataUsia() {
  rl.question("Masukkan Data Usia:", (input) => {
    if (input.trim().toLowerCase() === "selesai") {
      rl.close;
      let hasilRekap = hitungKategoriUsia(dataUsia);

      console.log("--- Hasil Klasifikasi Usia ---");
      console.log(`Anak-anak: ${hasilRekap["Anak-anak"]} orang`);
      console.log(`Remaja: ${hasilRekap["Remaja"]} orang`);
      console.log(`Dewasa: ${hasilRekap["Dewasa"]} orang`);
      console.log(`Lansia: ${hasilRekap["Lansia"]} orang`);
    } else {
      let usia = Number(input);

      if (typeof usia === "number" && !Number.isNaN(usia) && usia >= 0) {
        dataUsia.push(usia);
      } else {
        console.log("Mohon masukkan data usia yang valid!");
      }
      inputDataUsia();
    }
  });
}

//Menjalankan Program
console.log("--- Program Klasifikasi Usia ---");
console.log("Masukkan data usia satu per satu (pisahkan dengan Enter).");
console.log("Ketik 'selesai' untuk melihat hasil");
inputDataUsia();

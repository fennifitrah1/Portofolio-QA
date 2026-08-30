const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Function untuk melakukan operasi matematika
function perhitungan(operator, a, b) {
  let namaOperasi = "";
  let hasil = 0;

  switch (operator) {
    case 1:
      namaOperasi = "Penjumlahan";
      hasil = a + b;
      break;
    case 2:
      namaOperasi = "Pengurangan";
      hasil = a - b;
      break;
    case 3:
      namaOperasi = "Perkalian";
      hasil = a * b;
      break;
    case 4:
      namaOperasi = "Pembagian";
      if (b !== 0) {
        hasil = a / b;
      } else {
        hasil = "Error: Pembagian dengan Nol";
      }
      break;
    default:
      namaOperasi = "Operasi yang dipiilih diketahui";
      hasil = "-";
  }

  return { nama: namaOperasi, nilai: hasil };
}
//Memilih Operasi dan Input Angka 1 dan Angka 2
function menu() {
  console.log("\n --- Kalkulator Sederhana ---");
  console.log("Pilih Operasi:");
  console.log("1. Penjumlahan");
  console.log("2. Pengurangan");
  console.log("3. Perkalian");
  console.log("4. Pembagian");

  rl.question("Masukkan pilihan operasi (1-4) :", (pilihanOperator) => {
    let operator = parseInt(pilihanOperator);

    switch (operator) {
      case 1:
      case 2:
      case 3:
      case 4:
        rl.question("Masukkan Angka ke-1: ", (angka1Input) => {
          let angka1 = parseFloat(angka1Input);

          rl.question("Masukkan Angka ke-2: ", (angka2Input) => {
            let angka2 = parseFloat(angka2Input);

            rl.close;

            let hasilPerhitungan = perhitungan(operator, angka1, angka2);

            console.log("\n--- Hasil Perhitungan ---");
            console.log(`Operasi:${hasilPerhitungan.nama}`);
            console.log(`Angka 1:${angka1}`);
            console.log(`Angka 2: ${angka2}`);
            console.log(`Hasil: ${hasilPerhitungan.nilai}`);
          });
        });
        break;
      default:
        console.log("\nPilihan tidak valid. Silakan coba lagi.");
        break;
    }
  });
}

//Menjalankan program
menu();

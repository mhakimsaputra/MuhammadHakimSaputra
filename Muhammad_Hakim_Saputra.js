const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Fungsi untuk menghitung luas segitiga
  function hitungLuasSegitiga() {
    readline.question('Masukkan nilai alas: ', (alas) => {
      readline.question('Masukkan nilai tinggi: ', (tinggi) => {
        const luasSegitiga = 0.5 * alas * tinggi;
        console.log(`Luas segitiga adalah: ${luasSegitiga}`);
        // Memanggil fungsi untuk menghitung luas persegi setelah selesai
        hitungLuasPersegi();
      });
    });
  }
  
  // Fungsi untuk menghitung luas persegi
  function hitungLuasPersegi() {
    readline.question('Masukkan panjang sisi persegi: ', (sisi) => {
      const luasPersegi = sisi * sisi;
      console.log(`Luas persegi adalah: ${luasPersegi}`);
      readline.close();
    });
  }
  
  // Memanggil fungsi untuk menghitung luas segitiga
  hitungLuasSegitiga();
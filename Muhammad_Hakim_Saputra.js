const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Masukkan nilai alas: ', (alas) => {
    readline.question('Masukkan nilai tinggi: ', (tinggi) => {
      const luas = 0.5 * alas * tinggi;
      console.log(`Luas segitiga adalah: ${luas}`);
      readline.close();
    });
  });
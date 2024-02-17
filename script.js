function guessingGame() { //ini adalah fungsi dasar yang berisi fungsi fungsi yang diperlukan
  const randomNo = Math.round(Math.random() * 10); //menghasilkan nomor acak dari 1 - 10 dan menyimpan didalam variable RandomNo
  let guess; //membuat deklarasi variabel dalam js bernama guess tanpa memberikan nilai awal
  let feedback; //membuat deklarasi variable dalam js bernama feeback tanpa memberikan nilai awal
  const message = document.querySelector('#feedback'); //mengamvil elemen html yang memiliki id feedback

  
  document.querySelector('.refresh').addEventListener('click', () => {
    history.go(0); //sebuah even listerner dengan nilai refresh, sehingga ketika tombol refres di tekan maka, halaman akan dimuat ulang
  });

  
  document.querySelector('#game').addEventListener('submit', (e) => { //berfungsi untuk menangani permintaan submit pada tombol
    e.preventDefault(); //yang memiliki id game
    guess = parseInt(document.getElementById('guess').value); 

    // ini adalah fungsi if untuk memberikan logika pada halaman
    if (guess < 11 && guess > 0) { //fungsi if yang memeriksa apakah tebakan berada direntang 1-10
      //fungsi yang akan terlaksana jika tebakan yg diberikan pengguna masuk dalam rentang 1-10
      if (randomNo > guess) {  //memeriksa apakah nomor random yg ditebak lebih besar daripada tebakan
        feedback = 'Tebakanmu terlalu rendah'; //jika ya, maka akan muncul pesan ini
        message.classList.remove('winner'); //menghapus elemen winner dari variabel yang disimpan dalam message
        message.classList.add('error'); //menambahkan kelas css ke elemen yang sama dengan sebelumnya 
      } else if (randomNo < guess) { //menebak apakah angka yang ditebak lebih kecil dari angka yang diberikan user
        feedback = 'Tebakanmu terlalu tinggi.'; //jika ya, maka akan muncul pesan ini
        message.classList.remove('winner');
        message.classList.add('error');
      } else { //memeriksa apakah, angka yang ditebak sama dengan angka yang diberikan oleh user
        feedback = 'Kamu berhasil'; //jika ya, maka akan muncul pesan berikut 
        message.classList.add('winner');
        message.classList.remove('error');
      }
    }
    // fungsi if ini akan menghandle jika angka yang diberikan oleh user tidak termasuk dalam rentang 1-10
    else if (guess > 10 || guess < 1) { //memeriksa apakah user memasukkan angka diluar rentang 1-10
      feedback = 'Tebak salah satu angka 1 - 10'; //jika ya, maka akan muncul pesan ini
      message.classList.add('error');
      message.classList.remove('winner');
    }
    // fungsi if untuk memeriksa apakah tebakan yang diberikan user bukanlah angka.
    else {
      feedback = 'Masukkan angka';  //jika bukan angka, maka akan muncul pesan berikut ini
      message.classList.remove('error');
      message.classList.remove('winner');
    }

    // menampilkan fee
    document.querySelector('#feedback').innerHTML = feedback;
  });
}

guessingGame(); //menjalankan fungsi

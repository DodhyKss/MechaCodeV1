content.innerHTML = `

<div class="materi-container">
    <div class="list-materi">
        <div class="judul-materi">
            <ul>
                <li><h5>Dart</h5></li>
                <li><a href="#/materi-1-dt">Pengantar Dart</a></li>
                <li><a href="#/materi-2-dt">Simulator Dart</a></li>
                <li><a href="#/materi-3-dt">Sintaks Dart</a></li>
                <li><a href="#/materi-4-dt">Variabel Dart</a></li>
                <li><a href="#/materi-5-dt">Tipe Data Dart</a></li>
                <li><a href="#/materi-6-dt" style="background-color:#AAD9BB">Input dan Output Dart</a></li>
                <li><a href="#/materi-7-dt">Operator</a></li>
                <li><a href="#/materi-8-dt">Percabangan Dart</a></li>
                <li><a href="#/materi-9-dt">Perulangan Dart</a></li>
                <li><a href="#/materi-10-dt">Fungsi</a></li>
                 
            </ul>
        </div>
    </div>
    <div class="materi">
        <div class="drawer">
            <button onclick="drawer()">></button>
        </div>
        <div class="materi-content">
        <h3>Input dan Output Dart</h3>

        <p>Kita sudah mengenal fungsi print() yang digunakan untuk menampilkan output ke dalam console.</p>
        <p>Selain menggunakan fungsi print(), kita juga dapat menggunakan fungsi stdout.write(). Fungsi ini berada di dalam library dart:io.</p>

        <p>Jadi untuk menggunakan fungsi stdout.write(), kita harus mengimpornya terlebih dahulu.</p>
        <h4>Caranya:</h4>
        <p>Pada bagian paling atas program, kita tulis import seperti ini:</p>
        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">io.cpp</span>
            </div>
            <div class="editor">
                <pre><code>
import 'dart:io';
                </code></pre>
            </div>
        </div>

        <p>Maka semua fungsi yang ada di dalam library dart:io akan dapat digunakan di dalam program.</p>
        <p>Library dart:io adalah library yang berisi fungsi-fungsi, konstanta, class, dan objek untuk melakukan operasi input dan output seperti:</p>

        <ul>
            <li><p>Baca tulis file;</p></li>
            <li><p>Baca tulis data dari jaringan;</p></li>
            <li><p>Baca input dari keyboard;</p></li>
            <li><p>Menampilkan output ke console;</p></li>
            <li><p>dll.</p></li>
        </ul>      

        <p>Nah, sekarang mari kita coba menggunakan library ini di dalam program Dart.</p>
        <p>Buat sebuah file baru bernama program_input.dart, lalu isi dengan kode berikut:</p>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">io.cpp</span>
            </div>
            <div class="editor">
                <pre><code>
import 'dart:io';

main() {
  stdout.write("Siapa kamu: ");
  var nama = stdin.readLineSync();
  print("Hello $nama!");
}
                </code></pre>
            </div>
        </div>
        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>


        <p>Perhatikanlah fungsi write() dan readLineSync().</p>
        <p>Fungsi write() digunakan untuk menampilkan teks ke console “apa adanya”. Artinya dia tidak akan membuat baris baru.</p>
        <p>Berbeda dengan print() yang akan selalu membuat baris baru di setiap mencetak teks.</p>
        <p>Lalu fungsi readLineSync() adalah fungsi untuk membaca input dari keyboard. Fungsi ini akan mengembalikan nilai berupa String.</p>



        <h4>Buatlah program menginput nama dan nilai mahasiswa dan cetak nama dan nilainya!</h4>
        <h4>Ayo Kerjakan</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>
        </div>
        </div>
    </div>
</div>


<div class="button-back">
    <div class="nav-kelas">
        <div class="back">
            <a class="back-btn" href="#/list-kelas"><img class="icon-back" src="/src/asset/favicon/back.png" alt=""></a>
            <h3>Bahasa Pemrograman Dart</h3>
        </div>
        <a class="nav-materi"  href="#/">Home</a>
        <a class="nav-materi" href="#/about">Kuis</a>
        <a class="nav-materi"  href="#/">Forum</a>
        <img class="logo" src="/src/asset/logo.png" alt="">
    </div>
</div>

<div class="button-next">
    <a class="next-btn1" href="#/materi-5-dt"><img class="icon-back" src="/src/asset/favicon/back.png" alt=""></a>
    <h4 class="judul-back">Tipe Data Dart</h4>

    <h4>Input dan Output Dart</h4> 
    
    <h4 class="judul-next">Operator</h4>
    <a class="next-btn2" href="#/materi-7-dt"><img class="icon-next" src="/src/asset/favicon/next.png" alt=""></a> 
</div>


`;
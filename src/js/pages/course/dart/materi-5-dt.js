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
                <li><a href="#/materi-5-dt" style="background-color:#AAD9BB">Tipe Data Dart</a></li>
                <li><a href="#/materi-6-dt">Input dan Output Dart</a></li>
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
        <h3>Tipe Data Dart</h3>        
        <div class="isi-materi">
        <iframe src="https://www.youtube.com/embed/7g5YvYtWGQM?si=V89gMEtYtr9cCth1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
        <p>Salah satu karakteristik paling mendasar dari bahasa pemrograman adalah kumpulan tipe data yang didukungnya. Ini adalah jenis nilai yang dapat direpresentasikan dan dimanipulasi dalam bahasa pemrograman.</p>
        <p>Bahasa Dart mendukung tipe berikut</p>

        <ul>
            <li><p>Numbers</p></li>
            <li><p>String</p></li>
            <li><p>Boolean</p></li>
            <li><p>List</p></li>
            <li><p>Map</p></li>
        </ul>

        <h3>Numbers</h3>
        <p>Numbers di Dart digunakan untuk merepresentasikan literal numerik. Number Dart hadir dalam dua tipe</p>

        <ul>
            <li><p>Integer - Nilai bilangan bulat mewakili nilai non-fraksional, yaitu nilai numerik tanpa titik desimal. Misalnya, nilai “10” adalah bilangan bulat. Literal bilangan bulat direpresentasikan menggunakan kata kunci int .</p></li>
            <li><p>Double - Dart juga mendukung nilai numerik pecahan, yaitu nilai dengan koma desimal. Tipe data Double di Dart mewakili angka floating-point 64-bit (presisi ganda). Misalnya nilai "10.10". Kata kunci double digunakan untuk mewakili literal floating point.</p></li>
        </ul>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">datatipe.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() {
  int bilanganBulat = 2;
  double angakaDesimal = 2.3;
  print(bilanganBulat);
  print(bilanganDesimal);
}
                </code></pre>
            </div>
        </div>

        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>

        <h3>String</h3>

        <p>String mewakili serangkaian karakter. Misalnya, jika Anda ingin menyimpan beberapa data seperti nama, alamat, dll., tipe data string harus digunakan. String Dart adalah rangkaian unit kode UTF-16. Rune digunakan untuk mewakili urutan unit kode UTF-32.</p>
        <p>Kata kunci String digunakan untuk merepresentasikan string literal. Nilai string disematkan dalam tanda kutip tunggal atau ganda.</p>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">datatipe.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() {
  String nama = "MechaCoders!"
  print(nama);
}
                </code></pre>
            </div>
        </div>

        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>

        <h3>Boolean</h3>
        <p>Tipe data Boolean mewakili nilai Boolean benar dan salah. Dart menggunakan kata kunci bool untuk mewakili nilai Boolean.</p>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">datatipe.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() {
  bool kerja = true;
  print(kerja);
}
                </code></pre>
            </div>
        </div>

        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>

        <h3>List dan Map</h3>
        <p>Tipe data list dan map digunakan untuk mewakili kumpulan objek. Daftar adalah sekelompok objek yang diurutkan. Tipe data Daftar di Dart identik dengan konsep array dalam bahasa pemrograman lain. Tipe data Peta mewakili sekumpulan nilai sebagai pasangan nilai kunci. Pustaka inti dart: memungkinkan pembuatan dan manipulasi koleksi ini masing-masing melalui kelas Daftar dan Peta yang telah ditentukan sebelumnya.</p>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">datatipe.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() {
  List numbers = [1, 2, 3, 4, 5];
  Map person = {
    'name': 'Alice',
    'age': 30,
   };
  print(numbers);
  print(person);
}
                </code></pre>
            </div>
        </div>

        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>


        <h3>Dynamic</h3>
        <p>Dart adalah bahasa yang diketik secara opsional. Jika tipe variabel tidak ditentukan secara eksplisit, tipe variabelnya adalah dinamis . Kata kunci dinamis juga dapat digunakan sebagai anotasi tipe secara eksplisit.</p>
        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">datatipe.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() {
    dynamic a = 10;
    print(a);
    a = "Mecha";
    print(a);
}
                </code></pre>
            </div>
        </div>

        <h4>Ayo Mulai Praktik</h4>
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
    <a class="next-btn1" href="#/materi-4-dt"><img class="icon-back" src="/src/asset/favicon/back.png" alt=""></a>
    <h4 class="judul-back">Variabel Dart</h4>

    <h4>Tipe Data Dart</h4> 
    
    <h4 class="judul-next">Input dan Output Dart</h4>
    <a class="next-btn2" href="#/materi-6-dt"><img class="icon-next" src="/src/asset/favicon/next.png" alt=""></a> 
</div>


`;
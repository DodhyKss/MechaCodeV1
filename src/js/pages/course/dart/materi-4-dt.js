content.innerHTML = `

<div class="materi-container">
    <div class="list-materi">
        <div class="judul-materi">
            <ul>
                <li><h5>Dart</h5></li>
                <li><a href="#/materi-1-dt">Pengantar Dart</a></li>
                <li><a href="#/materi-2-dt">Simulator Dart</a></li>
                <li><a href="#/materi-3-dt">Sintaks Dart</a></li>
                <li><a href="#/materi-4-dt" style="background-color:#AAD9BB">Variabel Dart</a></li>
                <li><a href="#/materi-5-dt">Tipe Data Dart</a></li>
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
        <h3>Variabel Dart</h3>
        
        <div class="isi-materi">
        <iframe src="https://www.youtube.com/embed/7g5YvYtWGQM?si=V89gMEtYtr9cCth1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
        <p>Variabel adalah “ruang bernama di memori” yang menyimpan nilai. Dengan kata lain, ini bertindak sebagai wadah untuk nilai-nilai dalam suatu program. Nama variabel disebut pengidentifikasi. Berikut adalah aturan penamaan untuk pengenal</p>

        <ul>
            <li><p>Pengidentifikasi tidak boleh berupa kata kunci.</p></li>
            <li><p>Pengidentifikasi dapat berisi huruf dan angka.</p></li>
            <li><p>Pengidentifikasi tidak boleh berisi spasi dan karakter khusus, kecuali garis bawah (_) dan tanda dolar ($).</p></li>
            <li><p>Nama variabel tidak boleh diawali dengan angka.</p></li>
        </ul>

        <h3>Ketik Sintaks</h3>
        <p>Suatu variabel harus dideklarasikan terlebih dahulu sebelum digunakan. Dart menggunakan kata kunci var untuk mencapai hal yang sama. Sintaks untuk mendeklarasikan variabel adalah seperti yang diberikan di bawah ini</p>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">variabel.dart</span>
            </div>
            <div class="editor">
                <pre><code>
var name = 'MechaCoders';
                </code></pre>
            </div>
        </div>

        <p>Semua variabel di dart menyimpan referensi ke nilai, bukan berisi nilai. Variabel yang disebut nama berisi referensi ke objek String dengan nilai “MechaCoders”.</p>

        <div class="image-materi">
        <img class="logo" src="/src/asset/materi4dt.JPG" alt="">
        </div>

        <p>Dart mendukung pemeriksaan tipe dengan mengawali nama variabel dengan tipe data. Pengecekan tipe memastikan bahwa variabel hanya menampung data spesifik untuk tipe data tertentu. Sintaksnya diberikan di bawah ini</p>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">variabel.dart</span>
            </div>
            <div class="editor">
                <pre><code>
String name = 'Dodhy'; 
int num = 10;
                </code></pre>
            </div>
        </div>

        <p>Perhatikan contoh berikut</p>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">variabel.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() { 

   String name = 1; 

}
                </code></pre>
            </div>
        </div>

        <p>Cuplikan di atas akan menghasilkan peringatan karena nilai yang diberikan ke variabel tidak cocok dengan tipe data variabel.</p>
        <h3>Keluaran</h3>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">output</span>
            </div>
            <div class="editor">
                <pre><code>
Warning: A value of type 'String' cannot be assigned to a variable of type 'int' 
                </code></pre>
            </div>
        </div>

        <p>Semua variabel yang tidak diinisialisasi memiliki nilai awal nol. Hal ini karena Dart menganggap semua nilai sebagai objek. Contoh berikut menggambarkan hal yang sama</p>


        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">variabel.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() { 
   int num; 
   print(num); 
}
                </code></pre>
            </div>
        </div>
        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>

        <h4>Keluaran</h4>
        <p>Null</p>

        <h3>Kata kunci dinamis</h3>
        <p>Variabel yang dideklarasikan tanpa tipe statis secara implisit dideklarasikan sebagai dinamis. Variabel juga dapat dideklarasikan menggunakan kata kunci dinamis sebagai pengganti kata kunci var.</p>
        <p>Contoh berikut menggambarkan hal yang sama.</p>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">variabel.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() { 
   dynamic x = "tom"; 
   print(x);  
}
                </code></pre>
            </div>
        </div>

        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>
        <h4>Keluaran</h4>
        <p>tom</p>

        <h3>Final dan Konstan</h3>
        <p>Kata kunci final dan const digunakan untuk mendeklarasikan konstanta. Dart mencegah modifikasi nilai variabel yang dideklarasikan menggunakan kata kunci final atau const. Kata kunci ini dapat digunakan bersama dengan tipe data variabel atau sebagai pengganti kata kunci var .</p>
        <p>Kata kunci const digunakan untuk mewakili konstanta waktu kompilasi. Variabel yang dideklarasikan menggunakan kata kunci const secara implisit bersifat final.</p>

        <h3>Sintaks: Kata Kunci akhir</h3>
        <p>final variable_name</p>
        <h4>atau</h4>
        <p>final data_type  variable_name</p>
        <h3>Sintaks: Kata Kunci const</h3>
        <p>const variable_name</p>
        <h4>atau</h4>
        <p>const data_type variable_name</p>

        <h3>Contoh Kata Kunci final</h3>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">variabel.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() { 
   final val1 = 12; 
   print(val1); 
}
                </code></pre>
            </div>
        </div>       
        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>
        
        <h3>Contoh – Kata Kunci const</h3>
        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">variabel.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() { 
   const pi = 3.14; 
   const area = pi*12*12; 
   print("The output is"); 
   print(area); 
}
                </code></pre>
            </div>
        </div> 
        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>
        <p>Contoh di atas mendeklarasikan dua konstanta, pi dan area , menggunakan kata kunci const . Nilai variabel area adalah konstanta waktu kompilasi.</p>
        <p>Note- Hanya variabel const yang dapat digunakan untuk menghitung konstanta waktu kompilasi. Konstanta waktu kompilasi adalah konstanta yang nilainya akan ditentukan pada waktu kompilasi</p>

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
    <a class="next-btn1" href="#/materi-3-dt"><img class="icon-back" src="/src/asset/favicon/back.png" alt=""></a>
    <h4 class="judul-back">Sintaks Dart</h4>

    <h4>Variabel Dart</h4> 
    
    <h4 class="judul-next">Tipe Data Dart</h4>
    <a class="next-btn2" href="#/materi-5-dt"><img class="icon-next" src="/src/asset/favicon/next.png" alt=""></a> 
</div>


`;
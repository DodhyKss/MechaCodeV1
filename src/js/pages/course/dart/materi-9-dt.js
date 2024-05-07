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
                <li><a href="#/materi-6-dt">Input dan Output Dart</a></li>
                <li><a href="#/materi-7-dt">Operator</a></li>
                <li><a href="#/materi-8-dt">Percabangan Dart</a></li>
                <li><a href="#/materi-9-dt" style="background-color:#AAD9BB">Perulangan Dart</a></li>
                <li><a href="#/materi-10-dt">Fungsi</a></li>
                  
            </ul>
        </div>
    </div>
    <div class="materi">
        <div class="drawer">
            <button onclick="drawer()">></button>
        </div>
        <div class="materi-content">
        <h3>Perulangan Dart</h3>
        
        <div class="isi-materi">
        <iframe src="https://www.youtube.com/embed/7g5YvYtWGQM?si=V89gMEtYtr9cCth1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
        <h3>For</h3>
        <p>Perulangan for merupakan implementasi dari perulangan pasti. Perulangan for mengeksekusi blok kode sebanyak beberapa kali. Ini dapat digunakan untuk melakukan iterasi pada sekumpulan nilai tetap, seperti array.</p>
        <p>Berikut adalah sintaks dari perulangan for.</p>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">for.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() {
    for (initial_count_value; termination-condition; step) { 
        //statements 
     }    
}
                </code></pre>
            </div>
        </div>

        <h4>Contoh</h4>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">for.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() { 
   var num = 5; 
   var factorial = 1; 
   
   for( var i = num ; i >= 1; i-- ) { 
      factorial *= i ; 
   } 
   print(factorial); 
}
                </code></pre>
            </div>
        </div>
        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>

        <p>Perulangan for memiliki tiga bagian: penginisialisasi (i=num), kondisi ( i>=1) dan ekspresi akhir (i--).</p>
        <p>Program menghitung faktorial dari angka 5 dan menampilkannya. Perulangan for menghasilkan urutan angka dari 5 hingga 1, menghitung produk angka di setiap iterasi.</p>
        <p>Beberapa tugas dan ekspresi akhir dapat digabungkan dalam perulangan for, dengan menggunakan operator koma (,). Misalnya, perulangan for berikut mencetak delapan angka Fibonacci pertama</p>

        <h4>Contoh</h4>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">for.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() { 
   for(var temp, i = 0, j = 1; j<30; temp = i, i = j, j = i + temp) { 
      print(j); 
   } 
}
                </code></pre>
            </div>
        </div>
        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>

        <h3>While</h3>
        <p>Perulangan while mengeksekusi instruksi setiap kali kondisi yang ditentukan bernilai benar. Dengan kata lain, loop mengevaluasi kondisi sebelum blok kode dieksekusi.</p>
        <p>Ilustrasi berikut menunjukkan diagram alur dari perulangan while</p>

        <div class="image-materi">
        <img class="logo" src="/src/asset/while-loop.JPG" alt="">
        </div>

        <p>Berikut adalah sintaks untuk perulangan while</p>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">while.dart</span>
            </div>
            <div class="editor">
                <pre><code>
while (expression) {
   Statement(s) to be executed if expression is true  
}
                </code></pre>
            </div>
        </div>

        <h4>Contoh</h4>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">while.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() { 
   var num = 5; 
   var factorial = 1; 
   
   while(num >=1) { 
      factorial = factorial * num; 
      num--; 
   } 
   print("The factorial  is");
   print(factorial); 
}  
                </code></pre>
            </div>
        </div>
        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>

        <p>Kode di atas menggunakan perulangan while untuk menghitung faktorial dari nilai variabel num.</p>

        <h3>Do While</h3>
        <p>Perulangan do… while mirip dengan perulangan while, hanya saja perulangan do… while tidak mengevaluasi kondisi saat perulangan pertama kali dijalankan. Namun kondisi tersebut dievaluasi untuk iterasi berikutnya. Dengan kata lain, blok kode akan dieksekusi setidaknya sekali dalam perulangan do… while</p>
        <p>Ilustrasi berikut menunjukkan diagram alur dari perulangan do… while</p>

        <div class="image-materi">
        <img class="logo" src="/src/asset/dowhile-loop.JPG" alt="">
        </div>

        <p>Berikut adalah sintaks perulangan do- while</p>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">dowhile.dart</span>
            </div>
            <div class="editor">
                <pre><code>
do {  
   Statement(s) to be executed;  
} while (expression); 
                </code></pre>
            </div>
        </div>


        <p>Note - Jangan lewatkan titik koma yang digunakan di akhir perulangan do... while</p>

        <h4>Contoh</h4>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">dowhile.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() { 
   var n = 10; 
   do { 
      print(n); 
      n--; 
   }
   while(n>=0); 
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
    <a class="next-btn1" href="#/materi-8-dt"><img class="icon-back" src="/src/asset/favicon/back.png" alt=""></a>
    <h4 class="judul-back">Percabangan Dart</h4>

    <h4>Perulangan Dart</h4> 
    
    <h4 class="judul-next">Fungsi</h4>
    <a class="next-btn2" href="#/materi-10-dt"><img class="icon-next" src="/src/asset/favicon/next.png" alt=""></a> 
</div>


`;
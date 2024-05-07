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
                <li><a href="#/materi-9-dt">Perulangan Dart</a></li>
                <li><a href="#/materi-10-dt" style="background-color:#AAD9BB">Fungsi</a></li>
                 
            </ul>
        </div>
    </div>
    <div class="materi">
        <div class="drawer">
            <button onclick="drawer()">></button>
        </div>
        <div class="materi-content">
        <h3>Fungsi</h3>
        
        <div class="isi-materi">
        <iframe src="https://www.youtube.com/embed/7g5YvYtWGQM?si=V89gMEtYtr9cCth1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        

        <p>Fungsi adalah blok penyusun kode yang dapat dibaca, dipelihara, dan digunakan kembali. Fungsi adalah sekumpulan pernyataan untuk melakukan tugas tertentu. Fungsi mengatur program ke dalam blok kode logis. Setelah ditentukan, fungsi dapat dipanggil untuk mengakses kode. Hal ini membuat kode dapat digunakan kembali. Selain itu, fungsinya memudahkan membaca dan memelihara kode program.</p>

        <p>Deklarasi fungsi memberi tahu kompiler tentang nama fungsi, tipe kembalian, dan parameter. Definisi fungsi memberikan isi sebenarnya dari fungsi tersebut.</p>

        <h4>Contoh Fungsi</h4>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">fungsi.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() { 

    void sayHello() {
        print('Hello!');
    }

    sayHello();

}   
                </code></pre>
            </div>
        </div>

        <div class="image-materi">
        <img class="logo" src="/src/asset/fungsi-1.JPG" alt="">
        </div>

        <h3>Parameter</h3>
        <p>Parameter opsional dapat digunakan ketika argumen tidak perlu diteruskan secara wajib untuk eksekusi suatu fungsi. Parameter dapat ditandai opsional dengan menambahkan tanda tanya pada namanya. Parameter opsional harus ditetapkan sebagai argumen terakhir dalam suatu fungsi.</p>
        <p>Kami memiliki tiga jenis parameter opsional di Dart</p>

        <div class="image-materi">
        <img class="logo" src="/src/asset/fungsi-2.JPG" alt="">
        </div>

        <h3>Fungsi Rekursif Dart</h3>

        <p>Rekursi adalah teknik untuk mengulangi suatu operasi dengan memanggil fungsi itu sendiri berulang kali hingga mendapatkan hasil. Rekursi paling baik diterapkan ketika Anda perlu memanggil fungsi yang sama berulang kali dengan parameter berbeda dari dalam satu loop.</p>


        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">fungsi.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() { 
   print(factorial(6));
}  
factorial(number) { 
   if (number <= 0) {         
      // termination case 
      return 1; 
   } else { 
      return (number * factorial(number - 1));    
      // function invokes itself 
   } 
}   
                </code></pre>
            </div>
        </div>
        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>
        

        <h3>Fungsi Lambda</h3>

        <p>Fungsi Lambda adalah mekanisme ringkas untuk merepresentasikan fungsi. Fungsi-fungsi ini juga disebut sebagai fungsi Panah.</p>

        <h4>Sintaksis</h4>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">fungsi.dart</span>
            </div>
            <div class="editor">
                <pre><code>
[return_type]function_name(parameters)=>expression;
                </code></pre>
            </div>
        </div>

        <h4>Contoh</h4>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">fungsi.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() { 
   printMsg(); 
   print(test()); 
}  
printMsg()=>
print("hello"); 

int test()=>123;                       
// returning function
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
    <a class="next-btn1" href="#/materi-9-dt"><img class="icon-back" src="/src/asset/favicon/back.png" alt=""></a>
    <h4 class="judul-back">Perulangan Dart</h4>

    <h4>Fungsi</h4> 
    
    <h4 class="judul-next">Pengantar Dart</h4>
    <a class="next-btn2" href="#/materi-1-dt"><img class="icon-next" src="/src/asset/favicon/next.png" alt=""></a> 
</div>


`;
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
                <li><a href="#/materi-8-dt" style="background-color:#AAD9BB">Percabangan Dart</a></li>
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
        <h3>Percabangan Dart</h3>
     
        <div class="isi-materi">
        <iframe src="https://www.youtube.com/embed/7g5YvYtWGQM?si=V89gMEtYtr9cCth1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
        <p>Struktur percabangan pada bahasa pemrograman Dart, sama seperti pada C++, C#, Java, dan Javascript.</p>
        <p>Ada lima macam bentuk percabangan pada Dart:</p>
        <ul>
            <li><p>Percabangan If;</p></li>
            <li><p>ercabangan If/Else;</p></li>
            <li><p>Percabangan If/Else If/Else;</p></li>
            <li><p>percabangan Switch/Case;</p></li>
            <li><p>Percabangan dengan Operator Ternary.</p></li>
        </ul>

        <p>Mari kita coba:</p>

        <h3>1. Percabangan If</h3>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">diskon.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() {
  int totalBelanja = 10000;
  if(totalBelanja >= 10000){
    print("selamat anda mendapatkan diskon");
  }
}
                </code></pre>
            </div>
        </div>

        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>

        <p>program di atas merupakan program untuk mencari apakah pembeli mendapatkan diskon atau tidak, ketika pembeli membeli total belanja diatas 10000 atau sama dengan 10000 maka pembeli mendapatkan diskon</p>

        <h3>2. Percabangan If/Else</h3>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">login.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() {
  String user = "Mecha";
  String password = "123456";
  
  if(user == "Mecha" && password == "123456"){
    print("Selamat datang");
    print(user);
  }
}
                </code></pre>
            </div>
        </div>

        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>

        <h3>3. Percabangan If/Else If/Else</h3>

        <p>Percabangan IF/ELSE IF/ELSE: program_grade.dart</p>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">grade.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() {
  int nilai = 90;
  
  if(nilai > 90){
    print("Nilai Sempurna");
  }else if (nilai < 70){
    print("Nilai rata-rata");
  }else {
    print("Tidak Lulus");
  }
}
                </code></pre>
            </div>
        </div>

        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>

        <h3>4. Percabangan Switch/Case</h3>
        
        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">grade.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() {
  int nilai = 90;
  
  switch(nilai){
    case 90:
      print("Nilai Sempurna");
      break;
    case 70:
      print("Nilai Rata-rata");
      break;
    case 60:
      print("Tidak Lulus");
      break;
  }
}
                </code></pre>
            </div>
        </div>

        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>

        <h3>Operator ternary</h3>
        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">ternary.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() {
  String jawab = 'y';
  var hasil = (jawab == 'y') ? "menikah" : "jomblo lagi";
  print(hasil);
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
    <a class="next-btn1" href="#/materi-7-dt"><img class="icon-back" src="/src/asset/favicon/back.png" alt=""></a>
    <h4 class="judul-back">Operator</h4>

    <h4>Percabangan Dart</h4> 
    
    <h4 class="judul-next">Perulangan Dart</h4>
    <a class="next-btn2" href="#/materi-9-dt"><img class="icon-next" src="/src/asset/favicon/next.png" alt=""></a> 
</div>


`;
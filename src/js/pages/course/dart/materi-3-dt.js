content.innerHTML = `

<div class="materi-container">
    <div class="list-materi">
        <div class="judul-materi">
            <ul>
                <li><h5>Dart</h5></li>
                <li><a href="#/materi-1-dt">Pengantar Dart</a></li>
                <li><a href="#/materi-2-dt">Simulator Dart</a></li>
                <li><a href="#/materi-3-dt" style="background-color:#AAD9BB">Sintaks Dart</a></li>
                <li><a href="#/materi-4-dt">Variabel Dart</a></li>
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
        <h3>Sintaks Dasar Dart</h3>
        
        <div class="isi-materi">
        <iframe src="https://www.youtube.com/embed/7g5YvYtWGQM?si=V89gMEtYtr9cCth1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
        <p>Dart memiliki sintak yang mirip seperti C++, C#, Java, dan Javascript. Karena Dart menggunakan standar ECMA-408.</p>

        <p>Jadi, buat kamu yang sudah pernah belajar bahasa C++, C#, Java, dan javascript sebelumnya, saya yakin akan cepat memahami tutorial ini.</p>

        <h4>Sekarang coba perhatikan Contoh program di bawah ini:</h4>

        <div class="editor-container">
            <div class="editor-header">
                <span class="filename">sintaks.dart</span>
            </div>
            <div class="editor">
                <pre><code>
void main() {

  print('Hello MechaCoders!');

}
                </code></pre>
            </div>
        </div>

        <h4>Ayo Mulai Praktik</h4>
        <button><a href="https://dartpad.dev/" target="_blank">Mulai Praktik</a></button>

        <p>Mudah sekali bukan?.</p>
        <h4>Selanjutnya buatlah program yang mencetak nama kamu sendiri!</h4>

        <h4>Ayo Kerjakan!</h4>
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
    <a class="next-btn1" href="#/materi-2-dt"><img class="icon-back" src="/src/asset/favicon/back.png" alt=""></a>
    <h4 class="judul-back">Simulator Dart</h4>

    <h4>Sintaks Dart</h4> 
    
    <h4 class="judul-next">Variabel Dart</h4>
    <a class="next-btn2" href="#/materi-4-dt"><img class="icon-next" src="/src/asset/favicon/next.png" alt=""></a> 
</div>


`;
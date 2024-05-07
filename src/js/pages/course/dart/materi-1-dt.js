content.innerHTML = `

<div class="materi-container">
    <div class="list-materi">
        <div class="judul-materi">
            <ul>
                <li><h5>Dart</h5></li>
                <li><a href="#/materi-1-dt" style="background-color:#AAD9BB">Pengantar Dart</a></li>
                <li><a href="#/materi-2-dt">Simulator Dart</a></li>
                <li><a href="#/materi-3-dt">Sintaks Dart</a></li>
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
        <h3>Pengantar Bahasa Pemrograman Dart</h3>
        <div class="isi-materi">
        <iframe src="https://www.youtube.com/embed/7g5YvYtWGQM?si=V89gMEtYtr9cCth1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h3>Apa itu Dart?</h3>
        

        
        <p>Dart adalah bahasa pemrograman yang dikembangkan oleh Google untuk kebutuhan umum (general-purpose programming language).</p>
        <p>Ia bisa digunakan untuk membuat aplikasi android, front-end web, IoT, backend (CLI), dan Game.</P>
        <p>Contoh beberapa aplikasi yang dibangun dengan Dart:</P>

        <ul>
            <li><p>Google Adsense (front-end)</p></li>
            <li><p>Google AdWords (front-end)</p></li>
            <li><p>Google Fiber (front-end)</p></li>
            <li><p>Hamilton (Android dan iOS)</p></li>
            <li><p>dll.</p></li>
        </ul>

        <h4>Platform Dart</h4>
        <p>Dart dapat digunakan pada tiga platform ini:</p>
        
        <div class="image-materi">
        <img class="logo" src="/src/asset/dartplatform.JPG" alt="">
        </div>

        <h3>1. Flutter</h3>
        <p>Apabila kita ingin membuat aplikasi Android dan iOS dengan bahasa pemrograman Dart, maka kita harus menggunakan framework Flutter. Flutter adalah sebuah framework yang dirancang khusus untuk membangun antarmuka (UI) aplikasi mobile.</p>

        <h3>2. Web</h3>
        <p>Penggunaan Dart pada web biasanya dalam bentuk front-end. Kode program Dart dapat dikompilasi (transpile) menjadi kode Javascript, sehingga web browser dapat mengeksekusinya.</p>
        <p>Biasanya, pengembangan web dengan Dart menggunakan framework:</p>
        
        <ul>
            <li><p>AngularDart</p></li>
            <li><p>Material Design Lite (MDL)/Dart</p></li>
            <li><p>OverReact</p></li>
        </ul>

        <h3>3. Server</h3>
        <p>Dart dapat juga digunakan pada server untuk membuat program berbasis teks (CLI), program IoT, backend, dll.</p>
        <p>Beberapa framework yang bisa digunakan untuk mengembangkan backend:</p>

        <ul>
            <li><p>Jaguar</p></li>
            <li><p>Angel</p></li>
            <li><p>Aqueduct</p></li>
            <li><p>Express</p></li>
        </ul>

        <h4>Tools untuk Belajar Dart</h4>
        <p>Ada dua peralatan yang harus disiapkan untuk mengikuti tutorial ini:</p>

        <ul>
            <li><p>Teks Editor VS Code + Ekstensi Dart</li>
            <li><p>Dart SDK (berisi library, compiler, transpiler, dll. yang dibutuhkan untuk coding Dart).</p></li>
        </ul>

        <p>Selain menggunakan dua peralatan tersebut, kita juga dapat menggunakan Dartpad untuk mencoba kode program dart.</p>





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
    <a class="next-btn1" href="#/materi-10-dt"><img class="icon-back" src="/src/asset/favicon/back.png" alt=""></a>
    <h4 class="judul-back">Fungsi</h4>

    <h4>Pengantar Dart</h4> 
    
    <h4 class="judul-next">Simulator Dart</h4>
    <a class="next-btn2" href="#/materi-2-dt"><img class="icon-next" src="/src/asset/favicon/next.png" alt=""></a> 
</div>


`;
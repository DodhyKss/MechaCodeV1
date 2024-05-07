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
                <li><a href="#/materi-7-dt" style="background-color:#AAD9BB">Operator</a></li>
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
        <h3>Operator</h3>
        
        <div class="isi-materi">
        <iframe src="https://www.youtube.com/embed/7g5YvYtWGQM?si=V89gMEtYtr9cCth1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
        <p>Ekspresi adalah jenis pernyataan khusus yang mengevaluasi suatu nilai. Setiap ekspresi terdiri dari</p>

        <ul>
            <li><p>Operands- Mewakili data</p></li>
            <li><p>Operator - Mendefinisikan bagaimana operan akan diproses untuk menghasilkan suatu nilai.</p></li>
        </ul>

        <p>Perhatikan ekspresi berikut – "2 + 3". Dalam ekspresi ini, 2 dan 3 adalah operan dan simbol "+" (plus) adalah operatornya .</p>
        <p>Pada bab ini, kita akan membahas operator yang tersedia di Dart.</p>

        <ul>
            <li><p>Operator Aritmatika</p></li>
            <li><p>Operator Kesetaraan dan Relasional</p></li>
            <li><p>Ketik operator tes</p></li>
            <li><p>Operator Bitwise</p></li>
            <li><p>Operator Penugasan</p></li>
            <li><p>Operator Logis</p></li>
        </ul>

        <h3>Operator Aritmatika</h3>
        <p>Tabel berikut menunjukkan operator aritmatika yang didukung oleh Dart.</p>

        <div class="image-materi">
        <img class="logo" src="/src/asset/operator-aritmatika.JPG" alt="">
        </div>

        <h3>Test Operators</h3>
        <p>Operator ini berguna untuk memeriksa tipe saat runtime.</p>
        <div class="image-materi">
        <img class="logo" src="/src/asset/operator-tes.JPG" alt="">
        </div>

        <h3>Operator Bitwise</h3>
        <p>Tabel berikut mencantumkan operator bitwise yang tersedia di Dart dan perannya</p>

        <div class="image-materi">
        <img class="logo" src="/src/asset/operator-bitwise.JPG" alt="">
        </div>

        <h3>Assignment Operators</h3>
        <p>Tabel berikut mencantumkan operator penugasan yang tersedia di Dart.</p>

        <div class="image-materi">
        <img class="logo" src="/src/asset/operator-penugasan.JPG" alt="">
        </div>

        <p>Note- Logika yang sama berlaku untuk operator Bitwise, sehingga menjadi ≪=, ≫=, ≫=, ≫=, |= dan ^=.</p>

        <h3>Logic Operator</h3>
        <p>Operator logika digunakan untuk menggabungkan dua kondisi atau lebih. Operator logika mengembalikan nilai Boolean. Asumsikan nilai variabel A adalah 10 dan B adalah 20.</p>

        <div class="image-materi">
        <img class="logo" src="/src/asset/operator-logika.JPG" alt="">
        </div>

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
    <a class="next-btn1" href="#/materi-6-dt"><img class="icon-back" src="/src/asset/favicon/back.png" alt=""></a>
    <h4 class="judul-back">Input dan Output Dart</h4>

    <h4>Operator</h4> 
    
    <h4 class="judul-next">Percabangan Dart</h4>
    <a class="next-btn2" href="#/materi-8-dt"><img class="icon-next" src="/src/asset/favicon/next.png" alt=""></a> 
</div>


`;
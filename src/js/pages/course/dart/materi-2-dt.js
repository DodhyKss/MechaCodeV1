content.innerHTML = `

<div class="materi-container">
    <div class="list-materi">
        <div class="judul-materi">
            <ul>
                <li><h5>Dart</h5></li>
                <li><a href="#/materi-1-dt" >Pengantar Dart</a></li>
                <li><a href="#/materi-2-dt" style="background-color:#AAD9BB">Simulator Dart</a></li>
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
        <h3>Simulator Dart</h3>

        <div class="isi-materi">
        <iframe src="https://www.youtube.com/embed/7g5YvYtWGQM?si=V89gMEtYtr9cCth1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <p>DartPad adalah editor kode online yang disediakan oleh Google dan dioptimalkan untuk
        bahasa pemrograman Dart. Ini adalah alat web yang memungkinkan pengguna untuk
        menulis, mengedit, dan menjalankan kode Dart langsung dari browser web tanpa perlu
        menginstal atau mengonfigurasi apa pun secara lokal.</p>
        <p>Beberapa fitur utama dari DartPad termasuk:</p>

        <ul>
            <li><p>Pengeditan Kode Dart: Pengguna dapat menulis dan mengedit kode Dart secara
            langsung di antarmuka web DartPad.</p></li>
            <li><p>Eksekusi Kode Langsung: DartPad memberikan kemampuan untuk menjalankan
            kode Dart yang ditulis oleh pengguna dan melihat hasilnya secara langsung di sebelah
            hasil.</p></li>
            <li><p>Output Interaktif: Hasil dari kode yang dijalankan, termasuk output dan pesan
            kesalahan, ditampilkan dalam area output yang interaktif.</p></li>
            <li><p>Perbagian Area Kerja: Antarmuka pengguna yang jelas memisahkan kode Dart,
            hasil, dan pesan kesalahan untuk memudahkan pemahaman dan debug</p></li>
            <li><p>Libraries dan Packages: Pengguna dapat mengimpor dan menggunakan berbagai
            pustaka dan paket Dart yang telah ada dalam DartPad.</p></li>
        </ul>

        <p>DartPad sangat berguna untuk belajar dan mencoba Dart tanpa harus menginstal SDK atau
        alat pengembangan lokal. Ini juga membantu dalam demonstrasi kode, pengujian
        algoritma, eksperimen, atau kolaborasi dengan rekan-rekan pengembang secara real-time.</p>

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
    <a class="next-btn1" href="#/materi-1-dt"><img class="icon-back" src="/src/asset/favicon/back.png" alt=""></a>
    <h4 class="judul-back">Pengantar Dart</h4>

    <h4>Simulator Dart</h4> 
    
    <h4 class="judul-next">Sintaks Dart</h4>
    <a class="next-btn2" href="#/materi-3-dt"><img class="icon-next" src="/src/asset/favicon/next.png" alt=""></a> 
</div>


`;
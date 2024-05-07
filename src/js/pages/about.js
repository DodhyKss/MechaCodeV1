content.innerHTML = `<h2 id="kuis-head"> Kuis </h2>

<div class="kuis-soal">

    <div class="soal">
        <p class="soal-txt">1. Berikut Sintak yang benar untuk menghasilkan output ‘Hello World’ di C++ ?</p>
        <ul>
            <li class="jawaban-txt">A. cout<<“Hello World”;</li>
            <li class="jawaban-txt">B. print<<“Hello World”;</li>
            <li class="jawaban-txt">C. echo “Hello World”;</li>
        </ul>
    </div>

    <div class="jawaban">
        <button onclick="buttonA()">A</button>
        <button onclick="buttonB()">B</button>
        <button onclick="buttonC()">C</button>
        <button class="finish-button" onclick="cekJawaban()">Selesai</button>
    </div>

</div>

<div class="kuis-menu">

    <p>Selamat datang di menu kuis mechacode! Siap untuk menguji pengetahuan dan keterampilan pemrograman Anda? Pilihlah bahasa pemrograman Dart, dan hadapi tantangan kuisnya. Jawablah pertanyaan dengan tepat untuk meraih skor tertinggi dan tunjukkan seberapa mahir Anda dalam dunia pemrograman. Apakah Anda siap untuk menaklukkan tantangan? Ayo mulai!</p>
    <div class="jawaban">
        <button onclick="mulaiKuisCpp()">Mulai Kuis Dart</button>
    </div>

</div>


<div class="kuis-hasil">

    <h2 class="ket-skor">Puncak Prestasi, Skor Kamu!</h2>

    <h2 class="skor">80</h2>

    <div class="jawaban">
       
        <button onclick="backToMenu()">Kembali</button>
    </div>

</div>


`;
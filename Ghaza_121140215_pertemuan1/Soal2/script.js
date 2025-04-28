function prosesOperasi(nilai1, nilai2, jenisOperasi) {
    switch (jenisOperasi) {
        case "tambah": return nilai1 + nilai2;
        case "kurang": return nilai1 - nilai2;
        case "kali": return nilai1 * nilai2;
        case "bagi": return nilai2 === 0 ? "Error: Tidak bisa bagi nol" : nilai1 / nilai2;
        case "pangkat": return Math.pow(nilai1, nilai2);
        case "akar": return nilai1 < 0 ? "Error: Akar dari bilangan negatif" : Math.sqrt(nilai1);
        case "modulus": return nilai1 % nilai2;
        default: return "Operasi tidak ditemukan";
    }
}

function jalankanOperasi(aksi, simbol) {
    const nilaiPertama = parseFloat(document.getElementById("nilai-pertama").value);
    const nilaiKedua = parseFloat(document.getElementById("nilai-kedua").value);
    let hasilAkhir;

    const output = document.getElementById("output");

    if (isNaN(nilaiPertama)) {
        output.innerHTML = `<span class="text-red-600">Masukkan angka pertama dengan benar!</span>`;
        return;
    }

    if (aksi === "akar") {
        hasilAkhir = prosesOperasi(nilaiPertama, null, aksi);
        output.innerHTML = `Hasil: ${simbol}${nilaiPertama} = ${hasilAkhir}`;
    } else {
        if (isNaN(nilaiKedua)) {
            output.innerHTML = `<span class="text-red-600">Masukkan angka kedua dengan benar!</span>`;
            return;
        }
        hasilAkhir = prosesOperasi(nilaiPertama, nilaiKedua, aksi);
        output.innerHTML = `Hasil: ${nilaiPertama} ${simbol} ${nilaiKedua} = ${hasilAkhir}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("tambah").addEventListener("click", () => jalankanOperasi("tambah", "+"));
    document.getElementById("kurang").addEventListener("click", () => jalankanOperasi("kurang", "-"));
    document.getElementById("kali").addEventListener("click", () => jalankanOperasi("kali", "×"));
    document.getElementById("bagi").addEventListener("click", () => jalankanOperasi("bagi", "÷"));
    document.getElementById("pangkat").addEventListener("click", () => jalankanOperasi("pangkat", "^"));
    document.getElementById("akar").addEventListener("click", () => jalankanOperasi("akar", "√"));
    document.getElementById("modulus").addEventListener("click", () => jalankanOperasi("modulus", "%"));

    document.getElementById("reset").addEventListener("click", () => {
        document.getElementById("nilai-pertama").value = "";
        document.getElementById("nilai-kedua").value = "";
        document.getElementById("output").innerHTML = "";
    });
});

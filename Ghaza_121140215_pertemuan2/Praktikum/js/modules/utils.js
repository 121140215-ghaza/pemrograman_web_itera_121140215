// Fungsi utilitas

// Format tanggal ke dalam string lokal
export function formatTanggal(tanggal) {
    return new Date(tanggal).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Kapitalisasi huruf pertama setiap kata
export function kapitalisasiString(str) {
    return str
        .split(' ')
        .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase())
        .join(' ');
}

// Menghitung selisih tahun antara dua tanggal
export function hitungTahun(tanggalMulai, tanggalSelesai = new Date()) {
    const mulai = new Date(tanggalMulai);
    const selesai = new Date(tanggalSelesai);
    const selisihTahun = selesai.getFullYear() - mulai.getFullYear();
    
    // Menyesuaikan dengan bulan dan hari
    if (
        selesai.getMonth() < mulai.getMonth() ||
        (selesai.getMonth() === mulai.getMonth() && selesai.getDate() < mulai.getDate())
    ) {
        return selisihTahun - 1;
    }
    
    return selisihTahun;
}

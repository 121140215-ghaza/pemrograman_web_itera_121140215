class ListKegiatan {
    constructor() {
        this.dataKegiatan = JSON.parse(localStorage.getItem("data-kegiatan")) || [];
        this.tampilkanKegiatan();
    }

    tambahKegiatan(teks) {
        if (!teks.trim()) return;
        this.dataKegiatan.push({ isi: teks, selesai: false });
        this.simpanData();
    }

    ubahStatus(posisi) {
        this.dataKegiatan[posisi].selesai = !this.dataKegiatan[posisi].selesai;
        this.simpanData();
    }

    hapusKegiatan(posisi) {
        this.dataKegiatan.splice(posisi, 1);
        this.simpanData();
    }

    simpanData() {
        localStorage.setItem("data-kegiatan", JSON.stringify(this.dataKegiatan));
        this.tampilkanKegiatan();
    }

    tampilkanKegiatan() {
        const wadahList = document.getElementById("daftar-kegiatan");
        wadahList.innerHTML = "";

        this.dataKegiatan.forEach((item, i) => {
            const elemenLi = document.createElement("li");
            elemenLi.className = "flex justify-between items-center bg-slate-200 px-4 py-2 rounded-md";

            elemenLi.innerHTML = `
                <div class="flex items-center gap-2">
                    <input type="checkbox" id="kegiatan-${i}" ${item.selesai ? "checked" : ""}
                        class="accent-green-500 cursor-pointer"
                        onchange="aplikasi.ubahStatus(${i})">
                    <label for="kegiatan-${i}" class="text-base ${item.selesai ? 'line-through text-gray-500' : ''}">
                        ${item.isi}
                    </label>
                </div>
                <button onclick="aplikasi.hapusKegiatan(${i})" 
                    class="text-red-600 hover:text-red-800 text-lg">
                    Hapus
                </button>
            `;

            wadahList.appendChild(elemenLi);
        });
    }
}

// Inisialisasi aplikasi
const aplikasi = new ListKegiatan();

// Event untuk menangani form submit
document.getElementById("form-kegiatan").addEventListener("submit", function(e) {
    e.preventDefault();
    const input = document.getElementById("input-kegiatan");
    aplikasi.tambahKegiatan(input.value);
    input.value = "";
});

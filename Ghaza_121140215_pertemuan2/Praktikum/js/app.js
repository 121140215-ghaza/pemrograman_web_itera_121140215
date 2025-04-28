// Kode Demo JavaScript Next Gen

// ----------------------------
// Let dan Const
// ----------------------------
export function demoVariabel() {
    // Menggunakan var (cara lama)
    var variabelLama = "Variabel lama";
    {
        var variabelLama = "Diubah dalam blok";
    }
    
    // Menggunakan let (ES6)
    let variabelLet = "Variabel let baru";
    {
        let variabelLet = "Variabel berbeda dalam blok";
        console.log("variabelLet dalam blok:", variabelLet);
    }
    
    // Menggunakan const (ES6)
    const PHI = 3.14159;
    const pengguna = { nama: "John", usia: 30 };
    // PHI = 3.15; // Error! Tidak bisa mengubah nilai const
    pengguna.age = 31; // Ini valid! Konten objek const dapat diubah
    
    return {
        variabelLama,
        variabelLet,
        PHI,
        pengguna
    };
}

// ----------------------------
// Fungsi Panah
// ----------------------------
export function demoFungsiPanah() {
    // Fungsi reguler
    function jumlahReguler(a, b) {
        return a + b;
    }
    
    // Fungsi panah dasar
    const jumlahPanah = (a, b) => {
        return a + b;
    };
    
    // Fungsi panah dengan return implisit
    const jumlahPanahPendek = (a, b) => a + b;
    
    // Fungsi panah tanpa parameter
    const sapaHalo = () => "Halo Dunia!";
    
    // Fungsi panah dengan satu parameter (kurung opsional)
    const kuadrat = x => x * x;
    
    return {
        jumlahReguler: jumlahReguler(5, 3),
        jumlahPanah: jumlahPanah(5, 3),
        jumlahPanahPendek: jumlahPanahPendek(5, 3),
        sapaHalo: sapaHalo(),
        kuadrat: kuadrat(4)
    };
}

// ----------------------------
// Template Literals
// ----------------------------
export function demoTemplateLiteral() {
    const nama = "John";
    const usia = 30;
    
    // Penggabungan string cara lama
    const caraLama = "Nama saya " + nama + " dan umur saya " + usia + " tahun.";
    
    // Template literals (ES6)
    const caraBaru = `Nama saya ${nama} dan umur saya ${usia} tahun.`;
    
    // Template literals multi-baris
    const multiBaris = `
    Ini adalah string multi-baris.
    Sangat berguna untuk template HTML.
    Nama: ${nama}
    Umur: ${usia}
    `;
    
    // Template literals dengan ekspresi
    const ekspresi = `Tahun lahir: ${new Date().getFullYear() - usia}`;
    
    return {
        caraLama,
        caraBaru,
        multiBaris,
        ekspresi
    };
}

// ----------------------------
// Destructuring
// ----------------------------
export function demoDestructuring() {
    // Object destructuring
    const orang = {
        namaDepan: "John",
        namaBelakang: "Doe",
        usia: 30,
        email: "john@example.com",
        alamat: {
            kota: "Jakarta",
            kodePos: "12345"
        }
    };
    
    // Destructuring dasar
    const { namaDepan, namaBelakang } = orang;
    
    // Destructuring dengan nama variabel baru
    const { namaDepan: depan, namaBelakang: belakang } = orang;
    
    // Destructuring dengan nilai default
    const { hobi = "coding" } = orang;
    
    // Nested destructuring
    const { alamat: { kota, kodePos } } = orang;
    
    // Array destructuring
    const warna = ["merah", "hijau", "biru", "kuning", "ungu"];
    
    // Destructuring array dasar
    const [warnaPertama, warnaKedua] = warna;
    
    // Melewati elemen
    const [, , warnaKetiga] = warna;
    
    // Rest pattern dalam array destructuring
    const [utama, sekunder, ...warnaSisa] = warna;
    
    // Menukar variabel menggunakan destructuring
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    
    return {
        objectBasic: { namaDepan, namaBelakang },
        objectRenamed: { depan, belakang },
        objectDefault: hobi,
        objectNested: { kota, kodePos },
        arrayBasic: { warnaPertama, warnaKedua },
        arraySkipped: warnaKetiga,
        arrayRest: { utama, sekunder, warnaSisa },
        swapped: { a, b }
    };
}

// ----------------------------
// Spread dan Rest Operators
// ----------------------------
export function demoSpreadRest() {
    // Spread operator dengan array
    const angka = [1, 2, 3];
    const lebihBanyakAngka = [...angka, 4, 5];
    
    // Copy array dengan spread
    const angkaSalin = [...angka];
    
    // Gabungkan arrays
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const arrayGabungan = [...array1, ...array2];
    
    // Spread operator dengan objek
    const orang = {
        nama: "John",
        usia: 30
    };
    
    // Copy objek
    const orangSalin = { ...orang };
    
    // Extend objek
    const orangDiperluas = {
        ...orang,
        email: "john@example.com",
        usia: 31 // Override properti yang ada
    };
    
    // Rest parameter dalam fungsi
    function jumlah(...angka) {
        return angka.reduce((total, num) => total + num, 0);
    }
    
    // Rest parameter dengan parameter reguler
    function proses(pertama, kedua, ...sisa) {
        return {
            pertama,
            kedua,
            sisa
        };
    }
    
    return {
        spreadArray: lebihBanyakAngka,
        copyArray: angkaSalin,
        mergedArrays: arrayGabungan,
        spreadObject: orangDiperluas,
        restSum: jumlah(1, 2, 3, 4, 5),
        restProcess: proses("a", "b", "c", "d", "e")
    };
}

// ----------------------------
// Parameter Default
// ----------------------------
export function demoParameterDefault() {
    // Cara lama (ES5)
    function sapaLama(nama, sapaan) {
        nama = nama || "Tamu";
        sapaan = sapaan || "Halo";
        return `${sapaan}, ${nama}!`;
    }
    
    // Dengan default parameters (ES6)
    function sapa(nama = "Tamu", sapaan = "Halo") {
        return `${sapaan}, ${nama}!`;
    }
    
    // Default parameters dengan ekspresi
    function buatPengguna(nama, peran = "user", dibuatPada = new Date().toISOString()) {
        return { nama, peran, dibuatPada };
    }
    
    // Default parameters bisa menggunakan parameter sebelumnya
    function buatPesanan(produk, jumlah = 1, harga, total = harga * jumlah) {
        return { produk, jumlah, harga, total };
    }
    
    return {
        oldWay: sapaLama(),
        oldWayParams: sapaLama("John", "Hai"),
        newWay: sapa(),
        newWayParams: sapa("John", "Hai"),
        withExpression: buatPengguna("Alice"),
        usingPrevious: buatPesanan("Laptop", 2, 1000000)
    };
}

// ----------------------------
// Kelas
// ----------------------------
export function demoKelas() {
    // Definisi class
    class Pengguna {
        // Constructor
        constructor(nama, email) {
            this.nama = nama;
            this.email = email;
            this.dibuatPada = new Date();
        }
        
        // Methods
        ambilInfo() {
            return `${this.nama} (${this.email})`;
        }
        
        ambilTanggalBuat() {
            return this.dibuatPada.toLocaleDateString();
        }
    }
    
    // Inheritance
    class Admin extends Pengguna {
        constructor(nama, email, peran = "admin") {
            super(nama, email);
            this.peran = peran;
        }
        
        // Override method
        ambilInfo() {
            return `${this.nama} (${this.email}) - ${this.peran}`;
        }
        
        // Admin method
        punyaAkses(module) {
            return true; // Untuk contoh, admin selalu punya akses
        }
    }
    
    // Instances
    const pengguna = new Pengguna("John Doe", "john@example.com");
    const admin = new Admin("Admin User", "admin@example.com");
    
    return {
        pengguna: {
            info: pengguna.ambilInfo(),
            tanggalBuat: pengguna.ambilTanggalBuat()
        },
        admin: {
            info: admin.ambilInfo(),
            tanggalBuat: admin.ambilTanggalBuat(),
            punyaAkses: admin.punyaAkses("dashboard")
        },
        isPenggunaInstance: pengguna instanceof Pengguna,
        isAdminInstance: admin instanceof Pengguna // true karena inheritance
    };
}

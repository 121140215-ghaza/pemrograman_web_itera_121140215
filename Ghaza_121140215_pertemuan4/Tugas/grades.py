from dataclasses import dataclass
from typing import List

BOBOT_UTS   = 0.30
BOBOT_UAS   = 0.40
BOBOT_TUGAS = 0.30

@dataclass
class Mahasiswa:
    nama: str
    nim: str
    uts: float
    uas: float
    tugas: float
    nilai_akhir: float = 0.0
    grade: str = ""

    def hitung(self):
        self.nilai_akhir = round(
            self.uts * BOBOT_UTS +
            self.uas * BOBOT_UAS +
            self.tugas * BOBOT_TUGAS, 2
        )
        self.grade = self.get_grade()

    def get_grade(self):
        na = self.nilai_akhir
        if na >= 80: return "A"
        if na >= 70: return "B"
        if na >= 60: return "C"
        if na >= 50: return "D"
        return "E"

def input_float(prompt):
    while True:
        try:
            val = float(input(prompt))
            if 0 <= val <= 100:
                return val
            print("⚠️  Nilai harus antara 0–100.")
        except ValueError:
            print("❌ Masukkan angka yang valid.")

def input_mahasiswa(n):
    data = []
    for i in range(n):
        print(f"\n👤 Mahasiswa ke-{i+1}")
        nama = input("Nama  : ").strip()
        nim  = input("NIM   : ").strip()
        uts   = input_float("UTS   : ")
        uas   = input_float("UAS   : ")
        tugas = input_float("Tugas : ")
        data.append(Mahasiswa(nama, nim, uts, uas, tugas))
    return data

def tampilkan(data: List[Mahasiswa]):
    nama_width = max(len(m.nama) for m in data) + 2
    print("\n" + "=" * 75)
    print(f"{'NIM':<12}{'Nama':<{nama_width}}{'UTS':>5}{'UAS':>6}{'Tugas':>8}{'Final':>10}{'Grade':>8}")
    print("-" * 75)
    for m in data:
        print(f"{m

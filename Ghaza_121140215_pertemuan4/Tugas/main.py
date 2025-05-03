import math_operations as mo

def menu():
    print("\n🧮  WELCOME TO MATH ZONE")
    print("===========================")
    print("1. 📏  Persegi (Luas & Keliling)")
    print("2. 📐  Persegi Panjang (Luas & Keliling)")
    print("3. ⚪  Lingkaran (Luas & Keliling)")
    print("4. 🌡️  Konversi Suhu (C → F / K)")
    print("5. ❌  Keluar")
    return input("\nPilih opsi [1-5]: ").strip()

def minta_float(prompt, positif=False):
    while True:
        try:
            val = float(input(prompt))
            if positif and val <= 0:
                print("❗ Nilai harus lebih dari 0. Coba lagi.")
                continue
            return val
        except ValueError:
            print("❗ Masukkan angka yang valid!")

def persegi():
    sisi = minta_float("↪️  Panjang sisi (meter): ", positif=True)
    print(f"📐 Luas     : {mo.luas_persegi(sisi)} m²")
    print(f"📏 Keliling : {mo.keliling_persegi(sisi)} m")

def persegi_panjang():
    p = minta_float("↪️  Panjang (meter): ", positif=True)
    l = minta_float("↪️  Lebar   (meter): ", positif=True)
    print(f"📐 Luas     : {mo.luas_persegi_panjang(p, l)} m²")
    print(f"📏 Keliling : {mo.keliling_persegi_panjang(p, l)} m")

def lingkaran():
    r = minta_float("↪️  Jari-jari (meter): ", positif=True)
    print(f"📐 Luas     : {mo.luas_lingkaran(r):.2f} m²")
    print(f"📏 Keliling : {mo.keliling_lingkaran(r):.2f} m")

def konversi_suhu():
    c = minta_float("🌡️  Suhu dalam Celsius: ")
    print(f"{c:.2f} °C = {mo.c_to_f(c):.2f} °F")
    print(f"{c:.2f} °C = {mo.c_to_k(c):.2f} K")
    print(f"π (PI) = {mo.PI}")

def main():
    while True:
        opsi = menu()
        match opsi:
            case "1": persegi()
            case "2": persegi_panjang()
            case "3": lingkaran()
            case "4": konversi_suhu()
            case "5":
                print("\n🚪 Keluar dari Math Zone. Sampai jumpa!\n")
                break
            case _: print("😕 Opsi tidak dikenali. Coba angka 1–5 ya.")

if __name__ == "__main__":
    main()

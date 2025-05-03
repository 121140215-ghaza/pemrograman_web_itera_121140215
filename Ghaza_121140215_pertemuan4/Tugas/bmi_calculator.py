def hitung_bmi():
    try:
        berat = float(input("⚖️  Masukkan berat badan (kg)        : "))
        tinggi = float(input("📏 Masukkan tinggi badan (m atau cm) : "))
    except ValueError:
        print("❌ Input harus berupa angka.")
        return

    if tinggi > 10:  # konversi cm ke meter
        tinggi /= 100

    if berat <= 0 or tinggi <= 0:
        print("⚠️  Berat dan tinggi harus lebih dari 0.")
        return

    bmi = berat / (tinggi ** 2)

    if bmi < 18.5:
        kategori = "Berat badan kurang"
    elif bmi < 25:
        kategori = "Berat badan normal"
    elif bmi < 30:
        kategori = "Berat badan berlebih"
    else:
        kategori = "Obesitas"

    print(f"\n📊 BMI Anda     : {bmi:.2f}")
    print(f"📌 Kategori     : {kategori}")

if __name__ == "__main__":
    hitung_bmi()

PI = 3.14159  # konstanta

def luas_persegi(s):
    """Hitung luas persegi."""
    return s * s

def keliling_persegi(s):
    """Hitung keliling persegi."""
    return 4 * s

def luas_persegi_panjang(p, l):
    """Hitung luas persegi panjang."""
    return p * l

def keliling_persegi_panjang(p, l):
    """Hitung keliling persegi panjang."""
    return 2 * (p + l)

def luas_lingkaran(r):
    """Hitung luas lingkaran."""
    return PI * r * r

def keliling_lingkaran(r):
    """Hitung keliling lingkaran."""
    return 2 * PI * r

def c_to_f(c):
    """Konversi suhu dari Celsius ke Fahrenheit."""
    return (c * 9 / 5) + 32

def c_to_k(c):
    """Konversi suhu dari Celsius ke Kelvin."""
    return c + 273.15

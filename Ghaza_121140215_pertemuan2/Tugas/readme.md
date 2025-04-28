# Personal Dashboard - Task Manager

## Deskripsi Aplikasi

**Personal Dashboard** merupakan aplikasi manajemen tugas sederhana yang dirancang untuk membantu pengguna dalam membuat, mengedit, dan menghapus tugas. Aplikasi ini dilengkapi fitur pengaturan prioritas tugas serta penetapan deadline. Semua data disimpan menggunakan **localStorage** pada browser, sehingga tetap aman meskipun halaman diperbarui.

## Fitur Aplikasi

- **Menambah Tugas**: Membuat tugas baru dengan judul, deskripsi, prioritas, dan deadline.
- **Mengedit Tugas**: Mengubah detail tugas yang sudah ada.
- **Menghapus Tugas**: Menghapus tugas dari daftar.
- **Prioritas Tugas**: Menentukan tingkat prioritas (`Low`, `Medium`, `High`) dengan warna yang berbeda.
- **Penetapan Deadline**: Menentukan tenggat waktu untuk setiap tugas.
- **Penyimpanan Data Lokal**: Menyimpan data di `localStorage` agar tidak hilang saat halaman di-refresh.

## Link Aplikasi

[Personal Dashboard - Task Manager](https://github.com/121140215-ghaza/pemrograman_web_itera_121140215/Ghaza_121140215_pertemuan2/Tugas/)

## Fitur JavaScript ES6+ yang Digunakan

- **Let dan Const**: Untuk deklarasi variabel dengan scoping yang tepat.
- **Arrow Function**: Penulisan fungsi lebih singkat dan menjaga konteks `this`.
  - Contoh: 
    ```javascript
    const addTask = () => { ... }
    ```
- **Template Literals**: Memudahkan interpolasi string.
  - Contoh:
    ```javascript
    `Tugas: ${taskTitle}`
    ```
- **Destructuring**: Mengambil data dari objek/array dengan lebih efisien.
  - Contoh:
    ```javascript
    const { title, description } = task;
    ```
- **Spread Operator dan Rest Operator**: Untuk menggabungkan atau menyalin data objek dan array.
  - Contoh:
    ```javascript
    const newTask = { ...task, priority: 'high' };
    ```
- **Default Parameters**: Memberikan nilai default untuk parameter fungsi.
  - Contoh:
    ```javascript
    function greet(name = 'Guest') { ... }
    ```
- **Class**: Membuat struktur data berbasis objek menggunakan class.
  - Contoh:
    ```javascript
    class Task { ... }
    ```
- **Async/Await**: Tidak digunakan karena aplikasi ini menggunakan `localStorage` yang bersifat sinkron. Namun jika diperlukan, contoh penggunaan:
  ```javascript
  const fetchData = async () => {
    const response = await fetch('url');
    const data = await response.json();
    return data;
  };

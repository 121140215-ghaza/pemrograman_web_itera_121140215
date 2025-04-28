import { TaskManager } from './app.js';

// Ambil elemen dari DOM
const tombolTambahTugas = document.getElementById('add-task-btn');
const kontainerTugas = document.getElementById('task-container');

const modalTugas = document.getElementById('taskModal');
const inputJudul = document.getElementById('taskTitle');
const inputDeskripsi = document.getElementById('taskDescription');
const inputPrioritas = document.getElementById('taskPriority');
const inputTanggal = document.getElementById('taskDueDate');
const tombolSimpanTugas = document.getElementById('submitTaskBtn');
const tombolTutupModal = document.getElementById('closeModalBtn');

// Buat instance task manager
const taskManager = new TaskManager();

// Fungsi untuk menampilkan tugas
const tampilkanTugas = () => {
  kontainerTugas.innerHTML = '';
  const semuaTugas = taskManager.getTasks();

  semuaTugas.forEach(tugas => {
    const elemenTugas = document.createElement('div');
    elemenTugas.className = `task-item ${tugas.priority}`;
    elemenTugas.innerHTML = `
      <h3>${tugas.title}</h3>
      <p>${tugas.description}</p>
      <p>Batas Waktu: ${tugas.dueDate}</p>
      <button onclick="editTugas(${tugas.id})">Edit</button>
      <button onclick="hapusTugas(${tugas.id})">Hapus</button>
    `;
    kontainerTugas.appendChild(elemenTugas);
  });
};

// Event saat klik tombol Tambah Tugas
tombolTambahTugas.addEventListener('click', () => {
  modalTugas.style.display = 'flex';
  bersihkanInputModal();
});

// Event saat klik tombol Tutup Modal
tombolTutupModal.addEventListener('click', () => {
  modalTugas.style.display = 'none';
  bersihkanInputModal();
});

// Bersihkan input di dalam modal
const bersihkanInputModal = () => {
  inputJudul.value = '';
  inputDeskripsi.value = '';
  inputPrioritas.value = 'low';
  inputTanggal.value = '';
  delete inputJudul.dataset.taskId; // Hapus data id kalau ada
};

// Fungsi untuk menangani penyimpanan tugas
const simpanTugas = (id = null) => {
  const judul = inputJudul.value.trim();
  const deskripsi = inputDeskripsi.value.trim();
  const prioritas = inputPrioritas.value;
  const tanggal = inputTanggal.value;

  if (judul === '') {
    alert('Silakan masukkan judul tugas yang valid.');
    return;
  }

  if (id) {
    taskManager.updateTask(id, { title: judul, description: deskripsi, priority: prioritas, dueDate: tanggal });
  } else {
    taskManager.addTask({ title: judul, description: deskripsi, priority: prioritas, dueDate: tanggal });
  }

  tampilkanTugas();
  modalTugas.style.display = 'none';
  bersihkanInputModal();
};

// Event klik tombol Simpan Tugas
tombolSimpanTugas.addEventListener('click', () => {
  const idTugas = inputJudul.dataset.taskId;
  if (idTugas) {
    simpanTugas(parseInt(idTugas));
  } else {
    simpanTugas();
  }
});

// Fungsi edit tugas (dibuat global agar bisa dipanggil dari onclick)
window.editTugas = (id) => {
  const tugas = taskManager.getTaskById(id);
  if (tugas) {
    inputJudul.value = tugas.title;
    inputDeskripsi.value = tugas.description;
    inputPrioritas.value = tugas.priority;
    inputTanggal.value = tugas.dueDate;

    inputJudul.dataset.taskId = id; // Simpan id tugas untuk edit

    modalTugas.style.display = 'flex';
  }
};

// Fungsi hapus tugas
window.hapusTugas = (id) => {
  taskManager.deleteTask(id);
  tampilkanTugas();
};

// Panggil fungsi tampilkan semua tugas saat awal
tampilkanTugas();

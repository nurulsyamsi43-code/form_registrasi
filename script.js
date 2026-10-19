// Ambil elemen berdasarkan id
const form = document.getElementById("form-registrasi");
const inputNama = document.getElementById("nama");
const inputEmail = document.getElementById("email");
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const inputKonfirmasi = document.getElementById("konfirmasi");
const pesan = document.getElementById("pesan");

// Fungsi menampilkan pesan langsung di halaman (tanpa alert)
function tampilkanPesan(teks, tipe) {
  pesan.textContent = teks;
  pesan.className = "pesan " + tipe; // "error" atau "sukses"
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // cegah reload halaman

  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const username = inputUsername.value.trim();
  const password = inputPassword.value;
  const konfirmasi = inputKonfirmasi.value;

  // 1. Semua kolom wajib diisi
  if (nama === "" || email === "" || username === "" || password === "" || konfirmasi === "") {
    tampilkanPesan("Semua kolom wajib diisi!", "error");
  }
  // 2. Email harus mengandung tanda @
  else if (!email.includes("@")) {
    tampilkanPesan("Email harus mengandung tanda @.", "error");
  }
  // 3. Password minimal 8 karakter
  else if (password.length < 8) {
    tampilkanPesan("Password minimal 8 karakter.", "error");
  }
  // 4. Password dan konfirmasi harus sama
  else if (password !== konfirmasi) {
    tampilkanPesan("Password dan konfirmasi password harus sama.", "error");
  }
  // Semua validasi lolos
  else {
    tampilkanPesan("Registrasi berhasil! Terima kasih, " + nama + ".", "sukses");
    form.reset(); // kosongkan seluruh input otomatis
  }
});
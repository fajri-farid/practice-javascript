// Mendapatkan elemen-elemen formulir dan tombol dari HTML
const form = document.querySelector("form");
const emailInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const signInButton = document.querySelector('button[type="submit"]');

// Menambahkan event listener untuk tombol sign in
signInButton.addEventListener("click", async function (event) {
  // event.preventDefault(); // Menghentikan aksi bawaan dari tombol submit, pengiriman langsung

  const email = emailInput.value;
  const password = passwordInput.value;

  // Melakukan pengecekan email dan password
  if (email === "fajrifarid@gmail.com" && password === "hello123") {
    alert("Login berhasil!");
    window.location.href = "toko.html"; // Mengarahkan ke halaman baru jika login berhasil
  } else {
    alert("Email atau password salah. Silakan coba lagi.");
  }
});

# Kompleksitas Balanced Bracket 

## Deskripsi
Fungsi `isBalancedBrackets` memeriksa apakah tanda kurung dalam string input seimbang. Fungsi ini bekerja dengan menggunakan struktur data stack untuk melacak tanda kurung pembuka dan memastikan bahwa setiap tanda kurung penutup memiliki pasangannya yang sesuai.

## Kompleksitas
### Kompleksitas Code
pada code yang dibuat untuk menemukan Balanced Bracket hanya menggunakan dasar dari bahasa pemrograman javaScript yaitu:
- function (fungsi nya sendiri)
- sebuah array untuk menampung bracket pembuka
- object untuk mencari kecocokan bracket
- perulangan untuk mengulang semua inputan dari parameter fungsi
- pengkondisian berupa if untuk pengecekan bracket
- array method `push` dan `pop`

### Kompleksitas Waktu
Kompleksitas waktu dari fungsi ini adalah **O(n)**, di mana n adalah panjang dari string input. Berikut adalah rinciannya:
- Fungsi melakukan iterasi sekali melalui seluruh string input.
- Operasi `push` dan `pop` pada stack masing-masing memiliki waktu komputasi O(1).

### Kompleksitas Ruang
Kompleksitas ruang dari fungsi ini adalah **O(n)** dalam kasus terburuk. Berikut adalah rinciannya:
- Jika semua karakter dalam string adalah tanda kurung pembuka, kita akan menyimpan semuanya di stack.
- Dalam kasus tersebut, ukuran stack bisa mencapai n, di mana n adalah panjang string input.

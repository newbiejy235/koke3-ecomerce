# ShopEase — Simple E-Commerce

Aplikasi frontend e-commerce sederhana yang dibangun menggunakan React dan Vite. Project ini berfokus pada pengelolaan produk, navigasi halaman, dan shopping cart menggunakan React Context API.

## 🚀 Tech Stack

- **Vite** — Frontend build tool.
- **React** — UI library.
- **TypeScript** — Type safety.
- **React Router DOM** — Client-side navigation.
- **React Context API** — Global state management.
- **LocalStorage** — Penyimpanan data keranjang.
- **Vanilla CSS** — Styling dan responsive layout.

## ✨ Features

### 1. User Dashboard
- Menampilkan daftar produk.
- Menampilkan gambar, nama, kategori, dan harga produk.
- Melihat detail produk.
- Menambahkan produk ke keranjang.

### 2. Product Detail
- Menampilkan informasi lengkap produk.
- Menampilkan gambar dan deskripsi produk.
- Menambahkan produk ke keranjang.
- Navigasi kembali ke halaman utama.

### 3. Shopping Cart
- Menampilkan produk yang telah ditambahkan.
- Menambah dan mengurangi quantity produk.
- Menghapus produk dari keranjang.
- Menghitung subtotal setiap produk secara otomatis.
- Menghitung total harga seluruh produk.
- Menampilkan total jumlah item.
- Menampilkan empty state ketika keranjang kosong.

### 4. Cart Persistence
- Menggunakan React Context API untuk mengelola state keranjang secara global.
- Menggunakan LocalStorage agar data keranjang tetap tersimpan setelah browser di-refresh.
- Quantity produk bertambah jika produk yang sama ditambahkan kembali.

## 📁 Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── ProductCard.tsx
│   └── CartItem.tsx
│
├── context/
│   └── CartContext.tsx
│
├── data/
│   └── products.ts
│
├── pages/
│   ├── Dashboard.tsx
│   ├── ProductDetail.tsx
│   └── Cart.tsx
│
├── types/
│   └── index.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

## ⚙️ Installation

Pastikan Node.js dan npm sudah terinstall di komputer.

### 1. Clone Repository

```bash
git clone <repository-url>
```

### 2. Masuk ke Folder Project

```bash
cd <project-folder>
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Jalankan Development Server

```bash
npm run dev
```

Aplikasi akan berjalan pada alamat lokal yang ditampilkan oleh Vite, biasanya:

```text
http://localhost:5173
```

## 🧭 Application Routes

| Route | Description |
|---|---|
| `/` | Halaman dashboard dan daftar produk |
| `/product/:id` | Halaman detail produk berdasarkan ID |
| `/cart` | Halaman shopping cart |

## 🛒 Cart Logic

Sistem keranjang menggunakan beberapa fungsi utama:

| Function | Description |
|---|---|
| `addToCart()` | Menambahkan produk ke keranjang |
| `removeFromCart()` | Menghapus produk berdasarkan ID |
| `increaseQuantity()` | Menambah quantity produk |
| `decreaseQuantity()` | Mengurangi quantity produk |
| `clearCart()` | Mengosongkan seluruh keranjang |

### Price Calculation

Subtotal setiap produk dihitung berdasarkan harga satuan dikalikan quantity.

```tsx
const subtotal = item.price * item.quantity;
```

Total harga seluruh keranjang dihitung menggunakan `reduce()`.

```tsx
const totalPrice = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
```

### Currency Format

Harga ditampilkan menggunakan format mata uang Rupiah (IDR).

```tsx
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};
```

## 📱 Responsive Design

Aplikasi dirancang agar dapat digunakan pada berbagai ukuran layar:

- Desktop
- Tablet
- Mobile

## ⚠️ Project Limitations

Project ini merupakan aplikasi frontend pembelajaran sehingga memiliki beberapa batasan:

- Belum menggunakan backend.
- Data produk masih bersifat statis.
- Belum memiliki sistem login dan registrasi.
- Belum memiliki sistem pembayaran.
- Belum memiliki integrasi payment gateway.
- Data keranjang hanya tersimpan secara lokal menggunakan LocalStorage.
- Belum memiliki sistem manajemen stok produk.

## 🎯 Project Goals

Project ini dibuat untuk mempelajari dan menerapkan konsep dasar pengembangan frontend menggunakan React, khususnya:

1. React Functional Components.
2. Props dan TypeScript.
3. React Hooks (`useState`, `useContext`, `useEffect`).
4. React Context API.
5. React Router DOM.
6. LocalStorage.
7. Array Methods (`map`, `reduce`, `find`).
8. CRUD sederhana pada shopping cart.
9. Responsive Web Design.

---

**ShopEase** — A simple e-commerce frontend project built for learning React and TypeScript.
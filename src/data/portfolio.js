import kleiRentCover from '../assets/klei_rent/klei-rent_cover.png'
import kleiDesktop from '../assets/klei_rent/desktop.png'
import kleiAdmin from '../assets/klei_rent/admin.png'
import alurinCover from '../assets/alurin/alurin_main.png'
import crawlingCover from '../assets/alurin/tools_crawling.png'
import dundeeCover from '../assets/dundee/dundee_main.png'
import dundeeAdmin from '../assets/dundee/dundee_admin.png'
import dundeeReports from '../assets/dundee/laporan.png'
import dundeeStock from '../assets/dundee/stock.png'
import chatbotCover from '../assets/ai_chatbot/test_ai.png'
import chatbotThreads from '../assets/ai_chatbot/ai_chatbot2.png'
import chatbotAnalytics from '../assets/ai_chatbot/analitik.png'
import chatbotVideo from '../assets/ai_chatbot/video_generation.png'
import chatbotResult from '../assets/ai_chatbot/hasil.png'
import gameCover from '../assets/interactive_web/interactive_test.png'

export const profile = {
  name: 'B.J.',
  initials: 'B.J',
  role: 'Full-Stack Developer',
  tagline: 'Membangun produk web end to end — dari antarmuka, backend, sampai deployment.',
  location: 'Jakarta, Indonesia',
  email: 'bryantjipto28@gmail.com',
  availability: 'Terbuka untuk proyek freelance & full-time',
  socials: [
    // { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'www.linkedin.com/in/bryan-tjipto-665512172' },
    { label: 'Instagram', href: 'https://www.instagram.com/bryanjon28/' },
  ],
  stats: [
    { value: '3+', label: 'Tahun pengalaman' },
    { value: '18', label: 'Proyek selesai' },
    { value: '4', label: 'Bidang solusi digital' },
  ],
}

export const about = {
  eyebrow: 'Tentang saya',
  title: 'Developer yang menangani produk dari ide sampai online.',
  paragraphs: [
    'Saya suka mengubah ide menjadi produk nyata yang siap pakai — dari merancang layout dan memilih komponen antarmuka, membangun API dan logika backend, sampai men-deploy ke produksi dan memastikan semuanya berjalan lancar.',
    'Fokus saya adalah solusi end to end yang bersih dan mudah dirawat: struktur kode yang jelas di tiap lapisan, performa yang ringan, dan alur kerja yang tidak membuat siapa pun yang melanjutkannya berpikir dua kali.',
  ],
  highlights: [
    'End-to-end development: Frontend, backend, database, dan deployment.',
    'Responsive design: Pengalaman yang konsisten di mobile, tablet, dan desktop.',
    'Clean & maintainable code: Struktur kode yang jelas, modular, dan mudah dikembangkan.',
    'Performance & reliability: Mengutamakan kecepatan, aksesibilitas, dan stabilitas aplikasi.'
  ],
}

export const skills = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Responsive Design', 'Vite'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST API', 'PostgreSQL', 'MySQL', 'Autentikasi & Otorisasi'],
  },
  {
    title: 'Deployment & DevOps',
    items: ['Git & GitHub', 'Docker', 'CI/CD', 'Vercel & VPS', 'Nginx', 'Monitoring Dasar'],
  },
]

export const projectCategories = [
  'Otomasi',
  'Sistem Operasional Bisnis',
  'Asisten AI & Chatbot',
  'Gamification',
]

export const projects = [
  {
    title: 'Alurin',
    category: 'Otomasi',
    description: 'Platform konten berbantuan AI yang mengubah ide menjadi posting terjadwal untuk Threads.',
    detail: 'Dari ide awal sampai konten terbit, Alurin membantu kreator dan tim mengelola semuanya dalam satu alur kerja yang rapi.',
    audience: 'Kreator, pemilik usaha, dan tim yang rutin membuat konten media sosial.',
    helps: 'Menyiapkan ide dan draft dengan AI, merapikan konten, serta menjadwalkan posting otomatis ke Threads.',
    example: 'Siapkan konten promosi lebih awal, lalu atur waktu tayangnya agar tidak perlu mengunggah satu per satu.',
    closing: 'Lebih sedikit pekerjaan manual. Lebih banyak ruang untuk berkarya.',
    image: alurinCover,
    gallery: [],
    tags: ['AI', 'Content workflow', 'Threads automation'],
    accent: 'navy',
  },
  {
    title: 'Web Crawling',
    category: 'Otomasi',
    description: 'Pengumpulan informasi website yang terstruktur, efisien, dan terpusat.',
    detail: 'Kelola proses pengumpulan data web berulang dari satu platform yang mudah ditelusuri dan dipantau.',
    audience: 'Tim operasional, peneliti, dan bisnis yang perlu mengumpulkan informasi website secara berkala.',
    helps: 'Kelola sumber website, jalankan tugas crawling, pantau proses, dan tinjau temuan tanpa menyalin data satu per satu atau berpindah alat.',
    example: 'Kumpulkan informasi dari website yang relevan, lalu gunakan hasilnya untuk monitoring, riset, atau laporan rutin. Sumber dan struktur data dapat disesuaikan dengan kebutuhan.',
    closing: 'Ekstraksi data web secara terstruktur, efisien, dan terpusat.',
    image: crawlingCover,
    gallery: [],
    tags: ['Web crawling', 'Admin dashboard'],
    accent: 'purple',
  },
  {
    title: 'Klei-Rent',
    category: 'Sistem Operasional Bisnis',
    description: 'Katalog penyewaan gaun yang memudahkan pelanggan menjelajah koleksi dan admin mengelola operasional.',
    detail: 'Klei-Rent menyatukan pengalaman katalog yang nyaman bagi pelanggan dengan dashboard untuk memperbarui koleksi dan menangani kebutuhan operasional.',
    audience: 'Pelanggan yang mencari gaun untuk acara spesial dan tim Klei-Rent yang mengelola katalog penyewaan.',
    helps: 'Menampilkan koleksi dengan jelas sekaligus menyediakan area admin untuk memperbarui informasi produk dan mengelola katalog.',
    example: 'Pelanggan menelusuri koleksi dari perangkat apa pun, sementara admin memperbarui katalog melalui dashboard.',
    closing: 'Katalog yang menarik di depan, operasional yang lebih tertata di belakang.',
    image: kleiRentCover,
    gallery: [kleiDesktop, kleiAdmin],
    galleryLabels: ['Katalog desktop', 'Dashboard admin'],
    tags: ['Catalog', 'Admin dashboard'],
    accent: 'purple',
  },
  {
    title: 'Dundee',
    category: 'Sistem Operasional Bisnis',
    description: 'Dashboard keuangan dan operasional untuk membantu restoran memahami kondisi bisnisnya.',
    detail: 'Dundee menyatukan informasi penjualan, pengeluaran, laporan, dan stok agar pemilik usaha dapat mengambil keputusan dengan gambaran yang lebih utuh.',
    audience: 'Pemilik dan tim operasional restoran yang perlu memantau keuangan serta persediaan.',
    helps: 'Merangkum transaksi, performa penjualan, laporan, dan stok dalam satu dashboard yang mudah dipahami.',
    example: 'Tinjau laporan penjualan dan stok secara berkala untuk mengetahui perubahan performa dan kebutuhan persediaan.',
    closing: 'Informasi operasional lebih mudah dibaca, keputusan bisnis lebih terarah.',
    image: dundeeCover,
    gallery: [dundeeAdmin, dundeeReports, dundeeStock],
    galleryLabels: ['Dashboard finance', 'Laporan', 'Stok'],
    tags: ['Finance management', 'Operational dashboard'],
    accent: 'green',
  },
  {
    title: 'AI Chatbot',
    category: 'Asisten AI & Chatbot',
    description: 'Asisten AI yang menghubungkan percakapan dengan pekerjaan konten dan analisis bisnis.',
    detail: 'Satu ruang percakapan untuk meminta insight, menyiapkan materi, membuat video, dan memahami performa konten tanpa memutus alur kerja.',
    audience: 'Kreator dan tim bisnis yang ingin mengolah informasi serta menyiapkan konten dengan bantuan AI.',
    helps: 'Menjawab pertanyaan, merangkum analitik, membantu menyiapkan konten, dan menjalankan alur pembuatan video.',
    example: 'Minta rangkuman performa terbaru, lalu lanjutkan dengan ide konten atau materi promosi berdasarkan insight tersebut.',
    closing: 'Dari pertanyaan menjadi langkah kerja berikutnya, dalam satu percakapan.',
    image: chatbotCover,
    gallery: [chatbotThreads, chatbotAnalytics, chatbotVideo, chatbotResult],
    galleryLabels: ['Percakapan assistant', 'Analitik', 'Video generation', 'Hasil kerja'],
    tags: ['AI assistant', 'Chatbot'],
    accent: 'navy',
  },
  {
    title: 'Space Shooter',
    category: 'Gamification',
    description: 'Game arcade ringan yang mengajak pemain bergerak cepat, menghindari rintangan, dan mengejar skor.',
    detail: 'Space Shooter menghadirkan pengalaman bermain singkat dengan kontrol sederhana dan tantangan yang langsung terasa.',
    audience: 'Pemain kasual yang ingin menikmati permainan cepat melalui browser, termasuk dari perangkat mobile.',
    helps: 'Menghadirkan interaksi yang menyenangkan melalui kontrol responsif, rintangan, dan target skor.',
    example: 'Mulai bermain dalam beberapa detik, hindari rintangan, lalu coba pecahkan skor terbaik.',
    closing: 'Mudah dimulai, seru untuk dimainkan lagi.',
    image: gameCover,
    gallery: [],
    tags: ['Mini game', 'Mobile interaction'],
    accent: 'navy',
  },
]

export const solutions = [
  {
    title: 'Otomasi Pekerjaan',
    description: 'Otomatisasi proses berulang melalui integrasi aplikasi, pengolahan data, dan workflow terjadwal. Dukungan AI dapat ditambahkan sesuai kebutuhan bisnis.',
    tools: ['Python', 'n8n', 'REST API', 'Model AI (LLM)'],
    example: 'Sinkronkan data antar aplikasi, buat notifikasi otomatis, atau jadwalkan laporan rutin agar tim tidak perlu mengerjakan langkah yang sama berulang kali.',
  },
  {
    title: 'Sistem Operasional Bisnis',
    description: 'Aplikasi terintegrasi untuk mengelola data operasional, memantau aktivitas bisnis, dan menyederhanakan administrasi.',
    tools: ['React', 'Node.js', 'Database'],
    example: 'Satukan katalog, transaksi, laporan, atau stok dalam dashboard yang membantu tim melihat kondisi operasional dengan lebih jelas.',
  },
  {
    title: 'Asisten AI & Chatbot',
    description: 'AI agent yang memahami instruksi, menghubungkan aplikasi, dan menjalankan pekerjaan bisnis melalui percakapan dengan konfigurasi sesuai kebutuhan Anda.',
    tools: ['Python', 'Model AI (LLM)', 'AI Agent'],
    example: 'Buat asisten internal untuk menjawab pertanyaan, merangkum informasi, atau memulai workflow langsung dari chat.',
  },
  {
    title: 'Web Interaktif & Gamifikasi',
    description: 'Ajak audiens berinteraksi melalui game atau pengalaman kreatif untuk promosi, acara, maupun edukasi.',
    tools: ['JavaScript', 'React'],
    example: 'Tambahkan mini game, kuis, atau pengalaman interaktif ke kampanye agar audiens terlibat lebih lama.',
  },
]

export const navLinks = [
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Kontak', href: '#kontak' },
]

export const footerLinks = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Kontak', href: '#kontak' },
]

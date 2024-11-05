const quotes = [
    { text: "Kesuksesan adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan.", author: "Henry Ford" },
    { text: "Keberhasilan tidak diukur dari posisi yang kita capai, tetapi dari kesulitan yang telah kita atasi.", author: "Booker T. Washington" },
    { text: "Percaya diri adalah rahasia pertama menuju kesuksesan.", author: "Ralph Waldo Emerson" },
    { text: "Tidak ada yang mustahil bagi mereka yang percaya.", author: "Alexander the Great" },
    { text: "Lakukan hal-hal kecil dengan penuh cinta.", author: "Mother Teresa" },
    { text: "Jangan menunggu kesuksesan, berjuanglah untuk mencapainya.", author: "George Bernard Shaw" },
    { text: "Kesuksesan datang kepada mereka yang sibuk mencarinya.", author: "Henry David Thoreau" },
    { text: "Belajarlah seakan kamu hidup selamanya, hiduplah seakan kamu mati besok.", author: "Mahatma Gandhi" },
    { text: "Hanya mereka yang berani gagal yang bisa meraih kesuksesan besar.", author: "Robert F. Kennedy" },
    { text: "Percaya diri adalah langkah pertama menuju keberhasilan.", author: "Vincent Van Gogh" },
    { text: "Jika kamu ingin hidup bahagia, ikatkan pada tujuan, bukan pada orang atau benda.", author: "Albert Einstein" },
    { text: "Jangan pernah menyerah karena setiap hal yang besar membutuhkan waktu.", author: "Napoleon Hill" },
    { text: "Buatlah hari ini luar biasa, karena setiap hari adalah kesempatan baru.", author: "Unknown" },
    { text: "Berani memulai adalah rahasia menuju kesuksesan.", author: "Walt Disney" },
    { text: "Kesuksesan adalah akumulasi dari usaha-usaha kecil yang diulang setiap hari.", author: "Robert Collier" },
    { text: "Bekerjalah kamu, maka Allah dan Rasul-Nya serta orang-orang yang beriman akan melihat pekerjaanmu.", author: "Surah At-Tawbah (9:105)" },
    { text: "Sesungguhnya setelah kesulitan itu ada kemudahan.", author: "Surah Al-Inshirah (94:6)" },
    { text: "Wahai orang-orang yang beriman, mintalah pertolongan (kepada Allah) dengan sabar dan salat. Sesungguhnya Allah bersama orang-orang yang sabar.", author: "Surah Al-Baqarah (2:153)" },
    { text: "Sesungguhnya Allah tidak merubah keadaan suatu kaum sehingga mereka merubah keadaan yang ada pada diri mereka sendiri.", author: "Surah Ar-Ra'd (13:11)" },
    { text: "Barangsiapa bertakwa kepada Allah, niscaya Dia akan membukakan jalan keluar baginya.", author: "Surah At-Talaq (65:2)" }
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
}

// Menampilkan quote pertama kali saat halaman dimuat
window.onload = showRandomQuote;

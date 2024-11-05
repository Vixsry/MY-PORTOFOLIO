document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.getElementById("navbarNav");
    const navLinks = document.querySelectorAll(".nav-link");

    // Menutup navbar ketika link diklik
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                navbarToggler.click();
            }
        });
    });

    // Menutup navbar saat klik di luar navbar (untuk perangkat kecil)
    document.addEventListener("click", function (event) {
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            if (navbarCollapse.classList.contains("show")) {
                navbarToggler.click();
            }
        }
    });
});

//ANIMASI MENGETIK DI BAGIAN HOME
document.addEventListener('DOMContentLoaded', function() {
    const typingElements = document.querySelectorAll('.typing');
    const texts = [
        'Thank you for visiting',
        'my web portfolio page'
    ]; // Daftar teks yang ingin ditampilkan

    const typingDelay = 100; // Kecepatan mengetik (dalam ms)
    const pauseDuration = 1000; // Durasi pause sebelum mengetik ulang (dalam ms)

    const typeText = (element, text, index) => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => typeText(element, text, index + 1), typingDelay);
        } else {
            // Setelah selesai mengetik, pause sejenak sebelum menghapus
            setTimeout(() => {
                element.textContent = ''; // Hapus teks
                const nextText = texts[(texts.indexOf(text) + 1) % texts.length]; // Dapatkan teks berikutnya
                typeText(element, nextText, 0); // Mulai mengetik teks berikutnya
            }, pauseDuration);
        }
    };

    typingElements.forEach((element, i) => {
        const text = texts[i % texts.length]; // Dapatkan teks dari daftar berdasarkan indeks
        typeText(element, text, 0); // Mulai mengetik
    });
});

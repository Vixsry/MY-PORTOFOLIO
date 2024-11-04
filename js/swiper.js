//The MIT License (MIT)

//Copyright (c) 2019 Vladimir Kharlampidi

//Permission is hereby granted, free of charge, to any person obtaining a copy of
//this software and associated documentation files (the "Software"), to deal in
//the Software without restriction, including without limitation the rights to
//use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
//the Software, and to permit persons to whom the Software is furnished to do so,
//subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
//FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
//COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
//IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
//CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


//SWIPPER SCRIP JS
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 30, // Menambah jarak antara slide
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Membuat pagination dapat diklik
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>'; // Custom bullet
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'swiper-button-disabled', // Menambahkan class saat button dinonaktifkan
    },
    autoplay: {
        delay: 3000, // Menambahkan autoplay dengan delay 3 detik
        disableOnInteraction: false, // Autoplay tidak berhenti saat interaksi
    },
    loop: true, // Mengaktifkan loop
    on: {
        init: function () {
            console.log('Swiper initialized'); // Menambahkan log saat swiper diinisialisasi
        },
        slideChange: function () {
            console.log('Slide changed to: ', this.activeIndex); // Menambahkan log saat slide berubah
        },
    },
});
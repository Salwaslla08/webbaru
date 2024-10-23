const kuliner = [
    { name: 'Mie Lendir', description: 'Mie dengan tambahan tauge juga telur rebus dan dengan kuah kacang yang lezat.', image: 'mie_lendir_v2.jpg' },
    { name: 'Otak-otak', description: 'Makanan khas yang terbuat dari ikan, sotong, juga tulang dengan cita rasa yang agak pedas dan di bakar di atas perapian.', image: 'otak-otak_tanjungpinang.jpg' },
    { name: 'Laksa', description: 'Makanan berkuah dengan campuran rempah yang kuat biasanya di hidangkan dengan tambahan telur rebus dan udang.', image: 'laksa_tanjungpinang_no_shrimp.jpg' },
    { name: 'Nasi Dagang', description: 'Nasi gurih dengan ikan tongkol atau bilis yang di masak pedas dan di bungkus dengan daun pisang.', image: 'Gemini_Generated_Image_ej3tr3ej3tr3ej3t.jpg' },
    { name: 'Gonggong', description: 'Gonggong adalah sejenis kerang yang hanya bisa ditemukan di Pulau Sumatera, khususnya di Tanjung Pinang. Bentuknya seperti siput, dengan cangkang berwarna putih.Rasa gonggong agak manis, dagingnya yang kenyal memberikan sensasi yang menarik.Gonggong biasanya di masak dengan cara di rebus.', image:'gonggong.jpg' },
    { name: 'Deram-deram', description: 'Kue deram-deram ini sekilas seperti kue cincin khas Betawi, hanya berukuran lebih kecil. Warnanya coklat berbentuk seperti donat. Rasanya sendiri mirip dengan kue cincin, manis dan legit di lidah. Bahan pembuatannya menggunakan tepung beras yang dicampur gula merah.', image:'unnamed.png' },
    { name: 'Mie Tarempa', description: 'Mi Tarempa cukup mirip dengan mi aceh, tapi tak ada rasa pedas rempah yang mendominasi. Rasa Mi Tarempa cenderung manis dan sedikit gurih. Topping-nya nikmat, dengan pilihan daging ikan, daging sapi, dan aneka seafood.', image:'Gemini_Generated_Image_jvl3jmjvl3jmjvl3.jpg'},
    { name: 'Tepung gomak', description:'Kue tradisional ini dibuat dari tepung ketan yang diisi dengan unti kelapa dan gula merah. Dibentuk bulat pipih dan dibalur dengan tepung kacang hijau yang sudah disangrai. Teksturnya yang kenyal dan dibalur tepung itu sekilas mirip dengan mochi.', image:'kue ai.jpg'},
    { name: 'Luti Gendang', description:'Roti goreng berbentuk lonjong dan berisi abon ikan ini juga merupakan salah satu camilan favorit. Rasanya yang manis gurih terkadang agak sedikit pedas, membuat makanan ini cocok disantap dengan segelas teh hangat atau kopi.', image:'luti ai (2).jpg'},
    { name: 'Es Apollo', description:'Es Apollo hampir sama dengan es campur pada umumnya tetapi yang membuat beda adalah cara penyusunan isiannya, penjualnya mengaku bahwa saat membuat es apollo mereka memasukkan isiannya secara teratur dan di atasnya di letakkan serutan es', image:'es apollo ai.jpg'},
    { name: 'Air Dohot', description:'Air dohot adalah minuman khas Kepulauan Riau yang terbuat dari buah-buahan kering yang dicampur dengan air gula batu. Minuman Air Dohot memiliki rasa dan isi yang unik. Sebab, minum ini terdiri dari beberapa buah yang dikeringkan, seperti buah dohot kering, kelengkeng kering, hingga kismis.', image:'air dohot.jpg'},
    { name: 'Air Kayu Sepang', description:'Air kayu sepang adalah minuman berupa teh, tetapi air ini tidak berasal dari teh biasa melaikan berasal dari sari kayu sepang, sehingga warna pada teh ini bukan lagi coklat, kuning, atau hijau, melainkan berwarna merah', image: 'air kayu secang.jpg'},
];

const listKuliner = document.getElementById('list-kuliner');

kuliner.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';

    const card = `
        <div class="card">
            <img src="${item.image}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
            </div>
        </div>
    `;
    col.innerHTML = card;
    listKuliner.appendChild(col);
});

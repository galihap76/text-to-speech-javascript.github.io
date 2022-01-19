// buat variabel
let textArea = document.getElementsByTagName('textarea')[0];
let btn = document.getElementsByTagName('button')[0];


//ketika tombol di tekan atau di klik
btn.addEventListener('click', function(){
    //jalankan suara dari google
   responsiveVoice.speak(
    //dan ambil isi dari textarea
    textArea.value,
    "Indonesian Female",
    {
     pitch: 1, 
     rate: 1, 
     volume: 1
    }
   );
});
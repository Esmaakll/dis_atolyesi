
document.addEventListener("DOMContentLoaded", function () {
   
    const navigasyonBağlantıları = document.querySelectorAll('.navigasyon-linkleri a');

    navigasyonBağlantıları.forEach(baglanti => {
        baglanti.addEventListener('click', function (e) {
           
            e.preventDefault();

         
            const hedef = document.querySelector(this.getAttribute('href'));

            hedef.scrollIntoView({
                behavior: 'smooth',
                block: 'start' 
            });
        });
    });
});
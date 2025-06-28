function toggleContent(headerElement) {
    const content = headerElement.nextElementSibling;
    content.style.display = (content.style.display === "block") ? "none" : "block";
}

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.querySelector('.hamburger');
  const sagyazi = document.querySelector('.sagbutonyazi');
  const solyazi = document.querySelector('.solbutonyazi');

  window.toggleSidebar = function () {
    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {
      hamburger.style.right = 'auto';
      hamburger.style.left = '10px';
      sagyazi.style.fontSize = "large";
      solyazi.style.fontSize = "large";
    } else {
      hamburger.style.left = 'auto';
      hamburger.style.right = '10px';
      sagyazi.style.fontSize = "initial";
      solyazi.style.fontSize = "initial";
    }
  };
});



const toggleButon = document.getElementById('themeToggle');
toggleButon.addEventListener('click',()=>{
  document.body.classList.toggle('white-mode');
})


document.addEventListener('DOMContentLoaded', () => {
  const videoLinks = document.querySelectorAll('.video-line a[data-video]');
  const iframe = document.querySelector('.iframe-video');

  videoLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

    
      const videoUrl = this.getAttribute('data-video');
      iframe.src = videoUrl;

      
      videoLinks.forEach(l => l.classList.remove('active-video')); // önceki aktiflerin hepsini siliyorum

      
      this.classList.add('active-video'); // for each dongusunde sıra hangısınde ıse active video o oluyor
    });
  });
});

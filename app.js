function toggleContent(headerElement) {
    const content = headerElement.nextElementSibling;
    content.style.display = (content.style.display === "block") ? "none" : "block";
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const main = document.getElementById('main-content');

  sidebar.classList.toggle('collapsed');
  
  
  if (sidebar.classList.contains('collapsed')) {
    hamburger.style.right = 'auto';
    hamburger.style.left = '10px';
  } else {
    hamburger.style.left = 'auto';
    hamburger.style.right = '10px';
  }
}
const sidebar = document.getElementById('sidebar');
if(sidebar.classList.toggle=='collapsed'){
    sidebar.classList.toggle('hidden');
}
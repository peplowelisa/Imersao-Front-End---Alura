document.querySelectorAll('.profile a').forEach(link => {
    link.addEventListener('click', () => {
        const fig  = link.querySelector('figure');
        const nome = fig.querySelector('figcaption').textContent.trim();
        const img  = fig.querySelector('img').src;
        localStorage.setItem('perfilAtivoNome', nome);
        localStorage.setItem('perfilAtivoImagem', img);
        
    });
});

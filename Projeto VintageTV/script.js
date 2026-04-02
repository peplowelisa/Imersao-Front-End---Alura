const body = document.body;
const button = document.getElementById('theme-toggle');


const themeKey = 'cuphead-theme';
const savedTheme = localStorage.getItem(themeKey);

function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        button.setAttribute('aria-label', 'Alternar para modo claro');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.setAttribute('aria-label', 'Alternar para modo escuro');
    }
    localStorage.setItem(themeKey, theme);
}

applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

button.addEventListener('click', () => {
    applyTheme(body.classList.contains('dark-mode') ? 'light' : 'dark');
});

document.querySelectorAll('.profile a').forEach(link => {
    link.addEventListener('click', () => {
        const fig  = link.querySelector('figure');
        const nome = fig.querySelector('figcaption').textContent.trim();
        const img  = fig.querySelector('img').src;
        localStorage.setItem('perfilAtivoNome', nome);
        localStorage.setItem('perfilAtivoImagem', img);
        
    });
});

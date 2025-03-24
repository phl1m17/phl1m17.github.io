const image = document.getElementById('toggleImage');
const content = document.getElementById('hiddenContent');

image.addEventListener('click', () => {
    if (content.classList.contains('show')) {
        content.classList.add('fadeOut');

        setTimeout(() => {
    content.classList.remove('show');
            content.classList.remove('fadeOut');
            content.style.display = 'none';
            }, 500);
    } else {
        content.style.display = 'block';
        content.classList.add('show');
    }
});

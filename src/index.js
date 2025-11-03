document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const recipient = params.get('name'); // null if not present

    const content = document.getElementById('content');
    content.innerHTML = `<img src='../resources/${recipient || 'DawNuNuThein'}.jpg' alt='${recipient}'/>`;
});
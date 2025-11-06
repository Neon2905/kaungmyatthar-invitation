document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const recipient = params.get('name'); // null if not present

    //TODO: Check if there's a valid recipient name


    const content = document.getElementById('content');
    content.innerHTML = `<img src='../resources/${recipient || 'default'}.jpg' alt='${recipient}' class="flex md:h-full"/>`;
});
const invalidRecipientMessage = `
    <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
        <div class="max-w-md w-full mx-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg text-center text-white">
            <h1 class="text-3xl font-semibold mb-3">No such name found</h1>
            <p class="mb-6 text-sm opacity-90">Please check the invite link or the recipient name and try again.</p>
            <a href="/" class="inline-block px-4 py-2 bg-white text-black rounded shadow hover:opacity-90">Okay</a>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const recipient = params.get('name'); // null if not present

    if (!recipient)
        return window.location.replace('/');

    // Check if link of '../resources/recipient.jpg' exists
    const url = `../resources/${recipient}.jpg`;
    fetch(url, { method: 'HEAD' })
        .then(res => {
            console.log(res);
            if (!res.ok) {
                const container = document.getElementById('main') || document.body;
                container.innerHTML = invalidRecipientMessage + container.innerHTML;
            } else {
                const image = document.getElementById('content');
                image.src = url;
                image.alt = recipient;
            }
        })
        .catch(() => {
            const container = document.querySelector('main') || document.body;
            container.innerHTML = invalidRecipientMessage;
        });
    return;
});
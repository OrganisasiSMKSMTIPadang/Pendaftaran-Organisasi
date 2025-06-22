fetch('https://organisasismksmtipadang.github.io/Pendaftaran-Organisasi/pendaftaran', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        nama: document.getElementById('nama').value,
        email: document.getElementById('email').value,
        telepon: document.getElementById('telepon').value,
        tanggal_lahir: document.getElementById('tanggal_lahir').value,
        organisasi: document.getElementById('organisasi').value,
        keahlian: document.getElementById('keahlian').value,
        motivasi: document.getElementById('motivasi').value,
    }),
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});

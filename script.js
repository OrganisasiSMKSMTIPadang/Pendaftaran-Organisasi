fetch('https://api.sheety.co/4b9a3b75d729af57d0205e4233c58625/dataPendaftaran/sheet1', {
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

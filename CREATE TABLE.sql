CREATE TABLE pendaftaran (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telepon VARCHAR(15) NOT NULL,
    organisasi VARCHAR(50) NOT NULL,
    keahlian TEXT,
    motivasi TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

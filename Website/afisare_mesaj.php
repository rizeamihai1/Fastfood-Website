<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Preia datele din formular
    $nume = $_POST['nume'];
    $prenume = $_POST['prenume'];
    $email = $_POST['email'];
    $telefon = $_POST['telefon'];
    $importanta = $_POST['importanta'];

    // Crează un array asociativ cu datele
    $data = array(
        'nume' => $nume,
        'prenume' => $prenume,
        'email' => $email,
        'telefon' => $telefon,
        'importanta' => $importanta
    );

    // Converteste array-ul în JSON
    $json_data = json_encode($data, JSON_PRETTY_PRINT);

    // Specifică calea fișierului JSON
    $file_path = 'date.json';

    // Verifică dacă fișierul există deja
    if (file_exists($file_path)) {
        // Preia conținutul existent și îl decodează
        $existing_data = json_decode(file_get_contents($file_path), true);
        // Adaugă noua intrare la datele existente
        $existing_data[] = $data;
        // Re-encodează datele
        $json_data = json_encode($existing_data, JSON_PRETTY_PRINT);
    } else {
        // Dacă fișierul nu există, creează un nou array
        $json_data = json_encode(array($data), JSON_PRETTY_PRINT);
    }

    // Scrie datele în fișier
    if (file_put_contents($file_path, $json_data)) {
        echo "Datele au fost salvate cu succes!";
    } else {
        echo "A apărut o eroare la salvarea datelor.";
    }
}
?>

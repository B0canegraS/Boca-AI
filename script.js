document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');
    
    if (userInput) {
        chatBox.innerHTML += `<div><strong>Usuario:</strong> ${userInput}</div>`;
        document.getElementById('user-input').value = '';

        // Aquí puedes agregar la lógica para llamar a tu API o procesar la entrada.
        const botResponse = "Esta es una respuesta genérica de Savio."; // Reemplaza esto con la lógica de AI.
        chatBox.innerHTML += `<div><strong>Savio:</strong> ${botResponse}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight; // Desplazarse hacia abajo.
    }
});

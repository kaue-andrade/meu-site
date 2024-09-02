document.getElementById('form_contato').addEventListener('submit', function(event){ // Define que o formulário irá ser enviado
// e as "funções" para que todo o processo ocorra normalmente. 

    event.preventDefault(); // Cancela o comportamento padrão de um evento

    document.getElementById('envioForm').textContent = 'Formulário enviado com sucesso!'; //Coleta o elemento e define 
    // o conteúdo que irá aparecer 

    document.getElementById('form_contato').reset(); // Reseta o formulário

});
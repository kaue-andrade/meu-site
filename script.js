document.getElementById('form_contato').addEventListener('submit', function(event){
    event.preventDefault();

    document.getElementById('envioForm').textContent = 'Formulário enviado com sucesso!';

    document.getElementById('form_contato').reset();


});
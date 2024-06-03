function orderBurger(burgerName) {
    alert(`Você pediu um ${burgerName}!`);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});

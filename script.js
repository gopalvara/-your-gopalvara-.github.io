function changeGreeting() {
    var nameInput = document.getElementById('name');
    var greetingElement = document.getElementById('greeting');

    if (nameInput.value !== '') {
        greetingElement.textContent = 'Hello, ' + nameInput.value + '!';
    } else {
        alert('Please enter your name.');
    }
}

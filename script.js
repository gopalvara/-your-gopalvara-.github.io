function changeGreeting() {
    var nameInput = document.getElementById('name');
    var greetingElement = document.getElementById('greeting');

    if (nameInput.value !== '') {
        greetingElement.textContent = 'Hello, ' + nameInput.value + '!';
    } else {
        alert('Please enter your name.');
    }
}
// Previous JavaScript (Keep as is)
// Add any previous JavaScript functions or logic here

function showPhoto(user) {
    // Hide all photos
    document.getElementById('mohith-photo').style.display = 'none';
    document.getElementById('tejabhasksar-photo').style.display = 'none';
    document.getElementById('ganesh-photo').style.display = 'none';
    document.getElementById('krishna-photo').style.display = 'none';
    document.getElementById('koushik-photo').style.display = 'none';

    // Show the selected user's photo
    document.getElementById(`${user}-photo`).style.display = 'block';
}

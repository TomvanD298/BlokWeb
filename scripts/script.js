// JavaScript Document
console.log("hi");

document.addEventListener('DOMContentLoaded', function() {
    // Wacht 3 seconden voordat je het plaatje laat vervagen
    setTimeout(function() {
        var imageContainer = document.getElementById('fade-screen');
        imageContainer.classList.add('fade-out');
    }, 4000);
});



    document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get the input values
    // const name = document.getElementById('name').value;
    // const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Encode the message, adding \n for line breaks
    const encodedMessage = encodeURIComponent(`${message}`);

    // Create the WhatsApp link
    const waLink = `https://wa.me/+2348021119479?text=${encodedMessage}`;

    // Open the WhatsApp link in a new tab
    window.open(waLink, '_blank');
});

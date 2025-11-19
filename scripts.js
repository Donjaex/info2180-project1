/* Add your JavaScript to this file */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the form and message div
    const form = document.querySelector('.newsletter form');
    const emailInput = document.getElementById('email');
    const messageDiv = document.querySelector('.newsletter .message');
    
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Get the email value and trim whitespace
        const email = emailInput.value.trim();
        
        // Check if email is empty
        if (email === '') {
            // Display error message
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
            // Display success message with the email
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            
            // Optionally clear the input field
            emailInput.value = '';
        }
    });
});
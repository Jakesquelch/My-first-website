// Add an event listener to the form with id "contact-form" for the "submit" event
document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Check if the form passes validation
    if (validateForm()) {
        // If form is valid, retrieve form data using FormData API
        const formData = new FormData(event.target);

        // Extract individual form fields from formData object
        const firstName = formData.get("first-name");
        const description = formData.get("description");
        const email = formData.get("email");
        const confirmEmail = formData.get("confirm-email");
        const phone = formData.get("phone");
        const contactMethod = formData.get("contact-method");
        const date = formData.get("date");

        // Construct confirmation message with form data
        const confirmationMessage = `First Name: ${firstName}\nDescription: ${description}\nEmail: ${email}\nPhone: ${phone}\nPreferred Contact Method: ${contactMethod}\nProject Date: ${date}\n\nTo: 230145458@aston.ac.uk`;

        // Display confirmation message and ask for user confirmation
        const confirmed = confirm(confirmationMessage + "\n\nIs the information correct?");

        // Display appropriate message based on user confirmation
        if (confirmed) {
            alert('Form submitted successfully!');
        } else {
            alert("Form submission cancelled.");
        }
    }
});

// Function to validate the form
function validateForm() {
    // Check if the date is valid
    if (!checkDate()) {
        return false;
    }

    // Check if email fields match
    if (!checkEmails()) {
        return false;
    }

    return true;
}

// Function to check if email fields match
function checkEmails() {
    // Get email values from input fields
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm-email").value;
    
    // Check if emails match
    if (email !== confirmEmail) {
        alert("Emails do not match.");
        return false;
    }

    return true;
}

// Function to check if selected date is at least 1 day in the future
function checkDate() {
    // Get selected date from input field
    const dateInput = document.getElementById("date").value;
    const currentDate = new Date();
    const selectedDate = new Date(dateInput);
    const timeDifference = selectedDate.getTime() - currentDate.getTime();
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    const daysDifference = Math.ceil(timeDifference / oneDay);

    // Check if selected date is at least 1 day in the future
    if (daysDifference < 1) {
        alert("Please select a date that is at least 1 day in the future.");
        return false;
    }

    return true;
}

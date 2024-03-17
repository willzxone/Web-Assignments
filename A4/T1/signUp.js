$(document).ready(function () {
    $('#signUpForm').submit(function (e) {
        e.preventDefault();

        if ($('#fullName').val().trim() === '') {
            alert('Full Name is required');
            return;
        }

        // Add more validations (email, password strength, etc.)

        // If all basic validations pass:
        $('#signUpForm')[0].submit();
    });
});

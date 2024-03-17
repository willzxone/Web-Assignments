$(document).ready(function () {
    $('#signInForm').submit(function (e) {
        e.preventDefault();

        if ($('#username').val().trim() === '') {
            alert('Username is required');
            return;
        }

        if ($('#password').val().trim() === '') {
            alert('Password is required');
            return;
        }

        // If all basic validations pass:
        $('#signInForm')[0].submit();
    });
});
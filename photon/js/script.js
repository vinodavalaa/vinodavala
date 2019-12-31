jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});
$("#Registration").validate({
    rules: {
        Email: {
            required: true,
            email: true
        },
        FirstName: "required",
        LastName: "required",
        Subject: "required",
        Select: "required",
        Message: "required"
    }
});
$('document').ready(function(){

	$(function() {
		$.validator.setDefaults({
			highlight: function (element){
				$(element).addClass('error')
			}
		})

		$("form[name='book-signup-form']").validate({
			rules: {
				"18-older": {
					highlight: function (element){
						$(element).siblings(".checkmark").addClass('error')
					}
				}
			},
			// error messages
			messages: {
			'first-name': "This field is required.",
			'last-name': "This field is required.",
			'email-address': "Please enter a valid email, e.g., example@domain.com",
			'street-address': "This field is required.",
			'city': "This field is required.",
			'state': "Please select an option.",
			'pcode': "This field is required.",
			'phone': "This field is required.",
			'18-older': "Please check this box to continue."
			},

			errorPlacement: function(error, element) {
				if (element[0].id != "18-older") {
					console.log(element[0].id);
					error.insertBefore(element);
				} else {
					error.insertBefore(".error-placer")
				}
			},
			
			submitHandler: function(form) {
			form.submit();
			}
		});
	});

});
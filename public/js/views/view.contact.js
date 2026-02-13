

(function($) {

	'use strict';

	if ($('#contact-form').get(0)) {

		var $form = $('#contact-form'),
			$submitButton = $form.find('input[type="submit"]'),
			$successMessage = $form.find('.contact-form-success'),
			$errorMessage = $form.find('.contact-form-error'),
			$errorText = $form.find('.mail-error-message');

		$form.validate({
			submitHandler: function(form) {
				
				// Show Loading State
				$submitButton.prop('disabled', true).val('Sending...');

				// Get form data
				var formData = new FormData(form);

				// Send via Web3Forms
				fetch('https://api.web3forms.com/submit', {
					method: 'POST',
					body: formData
				})
				.then(response => response.json())
				.then(data => {
					if (data.success) {
						console.log('SUCCESS!', data);
						
						// Show Success Message
						$successMessage.removeClass('d-none');
						$errorMessage.addClass('d-none');

						// Reset Form
						form.reset();
						$form.validate().resetForm();
						$form.find('.form-control').val('').parent().removeClass('has-success').removeClass('has-danger');
						
						// Reset Button
						$submitButton.prop('disabled', false).val('Submit Inquiry');

					} else {
						console.log('FAILED...', data);

						// Show Error Message
						$errorMessage.removeClass('d-none');
						$successMessage.addClass('d-none');
						$errorText.text('Error: ' + (data.message || 'Unknown error occurred.'));

						// Reset Button
						$submitButton.prop('disabled', false).val('Submit Inquiry');
					}
				})
				.catch(error => {
					console.log('ERROR...', error);

					// Show Error Message
					$errorMessage.removeClass('d-none');
					$successMessage.addClass('d-none');
					$errorText.text('Error: ' + (error.message || 'Network error occurred.'));

					// Reset Button
					$submitButton.prop('disabled', false).val('Submit Inquiry');
				});

				return false;
			}
		});
	}

}).apply(this, [jQuery]);

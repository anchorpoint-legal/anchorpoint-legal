

(function($) {

	'use strict';

	if ($('#contact-form').get(0)) {

		const emailjsConfig = {
			serviceID: 'service_65wu5d9',
			templateID: 'template_6zd06lp',
			publicKey: 'mSAvArSKacYGJ2qJl' 
		};

		var $form = $('#contact-form'),
			$submitButton = $form.find('.btn-modern'),
			$successMessage = $form.find('.contact-form-success'),
			$errorMessage = $form.find('.contact-form-error'),
			$errorText = $form.find('.mail-error-message');

		$form.validate({
			submitHandler: function(form) {
				
				// Show Loading State
				$submitButton.button('loading');

				// Check if EmailJS is loaded
				if (typeof emailjs === 'undefined') {
					console.error('EmailJS SDK not found. Please ensure the CDN script is included.');
					$errorMessage.removeClass('d-none');
					$errorText.text('EmailJS SDK not found. Please refresh and try again.');
					$submitButton.button('reset');
					return;
				}

				// Check if config is set
				if (emailjsConfig.serviceID === 'YOUR_SERVICE_ID') {
					console.warn('EmailJS not configured. Please follow instructions in EMAILJS_SETUP.md');
					$errorMessage.removeClass('d-none');
					$errorText.text('Contact form is not configured yet. Please follow the setup guide.');
					$submitButton.button('reset');
					return;
				}

				// Prepare template parameters
				var templateParams = {
					name: $form.find('input[name="name"]').val(),
					email: $form.find('input[name="email"]').val(),
					organization: $form.find('input[name="organization"]').val(),
					message: $form.find('textarea[name="message"]').val()
				};

				// Send via EmailJS
				emailjs.send(emailjsConfig.serviceID, emailjsConfig.templateID, templateParams, emailjsConfig.publicKey)
					.then(function(response) {
						console.log('SUCCESS!', response.status, response.text);
						
						// Show Success Message
						$successMessage.removeClass('d-none');
						$errorMessage.addClass('d-none');

						// Reset Form
						$form.find('.form-control').val('').blur().parent().removeClass('has-success').removeClass('has-danger');
						
						// Reset Button
						$submitButton.button('reset');

					}, function(error) {
						console.log('FAILED...', error);

						// Show Error Message
						$errorMessage.removeClass('d-none');
						$successMessage.addClass('d-none');
						$errorText.text('Error: ' + (error.text || 'Unknown error occurred.'));

						// Reset Button
						$submitButton.button('reset');
					});
			}
		});
	}

}).apply(this, [jQuery]);

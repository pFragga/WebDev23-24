document.addEventListener('DOMContentLoaded', function() {
	let form = document.getElementById('registrationForm');

	form.addEventListener('submit', function (event) {
		if (!form.checkValidity()) {
			event.preventDefault();
			// Handle validation errors
			alert('Please fill in all required fields correctly.');
		}
	});

	// Complex rules using Constraint Validation API
	let password = document.getElementById('password');
	let confirmPassword = document.getElementById('confirmPassword');
	let dob = document.getElementById('dob');
	let adInterest = document.getElementById('adInterest');

	password.addEventListener('input', function() {
		// Match two passwords
		if (confirmPassword.value && password.value !== confirmPassword.value) {
			confirmPassword.setCustomValidity('Passwords do not match.');
		} else {
			confirmPassword.setCustomValidity('');
		}
	});

	confirmPassword.addEventListener('input', function() {
		// Match two passwords
		if (password.value !== confirmPassword.value) {
			confirmPassword.setCustomValidity('Passwords do not match.');
		} else {
			confirmPassword.setCustomValidity('');
		}
	});

	dob.addEventListener('input', function() {
		// Check if the user is under 18
		let userDob = new Date(dob.value);
		let today = new Date();
		let age = today.getFullYear() - userDob.getFullYear();

		if (age < 18) {
			dob.setCustomValidity('You must be at least 18 years old to register.');
		} else {
			dob.setCustomValidity('');
		}
	});

	adInterest.addEventListener('input', function() {
		// Custom rule for the format of "Type of Advertisements Interested In"
		let validOptions = ['Ακίνητα', 'Αυτοκίνητα', 'είδη σπιτιού','Κατοικίδια','χομπι'];
		if (!validOptions.includes(adInterest.value)) {
			adInterest.setCustomValidity('Invalid option. Please choose from the list.');
		} else {
			adInterest.setCustomValidity('');
		}
	});
});

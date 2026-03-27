// Handle success flash messages via SweetAlert
const flashData = $('.flash-data').data('flashdata');
if (flashData && String(flashData).trim().length > 0) {
	Swal.fire({
		title: String(flashData).trim() + ' sukses',
		text: '',
		icon: 'success'
	});
}

// Handle error flash messages via SweetAlert
const flashDataError = $('.flash-data-error').data('flashdata-error');
if (flashDataError && String(flashDataError).trim().length > 0) {
	Swal.fire({
		title: 'Gagal!',
		text: String(flashDataError).trim(),
		icon: 'error'
	});
}

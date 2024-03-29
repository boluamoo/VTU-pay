const otpInputs = document.querySelectorAll('.otp-input input');

otpInputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    if (e.inputType === 'deleteContentBackward' && index > 0) {
      otpInputs[index - 1].focus();
    } else if (index < otpInputs.length - 1 && input.value) {
      otpInputs[index + 1].focus();
    }
  });
});

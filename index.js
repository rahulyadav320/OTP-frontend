window.onload = () => {
  document.getElementById('ist').focus();
};

const otpHandler = () => {
  document.getElementById('modal-container').style.display = 'block';
  document.getElementById('modal').style.display = 'block';
};

const pasteHandler = () => {
  document.getElementById('ist').value = '';
  setTimeout(async () => {
    const otp = await navigator.clipboard.readText();
    const regex = /\b\d{6}\b/gm;
    const filtOtp = otp.match(regex);

    if (filtOtp) {
      const vals = filtOtp[0].split('');
      document.getElementById('ist').value = vals[0];
      document.getElementById('second').value = vals[1];
      document.getElementById('third').value = vals[2];
      document.getElementById('fourth').value = vals[3];
      document.getElementById('fifth').value = vals[4];
      document.getElementById('sixth').value = vals[5];
      document.getElementById('sixth').focus();
    } else {
      console.log('error');
      document.getElementById('ist').value = '';
    }
  }, 0);
};

const clickEvent = (e, first, next, prev) => {
  if (first.value.length) {
    document.getElementById(next).focus();
  }
  if (e.keyCode == 8 && !e.target.value) {
    document.getElementById(prev).focus();
  }
  if (e.keyCode == 37) {
    document.getElementById(prev).focus();
  }
  if (e.keyCode == 39) {
    document.getElementById(next).focus();
  }
};

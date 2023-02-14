
  const form = document.getElementById('userform');
  const cnic = document.getElementById('cnic');
    const mobileNumber = document.getElementById('mobileNumber');
    const cnicError = document.getElementById('cnic-error');
    const mobError = document.getElementById('mob-error');

form.addEventListener('submit', (event) => {

 if (!/^[0-9]{5}-[0-9]{7}-[0-9]{1}$/.test(cnic.value)) {
    console.log('wrong');
    cnicError.style.display = 'block';
    event.preventDefault();
   } 
else {
    cnicError.style.display = 'none';    
   }

  if(mobileNumber.value.length!=11 )
  {
    mobError.style.display = 'block';
    event.preventDefault();

  }
  else {
    mobError.style.display = 'none';
  }
  
});
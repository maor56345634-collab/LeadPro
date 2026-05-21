// EmailJS lead form integration
emailjs.init("cKWF3k5--EFenLoM6");

function submitLead(event) {
  event.preventDefault();

  const nameInput = document.querySelector('input[placeholder*="ישראלי"]') || document.querySelector('input[placeholder*="שם"]');
  const phoneInput = document.querySelector('input[placeholder*="05"]') || document.querySelector('input[placeholder*="טלפון"]');
  const businessSelect = document.querySelector('select') || document.querySelector('input[placeholder*="עסק"]');
  const notesTextarea = document.querySelector('textarea');

  const templateParams = {
    name: nameInput ? nameInput.value : '',
    phone: phoneInput ? phoneInput.value : '',
    business: businessSelect ? businessSelect.value : '',
    notes: notesTextarea ? notesTextarea.value : ''
  };

  emailjs.send('service_lowtlws', 'template_u9wpz5c', templateParams)
    .then(function(response) {
      alert('הפנייה נשלחה בהצלחה!');
      const formFields = document.getElementById('form-fields');
      if (formFields) formFields.style.display = 'none';
      const successMessage = document.getElementById('success');
      if (successMessage) successMessage.style.display = 'block';
    }, function(error) {
      alert('שגיאה בשליחה, נסה שוב מאוחר יותר.');
      console.error('Error:', error);
    });
}

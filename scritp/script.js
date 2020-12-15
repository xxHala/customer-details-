window.addEventListener('DOMContentLoaded', (event) => {
  let personData = {};
  const mainForm = document.getElementsByClassName('form')[0];
  const personNameInputs = document.getElementsByClassName('person-name');
  const formInputs = document.getElementsByClassName('form-input');
  const personAddress = document.getElementsByClassName('street-add');
  const personPhone = document.getElementsByClassName('phone-number');
  const personEmail = document.getElementsByClassName('email');
  const personChoise = document.getElementsByClassName('Choise');
  const formHeder = document.getElementsByClassName('form-hed');
  const formFiled = document.getElementsByClassName('form-field');
  /**
     * Ignore spaces for target input
     * @param {*} event keydown event
     */
  function preventSpaces(event) {
    if (event.code === 'Space') {
      event.preventDefault();
    }
  }
  /**
     * Check for email format
     * @param {*} event keydown event
     */
  function ValidateEmail(event) {
    const email = personEmail[0].value;
    const lblError = document.querySelector('.lblError');
    lblError.innerHTML = '';
    const expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
      lblError.innerHTML = 'examble@examble.com';
      event.preventDefault();
    }
  }

  // prevent spaces for first name and last name
  for (let i = 0; i < personNameInputs.length; i++) {
    personNameInputs[i].addEventListener('keydown', preventSpaces);
  }

  for (let i = 0; i < personEmail.length; i++) {
    personEmail[i].addEventListener('keydown', ValidateEmail);
  }

  /**
       *  set message error and add class for the background when the validation faild
       * @param {input}  input input felid to be checked
       * @param {messge} String message to show when the validation faild
       * @return {*}
       */

  function showError(input, messge) {
    const er = document.getElementsByClassName('error-name');
    for (let i = 0; i < er.length; i++) {
      er[i].textContent = messge;
      er[i].style.cssText = 'visibility: visible';
    }
    const child = document.getElementsByClassName('required');
    for (let i = 0; i < child.length; i++) {
      child[i].parentElement.classList.add('fieldRequired');
    }
  }
  /** check for name if empty call for error function,
 * else call for succss
 * @param{}
 *
 */
  function checkname() {
    const fName = personNameInputs[0].value.trim();
    const lName = personNameInputs[1].value.trim();
    if (!fName && !lName) {
      showError(fName, 'This felid is required.');
    } else {
      personData = {
        ...personData,
        firstName: personNameInputs[0].value || '',
        lastName: personNameInputs[1].value || '',

      };
      console.log('PersonData', personData);
    }
  }
  document.getElementById('choise-op').addEventListener('change', function () {
    const style = this.value == 5 ? 'block' : 'none';
    document.getElementById('other').style.display = style;
  });
  /** validate address filed
 * check for address if empty  call for seterror
 * @param{}        console.log('focus', );
*/
  function checkaddress() {
    const streetaddress = personAddress[0].value;
    const cityaddress = personAddress[2].value;
    const state = personAddress[3].value;
    const postalcode = personAddress[4].value;
    if (!streetaddress || !cityaddress
          || !state || !postalcode) {
      showError(streetaddress, 'This felid is required');
    }
  }

  function checkphone() {
    const t = personPhone[0].value;
    if (t.length < 1) showError(t, 'This felid is required.');
  }

  function removeError() {
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].addEventListener('focus', () => {
        const prent = formInputs[i].closest('.form-field');
        if (prent.className.includes('fieldRequired')) {
          prent.classList.remove('fieldRequired');
        }
      });
    }
  }

  removeError();

  mainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkname();
    checkaddress();
    checkphone();
  });

  /*
        mainForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // if (hasErrors()) {
        //    checkname();
    checkaddress();
    checkphone();
        // }

        personData = {
            ...personData,
            firstName: personNameInputs[0].value || '',
            lastName: personNameInputs[1].value || '',

        };

        console.log('personData', personData);
        // code here
    }); */
});

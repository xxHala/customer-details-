window.addEventListener('DOMContentLoaded', (event) => {
  let personData = {};
  const mainForm = document.getElementsByClassName('form')[0];
  const personNameInputs = document.querySelectorAll('.person-name');
  const formInputs = document.querySelectorAll('.form-input');
  const personAddress = document.querySelectorAll('.street-add');
  const personPhone = document.querySelectorAll('.phone-number');
  const personEmail = document.querySelectorAll('.email');
  const personChoise = document.querySelector('.Choise');
  const Feedback = document.querySelector('.Feedback');
  const inputElements = document.getElementsByClassName('messageCheckbox');
  const suggest = document.querySelector('.sugg');
  let flag = false;

  /**
     * Ignore spaces for target input
     * @param {*} event keydown event
     */
  function preventSpaces(event) {
    if (event.code === 'Space') {
      event.preventDefault();
    }
  }
  // prevent spaces for first name and last name
  for (let i = 0; i < personNameInputs.length; i++) {
    personNameInputs[i].addEventListener('keydown', preventSpaces);
  }
  /**
  * allow only number from the user-input
  * @param {*} event keypdown event
  */
  personPhone.forEach((item) => {
    item.addEventListener('keydown', (event) => {
      const key = event.keyCode;
      if (key < 48 || key > 57) {
        event.preventDefault();
      }
    });
  });

  /**
 * show other if selected other from menu
 *@param {*} event Change event
 */
  personChoise.addEventListener('change', (event) => {
    const result = document.querySelector('.hideDiv');
    const valueSelect = personChoise.options[personChoise.selectedIndex].text;
    if (valueSelect === 'other (Please specify..)') {
      result.style.display = 'block';
    } else result.style.display = 'none';
  });

  /**
   * check for email validation
   * @param {*} void
   * @returns void
   */
  function validateEmail() {
    const email = document.querySelector('.email');
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=*?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(mailFormat) || email.value === '') {
      flag = true;
    }
  }
  /**
   * removing class on foucs for each felid
   * @param {*} event foucs
*/
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
  /**
 *  check for required fields update flag if true
 * @param {*} feild
 */
  function checkRequired(feild) {
    let flagRequire = false;
    document.querySelectorAll(feild).forEach((e) => {
      if (e.value === '') {
        const parnt = e.closest('.form-field');
        parnt.classList.add('fieldRequired');
        flagRequire = false;
      } else flagRequire = true;
    });
    return flagRequire;
  }
  /**
   * to retrive check-list value
   * @param{*}
   * @returns string CheckedValue
   */
  function inputElementValue() {
    let checkedValue = '';
    for (let i = 0; inputElements[i]; ++i) {
      if (inputElements[i].checked) {
        checkedValue = inputElements[i].value;
        break;
      }
    }
    return checkedValue;
  }
  /**
   * to detrmine Selected Option
   * @param{*} void
   * @returns String Choise from dorpdownlist
   */
  function GetSelectedText() {
    const result = personChoise.options[personChoise.selectedIndex].text;
    const finalChoise = result;
    return finalChoise;
  }
  /**
   * get table input values
   * @param{*}
   * @returns tableData
   */
  function GetTableRow() {
    let firstReference = {};
    let secoundReference = {};
    const tableD = document.querySelectorAll('.table-d input');
    firstReference = {
      firstReferenceName: tableD[0].value || '',
      firstReferenceAddress: tableD[1].value || ' ',
      firstReferenceNumber: tableD[2].value || ' ',
    };
    secoundReference = {
      secoundReferenceName: tableD[3].value || ' ',
      secoundReferenceAddress: tableD[4].value || ' ',
      secoundReferenceNumber: tableD[5].value || ' ',
    };
    const entries = Object.entries(firstReference);
    const entreisSecound = Object.entries(secoundReference);
    const tData = entries.concat(entreisSecound);

    return tData;
  }

  mainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateEmail();

    const nameRequired = checkRequired('.person-name');
    const streetAdressRequire = checkRequired('.street-add');
    const phonerequire = checkRequired('.phone-number');
    const choiseList = checkRequired('.Choise');
    if (nameRequired === true && streetAdressRequire === true && phonerequire === true && choiseList === true) {
      const option = GetSelectedText();
      const Check = inputElementValue();
      const tabelintres = { ...GetTableRow() };
      personData = {
        ...personData,
        firstName: personNameInputs[0].value,
        lastName: personNameInputs[1].value,
        streetaddress: personAddress[0].value,
        city: personAddress[1].value,
        state: personAddress[2].value,
        postalCode: personAddress[3].value,
        phoneNumber: personPhone.value,
        email: personEmail.value || ' ',
        howDidyouHearAboutUs: option,
        feedback: Feedback.value || ' ',
        Suggestions: suggest.value || ' ',
        WillingToRecommend: Check || ' ',
        Reference: tabelintres,
      };
      swal({
        title: 'Thank You',
        text: 'Your submission have been received',
        allowOutsideClick: true,
        confirmButtonText: 'Yes',
        type: 'success',
        showCancelButton: false,
        showConfirmButton: false,
        width: '400px',

      });
      console.log('personData', personData);
    }
  });
});

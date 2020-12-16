window.addEventListener('DOMContentLoaded', (event) => {
  let personData = {};
  const mainForm = document.getElementsByClassName('form')[0];
  const personNameInputs = document.querySelectorAll('.person-name');
  const formInputs = document.querySelectorAll('.form-input');
  const personAddress = document.querySelectorAll('.street-add');
  const personPhone = document.querySelectorAll('.phone-number');
  const personEmail = document.querySelectorAll('.email');
  const personChoise = document.querySelectorAll('.Choise');
  const formHeder = document.getElementsByClassName('form-hed');
  const formFiled = document.querySelectorAll('.form-field');

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
  * allow only number from the user-input
  * @param {*} event keypdown event
  */
personPhone.forEach(item => {
  item.addEventListener('keydown', event => {
      let key = event.keyCode;
      if (key < 48 || key > 57) {
          event.preventDefault();
      }
  }) });

  /** 
 * show other if selected other from menu
 *
 */
personChoise.forEach(e => {
  e.addEventListener('change',event=>{
    const otherDiv = document.querySelector('.hideDiv');
    const option = document.getElementById('choise-op');
    let value = option.value;
    if (value == '4') {
        option[5].text = "Other (Please specify...)"
        otherDiv.style.display = 'block';
    } else {
        option[5].text = "Other"
        otherDiv.style.display = 'none';
    }

  }
  
  )
});
/*
function checkOther() {
  const otherDiv = document.querySelector('.hideDiv');
  const option = document.getElementById('choise-op');
  let value = option.value;
  if (value == '4') {
      option[5].text = "Other (Please specify...)"
      otherDiv.style.display = 'block';
  } else {
      option[5].text = "Other"
      otherDiv.style.display = 'none';
  }

}*/
  /**
   * check for email validation 
   * @param {*} void
   * @returns void
   */
  function validateEmail(){
    const email=document.querySelector('.email')
    if(email.value==''){
        flag=true;
        personData[email.name]='email not provided!!';
    }
    else{
        const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.value.match(mailFormat)){
            flag=true;
        personData[email.name]=email.value;
        }   
  }
}
  /**
   * removing class on foucs for each felid 
   * @param {*} event foucs
*/
personAddress.forEach((e) => {
e.addEventListener('focus',()=>{
  const parnt=e.closest('.form-field');
     parnt.classList.remove('fieldRequired');
})
});

personPhone.forEach((e) => {
e.addEventListener('focus',()=>{
  const parnt=e.closest('.form-field');
     parnt.classList.remove('fieldRequired');
})
});

personEmail.forEach((e) => {
  e.addEventListener('focus',()=>{
const parnt=e.closest('.form-field');
parnt.classList.remove('fieldRequiredE');
});
});

function checkRequired(feild){
  const firstLastname={};
  document.querySelectorAll(feild).forEach((e) => {
      if (e.value == '') {
          const parnt=e.closest('.form-field');
          parnt.classList.add('fieldRequired');
          flag=false;
      }
      else{
          flag=true;
          personData[e.name]=e.value;
      }
  });
  return firstLastname;
}


let flag=false;
mainForm.addEventListener('submit', (e) => {
e.preventDefault();
const required=['.person-name','.street-add','.phone-number'];
required.forEach(feild=>checkRequired(feild));
validateEmail();

if(flag===true){
  console.log('personData', personData);
}


});

  /**
   * Igonore charcter for target input
   * 
   */
 
/** 
 * show other if selected other from menu
 *
 */
/*
personChoise.addEventListener('change', function () {
  const style = this.value == 5 ? 'block' : 'none';
  document.getElementById('other').style.display = style;
});
/*
  /**
     * Check for email format
     * @param {*} event keydown event
     */
    /*
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
/*
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
/*
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
 * 
 * @param {void}
 * @return {void}
 *
 */
/*
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

  /** validate address filed
 * check for address if empty  call for seterror
 * @param{}        console.log('focus', );
*/
/*
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
*/
  /*
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
*/
});

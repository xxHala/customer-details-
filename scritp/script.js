window.addEventListener('DOMContentLoaded', (event) => {

    let personData = {};
    const mainForm = document.getElementsByClassName('form')[0];
    const personNameInputs = document.getElementsByClassName('person-name');
    const personAddress = document.getElementsByClassName('street-add');
    const personPhone = document.getElementsByClassName('phone-number');
    const personEmail = document.getElementsByClassName('email');
    const personChoise = document.getElementsByClassName('Choise');
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
 *  check for email
 * @param {email} user input
 * @return {boolean}
 */

    function ValidateEmail(mail) 
    {        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
console.log(mail);
}
    
   
    
    /**
     * Checkoption , check for the list if the selected value is 'other' then display
     * the input box to the user
     * @param {*}  -selected option from the list
     * @return {void}
     */
    function Checkoption() {
            const other = document.querySelector('.other');
            const option = document.querySelector('.Choise');
            let value = option.value;
            if (value == '4') {
                option[5].text = "other (Please specify..) "
                other.style.display = 'inline-block';
            }
            else {
                option[5].text = "other"
                other.style.display = 'none';
            }
        
        }


        for (let i = 0; i < personEmail.length; i++) {
    personEmail[i].addEventListener('keydown',ValidateEmail);
        }
    // adding color on focusing
    for (let i = 0; i < formFiled.length; i++) {
        formFiled[i].addEventListener('mousedown', changeStyle);
    }

    // prevent spaces for first name and last name
    for (let i = 0; i < personNameInputs.length; i++) {
        personNameInputs[i].addEventListener('keydown', preventSpaces);
    }

  
    function checkInputs() {
    
        // trim to remove the whitespaces
        let usernameValue = personNameInputs[0].value;
        let userlastnameValue=personNameInputs[1].value;
        if(usernameValue === ''&& userlastnameValue==='') {
            setErrorFor(username, 'This felid is required');
        } else {
console.log("notempty")        }
    }
    
    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-field error';
        small.innerText = message;
    }
   
        
    mainForm.addEventListener('submit', e => {
        e.preventDefault();
        
        checkInputs();
    });
    /*
        mainForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // if (hasErrors()) {
        //   return
        // }
        checkInputs();

        personData = {
            ...personData,
            firstName: personNameInputs[0].value || '',
            lastName: personNameInputs[1].value || '',

        };

        console.log('personData', personData);
        // code here
    });*/
});
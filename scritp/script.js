window.addEventListener('DOMContentLoaded', (event) => {

    /**
     * Checkoption , check for the list if the selected value is 'other' then display
     * the input box to the user
     * @param {string} val -selected option from the list
     * @return {void}
     */
    function Checkoption(val) {
        const element = document.getElementById('other');
        if (val === '1' || val === '5') element.style.display = 'block';
        else element.style.display = 'none';
    }

    /**
     * Ignore spaces for target input
     * @param {*} event keydown event
     */
    function preventSpaces(event) {
        if (event.code === 'Space') {
            event.preventDefault();
        }
    }



    let personData = {};
    const mainForm = document.getElementsByClassName('form')[0];
    const personNameInputs = document.getElementsByClassName('person-name');
    const personAddress = document.getElementsByClassName('street-add');
    const personPhone = document.getElementsByClassName('phone-number');
    const personEmail = document.getElementsByClassName('email');
    const personChoise = document.getElementsByClassName('Choise');
    const formFiled = document.getElementsByClassName('form-field');


    function validateNum(event) {
        if (personPhone === '') {
            document.getElementsByClassName('error')[2].classList.add('hidden');
        } else {
            document.getElementsByClassName('error')[2].classList.remove('hidden');
        }
    }

    // adding color on focusing
    for (let i = 0; i < formFiled.length; i++) {
        formFiled[i].addEventListener('mousedown', changeStyle);
    }

    // prevent spaces for first name and last name
    for (let i = 0; i < personNameInputs.length; i++) {
        personNameInputs[i].addEventListener('keydown', preventSpaces);
    }

    function isEmail(emailValue) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    function checkInputs() {
        // trim to remove the whitespaces
        const nameValue = personNameInputs[0].value.trim();
        const lastnameValue = personNameInputs[1].value.trim();
        const emailValue = personEmail.value.trim();
        const phone = personPhone.value.trim();

        if (nameValue === '' && lastnameValue === '') {
            document.getElementsByClassName('error')[2].classList.add('hidden');
        } else {
            document.getElementsByClassName('error')[2].classList.remove('hidden');
        }

        if (emailValue === '') {
            document.getElementsByClassName('error')[2].classList.add('hidden');
        } else if (!isEmail(emailValue)) {

        } else {
            document.getElementsByClassName('error')[2].classList.remove('hidden');
        }

        if (phone === '') {
            document.getElementsByClassName('error')[2].classList.add('hidden');
        } else {
            document.getElementsByClassName('error')[2].classList.remove('hidden');
        }


    }

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
    });
});
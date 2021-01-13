let phonenumber = document.getElementById('phonenumber');
phonenumber.addEventListener('click',NumberValidate)


function NumberValidate(){
  let phNum = prompt('Enter the Bangladeshi Phone Number')

if(/^(\+88)?010[0-9]{3,}$/.test(phNum)){
    alert(`${phNum} is Not a Valid Numbers.`);
}else{
      switch(true){
          
        case (/^(\+88)?01[0-9]{9}$/.test(phNum)):
          alert(`${phNum} is a Valid Operators Numbers.`);
          break;
        case (/^(\+88)?096[0-9]{8}$/.test(phNum)):
          alert(`${phNum} is Telephony Service Providers Numbers.`)
          break;
        case (/^(\+88)?0[1-9][0-9]{5,9}$/.test(phNum)):
          alert(`${phNum} is BTCL line number`);
          break;
        default:
          alert('Hola  hoinai');
          break;
      }
  }
}

let PostalCode = document.getElementById('postalCode');
PostalCode.addEventListener('click', PostalCodeCheck);

function PostalCodeCheck() {
    let pc = prompt('Enter the  postal code you wanna check!!!');
    if (pc === '0000') {
        alert('invaild postal code')
    }else{
        if (/^[0-9]{4}$/.test(pc)) {
            alert(`${pc} valid Postal Code!!!`)
        }else{
            alert(`Invalid!!Enter the right One.`)
        }
    }
    
}

let EmailCheck = document.getElementById('emailcheck');
EmailCheck.addEventListener('click', EmailChecker);

function EmailChecker() {
    let Ec = prompt('Enter the Email Address you wanna check...');
    
        switch (true) {
            case (/([a-zA-Z0-9]){3,}@gmail[\.]com$/.test(Ec)):
                alert(`${Ec} is  valid`);
                break;
            // case (/^([a-zA-Z0-9\.?]){3,}@[A-Za-z]{3,}[\.][a-zA-Z]{2,3}[\.][a-zA-Z]{2}$/.test(Ec)):
            //     alert(`1 ${Ec} is  valid`);
            //     break;
            case (/^([a-zA-Z0-9\.?])+@([a-zA-Z0-9]\.?)+$/.test(Ec)):
                alert(`${Ec} is valid`);  
                break;

            default:
                alert(`Invalid Email...!!!`)
                break;
        }
}
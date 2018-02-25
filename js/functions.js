//Función que devuelve un booleano al validar algoritmo Luhn.
let validateLuhn = numberCard => {
  //numberCardValid: 49927398716
  let arrayCard = Array.from(numberCard);
  let stringToNumber = arrayCard.reverse().map( item =>  parseInt(item))
  //En el arreglo stringToNumber, se tienen los números invertidos.
  let multiplyTwo = [];
  let resMultiply = 0;
  for (var index in stringToNumber) {
    if (index % 2){
      resMultiply = stringToNumber[index]*2;
      if (resMultiply>=10){
        multiplyTwo.push(resMultiply-9);
      }else{
       multiplyTwo.push(resMultiply);
      }
    }else{
      multiplyTwo.push(stringToNumber[index]);
    }
  }
  //Verificando que el número es correcto (true), de lo contrario (false).
  let sumDigits = multiplyTwo.reduce((previous, current) => previous + current, 0);
  if (sumDigits % 10 === 0){
    return true//True q entra en la función que valida (validateCardDetails).

  }else{
    let element = document.querySelector('#cn');
    element.className +='error';
    return false//False q entra en la función que valida (validateCardDetails).

  }

}
//Función que devuelve un booleano al validar la fecha.
let validateDate = numberDate => {
  numberDate = parseInt(numberDate);//De tipo str a number
  return true
}
//Función que devuelve un booleano cvv.
let validateCvv = numberCvv => {
  numberCvv = parseInt(numberCvv);//De tipo str a number
  return true
}
//Función que devuelve un booleano al validar el nombre
let validateName = numberName => {
  return true
}

//Función que limpia campos del form.
let cleanFields = () => {
  let fieldCn = document.querySelector('#cn');
  let fieldExp = document.querySelector('#exp');
  let fieldCvv = document.querySelector('#cvv');
  let fieldName = document.querySelector('#name');
  fieldCn.value = '';
  fieldExp.value = '';
  fieldCvv.value = '';
  fieldName.value = '';
}

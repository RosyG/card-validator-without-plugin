const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");

  }
});
//Función que devuelve los valores de los campos.*
let returnArrayValues = elementInput => {
  const newArrayFrom =[];
  Array.from(elementInput).forEach(fields => newArrayFrom.push(fields.value))
  return newArrayFrom
}

let validateCardDetails = element => {
  let ArrayValues = [];//Array que contendra lo que devuelva la función returnArrayValues
  ArrayValues = returnArrayValues (element);//Devuelve un array con los valores introducidos por el us.
  let booleanLunh = validateLuhn (ArrayValues[0]);//Pasando como parámetro el valor del campo que valida tarjeta.
  let booleanDate = validateDate (ArrayValues[1]);//Pasando como parámetro el valor del campo que contiene fechea.
  let booleanCvv = validateCvv (ArrayValues[2]);//Pasando como parámetro el valor del campo que contiene CVV.
  let booleanName = validateName (ArrayValues[3]);//Pasando como parámetro el valor del campo que contiene el nombre.
  cleanFields(); //Limpiando los campos después de obtener su value.

  if (booleanLunh && booleanDate && booleanCvv && booleanName) {
    return true
  }else {
    return false
  }
}

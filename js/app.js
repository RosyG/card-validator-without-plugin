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
  let booleanLunh = validateLuhn (ArrayValues[0]);
  let booleanDate = validateDate (ArrayValues[1]);
  let booleanCvv = validateCvv (ArrayValues[2]);
  let booleanName = validateName (ArrayValues[3]);

  if (booleanLunh && booleanDate && booleanCvv && booleanName) {
    return true
  }else {
    return false
  }
}

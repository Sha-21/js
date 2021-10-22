function calculatrice(nombre1, nombre2, operande)
{
  let input = document.calc.affichage.value;
  let result = eval(input);
  input += '=' + result;
  document.calc.affichage.value = input;
}

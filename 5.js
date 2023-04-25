/*
Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
*/
let arr = ['JS', false, 345];
console.log(arr.length);

arr.forEach(function(item, index, array){
  console.log(item);
})
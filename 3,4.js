// 3. Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
let str = "Hello";
console.log(str.split("").reverse().join(""));

// 4. Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
let numb = Math.floor(Math.random() * 101);
console.log(numb);
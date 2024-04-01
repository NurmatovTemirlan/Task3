//! Задание №1
// Дан массив ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"]. Выведите в консоль имена Mirdin и Aliia с помощью цикла for
let arr = ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == "Mirdin" || arr[i] == "Aliia") {
    console.log(arr[i]);
  }
}
//! Задание №2
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for
let arr2 = [];
for (let i = 1; i <= 10; i++) {
  arr2.push(i);
}
console.log(arr2);

//! Задание №3
// Выведите в консоль все числа в промежутке с 50 до 99 включительно с помощью цикла.
for (let i = 50; i <= 99; i++) {
  if (i > 0) {
    console.log(i);
  }
}
//! Задание №4
// Выведите те же числа, но уже в обратном порядке, т.е. с 99 до 50.
for (let i = 99; i >= 50; i--) {
  console.log(i);
}
//! Задание №5
// Найдите самый длинный элемент массива и выведите в консоль
// ["pen", "pineapple", "apple", "pen"]
let arr3 = ["pen", "pineapple", "apple", "pen"];
let arr4 = arr3.sort((a, b) => b.length - a.length);
let arr5 = arr4.shift();
console.log(arr5);

//! Задание №6
// Так же найдите самый короткий элемент этого же массива
let arr6 = ["pen", "pineapple", "apple", "pen"];
let arr7 = arr6.sort((a, b) => a.length - b.length);
let arr8 = arr7.shift();
console.log(arr8);

//! Задание №7
// Выведите в консоль все элементы с четными индексами.
// [1,2,3,4,5,6,7,8,9]
let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 1; i < arr9.length; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
//! Задание №8
// Дан двумерный массив. Выведите в консоль все элементы.
// [[1,2], [3,4], [5,6]]
let arr10 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (let i = 0; i < arr10.length; i++) {
  for (let j = 0; j < arr10[i].length; j++) {
    console.log(arr10[i][j]);
  }
}

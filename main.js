/*
    TASK 1

    Вывести в консоль с помощью цикла  WHILE, все нечетные числа от 30 до 40

*/

// var i = 30;

// while (i < 40) {
//     i++;
//     if (i%2)
//     console.log(i);
// }


/*
    TASK 2

    Вывести в консоль с помощью цикла FOR, все четные числа от 70 до 40.
    Первым четным числом должно быть 70. 
    
*/

// for (var x = 70; x >= 40; x--) {
//     if (x%2 !=0) continue;
//     console.log(x)
// }

/*
    TASK 3

    Переведите цикл FOR из задания 2, в цикл WHILE.  
    
*/

// var x = 71;

// while (x >= 40) {
//     x--;
//     if(x%2 !=0) continue;
//     console.log(x);
// }

/*
    TASK 4

    С помощью любого известного Вам цикла из JavaScript, 
    найдите сумму чисел от 1 до 100, и выведите результат в консоль.   
    
*/

// var sum = 0;
// for (var x = 1; x <=100; x++) {
//     sum += x;
//     console.log(sum)
// }
/*
    TASK 5

    Вывести 10 строчек со смайликом : ':)'. 
    На первой строчке один смайлик, на второй два,и так далее. 
    На последней должно быть 10 смайликов.   
    
*/

// var x = ':)';

// for (var i = 0; i < 9; i++) {
//     console.log(x);
//     x += ':)';
// }
// console.log(x);

/*
    TASK 6

    Напишите программу, которая выводит на экран числа от 1 до 50. 
    При этом вместо чисел, кратных трем, программа должна выводить слово «Java»,
    а вместо чисел, кратных пяти — слово «Script». 
    Если число кратно и 3, и 5, то программа должна выводить слово «JavaScript»   
    
*/

// 2 Варианта, но почему то работает только второй


// Первый вариант :

// for (var x = 1; x < 51; x++) {
//     if (x % 3 === 0) {
//         console.log('Java');
//     } else if (x % 5 === 0) {
//         console.log('Script');
//     } else if (x % 3 === 0 && x % 5 === 0) {
//         console.log('JavaScript');
//     } else {
//         console.log(x);
//     }
// }    

// Второй вариант выдает правильно:

// for (var x = 1; x < 51; x++) {
//     if (x % 3 === 0 && x % 5 === 0) {
//         console.log('JavaScript');
//     } else if ( x % 3 === 0) {
//         console.log('Java');
//     } else if (x % 5 === 0) {
//         console.log('Script');
//     } else {
//         console.log(x);
//     }
// }    


/* 
    TASK 7
    У нас есть число 1000
    Делите его на 2 столько раз, пока результат деления не станет меньше 50.
    Посчитайте количество итераций необходимых для выхода из цикла 
    и выведите результат в консоль

*/

// var x = 1000;
// var count = 0;
// while (x > 50) {
//     (x /= 2);
//     count++;
// } console.log(count)


/*
    TASK 8
    Напишите программу, которая используя цикл while 
    выведет все числа от 45 до 170, кратные 10.

*/

// var x = 45;

// while (x < 170) {
//     x++;
//     if (x % 10 == 0) {
//         console.log(x);
//     } else {
//         continue;
//     }
// } 

/*
    TASK 9
    Напиши программу, которая используя любоге известное Тебе цикла
    выведет 3 раза в консоль 3 последовательные цифры.
		
		Пример:
		
		5 6 7
		8 9 10
		11 12 13

*/


// var startNumber = 1;


// for (var i = 0; i < 3; i++) {
//     var x = '';
//     for (var j = 0; j < 3; j++) {
//         x += (startNumber + j) + ' ';
//     }
//     console.log(x);
//     startNumber += 3; 
// }
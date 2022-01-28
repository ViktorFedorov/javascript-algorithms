/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function isPrime(n) {
    if (n > 1) {
        let countOfDividers = 0

        for (let i = 1; i <= n; i++) {
            if (n%i === 0 && n%n === 0) countOfDividers++
        }

        return  countOfDividers === 2
    }

    return false
}

function primes(num) {
    const primesNums = []

    // воспользуемся функцией из 9й задачи для проверки числа на простое
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) primesNums.push(i)
    }

    return primesNums
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
// Запросить у пользователя 2 числа(число, степень) после чего 
// вывести ему результат во всплывающем окне


// Основная функция mainFunction
// 1. Пишем функцию, которая принимает в качестве параметра callback.
// 2. В теле функции вам нужно написать код, который будет запрашивать у юзера 2 числа — 
// эти числа должны храниться в разных переменных.
// 3. Также в теле функции нужно вызвать callback, который вы передаете в качестве аргумента. 
// 4. При вызове callback в него нужно передать аргументами те 2 числа, которые вы запрашивали
//  у пользователя ранее.

const mainFunction = ((callback) => {
	const num = prompt("Enter any number, please")
	if (!checkNumber(num)) return "You have entered invalid data"
	const pow = prompt("Enter any number of power, please")
	if (!checkNumber(pow)) return "You have entered invalid data"
	callback(num, pow)
})

// Callback функция exponentiation
// Эта функция будет передаваться в mainFunction в качестве аргумента
// 1. Функция должна принимать 2 параметра: те числа, которые мы ей передаем в основной функции
//  в пункте 4 «Основной функции».
// 2. В теле функции нам нужно возвести число в степень и записать результат этой операции в переменную. 
// 3. Также в теле функции нужно написать код, который будет выводить пользователю результат
//  во всплывающем окне.

const exponentiation = ((a, b) => {
	const result = Math.pow(a, b)
	return alert(result)
})

const mult = ((a, b) => {
	const result = a * b
	return alert(result)
})

const dev = ((a, b) => {
	const result = a / b
	return alert(result)
})

const mod = ((a, b) => {
	const result = a % b
	return alert(result)
})

// —————
// После написания этих функций необходимо вызвать «Основную функцию»  и ей в качестве аргумента 
// передать callback функцию(по имени — не вызывая)



console.log(mainFunction(exponentiation));
// console.log(mainFunction(mult));
// console.log(mainFunction(dev));
// console.log(mainFunction(mod));




//---------------------------------CHECK FUNCTION---------------------------------------
function checkNumber(numb) {
	return (numb && numb.trim() && typeof (+numb) === "number" && !isNaN(+numb)) ? true : false
}
//----------------------------------------------------------------------------------------
// var twoSum = function (nums, target) {

//     // nums = [], 
//     for (let i = 0; i < nums.length; i++) {
//         for (let a = i + 1; a < (nums.length - 1); i++) {
//             if (nums[i] + nums[a] === target) {
//                 console.log(`${nums[i]}, ${nums[a]}`)
//                 return `${nums[i]}, ${nums[a]}`
//             }
//         }
//     }

// }
// twoSum(nums);
// let str = "IVXLCDM"
// let i = str.charCodeAt(0)
// let v = str.charCodeAt(1)
// let x = str.charCodeAt(2)
// let l = str.charCodeAt(3)
// let c = str.charCodeAt(4)
// let d = str.charCodeAt(5)
// let m = str.charCodeAt(6)

// let romanNumerals = function () {
//     console.log(i)
//     console.log(v)
// }


// romanNumerals();



// let strs = str.split('');
// count = 0
// highestCount = 0
// console.log(strs)
// for (i = 0; i < strs.length; i++) {
//     count++
//     if (count >= highestCount) {
//         highestCount = count
//     }
//     if (strs[i] === strs[i + 1]) {
//         count -= 1
//         if (count > highestCount) {
//             highestCount = count;
//             count = 0
//         }
//         count = 0
//     }
//if(current !== next && count > highestCount){
//     highestCount = count
//     count = 0
// }

// }
// console.log(highestCount)

// example1 = 'jcbbccjkft'

// stringLength = (str) => {

//     for (i = 0; i < str.length; i++) {
//         let str1 = str.substring(0, i)
//         console.log(str1)
//         let newStr = str1.split('');
//         console.log(newStr)
//         for (k = 0; k < newStr.length; k++)
//             for (j = 0; j < newStr.length; j++) {
//                 if (newStr[k]) {

//                 }
//             }
//     }
// }
// console.log(example1)
// stringLength(example1);

// stringLength = (str) => {

//     let strs = str.split('');
//     count = 0
//     highestCount = 0
//     console.log(strs)
//     for (i = 0; i < strs.length; i++) {
//         count++
//         if (count >= highestCount) {
//             highestCount = count
//         }
//         if (strs[i] === strs[i + 1]) {
//             count -= 1
//             if (count > highestCount) {
//                 highestCount = count;
//                 count = 0
//             }
//             count = 0
//         }
//     }
//     console.log(highestCount)
// }

// let example2 = ['1', '2', '5', '5', '6', '7', '9', '9', '9', 'a', 'b', 'b']

// removeDuplicates = (arr) => {
//     // console.log(arr[2])
//     // dupArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             // dupArr.push(arr[i])
//             arr.splice(i, 1);
//             // console.log(arr[i])
//             // for time and space complexity splicing this array to avoid creating a new one is better

//         }
//     }
//     console.log(arr)
//     return arr
// }


// removeDuplicates(example2)
// setTimeout(removeDuplicates(example2))

// let word = "hello i'm jayden smith"

// jaydenSmithCase = (str) => {
//     let wordArray = str.split(' ');
//     for (let i = 0; i < wordArray.length; i++) {
//         let letterArray = wordArray[i].split('')
//         letterArray[0] = letterArray[0].toUpperCase()
//         let newWord = letterArray.join('')
//         wordArray[i] = newWord
//         // console.log(newWordArray)
//         // console.log(phrase)
//         // console.log(newWord)
//     }
//     console.log(wordArray.join(' '))
// }
// jaydenSmithCase(word);
// function missingAngle(angle1, angle2) {
//     let missAngle = 180 - (angle1 + angle2)
//     return (missAngle < 90 ? "acute"
//         : missAngle === 90 ? "right"
//             : "obtuse")
// }
// console.log(missingAngle(15, 86));

// let arr = [20, 5, 14, 200, 199, 301, 50, 10]
// let largest = []
// function findLarge(arr) {
//     for (let i = 0; i <= arr.length - 1; i++) {
//         if (arr[i] >= largest) {
//             largest = arr[i]
//         }
//     }
//     return largest
// }
// console.log(arr)
// findLarge(arr)
// console.log(largest)



// function nameShuffle(str) {
//     let name = str.split(" ")
//     let firstName = name.shift()
//     name.push(firstName)
//     let fullName = name.toString()
//     let correctName = fullName.replace(",", " ")
//     console.log(correctName)
//     return correctName
// }
// function nameShuffle(str){
//     let string = str.split(" ")

//     return string[1] + " " + string[0]
//   }
// nameShuffle('donald trump')

// let arr = [5, 15, 25, 300, 4000]
// let length = 2

// function digits(arr, length) {
//     let newArr = arr.filter(num => num.toString().length === length)
//     console.log(newArr)
//     return newArr
// }

// digits(arr, length)

// let nums = []

// function allPrime(nums) {
//     let prime = true
//     nums.forEach(e => {
//         if (e === 1) {
//             prime = false
//         }
//         else if (e === 2) {
//             prime = true
//         }
//         else {
//             for (let i = 2; i < e; i++) {
//                 if (e % i === 0) {
//                     prime = false
//                 }
//             }
//         }
//     })
//     return prime
// }
// console.log(allPrime(nums))

// [0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
//     return accumulator + currentValue
// })
// let change = [4, 10, 20, 100]
// let change2 = 60
// let reducer =
//     (accumulator, currentValue, currentIndex, array) => {
//         if (currentIndex === 0) {
//             currentValue = currentValue * .25
//             return accumulator + currentValue
//         }
//         else if (currentIndex === 1) {
//             currentValue = currentValue * .1
//             return accumulator + currentValue
//         }
//         else if (currentIndex === 2) {
//             currentValue = currentValue * .05
//             console.log(accumulator)
//             return accumulator + currentValue
//         }
//         else if (currentIndex === 3) {
//             currentValue = currentValue * .01
//             console.log(accumulator)
//             return accumulator + currentValue
//         }
//     }

// console.log(change.reduce(reducer, 0))

// function changeEnough(change, amountDue) {
//     let [a, b, c, d] = change
//     return amountDue <= a * .25 + b * .1 + c * .05 + d * .01
// // }
// let nums = [5, 3, 6, 8, 9, 50]
// function difference(nums) {
//     nums.sort((a, b) => a - b)
//     let diff = nums[nums.length - 1] - nums[0]
//     return diff
// }
// console.log(difference(nums))
// arr = [5, 15, 1, 4, 3, 8]
// function noOdds(arr) {
//     let newArr = []
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             newArr.push(arr[i])
//         }

//     }
//     console.log(newArr)
//     return newArr
// }

// // noOdds(arr);
// let word = 'beau-ti-ful'
// function numberSyllables(word) {
//     let newWord = word.split('-')
//     return newWord.length
// }

// console.log(numberSyllables(word))
// let object = {
//     c: 5,
//     b: 10,
//     a: 1
// }

// let newObj = Object.keys(object)
// for (let key in object) {
//     let value = object[key]
//     console.log(value)
// }
// newObj.sort(function (a, b) {
//     if (a < b) {
//         return -1
//     }
//     if (a > b) {
//         return 1
//     }
//     return newObj
// })

// console.log(newObj)
// let arr1 = [10, 2, 5, 1]
// let arr2 = [0, 6, 2, 9]
// function nestedArray(arr1, arr2) {
//     let newArr1 = arr1.sort(function (a, b) {
//         if (a < b) {
//             return -1
//         }
//         if (a > b) {
//             return 1
//         }
//     })
//     console.log(newArr1)
//     let newArr2 = arr2.sort(function (a, b) {
//         if (a < b) {
//             return -1
//         }
//         if (a > b) {
//             return 1
//         }
//     })
//     console.log(newArr2)
//     if (newArr1[0] > newArr2[0] && newArr1[newArr1.length - 1] < newArr2[newArr2.length - 1]) {

//         return true
//     }

//     return false
// }

// nestedArray(arr1, arr2)

// arr = [5, 3, -6, 8]
// newArr = []
// function additiveInverse(arr) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             let num = arr[i] * (-1)
//             newArr.push(num)
//         }
//         else {
//             let num = arr[i] * (-1)
//             newArr.push(num)
//         }
//     }
//     console.log(arr)
//     console.log(newArr)
// }
// additiveInverse(arr)

// let args = [[1, 2, 3], [4, 5]]
// function concat(...args) {
//     let newArr = args.flat(2)

//     // console.log(args.flat(2))
//     console.log(newArr)
//     return args
// }
// concat(args)

// let n = 6
// function triangle(n) {
//     let sum = 0
//     for (i = 0; i < n; i++) {
//         sum += (i + 1)
//         console.log(sum)
//     }
//     return sum
// }
// triangle(n)
// let num = 1111
// function isRepdigit(num) {
//     if (num !== 0) {
//         let arr = num.toString().split('')
//         console.log(arr)
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] !== arr[i + 1]) {
//                 return false
//             }
//             return true
//         }
//     }

//     return true
// }

// isRepdigit(num)
// let arr = [true, false, false, true, true, true]
// function countTrue(arr) {
//     let sum = 0
//     arr.forEach(e => (e) ? sum++ : sum)
//     console.log(sum)
//     return sum
// }

// countTrue(arr)
// let arr = [1, 52, 1, 2, 463, 2]
// let newArr = []
// function numberLenSort(arr) {
//                 for (let i = 1; i <= Math.max(...arr).toString().length; i++) {
//                     for (let j = 0; j < arr.length; j++) {
//                         if (arr[j].toString().length === i) {
//                             newArr.push(arr[j])
//                         }
//                     }
//                 }
//                 return newArr
// }
// numberLenSort(arr)
//     }))
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j <= Math.max(...arr).toString().length; j++)
//             if (arr[i].toString().length === j) {
//                 newArr.push(arr[i])  
//             }
//     }
//     console.log(newArr)
//     console.log(arr)
//     return newArr

// numberLenSort(arr)
// let sentence = 'Hey its Nemo !'
// function findNemo(sentence) {
//     let newSentence = sentence.split(' ')
//     console.log(newSentence)
//     console.log(newSentence[0].toString())
//     console.log("Nemo")
//     for (let i = 0; i < newSentence.length; i++) {
//         if (newSentence[i] === "Nemo") {
//             return `I found Nemo at ${i + 1}!`
//         }
//     }
//     return "I can't find Nemo :("

// }
// findNemo(sentence)

// function calculator(num1, operator, num2) {
//     let result = (operator === '+' ? num1 + num2
//         : operator === '-' ? num1 - num2
//             : operator === '/' ? num1 / num2
//                 : operator === '*' ? num1 * num2
//                     : operator === '/' && num2 === 0 ? "Can't divide by 0" : operator)
//     return result
// }

// let missAngle = 180 - (angle1 + angle2)
//     return (missAngle < 90 ? "acute"
//         : missAngle === 90 ? "right"
//             : "obtuse")

// let arr = [3, 7, 3, 1, 5, 1, 2, 2, -2, 2]
// function countBoomerangs(arr) {
//     let boomerangs = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (JSON.stringify(arr[i]) === JSON.stringify(arr[i + 2]) && JSON.stringify(arr[i + 1]) !== JSON.stringify(arr[i])) {
//             boomerangs += 1
//         }
//     }
//     console.log(boomerangs)
// }

// countBoomerangs(arr)
// let num = 4433
// function oddishOrEvenish(num) {
//     let num1 = num.toString().split('')
//     let sum = 0
//     for (let i = 0; i < num1.length; i++) {
//         sum += parseInt(num1[i])
//     }
//     if (sum % 2 > 0) {
//         return "Oddish"
//     }
//     return 'Evenish'
// }
// oddishOrEvenish(num)

// let date1 = 'June 14, 2019'
// let date2 = 'June 20, 2019'
// function getDays(date1, date2) {
//     let start = new Date(date1)
//     let end = new Date(date2)
//     console.log(start)
//     console.log(end)
//     let days = (end - start) / (1000 * 60 * 60 * 24)
//     console.log(days)
//     return days
// }
// getDays(date1, date2)
// let arr = [1, [2, 3, [5, 3]]]
// function getLength(arr) {
//     let newArr = arr.flat(Infinity)
//     console.log(newArr)
//     let elements = newArr.length
//     return elements
// }
// getLength(arr)

// let deg = "1°C"
// function convert(deg) {
//     if (deg.endsWith('F')) {
//         let fah = deg.slice(0, -2)
//         let cel = parseFloat((fah - 32) * (5 / 9))
//         cel = Math.round(cel)
//         return cel.toString() + '°C'
//     }
//     else if (deg.endsWith('C')) {
//         let cel = deg.slice(0, -2)
//         let fah = parseFloat(cel * (9 / 5) + 32)
//         fah = Math.round(fah)
//         return fah.toString() + '°F'

//     }
//     return "Error"
// }
// convert(deg)
// let items = (2, 5, 6, 7, 8)
// function combinations(...items) {
//     let sum = 1
//     for (let i of items)
//         if (i) {
//             sum *= i
//         }
//         else {

//         }

//     return sum
// }
// function combinations(items) {
//     return [...arguments].reduce((acc, v) => v ? acc * v : acc + v, 1)
// }
// console.log(combinations(0, 3, 5))
// combinations(items)

// let num = 1023456788
// function isPandigital(num) {
//     let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
//     let arr1 = num.toString().split('')
//     let result = arr.every(e => arr1.includes(e))
//     console.log(result)
//     return result
// }
// isPandigital(num)
// for (let i = 0; i < num.length; i++) {
//     if (!arr1.includes(arr[i])) {
//         return true
//     }
//     return false
// }
// let n1 = 17
// let n2 = 11
// function lcm(n1, n2) {
//     let arr1 = []
//     let arr2 = []
//     let i = 1
//     do {
//         arr1.push(n1 * i)
//         arr2.push(n2 * i)
//         i++
//     }
//     while (!arr1.some(e => arr2.includes(e)))
//     if (n1 > n2) {
//         return ((i - 1) * n2)
//     }
//     return ((i - 1) * n1)
// }
// lcm(n1, n2)

// let words = ['hi', 'here', 'hurry']
// const buildObjectFromWords = function (words) {

//     let myObj = {}

//     for (let i = 0; i < words.length; i++) {
//         let wordLength = words[i].length;
//         myObj[`${words[i]}`] = wordLength;
//         console.log(myObj)
//         return myObj;
//     }
// }
// buildObjectFromWords(words);

// var user = {
//     fullName: "James Reichard",
//     favoriteFoods: ["Ramen", "Cap'n Crunch", "Tacos"],
//     displayFoods: function () {
//         var self = this
//         this.favoriteFoods.forEach(function (food) {
//             console.log(`${self.fullName} likes ${food}`)
//         })
//     }
// }
// user.displayFoods()

// let s1 = "11001"
// let s2 = "10110"

// function minSwaps(s1, s2) {
//     let count = 0
//     if (s1 === s2) {
//         return count
//     }
//     let st1 = s1.split('')
//     let st2 = s2.split('')
//     for (let i = 0; i < st1.length; i++) {
//         if (st1[i] !== st2[i]) {
//             if (st1[i] === '0') {

//             }
//             else {
//                 st1[i] = '0'
//             }
//             count++
//         }
//     }
//     return count
// }
// let baseArr = [1, 2, 3, 4, 5, 6, 7]
// function permute(nums) {
//     let result = []
//     //when should our recursion stop? what's the base case
//     if (nums.length === 0) return []
//     if (nums.length === 1) return [nums]

//     // iterate through nums array/ track current number/iteration 
//     for (let i = 0; i < nums.length; i++) {
//         const currentNum = nums[i]
//         const remainNum = nums.slice(0, i).concat(nums.slice(i + 1))
//         const remainNumPermuted = permute(remainNum)
//         for (let j = 0; j < remainNumPermuted.length; j++) {
//             const permutedArray = [currentNum].concat(remainNumPermuted[j])
//             result.push(permutedArray)
//         }
//     }
//     console.log(result)
//     return result
// }
// permute(baseArr);


// let s1 = "110"   
// let s2 = "101"

// function minSwaps(s1, s2) {
//     let count = 0
//     let str1 = s1.split('')
//     let str2 = s2.split('')
//     // when should recursion stop
//     if (str1 === str2) {
//         return count
//     }
//     // iterate through array/track iteration
//     for (let i = 0; i < str1.length; i++) {
//         const current = str1[i]
//         const remain = str1.slice(0, i).concat(str1.slice(i + 1))
//         console.log(current)
//         console.log(remain)

//     }
// }

// minSwaps(s1, s2)
// num = 8
// function pentagonal(num) {

//     let total = (5 * (num ** 2) - 5 * (num) + 2) / 2
//     return total
// }

// pentagonal(num)
// let a = 1
// let b = 1000

// function squares(a, b) {
//     let arr = []
//     let newArr = []
//     for (let i = 0; i <= Math.sqrt(b); i++) {
//         arr.push(i ** 2)
//         if (arr[i] >= a) {
//             count++
//         }
//     }
//     console.log(arr)
//     console.log(newArr)
// }

// squares(a, b)

// let steps = [20, 30, 10, 40]
// function trackRobot(...steps) {
//     let a = 0
//     let b = 0
//     let x = 0
//     for (let i = 0; i < steps[0].length; i++) {
//         if (i === 0 || i % 4 === 0) {
//             a += steps[x][i]
//         }
//         if (i === 1 || i % 4 === 1) {
//             b += steps[x][i]
//         }
//         if (i === 2 || i % 4 === 2) {
//             a -= steps[x][i]
//         }
//         if (i === 3 || i % 4 === 3) {
//             b -= steps[x][i]
//         }
//     }
//     console.log(a, b)
//     return (a, b)
// }
// function trackRobot(...steps) {
//     let x = 0;
//     let y = 0;
//     for (i in steps) {
//       let d = i % 4;
//       if (d === 0) y += steps[i];
//       else if (d === 1) x += steps[i];
//       else if (d === 2) y -= steps[i];
//       else if (d === 3) x -= steps[i];
//     }
//     return [x, y];
//   }

// trackRobot(steps)
// 0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92
// 10, 2, 3, 8, 5, 8, 5, 5, 3, 1], [11, 2, 22, 49, 444, 998, 87, 44]
// 0, 2, 3, 0, 5, 0, 0, 0, 0, 1], [11, 2, 22, 49, 444, 4
// 1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 80, 0
// let digits = [0, 1, 2, 2, 3, 0, 0, 0, 1, 1]
// let arr = [123, 444, 92]
// let newArr = []
// function canBuild(digits, arr) {
//     let nums = arr.join('').split('').map(v => parseInt(v, 10)).sort()
//     for (let i = 0; i < digits.length; i++) {
//         for (let j = 0; j < digits[i]; j++) {
//             newArr.push(i)
//         }
//     }
//     console.log(nums)
//     console.log(newArr)
//     for (let i = 0; i < nums.length; i++) {
//         if (newArr.includes(nums[i])) {
//             newArr.splice(newArr.indexOf(nums[i]), 1)
//             console.log(newArr)
//         }
//         else {
//             console.log('false')
//             return false
//         }
//     }
// }
//     nums.forEach(e => {
//         if (newArr.includes(nums[e])) {
//             newArr.splice(nums.indexOf(nums[e]), 1)
//         }
//         else {
//             console.log('false')
//             return false
//         }
//         console.log(true)
//         return true

//     });
// }
// if (nums.every(e => newArr.includes(e))) {
//     // return true
//     if (nums.length === newArr.length)
//         console.log('true')
// }
// return false
// canBuild(digits, arr)

// for (let j = sum; j < 10; j++)
//     if (sum >= 10) {
//         count++
//         num = sum.toString().split('').map(e => parseInt(e))
//         console.log(sum)
//         console.log(num)
//     }
//     else {
//         return count
//     }


// let n = 27
// function additivePersistence(n) {
//     let count = 0
//     if (n < 10) {
//         return count
//     }

//     let num = n.toString().split('').map(e => parseInt(e))
//     let sum = 0

//     for (let i = 0; i < num.length; i++) {
//         sum += num[i]
//     }

//     count++

//     if (sum < 10) {
//         return count
//     }
//     console.log(sum)
//     do {
//         count++
//         num = sum.toString().split('').map(e => parseInt(e))
//         sum = 0
//         for (i = 0; i < num.length; i++) {
//             sum += num[i]
//         }
//         console.log(num)
//         console.log(sum)
//     }
//     while (sum >= 10)
//     console.log(`answr is ${count}`)
//     return count

// }
// additivePersistence(n)

// let n = 123456
// function multiplicativePersistence(n) {
//     let count = 0
//     if (n < 10) {
//         return count
//     }

//     let num = n.toString().split('').map(e => parseInt(e))
//     let sum = 1

//     for (let i = 0; i < num.length; i++) {
//         sum *= num[i]
//         console.log(sum)
//         console.log(num)
//     }

//     count++

//     if (sum < 10) {
//         return count
//     }
//     console.log(sum)
//     do {
//         count++
//         num = sum.toString().split('').map(e => parseInt(e))
//         sum = 1
//         for (i = 0; i < num.length; i++) {
//             sum *= num[i]
//         }
//         console.log(num)
//         console.log(sum)
//     }
//     while (sum >= 10)
//     console.log(`answr is ${count}`)
//     return count

// }

// multiplicativePersistence(n)

// let s = 'MCXLIV'
// var romanToInt = function () {
//     let romans = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     }
//     let sum = 0
//     let last = undefined

//     for (let i = 0; i < s.length; i++) {
//         console.log(romans[s[i]])
//         console.log(s[i])
//         sum += romans[s[i]]
//         if (last === 'I' && s[i] === 'V') {
//             sum -= 2
//         }
//         if (last === 'I' && s[i] === 'X') {
//             sum -= 2
//         }
//         if (last === 'X' && s[i] === 'L') {
//             sum -= 20
//         }
//         if (last === 'X' && s[i] === 'C') {
//             sum -= 20
//         }
//         if (last === 'C' && s[i] === 'D') {
//             sum -= 200
//         }
//         if (last === 'C' && s[i] === 'M') {
//             sum -= 200
//         }

//         last = s[i]
//     }
//     console.log(sum)
// }

// romanToInt(s)
// num = 1300
// var intToRoman = function (num) {
//     let num1 = num.toString()
//     let arr = num1.split('')
//     let digits = 1
//     let roman = ''
//     let romans = {
//         0: '', 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII",
//         8: "VIII", 9: "IX", 10: "X", 20: "XX", 30: "XXX", 40: "XL",
//         50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC", 100: "C",
//         200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC",
//         800: "DCCC", 900: "CM", 1000: "M", 2000: "MM", 3000: "MMM"
//     }
//     console.log(arr)
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr[i] *= digits
//         digits *= 10
//         console.log(arr)
//     }

//     for (let i = 0; i < arr.length; i++) {
//         roman += (romans[arr[i]])
//         console.log(roman)
//         // ('IV, IX, XL, XC, CD, CM')

//     }

// }
// intToRoman(num)

// let nums = [3, 3]
// let target = 6
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return (i, j)
//             }
//         }
//     }
// }

// twoSum(nums, target)

// let l1 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
// let l2 = [5, 6, 4]

// var addTwoNumbers = function (l1, l2) {

//     let list = ListNode(0)
//     let current = list

//     let sum = 0
//     let extra = 0

//     while (l1 !== null || l2 !== null) {

//         if (l1 !== null) {
//             sum += l1.val
//             l1 = l1.next
//         }

//         if (l2 !== null) {
//             sum += l2.val
//             l2 = l2.next
//         }

//         if (sum > 10) {
//             extra = Math.floor(sum / 10)
//             sum = sum % 10
//         }

//         current.next = new ListNode(sum)
//         current = current.next

//         sum = extra
//         extra = 0
//     }


//     return list.next
// }
// addTwoNumbers(l1, l2)


// let digits = 1
// let sum1 = 0
// let sum2 = 0
// // let newArr = []
// for (let i = 0; i < l1.length; i++) {
//     l1[i] *= digits
//     sum1 += l1[i]
//     digits *= 10
// }
// digits = 1
// for (i = 0; i < l2.length; i++) {
//     l2[i] *= digits
//     sum2 += l2[i]
//     digits *= 10
// }
// let total = sum1 + sum2
// let arr = Array.from(total.toString()).map(Number)

//     function ListNode(val, next) {
//       this.val = (val===undefined ? 0 : val)
//       this.next = (next===undefined ? null : next)
//   }



// var addTwoNumbers = function (l1, l2) {
//     let digits = 1
//     let sum1 = 0
//     let sum2 = 0


//     let arrL1 = [l1.val]
//     while(l1.next !== null) {
//         l1 = l1.next
//         arrL1.push(l1.val)
//     }

//     let arrL2 = [l2.val]
//     while(l2.next !== null) {
//         l2 = l2.next
//         arrL2.push(l2.val)
//     }

//     for (let i = 0; i < arrL1.length; i++) {
//         arrL1[i] *= digits
//         sum1 += arrL1[i]
//         digits *= 10

//     }
//     digits = 1
//     for (i = 0; i < arrL2.length; i++) {
//         arrL2[i] *= digits
//         sum2 += arrL2[i]
//         digits *= 10
//     }
//     let total = sum1 + sum2

//     let arr = Array.from(total.toString()).map(Number)

//     let list = new ListNode(0)
//     let current = list

//     for (i = arr.length - 1; i >= 0; i--) {

//         current.next = new ListNode(arr[i])
//         current = current.next

//     }

//     return list.next
// }

// class LinkedList {
//     constructor(head = null) {
//         this.head = head
//     }
//     add(val) {
//         var node = new ListNode(val);
//         var current;
//         if (this.head == null)
//             this.head = node;
//         else {
//             current = this.head;

//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = node;
//         }
//     }

// printList() {
//     var curr = this.head;
//     var str = "";
//     while (curr) {
//         str += curr.val + ", ";
//         curr = curr.next;
//     }
//     console.log(str);
// }
// }
//     class ListNode {
//         constructor(val, next) {
//             this.val = (val === undefined ? 0 : val)
//             this.next = (next === undefined ? null : next)
//         }

//     }

//     let list = new ListNode(0)
//     let current = list

//     for (i = arr.length - 1; i >= 0; i--) {
//         // current = arr[i]
//         // console.log(arr[i])
//         current.next = new ListNode(arr[i])
//         current = current.next
//     }
//     console.log(list.next)
//     return list.next
// }



// let s = 'advhjkdf'
// var lengthOfLongestSubstring = function (s) {
//     let letters = s.split('')
//     let newArr = []
//     let length = 0
//     let largest = 0

//     if (letters.length === 0) {
//         return length
//     }
//     else if (letters.length === 1) {
//         return 1
//     }

//     for (let i = 0; i < s.length; i++) {
//         if (!newArr.includes(letters[i])) {
//             newArr.push(letters[i])
//             // console.log(newArr)
//         }
//         else {
//             length = newArr.length
//             console.log(newArr)
//             // console.log(letters)
//             console.log(letters[i])
//             let del = newArr.indexOf(letters[i])
//             // newArr.splice(del, 1)
//             newArr = newArr.slice((del, del + 1))
//             newArr.push(letters[i])
//         }
//         console.log(newArr)

//         if (length > largest) {
//             largest = length
//         }
//         if (i === (s.length - 1)) {
//             length = newArr.length
//         }
//         if (length > largest) {
//             largest = length
//         }
//     }
//     console.log(largest)
//     return largest
// };
// a b c d e, a, b, c (3) c 

// lengthOfLongestSubstring(s)

// let nums1 = []
// let nums2 = [2, 3]
// let nums3 = []
// let median = undefined
// let result = undefined

// var findMedianSortedArrays = function (nums1, nums2) {
//     nums3 = [...nums1, ...nums2].sort((a, b) => a - b)
//     median = nums3.length / 2
//     if (nums3.length % 2 === 0) {
//         result = (nums3[median - 1] + nums3[median]) / 2
//     }
//     else {
//         result = nums3[median - .5]
//     }
//     console.log(nums3, median)
//     console.log(result)
// };

// findMedianSortedArrays(nums1, nums2)

// let s = 'aacabdkacaa'
// let newArr = []
// let testArr = []
// let testArr1 = []
// let testArr2 = []
// let val = s.split('')
// let size = undefined
// let testStr = []
// let result = []
// var longestPalindrome = function (s) {
//     let arrayMatch = function (arr1, arr2) {
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] !== arr2[i]) {
//                 return false
//             }
//         }
//         return true
//     }
//     // console.log(val)
//     for (let i = 0; i < val.length; i++) {
//         if (val.length === 1) {
//             console.log(val[i])
//             return val[i]
//         }
//         if (!newArr.includes(val[i])) {
//             newArr.push(val[i])
//         }
//         else {
//             // console.log(val[i])
//             size = newArr.indexOf(val[i])
//             testArr = newArr.slice((size, size))
//             newArr = newArr.slice((size, size + 1))
//             testArr.push(val[i])
//             newArr.push(val[i])
//             console.log(testArr)
//             for (let i = 0; i < testArr.length; i++) {
//                 testArr1.push(testArr[i])
//             }
//             for (let i = testArr.length - 1; i >= 0; i--) {
//                 testArr2.push(testArr[i])
//             }
//             console.log(testArr)
//             console.log(testArr1)
//             console.log(testArr2)

//             if (arrayMatch(testArr1, testArr2)) {
//                 testStr = testArr1
//                 console.log(testArr1)
//                 console.log(testArr2)
//                 testArr1 = []
//                 testArr2 = []
//             }
//             else {
//                 testArr1 = []
//                 testArr2 = []
//             }

//             if (testStr.length > result.length) {
//                 result = testStr
//             }

//         }
//         console.log(newArr)
//         console.log(testArr)
//         console.log(result.join(''))

//     }
//     if (!testArr.length > 0) {
//         result = val[0]
//     }
// };

// longestPalindrome(s)

// let arr1 = ['a', 'a']
// let arr2 = ['ab', 'a']
// let arrayMatch = function (arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false
//         }
//     }
//     console.log(true)
// }
// arrayMatch(arr1, arr2)

// let x = 1534236469
// var reverse = function (x) {
//     let isNeg = 0
//     let result = undefined
//     if (x < 0) {
//         x = Math.abs(x)
//         isNeg++
//     }
//     let newArr = []
//     let arr = Array.from(x.toString()).map(Number)

//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i])
//         if (newArr[0] === 0) {
//             newArr.shift()
//         }
//     }

//     result = newArr.join('')
//     if (result > 2147483647 || result < -2147483647) {
//         result = 0
//     }
//     console.log(isNeg)
//     console.log(arr)
//     console.log(newArr)
//     console.log(result)
//     if (isNeg > 0) {
//         return result * -1
//     }
//     return result
// };

// reverse(x)

// let s = "    2147483    648"
// var myAtoi = function (s) {
//     let arr = s.split('')
//     console.log(arr)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === ' ') {
//             arr.splice(i, 1)
//             i--
//         }
//         else {
//             break
//         }
//     }
//     console.log(arr)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === ' ') {
//             arr.splice(i, arr.length - i)
//             console.log(arr)
//         }
//     }

//     let arr2 = []
//     let result = undefined
//     let isNeg = 0

//     if (arr[0] === '-') {
//         isNeg = 1
//         arr.shift()
//     }
//     else if (arr[0] === '+') {
//         arr.shift()
//     }
//     console.log(arr)
//     console.log(arr.join(''))
//     let arr1 = arr.join('')
//     console.log(arr1[0])
//     console.log(isNaN(arr1[0]))
//     if (isNaN(arr1[0])) {
//         console.log('not num')
//         return 0
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         if (!isNaN(arr1[i])) {
//             arr2.push(arr1[i])
//         }
//         else {
//             break
//         }
//     }
//     result = arr2.join('')
//     console.log(result)
//     if (Math.abs(result) >= ((2) ** 31)) {
//         result = ((2) ** 31)
//         if (isNeg === 0) {
//             result -= 1
//         }
//     }
//     if (isNeg === 1) {
//         result = -1 * result
//     }
//     console.log(result)
//     return result


// };

// myAtoi(s)

// let n = 15
// var fizzBuzz = function (n) {
//     let x = 1
//     let result = []
//     while (x <= n) {
//         result.push(x)
//         x++
//     }
//     console.log(result)
//     // console.log(result[0])
//     // let result = Array.from(n.toString())
//     for (let i = 0; i < result.length; i++) {
//         if (result[i] % 3 === 0 && result[i] % 5 === 0) {
//             result[i] = 'FizzBuzz'
//         }
//         else if (result[i] % 5 === 0) {
//             result[i] = 'Buzz'
//         }
//         else if (result[i] % 3 === 0) {
//             result[i] = 'Fizz'
//         }
//         else {
//             result[i] = `${result[i]}`
//         }
//     }
//     console.log(result)
//     return result
// };

// fizzBuzz(n)
// let s = 'aa'
// let p = 'a*'

// var isMatch = function (s, p) {
//     let t = new Boolean[s.length + 1][p.length + 1]
//     t[0][0] = true

//     //for early patterns like a* or a*b* at beginning so you can have T or F
//     for (let i = 1; i < t[0].length; i++) {
//         if (p[i - 1] === '*') {
//             t[0][i] = T[0][i - 2]
//         }
//     }

//     for (let i = 1; i < t.length; i++) {
//         for (let j = 1; j < t[0].length; j++) {
// if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
//     t[i][j] = t[i - 1][j - 1]
// }
// else if (p[j - 1] === '*') {
//     t[i][j] = t[i][j - 2]
//     if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
//         t[i][j] = t[i][j] || t[i - 1][j]
//     }
// }
// else {
//     t[i][j] = false
// }
//         }
//     }
//     return t[s.length][p.length]
// };

// isMatch(s, p)

// let s = 'aab'
// let p = 'c*a*b'

// var isMatch = function (s, p) {
//     //basically our table
//     let t = Array.from({ length: s.length + 1 }, () => [false])
//     //set those 0's to true
//     t[0][0] = true
//     console.log(t)

//     // base case first row/column
//     for (let i = 1; i <= p.length; i++) {
//         if (p[i - 1] === '*') {
//             t[0][i] = t[0][i - 2]
//         }
//         else {
//             t[0][i] = false
//         }
//     }

//     //covers all possibitlites
//     for (let i = 1; i <= s.length; i++) {
//         for (let j = 1; j <= p.length; j++) {
//             if (p[j - 1] === '*') {
//                 if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
//                     t[i][j] = t[i][j - 2] || t[i - 1][j]
//                 } else {
//                     t[i][j] = t[i][j - 2]
//                 }
//             }
//             else if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
//                 t[i][j] = t[i - 1][j - 1]
//             }
//             else {
//                 t[i][j] = false
//             }
//         }
//     }
//     console.log(t[s.length][p.length])
//     return t[s.length][p.length]
// };


// isMatch(s, p)
// s = 'geasdft'
// p = 'ge***d?t'

// var isMatch = function (s, p) {
//     let t = Array.from({ length: s.length + 1 }, () => [false])
//     t[0][0] = true

//     for (let i = 1; i <= p.length; i++) {
//         if (p[i - 1] === '*') {
//             t[0][i] = t[0][i - 1]
//         }
//         else {
//             t[0][i] = false
//         }
//     }
//     let countIndex = 0
//     let isFirst = true
//     for (let i = 0; i < p.length; i++) {
//         if (p[i] === '*') {
//             if (isFirst) {
//                 p[countIndex++] = p[i]
//                 isFirst = false
//             }
//             else {
//                 p[countIndex++] = p[i]
//                 isFirst = true
//             }
//         }
//     }

//     for (let i = 1; i <= s.length; i++) {
//         for (let j = 1; j <= p.length; j++) {
//             if (p[j - 1] === '*') {
//                 t[i][j] = t[i][j - 1] || t[i - 1][j]
//             }
//             else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
//                 t[i][j] = t[i - 1][j - 1]
//             }
//             else {
//                 t[i][j] = false
//             }
//         }
//     }
//     console.log(t[s.length][p.length])
//     return t[s.length][p.length]
// }

// isMatch(s, p)

// let x = 121
// var isPalindrome = function (x) {
//     let arr = []
//     let testArr1 = []
//     let testArr2 = []

//     if (x === 0) {
//         console.log('true')
//         return true
//     }
//     while (x > 0) {
//         arr.unshift(x % 10)
//         x = x / 10 | 0
//         console.log(arr)
//     }
//     if (arr[0] !== arr[arr.length - 1] || (isNaN(arr[0]))) {
//         console.log(arr[0])
//         console.log(arr[arr.length - 1])
//         console.log('false')
//         return false
//     }
//     for (let i = 0; i < arr.length; i++) {
//         testArr1.push(arr[i])
//     }
//     for (let i = arr.length - 1; i >= 0; i--) {
//         testArr2.push(arr[i])
//     }
//     console.log(testArr1)
//     console.log(testArr2)
//     for (let i = 0; i < arr.length; i++) {
//         if (testArr1[i] !== testArr2[i]) {
//             console.log('array not match')
//             return false
//         }
//     }
//     console.log('true')
//     return true
// };

// isPalindrome(x)

// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// var maxArea = function (height) {
//     let area = 0
//     let maxArea = 0
//     for (let i = 0; i < height.length; i++) {
//         for (let j = 0; j < height.length; j++) {
//             if (height[j] >= height[i]) {
//                 console.log(height[i], height[j])
//                 area = Math.abs((height[i] * (j - i)))
//                 console.log(area)
//             }
//             if ((Math.abs(area)) > maxArea) {
//                 maxArea = area
//             }
//         }
//     }
//     console.log(maxArea)
// };

// maxArea(height)

// strs = ['s']
// result = ''
// count = 0
// var longestCommonPrefix = function (strs) {
//     if (strs.length === 0 || strs[0] === '') {
//         return result
//     }
//     // for (let i = 0; i < strs.length; i++) {
//     // count++
//     // for (let j = 0; j < strs[i].length; j++) {
//     //     console.log(strs[i][j])
//     // }
//     // }
//     for (let i = 0; i < strs[0].length; i++) {
//         let char = strs[0][i]
//         console.log(char)
//         for (let j = 1; j < strs.length; j++) {
//             console.log(strs[j][i])
//             if (char !== strs[j][i]) {
//                 return result
//             }
//         }
//         result = result + char
//         console.log(result)
//     }
//     return result

// };
// longestCommonPrefix(strs)

// let nums = [-1, 0, 1, 2, -1, -4]
// var threeSum = function (nums) {
//     let arr = []
//     let chunkArr = []
//     if (nums.length === 0) {
//         console.log(chunkArr)
//         return chunkArr
//     }
//     if (nums.every(e => e === 0)) {
//         for (let i = 0; i < nums.length; i++) {
//             if (nums.length >= 3) {
//                 chunkArr.push(nums.splice(i, 3))
//                 i--
//             }
//             else {
//                 console.log(chunkArr)
//                 return chunkArr
//             }
//         }

//     }
//     for (let i = 0; i < nums.length; i++) {
//         // console.log(nums[i]) 
//         for (let j = nums.length - 1; j > 0; j--) {
//             console.log(nums[i], nums[j], nums[j - 1])
//             if (nums[i] + nums[j] + nums[j - 1] === 0) {
//                 arr.push(nums[i], nums[j], nums[j - 1])
//                 console.log(arr)

//                 chunkArr.push(arr.splice(0, 3))
//                 console.log(chunkArr)

//             }
//         }
//         // for (let j = 0; j < nums.length; j++) {
//         //     console.log(nums[j])
//         // }
//     }
// if (chunkArr.every(e => e === 0)) {
//     console.log(nums.length)
// }
// if (count > 1) {
//     chunkArr.push(arr.slice())
// }

// let nums = [0, 0, 0, 0, 0]
// var threeSum = function (nums) {
//     let sum = 0
//     let arr = []
//     let result = []
//     if (!nums || nums.length < 3) {
//         return arr
//     }

//     nums.sort(function (a, b) { return a - b })
//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i === 0 || nums[i] > nums[i - 1]) {
//             let start = i + 1
//             let end = nums.length - 1
//             console.log(start)
//             console.log(end)
//             while (start < end) {
//                 let sum = nums[i] + nums[start] + nums[end]
//                 if (sum === 0) {
//                     console.log(nums[i], nums[start], nums[end])
//                     arr.push(nums[i], nums[start], nums[end])
//                     result.push(arr.splice(0, 3))
//                     start++
//                     end--

//                     while (start < end && nums[start] === nums[start - 1]) {
//                         start++
//                     }
//                     while (start < end && nums[end] === nums[end + 1]) {
//                         end--
//                     }
//                 }
//                 else if (sum < 0) {
//                     start++
//                 }
//                 else {
//                     end--
//                 }
//             }
//         }
//     }
//     console.log(arr)
//     console.log(result)
//     return arr
// };
// threeSum(nums)

// let digits = '23'
// let letters = {
//     1: [],
//     2: ['a', 'b', 'c'],
//     3: ['d', 'e', 'f'],
//     4: ['g', 'h', 'i'],
//     5: ['j', 'k', 'l'],
//     6: ['m', 'n', 'o'],
//     7: ['p', 'q', 'r', 's'],
//     8: ['t', 'u', 'v'],
//     9: ['w', 'x', 'y', 'z']
// }
// let result = []


// var letterCombinations = function (digits) {

//     let letters = {
//         1: [],
//         2: ['a', 'b', 'c'],
//         3: ['d', 'e', 'f'],
//         4: ['g', 'h', 'i'],
//         5: ['j', 'k', 'l'],
//         6: ['m', 'n', 'o'],
//         7: ['p', 'q', 'r', 's'],
//         8: ['t', 'u', 'v'],
//         9: ['w', 'x', 'y', 'z']
//     }
//     let result = []
//         let combination = (i, letter) => {
//             if (i > digits.length - 1) {
//                 result.push(letter)
//                 console.log(result)
//                 return 
//             }
//             let digit = digits[i]
//             for (let char of letters[digit]) {
//                 combination(i + 1, letter + char)
//             }
//         }
//         if (digits.length > 0) {
//             combination(0, '')
//         }
//         return result
//     };


// let s = '([]'
// // ([{}])
// var isValid = function (s) {
//     let arr = []
//     let open = ['(', '[', '{']
//     let close = [')', ']', '}']
//     if (!close.some(e => (e === s[s.length - 1]))) {
//         console.log('false')
//         return false
//     }
//     for (let i = 0; i < s.length; i++) {
//         if (open.some(e => e === s[i])) {
//             arr.push(s[i])
//         }
//         if (close.some(e => e === s[i])) {
//             console.log(arr)
//             console.log(arr[arr.length - 1])
//             console.log(s[i])
//             if ((arr[arr.length - 1] === '(' && s[i] === ')')
//                 || (arr[arr.length - 1] === '[' && s[i] === ']')
//                 || (arr[arr.length - 1] === '{' && s[i] === '}')
//             ) {
//                 arr.pop()
//             }
//             else {
//                 console.log('false')
//                 return false
//             }
//         }
//         console.log(arr)
//     }
//     if (arr.length > 0) {
//         return false
//     }
//     console.log('true')
//     return true

// };

// isValid(s)


// var addTwoNumbers = function (l1, l2) {

//     let list = new ListNode(0)
//     let current = list

//     let sum = 0
//     let extra = 0

//     while (l1 !== null || l2 !== null || sum > 0) {

//         if (l1 !== null) {
//             sum += l1.val
//             l1 = l1.next
//         }

//         if (l2 !== null) {
//             sum += l2.val
//             l2 = l2.next
//         }

//         if (sum >= 10) {
//             extra = Math.floor(sum / 10)
//             sum = sum % 10
//         }

//         current.next = new ListNode(sum)
//         current = current.next

//         sum = extra
//         extra = 0
//     }


//     return list.next
// }

// let l1 = [1, 2, 4]
// let l2 = [1, 3, 4]
// var mergeTwoLists = function (l1, l2) {

//     // (1) Create a new head pointer to an empty linked list.
//     // (2) Check the first value of both linked lists.
//     // (3) Whichever node from L1 or L2 is smaller, append it to the new list and move the pointer to the next node.
//     // (4) Continue this process until you reach the end of a linked list.
//     function ListNode(val, next) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }

//     let l3 = new ListNode(0)
//     let prev = l3

//     while (l1 !== null && l2 !== null) {
//         if (l1.val <= l2.val) {
//             prev.next = l1
//             l1 = l1.next
//         }
//         else {
//             l3.next = l2
//             l2 = l2.next
//         }
//         l3 = l3.next
//     }
//     if (l1 === null) {
//         l3.next = l2
//     }
//     if (l2 === null) {
//         l3.next = l1
//     }
//     console.log(l3)
//     console.log(l3.next)
// };

// mergeTwoLists(l1, l2)

// let lists = [[1, 4, 5], [1, 3, 4], [2, 6]]

// var mergeKLists = function (lists) {
//     function ListNode(val, next) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
//     if (lists.length === 0) {
//         return null
//     }

//     while (lists.length > 1) {
//         let l1 = lists.shift()
//         let l2 = lists.shift()
//         let l3 = combine(l1, l2)
//         lists.push(l3)
//     }
//     return lists[0]

// }

// let combine = (l1, l2) => {
//     let test = new ListNode(0)
//     let current = test

//     while (l1 && l2) {
//         if (l1.val < l2.val) {
//             current.next = l1
//             l1 = l1.next
//         }
//         else {
//             current.next = l2
//             l2 = l2.next
//         }
//         current = current.next
//     }
//     current.next = l1 || l2
//     return test.next
// }


// mergeKLists(lists)

// let head = [1, 2, 3, 4, 5]
// let n = 2
// let count = 1

// var removeNthFromEnd = function (head, n) {

//     let length = 0
//     let count = 1
//     let list = new ListNode(0)
//     let prev = list
//     let arr = head

//     function ListNode(val, next) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }

//     while (head) {
//         head = head.next
//         length++

//     }

//     while (arr) {
//         let skip = length - n + 1

//         if (count !== skip) {
//             prev.next = arr
//             arr = arr.next
//             prev = prev.next
//             count++
//         }
//         else {
//             arr = arr.next
//             count++
//         }
//     }

//     return list.next

// };

// removeNthFromEnd(head, n)


// var removeNthFromEnd = function (head, n) {

//     let length = 0
//     let count = 1
//     let list = new ListNode(0)
//     let prev = list
//     let arr = head


//     while (head) {
//         head = head.next
//         length++

//     }

//     let skip = length - n + 1
//      // if (length === 2 && n === 1) {
//      //        head = arr.next
//      //        arr.next = null
//      //        return arr
//      //    } 

//     while (arr) {

//         if ( count !== skip) {
//             prev.next = arr
//             arr = arr.next 
//             prev = prev.next
//             count++

//         }
//         else {
//             prev.next = null
//             arr = arr.next
//             count++
//         }
//     }

//     return list.next

// };

// let n = 2

// var generateParenthesis = function (n) {
//     let first = '('
//     let second = ')'
//     let arr = []


//     for (let i = 0; i < n; i++) {
//         arr.push(first, second)
//     }
//     console.log(arr)


// let letters = 'doggy'
// console.log(letters)
// function findPerms(str) {
//     if (str.length === 0) return "";
//     if (str.length === 1) return str;
//     let result = []
//     for (let i = 0; i < str.length; i++) {
//         let currentChar = str[i]
//         let remainChar = str.slice(0, i) + str.slice(i + 1)
//         console.log(currentChar)
//         console.log(remainChar)
//         console.log
//         for (let j = 0; j < findPerms(remainChar.length); j++) {
//             result.push(currentChar + findPerms((remainChar)))
//         }
//     }

//     console.log(result)

// }

// findPerms(letters)
// while (arr.length) {
//     let current = arr.shift()
//     let tempArr = []
//     let results = []
//     arr.forEach(e => {
//         let index = 0
//         while (index <= e.length) {
//             let temp = [...e]
//             temp.splice(index, 0, current)
//             tempArr.push(temp)
//             index++
//         }
//     })

//     console.log(tempArr)
// }
// tempArr.forEach(e => {
//     for (let i = 0; i < e.length; i++) {
//         console.log(e[i])
//         if (e[i] === ')' && e[i - 1] !== '(') {
//             console.log('false')
//         }
//         results.push(e)
//     }
// })
// console.log(results)
// for (let j = 0; j < arr.length; j++) {
//     for (let k = j + 1; k < arr.length; k++) {
//         newArr.push(arr[j], arr[k])
//     }
//     // (,),(,)
// }
//     let newArr = arr.join('')
//     console.log(newArr)
//     let current = arr.shift()
//     let tempArr = []
//     while (arr.length) {
//         arr.forEach(e => {
//             let index = 0
//             while (index <= arr.length) {
//                 let temp = [...arr]
//                 temp.splice(index, 0, current)
//                 tempArr.push(temp)
//                 index++
//             }
//         })
//         console.log(tempArr)

//     }
// };

// generateParenthesis(n)

//         9: ['w', 'x', 'y', 'z']
//     }
//     let result = []
//         let combination = (i, letter) => {
//             if (i > digits.length - 1) {
//                 result.push(letter)
//                 console.log(result)
//                 return 
//             }
//             let digit = digits[i]
//             for (let char of letters[digit]) {
//                 combination(i + 1, letter + char)
//             }
//         }
//         if (digits.length > 0) {
//             combination(0, '')
//         }
//         return result
//     };


// let n = 2

// var generateParenthesis = function (n) {
//     let first = '('
//     let second = ')'
//     let arr = []



//     for (let i = 0; i < n; i++) {
//         arr.push(first, second)
//     }
//     console.log(arr)
// let nums = [1, 2, 3, 4, 5]
// var permute = function (nums) {
//     let arr = []
//     let swap = (arrSwap, indexA, indexB) => {
//         let temp = arrSwap[indexA]
//         arrSwap[indexA] = arrSwap[indexB]
//         arrSwap[indexB] = temp
//     }
//     let generatePermutations = (n, heapArr) => {
//         if (n === 1) {
//             arr.push(heapArr.slice())
//             return
//         }
//         generatePermutations(n - 1, heapArr)

//         for (let i = 0; i < n - 1; i++) {
//             if (n % 2 === 0) {
//                 swap(heapArr, i, n - 1)
//             }
//             else {
//                 swap(heapArr, 0, n - 1)
//             }

//             generatePermutations(n - 1, heapArr)
//         }
//     }
//     generatePermutations(nums.length, nums.slice())
//     console.log(arr)
// };
// permute(nums)

//     // practice on permutations
//     let getPermutations = arr => {
//         //need two functions... one that swaps arr values
//         let output = []
//         let swapInPlace = (arrToSwap, indexA, indexB) => {
//             const temp = arrToSwap[indexA]
//             arrToSwap[indexA] = arrToSwap[indexB]
//             arrToSwap[indexB] = temp
//         };

//         let generate = (n, heapArr) => {
//             // for recursive functions you must provide for base case/end
//             if (n === 1) {
//                 output.push(heapArr.slice())
//                 return
//             }

//             //want to call recursively reducing n to 1 over time
//             generate(n - 1, heapArr);

//             for (let i = 0; i < n - 1; i++) {
//                 if (n % 2 === 0) {
//                     swapInPlace(heapArr, i, n - 1)
//                 }
//                 else {
//                     swapInPlace(heapArr, 0, n - 1)
//                 }

//                 generate(n - 1, heapArr)
//             }
//         }

//         generate(arr.length, arr.slice())

//         console.log(output)
//         // return output

//     }
//     getPermutations(arr)
// }

// generateParenthesis(n)

// let n = 3

// var generateParenthesis = function (n) {
//     let first = '('
//     let second = ')'
//     let arr = []

//     for (let i = 0; i < n; i++) {
//         arr.push(first, second)
//     }
//     console.log(arr)

//     let correctPermutation = arr => {
//         let result = []
//         let arr2 = []
//         let swap = (swapArr, indexA, indexB) => {
//             let temp = swapArr[indexA]
//             swapArr[indexA] = swapArr[indexB]
//             swapArr[indexB] = temp
//         };

//         let generate = (n, newArr) => {
//             // this is my base case for recursive function
//             if (n === 1) {
//                 // console.log(newArr)
//                 result.push(newArr.slice())
//                 if (newArr[0] === '(' && newArr[newArr.length - 1] === ')') {

//                     arr2.push(newArr.slice())
//                     console.log(arr2)

//                 }
//                 return
//             }

//             generate(n - 1, newArr)

//             for (let i = 0; i < n - 1; i++) {
//                 if (n % 2 === 0) {
//                     swap(newArr, i, n - 1)
//                 }
//                 else {
//                     swap(newArr, 0, n - 1)
//                 }

//                 generate(n - 1, newArr)
//             }
//         }

//         generate(arr.length, arr.slice())
//         // console.log(result)
//         return result

//     }
//     correctPermutation(arr)

// }

// generateParenthesis(n);

// let n = 3

// 1) our choice: place '(' or ')'
// 2) constraints: cannot close until we open, '(' # matters
// 3) our goal: n*2 placements


// var generateParenthesis = function (n) {
//     let arr = []

//     let getParenthesis = (open, close, string) => {

//         if (string.length === n * 2) {
//             arr.push(string)
//             return
//         }

//         if (open > close) {
//             return
//         }

//         if (open > 0) {
//             getParenthesis(open - 1, close, string + '(')
//         }

//         if (close > 0) {
//             getParenthesis(open, close - 1, string + ')')
//         }

//     }
//     getParenthesis(n, n, '')
//     console.log(arr)
//     return arr

// }
// generateParenthesis(n);

// let nums = [-1, 0, 0, 0, 0, 3, 3]

// var removeDuplicates = function (nums) {
//     console.log(nums)
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) {
//             nums.splice(i, 1)
//             i--
//         }
//         console.log(nums)
//     }
//     console.log(nums.length, nums)
//     return (nums.length, nums)
// };

// removeDuplicates(nums)

// let haystack = 'hello'
// let needle = 'll'

// var strStr = function (haystack, needle) {
//     if (needle === '') {
//         return 0
//     }
//     console.log(haystack.indexOf(needle))

//     // for ( let i = 0; i < haystack.length; i++) {
//     //     if ( haystack.indexOf(needle))
//     // }
// };

// strStr(haystack, needle)

// let dividend = 10
// let divisor = 3

// var divide = function (dividend, divisor) {
//     let count = 0
//     let temp = divisor

// };
// divide(dividend, divisor)


// let nums = [0, 1, 2, 4, 5, 6, 7]
// let rotate = [1, 3, 1, 1, 1]
// let target = 3
// var search = function (nums, target) {
//     nums = rotate
//     if (nums.length === 1) {
//         if (target === nums[0]) {
//             return 0
//         }
//         return -1
//     }
//     let startIndex = 0
//     let endIndex = nums.length - 1
//     while (startIndex <= endIndex) {
//         let middleIndex = Math.floor((startIndex + endIndex) / 2)
//         console.log(startIndex)
//         console.log(middleIndex)
//         if (target === nums[middleIndex]) {
//             console.log(middleIndex)
//             return middleIndex
//         }

//         // must check if array is sorted first
//         if (nums[startIndex] <= nums[middleIndex]) {
//             if (nums[startIndex] <= target && target <= nums[middleIndex]) {
//                 endIndex = middleIndex - 1
//             }
//             else {
//                 startIndex = middleIndex + 1
//             }
//         }

//         else {
//             if (nums[middleIndex] <= target && target <= nums[endIndex]) {
//                 startIndex = middleIndex + 1
//             }
//             else {
//                 endIndex = middleIndex - 1
//             }
//         }
//     }
//     console.log('false')

//     // for (let i = 0; i < nums.length; i++) {
//     //     if (target === nums[i]) {
//     //         console.log(i)
//     //         return i
//     //     }

//     // }
//     // console.log('not found')
//     // return -1

// };
// search(nums, target)


// var search = function (nums, target) {
//     if (nums.length === 1) {
//         if (target === nums[0]) {
//             return true
//         }
//         return false
//     }
//     let startIndex = 0
//     let endIndex = nums.length - 1
//     while (startIndex <= endIndex) {
//         let middleIndex = Math.floor((startIndex + endIndex) / 2)

//         if (target === nums[middleIndex]) {
//             return true
//         }

//         // must check if array is sorted first/ how to deal with duplicates
//         if (nums[middleIndex] === nums[endIndex]) {
//             endIndex--;
//         }
//         else if (nums[startIndex] <= nums[middleIndex]) {
//             if (nums[startIndex] <= target && target <= nums[middleIndex]) {
//                 endIndex = middleIndex - 1
//             }
//             else {
//                 startIndex = middleIndex + 1
//             }
//         }

//         else {
//             if (nums[middleIndex] <= target && target <= nums[endIndex]) {
//                 startIndex = middleIndex + 1
//             }
//             else {
//                 endIndex = middleIndex - 1
//             }
//         }
//     }
//     return false
// };

// let nums = [5, 7, 7, 8, 8, 10]
// let target = 8
// var searchRange = function (nums, target) {
//     let arr = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             arr.push(i)
//         }
//     }
//     if (arr.length === 0) {
//         return [-1, -1]
//     }
//     else if (arr.length === 1) {
//         arr.push(arr[0])
//     }
//     else if (arr.length > 2) {
//         return [arr[0], arr[arr.length - 1]]
//     }
//     return arr

// };
// searchRange(nums, target)

// var searchRange = function (nums, target) {
//     let arr = []
//     if (nums.length === 1) {
//         if (nums[0] === target) {
//             return [nums[0], nums[0]]
//         }
//         else {
//             return [-1, -1]
//         }
//     }

//     let sIndex = 0
//     let eIndex = nums.length - 1
//     let mIndex = 0

//     // what side to check first
//     while (sIndex <= eIndex) {
//         mIndex = Math.floor((sIndex + eIndex) / 2)
//         if (target <= nums[mIndex]) {
//             eIndex = mIndex - 1
//         }
//         else {
//             sIndex = mIndex + 1
//         }
//     }
//     if (nums[sIndex] !== target) return [-1, -1]

//     while (sIndex <= eIndex) {
//         mIndex = Math.floor((sIndex + eIndex) / 2)
//         if (target >= nums[mIndex]) {
//             sIndex = mIndex + 1
//         }
//         else {
//             eIndex = mIndex - 1
//         }
//     }
//     return [sIndex, eIndex]

// }

// searchRange(nums, target)


// var isValidSudoku = function (board) {

//     // brute force with 3 passes
//     let rowSet = new Array(9).fill().map(() => new Set())
//     let colSet = new Array(9).fill().map(() => new Set())
//     let mixedSet = new Array(9).fill().map(() => new Set())

//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             let num = board[i][j]

//             let mixedIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
//             if (num === '.') continue

//             let rowCheck = rowSet[i].has(num)
//             let columnCheck = colSet[j].has(num)
//             let mixedCheck = mixedSet[mixedIndex].has(num)

//             if (rowCheck || columnCheck || mixedCheck) {
//                 return false
//             }

//             rowSet[i].add(num)
//             colSet[j].add(num)
//             mixedSet[mixedIndex].add(num)
//         }
//     }
//     return true
// };


// choice - place 1-9
// constraints - keep in line with 3 rules to not break board
// goal - fill in entire board (no more '.'s)
// let board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// var solveSudoku = function (board) {

//     let arr = board
//     let col = 0
//     let row = 0
//     let num = arr[row][col]
//     let rowSet = new Array(9).fill().map(() => new Set())
//     let colSet = new Array(9).fill().map(() => new Set())
//     let mixedSet = new Array(9).fill().map(() => new Set())

//     console.log(arr)

//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             let nums = arr[i][j]
//             let mixedIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
//             if (nums !== '.') {
//                 rowSet[i].add(nums)
//                 colSet[j].add(nums)
//                 mixedSet[mixedIndex].add(nums)
//             }
//         }
//     }

//     let fillBoard = (row, col, arr, num) => {
//         if (col > 8) {
//             row++
//             col = 0
//         }
//         if (row > 0) {
//             return
//         }
//         // for (row; row < 9; row++) {
//         //     for (col; col < 9; col++) {
//         let mixedI = Math.floor(row / 3) * 3 + Math.floor(col / 3)
//         console.log(num)

//         if (num !== '.') {
//             fillBoard(row, col + 1, arr, arr[row][col + 1])
//         }

//         // [1,2, 3, 4, 5]
//         for (let k = 1; k <= 10; k++) {
//             if (k === 10) {
//                 rowSet[row].delete(col - 1)
//                 colSet[col - 1].delete(row)
//                 console.log('fail')
//                 fillBoard(row, col - 1, arr, num + 1)

//             }
//             let rowCheck = rowSet[row].has(k.toString())
//             let columnCheck = colSet[col].has(k.toString())
//             let mixedCheck = mixedSet[mixedI].has(k.toString())
//             if (!rowCheck && !columnCheck && !mixedCheck) {
//                 console.log('true')
//                 console.log(k)
//                 rowSet[row].add(k.toString())
//                 colSet[col].add(k.toString())
//                 mixedSet[mixedI].add(k.toString())
//                 console.log(rowSet)
//                 console.log(colSet)
//                 console.log(row)
//                 console.log(col)
//                 fillBoard(row, col + 1, arr, num)
//             }

//         }


//         //     }
//         // }

//     }
//     fillBoard(row, col, arr, num)
//     console.log(rowSet)
//     console.log(colSet)
//     console.log(mixedSet)
//     return arr
// };

// solveSudoku(board)

// let n = 3

// 1) our choice: place '(' or ')'
// 2) constraints: cannot close until we open, '(' # matters
// 3) our goal: n*2 placements


// var generateParenthesis = function (n) {
//     let arr = []

//     let getParenthesis = (open, close, string) => {

//         if (string.length === n * 2) {
//             arr.push(string)
//             return
//         }

//         if (open > close) {
//             return
//         }

//         if (open > 0) {
//             getParenthesis(open - 1, close, string + '(')
//         }

//         if (close > 0) {
//             getParenthesis(open, close - 1, string + ')')
//         }

//     }
//     getParenthesis(n, n, '')
//     console.log(arr)
//     return arr

// }
// generateParenthesis(n);

// let board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// var solveSudoku = function (board) {

//     let arr = board
//     console.log(arr)
//     let solveBoard = (arr) => {
//         // let mixedIndex = 0
//         for (let row = 0; row < 9; row++) {
//             for (let col = 0; col < 9; col++) {
//                 // mixedIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3)
//                 if (arr[row][col] === '.') {
//                     for (let num = 1; num <= 9; num++) {
//                         if (validSudoku(row, col, arr, num)) {
//                             arr[row][col] = num
//                             console.log(arr)

//                             if (solveBoard(arr)) {
//                                 return true
//                             }
//                             else {
//                                 arr[row][col] = '.'
//                             }
//                         }
//                     }

//                     return false
//                 }
//                 console.log('.')

//             }
//         }
//         console.log(arr)
//         return true
//     }

//     let validSudoku = (row, col, arr, num) => {
//         for (let i = 0; i < 9; i++) {
//             if (arr[row][i] === num) {
//                 return false
//             }
//             if (arr[i][col] === num) {
//                 return false
//             }
//             // Math.floor(i / 3) * 3 + Math.floor(j / 3)
//             if (arr[Math.floor((row / 3) * 3 + (i / 3))][Math.floor((col / 3) + (i % 3))] === num) {
//                 return false
//             }
//         }
//         return true
//     }

//     solveBoard(arr)
// }

// solveSudoku(board)

// var solveSudoku = function (board) {
//     solver(board);
// };

// const solver = board => {
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             if (board[i][j] === ".") {
//                 let char = "1";
//                 while (+char <= 9) {
//                     if (isValidSudoku(i, j, board, char)) {
//                         board[i][j] = char;
//                         if (solver(board)) {
//                             return true;
//                         } else {
//                             board[i][j] = ".";
//                         }
//                     }
//                     char = (+char + 1).toString();
//                 }
//                 return false;
//             }
//         }
//     }
//     return true;
// };

// const isValidSudoku = (row, col, board, char) => {
//     for (let i = 0; i < 9; i++) {
//         if (board[row][i] == char) {
//             return false;
//         }
//     }

//     for (let i = 0; i < 9; i++) {
//         if (board[i][col] == char) {
//             return false;
//         }
//     }

// const x = ~~(row / 3) * 3;
// const y = ~~(col / 3) * 3;
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (board[x + i][y + j] == char) {
//             return false;
//         }
//     }
// }

//     return true;
// };

// let nums = [0, 2, 2, 1, 1]

// var firstMissingPositive = function (nums) {
//     let arr1 = nums.sort((a, b) => a - b)
//     // let arr2 = arr1.filter(e => e > 0)
//     let arr = arr1.filter((e, i) => arr1.indexOf(e) === i && e > 0)

//     console.log(arr)

//     let max = nums[nums.length - 1]
//     let solve = (arr, max) => {
//         for (let i = 1; i <= max; i++) {
//             if (i !== arr[i - 1]) {
//                 console.log(i)
//                 return i
//             }
//         }
//         console.log(max + 1)
//         return max + 1
//     }
//     solve(arr, max)
// };

// firstMissingPositive(nums)

// let height = [4, 2, 0, 3, 2, 5]
// let tempWater = 0
// let water = 0
// let lMax = 0
// let rMax = 0
// let counter = 0

// left and right max 
//water filled = min ( lMax, rMax) - height
// min (2,3) - height
// 2 - 0
// var trap = function (height) {
//     let lMax = {}
//     let rMax = {}
//     let water = 0
//     let n = height.length

//     lMax[0] = height[0]
//     for (let i = 1; i < n; i++) {
//         lMax[i] = Math.max(lMax[i - 1], height[i])
//     }

//     rMax[n - 1] = height[n - 1]
//     for (let i = n - 2; i >= 0; i--) {
//         rMax[i] = Math.max(rMax[i + 1], height[i])
//     }

//     for (let i = 0; i < n; i++) {
//         water += Math.min(lMax[i], rMax[i]) - height[i]
//     }

//     console.log(water)
// };

// trap(height)

// /** 1) Brute force */
// // time O(n^2)
// // space O(1)
// function trap(height) {
//     if (height == null || height.length === 0) return 0;

//     let res = 0;
//     for (let i = 0; i < height.length; i++) {
//       let lMax = 0;
//       let rMax = 0;

//       for (let j = 0; j < i; j++) {
//         lMax = Math.max(lMax, height[j]);
//       }
//       for (let j = i + 1; j < height.length; j++) {
//         rMax = Math.max(rMax, height[j]);
//       }

//       const water = Math.min(lMax, rMax) - height[i];
//       if (water > 0) res += water;
//     }

//     return res;
//   }

//   /** 2) Dynamic programming */
//   // time O(n)
//   // space O(n)
//   function trap(height) {
//     if (height == null || height.length === 0) return 0;

//     let res = 0;
//     let l = height.length;
//     let lMax = {};
//     let rMax = {};

//     lMax[0] = height[0];
//     for (let i = 1; i < l; i++) {
//       lMax[i] = Math.max(height[i], lMax[i - 1]);
//     }

//     rMax[l - 1] = height[l - 1];
//     for (let i = l - 2; i >= 0; i--) {
//       rMax[i] = Math.max(height[i], rMax[i + 1]);
//     }

//     for (let i = 0; i < height.length; i++) {
//       res += Math.min(lMax[i], rMax[i]) - height[i];
//     }

//     return res;
//   }

//   /** 3) Stack */
//   // time O(n)
//   // space O(n)
//   function trap(height) {
//     let res = 0;
//     let i = 0;
//     const st = [];

//     while (i < height.length) {
//       while (st.length !== 0 && height[i] > height[st[st.length - 1]]) {
//         const top = st[st.length - 1];
//         st.pop();

//         if (st.length === 0) break;

//         const dist = i - st[st.length - 1] - 1;
//         const h = Math.min(height[i], height[st[st.length - 1]]) - height[top];
//         res += dist * h;
//       }
//       st.push(i);
//       i++;
//     }
//     return res;
//   }

//   /** 4) Two pointers */
//   // time O(n)
//   // space O(1)
//   function trap(height) {
//     if (height == null || height.length === 0) return 0;

//     let l = 0;
//     let r = height.length - 1;

//     let lMax = 0;
//     let rMax = 0;

//     let res = 0;

//     while (l < r) {
//       lMax = Math.max(lMax, height[l]);
//       if (height[l] < lMax) {
//         res += lMax - height[l];
//       }

//       rMax = Math.max(rMax, height[r]);
//       if (height[r] < rMax) {
//         res += rMax - height[r];
//       }

//       height[l] < height[r] ? l++ : r--;
//     }

//     return res;
//   }

// let matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
// var rotate = function (matrix) {

//     let arr = []
//     let newArr = []
//     // transposing a matrix
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = i; j < matrix.length; j++) {

//             let temp = matrix[j][i]
//             matrix[j][i] = matrix[i][j]
//             matrix[i][j] = temp

//         }
//     }
//     console.log(matrix)
//     //reverse rows
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix.length / 2; j++) {
//             let temp = matrix[i][j]
//             matrix[i][j] = matrix[i][matrix.length - j - 1]
//             matrix[i][matrix.length - j - 1] = temp
//         }
//     }
// };
// rotate(matrix)
// let result = arr.every(e => arr1.includes(e))
// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// let arr = []
// let hash = {}
// var groupAnagrams = function (strs) {
//     strs.forEach(e => {
//         let letters = e.split('').sort()

//         if (hash[letters]) {
//             hash[letters].push(e)
//         }
//         else {
//             hash[letters] = [e]
//         }
//     })
//     console.log(hash)
//     let keys = Object.keys(hash)
//     let values = keys.map(function (e) { return hash[e] })
//     console.log(values)
//     return values
//     // for (let i = 0; i < strs.length; i++) {
//     //     arr.push(strs[i].split(''))
//     // }
//     // console.log(arr)
//     // let tempArr = []
//     // for (let i = 0; i < arr.length; i++) {
//     //     tempArr.unshift(arr.splice(i, 1))
//     //     console.log(tempArr)
//     //     for (let j = 1; j < arr.length; j++) {

//     //         if (tempArr[0].every(e => arr[j].includes(e))) {
//     //             tempArr.concat(arr.splice(i, 1))
//     //         }
//     //     }
//     // }
//     // console.log(tempArr)
// };
// groupAnagrams(strs)

// let word1 = ["abc", "d", "defg"]
// let word2 = ["abcddefg"]
// var arrayStringsAreEqual = function (word1, word2) {
//     console.log(word1.join(''))
//     if (word1.join('') === word2.join('')) {
//         console.log('true')
//         return true
//     }
//     else {
//         console.log('false')
//         return false
//     }
// }

// arrayStringsAreEqual(word1, word2)

// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// var maxSubArray = function (nums) {
//     let max = 0
//     let maxArr = []
//     let arr = []
//     let total = 0
//     for (let i = 0; i < nums.length; i++) {
//         arr = []
//         arr.push(nums[i])
//         total = nums[i]
//         if (total > max) {
//             maxArr = []
//             max = nums[i]
//             maxArr.push(nums[i])
//         }
//         for (let j = i + 1; j < nums.length; j++) {
//             total += nums[j]
//             arr.push(nums[j])
//             console.log(arr)
//             console.log(total)
//             if (total > max) {
//                 max = total
//                 maxArr = []
//                 maxArr.push(arr)
//             }
//         }
//     }
//     console.log(maxArr)
//     console.log(max)
// };
// maxSubArray(nums)

// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// var maxSubArray = function (nums) {
//     let max = nums[0]
//     let keepMax = nums[0]

//     for (let i = 1; i < nums.length; i++) {
//         if (max < nums[0]) keepMax = nums[0]
//         keepMax = Math.max(keepMax + nums[i], nums[i])
//         max = Math.max(max, keepMax)
//     }
//     console.log(max, keepMax)
// };
// maxSubArray(nums)

// let s = "A man, a plan, a canal: Panama"
// var isPalindrome = function (s) {
//     let str = s.trim().replace(/[^a-zA-Z]/g, '').toLowerCase()
//     let isPalin = str.split('').every((e, i) => e === str[str.length - 1 - i])
//     console.log(str)
//     console.log(isPalin)
// };
// isPalindrome(s)

// s = 'cbbcc'
// var validPalindrome = function (s) {
// let isPalin = s.split('').every((e, i) => e === s[s.length - 1 - i])
// if (isPalin) {
//     return isPalin
// }
// let charArr = s.split('')
// let count = 0
// for (let c of charArr) {
//     console.log(c)
//     console.log(charArr[charArr.length - 1])
//     console.log(count)
//     if (c === charArr[charArr.length - 1]) {
//         charArr.pop()
//         charArr.shift()
//         c--
//     }
//     else {
//         charArr.shift()

//         charArr.pop()

//     }
// }
// console.log('true')
// return true

// s = 'cbbcc'
// var validPalindrome = function (s) {

//     let low = 0
//     let high = s.length - 1

//     let isPalindrome = (s, low, high) => {
//         while (low < high) {
//             if (s[low] !== s[high]) {
//                 return false
//             }
//             low++
//             high--
//         }
//         console.log('true')
//         return true
//     }

//     while (low < high) {
//         if (s[low] === s[high]) {
//             low++
//             high--
//         }
//         else {
//             if (isPalindrome(s, low + 1, high)) {
//                 console.log('true')
//                 return true
//             }
//             if (isPalindrome(s, low, high - 1)) {
//                 console.log('true')
//                 return true
//             }
//             console.log('false')
//             return false
//         }
//     }

//     console.log('true')
//     return true

// };
// validPalindrome(s)

// let x = -2
// let n = 5
// var myPow = function (x, n) {
//     let sum = x
//     console.log((-2) ** 5)
//     for (let i = 1; i < Math.abs(n); i++) {
//         sum *= x
//     }
//     if (n >= 0) {
//         console.log(sum)
//         return sum
//     }
//     else {
//         console.log(1 / sum)
//         return (1 / sum)
//     }
// };
// myPow(x, n)
// let x = 2
// let n = 8
// var myPow = function (x, n) {
//     if (n === 0) return 1;

//     let pow = Math.abs(n);
//     console.log(pow)
//     let result = pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x
//     console.log(result)
//     // let result = pow%2===0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2) * x;
//     return n < 0 ? 1 / result : result;
// };
// myPow(x, n)
// function myPow(x: number, n: number): number {
//     if (n === 0) return 1;
//     // x ^ -n = 1/x ^ n
//     if (n < 0) return myPow(1/x, n * -1);
//     // n is even, x ^ n = (x * x) ^ (n / 2)
//     // e.g. 2 ^ 4 = 2 * 2 * 2 * 2 = 4 * 4 = 4 ^ 2
//     if (n % 2 === 0) return myPow(x * x, n / 2);
//     // n is odd, x ^ n = ((x * x) ^ ((n - 1) / 2)) * x
//     // e.g. 2 ^ 5 = 2 * 2 * 2 * 2 * 2 = 4 * 4 * 2 = (4 ^ 2) * 2
//     return myPow(x * x, (n - 1) / 2) * x;
// };

// let digits = [9]
// var plusOne = function (digits) {
//     let n = digits.length
//     let first = digits[0]
//     console.log(n)
//     console.log(digits)
//     console.log(first)
//     let ten = (n, first) => {
//         if (digits[n - 1] === 9) {
//             digits[n - 1] = 0
//             ten(n - 1, first)
//         }
//         else if (first === 9 && n === 0) {
//             digits.unshift(0)
//             digits[n] += 1
//         }
//         else {
//             digits[n - 1] += 1
//             console.log(digits)
//             return digits
//         }

//     }
//     if (digits[n - 1] === 9) {
//         digits[n - 1] = 0
//         ten(n - 1, first)

//     }
//     else {
//         digits[n - 1] += 1
//         console.log(digits)
//         return digits
//     }
//     console.log(digits)
//     return digits

// };
// plusOne(digits)

// let nums = [3, 2, 1, 5, 6, 4]
// let k = 2
// var findKthLargest = function (nums, k) {
//     let arr = nums.sort((a, b) => b - a)
//     console.log(arr)
//     let ans = arr[k]
//     console.log(ans)
// };
// findKthLargest(nums, k)

// let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
// var spiralOrder = function (matrix) {
//     let m = matrix.length
//     let n = matrix[0].length
//     let spiral = (matrix, m, n) => {
//         let top = 0
//         let bottom = m - 1
//         let left = 0
//         let right = n - 1
//         let dir = 0
//         let arr = []
//         while (top <= bottom && left <= right) {
//             console.log(dir)
//             if (dir === 0) {
//                 for (let i = left; i <= right; i++) {
//                     console.log(top)
//                     console.log(i)
//                     arr.push(matrix[top][i])
//                     console.log(arr)
//                 }
//                 top++
//                 dir++
//             }
//             else if (dir === 1) {
//                 for (let i = top; i <= bottom; i++) {
//                     arr.push(matrix[i][right])
//                 }
//                 right--
//                 dir++
//             }
//             else if (dir === 2) {
//                 for (let i = right; i >= left; i--) {
//                     arr.push(matrix[bottom][i])
//                 }
//                 bottom--
//                 dir++
//             }
//             else if (dir === 3) {
//                 for (let i = bottom; i >= top; i--) {
//                     arr.push(matrix[i][left])
//                 }
//                 left++
//                 dir = 0
//             }
//         }
//         console.log(arr)
//     }
//     spiral(matrix, m, n)
// };
// spiralOrder(matrix)

// n = 8
// var climbStairs = function (n) {
//     // recursively

//     if (n === 1) {
//         return 1
//     }
//     if (n === 2) {
//         return 2
//     }

//     return climbStairs(n - 1) + climbStairs(n - 2)


// };
// climbStairs(n)

// function climbStairsDP(n) {
//     //dynamic programming
//     let steps = []
//     steps[0] = 1
//     steps[1] = 2

//     for (let i = 2; i < n; i++) {
//         steps[i] = steps[i - 1] + steps[i - 2]
//     }
//     return steps[n - 1]

// }
// let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// let n = 0
// var minCostClimbingStairs = function (cost) {
// let total = []
// for (let i = 0; i < cost.length; i++) {
//     total[i] = Math.min(cost[i + 1], cost[i + 2])
//     console.log(total[i])
//     if (i === cost.length || i === cost.length - 1) {
//         console.log('exit')
//         return total
//     }
// }
//     let n = cost.length
//     let climbStairs = (i) => {
//         if (n <= i) {
//             return 0
//         }
//         console.log(i)
//         cost[i] + Math.min(climbStairs(i + 1), climbStairs(i + 2))
//     }
//     return Math.min(climbStairs(0), climbStairs(1))

// };
// minCostClimbingStairs(cost)

//memoization/ fib sequence
//memoization 
//js object/ keys will be arg to fn, value will be return value

// let fib = (n, memo = {}) => {
//     if (n in memo) return memo[n]
//     if (n <= 2) return 1
//     memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
//     // return fib(n - 1) + fib(n - 2)
//     return memo[n]
// }

//gridTraveler memoization
//base cases with grids gridTraveler(0,1),(1,0) = 0; 
//gridTraveler (1,1), (10, 1) = 1
//startig with small sample sizes can allow you to figure out base cases

// no memoization 2^n slow
// let gridTraveler = (m, n) => {
//     if (m === 1 && n === 1) return 1
//     if (m === 0 || n === 0) return 0
//     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
// }

// //add memoization
// let gridTraveler = (m, n, memo = {}) => {
//     //are the args in the memo
//     let key = m + ',' + n
//     if (key in memo) return memo[key]
//     if (m === 1 && n === 1) return 1
//     if (m === 0 || n === 0) return 0

//     // try not to write code that checks your children directly; look b4 u leap
//     memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
//     return memo[key]
// }

// //canSum scenarios brute force
// let canSum = (targetSum, nums) => {
//     //from our tree base cases are = 0 and less than 0
//     if (targetSum === 0) return true
//     //since once a number goes negative we can't fix it
//     if (targetSum < 0) return false

//     //for of loop lets us look in nums array for each element resembling our tree

//     for (let num of nums) {
//         let remainder = targetSum - num
//         if (canSum(remainder, nums) === true) {
//             return true
//         }
//     }
//     //if none of the tree returns true
//     return false
// }

// //canSum + memoization
// let canSum = (targetSum, nums, memo = {}) => {
//     //add key to our memo, nums doesn't change so only need targetSum
//     if (targetSum in memo) return memo[targetSum]
//     if (targetSum === 0) return true
//     if (targetSum < 0) return false


//     for (let num of nums) {
//         let remainder = targetSum - num
//         if (canSum(remainder, nums, memo) === true) {
//             //this is where we store our memo obj
//             memo[targetSum] = true
//             return true
//         }
//     }
//     return false

//howSum brute force
// let howSum = (targetSum, nums) => {
//     if (targetSum === 0) return []
//     if (targetSum < 0) return null

//     for (let num of nums) {
//         let remainder = targetSum - num
//         let result = howSum(remainder, nums)
//         if (result !== null) {
//             // returns the same array with the working num at the end
//             // so should keep returning working arrays + new num
//             return [...result, num]
//         }
//     }
//     //if you reach here not possible to generate sum 
//     return null
// }

// //howSum memoized
// let howSum = (targetSum, nums, memo = {}) => {
//     if (targetSum in memo) return memo[targetSum]
//     if (targetSum === 0) return []
//     if (targetSum < 0) return null

//     for (let num of nums) {
//         let remainder = targetSum - num
//         let result = howSum(remainder, nums, memo)
//         if (result !== null) {
//             memo[targetSum] = [...result, num]
//             return memo[targetSum]
//         }
//     }
//     //if you reach here not possible to generate sum 
//     memo[targetSum] = null
//     return null
// }

//bestSum brute force
// let bestSum = (targetSum, nums) => {
//     if (targetSum === 0) return []
//     if (targetSum < 0) return null

//     let shortestCombo = null


//     // for(let num in nums) {
//     //remember for in checks indices 0, 1, 2, 3; 
//     // for of checks elements of array
//     for (let num of nums) {
//         let remainder = targetSum - num
//         let resultCombo = bestSum(remainder, nums)
//         if (resultCombo !== null) {
//             let combo = [...resultCombo, num]
//             // if the combination is shorter than current shortest
//             if (shortestCombo === null || combo.length < shortestCombo.length) {
//                 shortestCombo = combination
//             }
//         }
//     }

//     return shortestCombo
// }

// //bestSum memoization
// let bestSum = (targetSum, nums, memo = {}) => {
//     if (targetSum in memo) return memo[targetSum]
//     if (targetSum === 0) return []
//     if (targetSum < 0) return null

//     let shortestCombo = null



//     for (let num of nums) {
//         let remainder = targetSum - num
//         let resultCombo = bestSum(remainder, nums, memo)
//         if (resultCombo !== null) {
//             let combo = [...resultCombo, num]
//             // if the combination is shorter than current shortest
//             if (shortestCombo === null || combo.length < shortestCombo.length) {
//                 shortestCombo = combination
//             }
//         }
//     }
//     memo[targetSum] = shortestCombo
//     return shortestCombo
// }

//brute force
// let canConstruct = (target, wordBank) => {
//     if (target === '') {
//         return true
//     }

//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             let suffix = target.slice(word.length)
//             if (canConstruct(suffix, wordBank) === true) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// //memoization
// let canConstruct = (target, wordBank, memo = {}) => {
//     // if my target is in memo, return that target
//     if (target in memo) return memo[target]
//     if (target === '') {
//         return true
//     }

//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             let suffix = target.slice(word.length)
//             if (canConstruct(suffix, wordBank, memo) === true) {
//                 //wherever you have recursive returns, store that return
//                 //value in your memo b4 returning
//                 memo[target] = true
//                 return true
//             }
//         }
//     }
//     memo[target] = false
//     return false
// }

//brute force
// let countConstruct = (target, wordBank) => {
//     if (target === '') return 1

//     let totalCount = 0

//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             let numWays = countConstruct(target.slice(word.length), wordBank)
//             totalCount += numWays
//         }
//     }
//     return totalCount
// }

// //memoization
// let countConstruct = (target, wordBank, memo = {}) => {
//     if (target in memo) return memo[target]
//     if (target === '') return 1

//     let totalCount = 0

//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             let numWays = countConstruct(target.slice(word.length), wordBank, memo)
//             totalCount += numWays
//         }
//     }
//     memo[target] = totalCount
//     return totalCount
// }

//brute force
// let allConstruct = (target, wordBank) => {
//     if (target === '') return [[]]

//     let result = []

//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             let suffix = target.slice(word.length)
//             let suffixWays = allConstruct(suffix, wordBank)
//             let targetWays = suffixWays.map(way => [word, ...way])
//             result.push(...targetWays)
//         }
//     }
//     return result
// }

// //memoization 
// let allConstruct = (target, wordBank, memo = {}) => {
//     if (target in memo) return memo[target]
//     if (target === '') return [[]]

//     let result = []

//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             let suffix = target.slice(word.length)
//             let suffixWays = allConstruct(suffix, wordBank)
//             let targetWays = suffixWays.map(way => [word, ...way])
//             result.push(...targetWays)
//         }
//     }
//     memo[target] = result
//     return result
// }

//Tabulation dynamic programming

// let fib = (n) => {
//     let table = Array(n + 1).fill(0)
//     table[1] = 1
//     for (let i = 0; i <= n; i++) {
//         table[i + 1] += table[i]
//         table[i + 2] += table[i]
//     }
//     return table[n]
// }

// //gridTraveler Tabulation
// let gridTraveler = (m, n) => {
//     let table = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
//     table[1][1] = 1
//     for (let i = 0; i <= m; i++) {
//         for (let j = 0; j <= n; j++) {
//             let current = table[i][j]
//             if (j + 1 <= n) table[i][j + 1] += current
//             if (i + 1 <= m) table[i + 1][j] += current
//         }
//     }

//     return table[m][n]
// }

// //canSum tabulation
// let canSum = (targetSum, nums) => {
//     let table = Array(targetSum + 1).fill(false)
//     table[0] = true
//     for (let i = 0; i <= targetSum; i++) {
//         if (table[i] === true) {
//             //if current position is true need to look ahead w/ our elements
//             for (let num of nums) {

//                 table[i + num] = true

//             }
//         }
//     }
//     return table[targetSum]
// }

// //howSum tabulation
// let howSum = (targetSum, nums) => {
//     let table = Array(targetSum + 1).fill(null)
//     table[0] = []

//     for (let i = 0; i <= targetSum; i++) {
//         if (table[i] !== null) {
//             for (let num of nums) {
//                 table[i + num] = [...table[i], num]
//             }
//         }
//     }
//     return table[targetSum]
// }

// //bestSum tabulation
// let bestSum = (targetSum, nums) => {
//     let table = Array(targetSum + 1).fill(null)
//     table[0] = []
//     for (let i = 0; i <= targetSum; i++) {
//         if (table[i] !== null) {
//             for (num of nums) {
//                 let combination = [...table[i], num]
//                 //if this current combination is shorter than stored combo
//                 //!table[i+num] since we're checking null which is falsy best way to compare future 
//                 //iterations which may encounter null also for undefineds
//                 if (!table[i + num] || table[i + num].length > combination.length) {
//                     table[i + num] = combination
//                 }
//             }
//         }
//     }
// }

// //canConstruct tabulation
// let canConstruct = (target, wordBank) => {
//     let table = Array(target.length + 1).fill(false)
//     table[0] = true

//     for (let i = 0; i <= target.length; i++) {
//         if (table[i] === true) {
//             for (let word of wordBank) {
//                 //word needs to match character starting at position 1
//                 if (target.slice(i, i + word.length) === word) {
//                     table[i + word.length] = true
//                 }
//             }
//         }
//     }
//     return table[target.length]
// }

// //countConstruct tabulation
// let countConstruct = (target, wordBank) => {
//     let table = Array(target.length + 1).fill(0)
//     table[0] = 1

//     for (let i = 0; i <= target.length; i++) {
//         for (let word of wordBank) {
//             if (target.slice(i, i + word.length) === word) {
//                 table[i + word.length] += table[i]
//             }
//         }
//     }
//     return table[target.length]
// }

// //allConstruct tabulation
// let allConstruct = (target, wordBank) => {
//     let table = Array(target.length + 1).fill().map(() => [])
//     table[0] = [[]]

//     for (let i = 0; i <= target.length; i++) {
//         for (let word of wordBank) {
//             if (target.slice(i, i + word.length) === word) {
//                 let newCombos = table[i].map(subArray => [...subArray, word])
//                 table[i + word.length].push(...newCombos) //spread operator here helps avoiding additional nesting
//             }
//         }
//     }
//     return table[target.length]
// }

// let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// var minCostClimbingStairs = function (cost) {
//     /*
//     f[i] = cost[i] + min(f[i+1], f[i+2])
//     */
//     let total = []
//     total[0] = cost[0]
//     total[1] = cost[1]

//     for (let i = 2; i <= cost.length; i++) {
//         let costV =
//             total[i] = cost[i] + Math.min(total[i + 1], total[i + 2])
//     }
//     return total[cost - 1]
// };
// minCostClimbingStairs(cost)


// let graph = [[4, 3, 1], [3, 2, 4], [3], [4], []]
// var allPathsSourceTarget = function (graph) {

//     let n = graph.length
//     let table = []
//     let path = Array(n).fill(0)
//     // console.log(table)

//     for (let i = n - 1; i >= 0; i--) {
//         for (let k = i + 1; k <= n; k++) {
//             if (graph[i][k] || graph[i][k] === []) {
//                 console.log(i)
//                 console.log(k)
//                 console.log(graph[i][k])
//                 table.push([i, graph[i][k]])
//                 console.log(table)
//             }
//         }
//     }
//     console.log(table)
// };
// allPathsSourceTarget(graph)

// n = 4, edges = [[0, 1, 3], [1, 2, 1], [1, 3, 4], [2, 3, 1]], distanceThreshold = 4
// var findTheCity = function (n, edges, distanceThreshold) {

//     let a = [...Array(n)].map(e => Array(n).fill(Infinity))
//     for (let i = 0; i < n; i++) {
//         a[i][i] = 0
//     }

//     for (let edge of edges) {
//         a[edge[0]][edge[1]] = a[edge[1]][edge[0]] = edge[2]
//     }
//     console.log(a)

//     for (let k = 1; k <= n; k++) {
//         for (let i = 0; i < n; i++) {
//             for (let j = 0; j < n; j++) {
//                 // console.log(a[i][j])
//                 if (i === j) continue;
//                 a[i][j] = Math.min(a[i][j], a[i][k - 1] + a[k - 1][j]);
//                 if (a[i][j] <= distanceThreshold) {

//                 }
//             }
//         }
//     }
//     console.log(a)
//     let minCount = 0
//     let city = undefined
//     let count = 0
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < a.length; j++) {
//             // console.log(a[i][j])
//             if (a[i][j] <= distanceThreshold) {
//                 count++
//             }
//         }
//         console.log(count)
//         console.log(minCount)
//         if (count <= minCount || minCount === 0) {
//             city = i
//             minCount = count
//         }
//         count = 0
//     }
//     console.log(city)
// };

// findTheCity(n, edges, distanceThreshold)
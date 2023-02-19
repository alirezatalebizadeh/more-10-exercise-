
//=============================================یه شهر رو از کاربر بگیر و دیتاهاش رو نشون بده
// let cites = {
//     tehran: ['Tehran', 'Shahryar', 'rudehen', 'bumehen'],
//     shiraz: ['shiraz', 'fars', 'jamshid', 'shiraz pars'],
//     mashhad: ['Mashhad', 'Fariman', 'Guchan'],
//     tabriz: ['Tabriz', 'Marand', 'Jolfa', 'Ahar']
// }

// let citeName = prompt('enter your provine please')

// let mainProvinesCity = cites[citeName]

// console.log(mainProvinesCity);

//======================================================ازمون انلاین
// let allQuestion = [
//     { id: 1, title: '2+2', answer: 4 },
//     { id: 2, title: '5+9', answer: 14 },
//     { id: 3, title: '5+7', answer: 12 },
//     { id: 4, title: '12+2', answer: 14 },
//     { id: 5, title: '1+15', answer: 16 },
//     { id: 6, title: '72+9', answer: 81 },
//     { id: 7, title: '12+2', answer: 14 },
//     { id: 8, title: '52+52', answer: 104 }
// ]

// let score = 0;

// allQuestion.forEach(question => {
//     let answerUser = +prompt(`answer this question :\n${question.title} ?`)

//     if (question.answer == answerUser) {
//         score++
//     }
// })

// alert(`your final score is : ${score} `)
//========================================================ماشین حساب ساده==========

// let number1 = +prompt('enter first number please', 0)
// let number2 = +prompt('enter second number please', 0)
// let chooseUser = prompt('what do you need ?\n+\n-\n*\n/')
// let res;

// chooseUser == '+' ? res = number1 + number2
//     : chooseUser == '-' ? res = number1 - number2
//         : chooseUser == '*' ? res = number1 * number2
//             : chooseUser == '/' ? res = number1 / number2
//                 : alert('just enter number Value in box please')


// alert(`calculator for you :${res}`)
//=====================================تمرین نشان دادن پسوورد کاربر به گرفتن زنام کاربر======

// var users = [
//     { id: 1, userName: 'Ali', password: 25648 },
//     { id: 2, userName: 'Amin', password: 21654 },
//     { id: 3, userName: 'Amir', password: 357351 },
//     { id: 4, userName: 'Babak', password: 354654 },
// ]

// let requestUser = prompt('enter your userName to find your password')

// let mainDataUser = users.find(user => {
//     return user.userName == requestUser
// })

// if (mainDataUser) {

//     alert(`${mainDataUser.password}`)
// } else {
// alert('you don not signIn in website')
// }
//==============================================================================


// let minute = +prompt('enter your time(minute)')
// let second = +prompt('enter your time(second)')

// let timerUser = setInterval(function () {
//     if (second === -1) {
//         minute--
//         second = 59
//     }

//         if (minute === 0 && second === 0) {
//             clearInterval(timerUser)
//             alert('timer finished')
//         }
//     console.log(`${minute} : ${second}`);
//     second--
// }, 100)

//===================================================تمرین عکس پروفایل

// let hasImgProfile = false;

// setTimeout(function () {
//     if (!hasImgProfile) {
//         alert('please insert your img profile ')
//     }
// }, 5000)

//================================================چک کردن لاگین بودن کاربر==================

// let userName = prompt('insert your username')

// let users = ['Ali', 'Amin', 'Ahmmad', 'Hammid']

// let loginFlag = false;


// let hasUser = users.find(user => {
//     if (user === userName) {
//         return loginFlag = true
//     }

// })

// if (hasUser) {
//     alert('لاگین شدین')
// } else {
//     alert('ابتدا ثبت نام کنید')
// }

//==================================================



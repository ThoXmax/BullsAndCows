// game: 1-100, visitor bulls and cows
A7: 方法1
宣告變數
let answer = 66 // 正確數字
let guess = 0   // 挑戰者猜的數字
let count = 0   // 回合數

// ========= 從這裡開始 ==========
// 先印出正確數字
console.log(`正確數字為: ${answer} `)

while (guess !== answer) {
    count++

    guess = Math.floor(Math.random() * 100) + 1 // 挑戰者猜一個本回合的數字          
    
    if (guess !== answer) {
        console.log(`第 ${count} 回合, 挑戰者猜 ${guess} , 莊家回答: ${guess > answer ? '太大了' : '太小了'}`)      
    } else {
        console.log(`第 ${count} 回合, 挑戰者猜 ${guess} , 莊家回答: 恭喜答對!`)
    }
}

// A8: Pseudocode
// 

// A9: 方法2
// 宣告變數
let answer = Math.floor(Math.random() * 100) + 1 // 正確數字
let max = 100   // 最大值
let min = 0     // 最小值
let guess = 0   // 挑戰者猜一半數字
let count = 0   // 回合數

// ========= 從這裡開始 ==========
// 先印出正確數字
console.log(`正確數字為: ${answer} `)

while (guess !== answer) {
    count++          
    
    guess = Math.floor(min + (max - min) / 2)

    if (guess !== answer) {
        guess > answer ? max = guess - 1 : min = guess + 1
        console.log(`第 ${count} 回合, 挑戰者猜 ${guess} , 莊家回答: ${guess > answer ? '太大了' : '太小了'}`)
    } else {
        console.log(`第 ${count} 回合, 挑戰者猜 ${guess} , 莊家回答: 恭喜答對!`)
    }
}
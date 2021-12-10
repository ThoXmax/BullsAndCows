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

// A8: Pseudocode/FlowChart

// 運算思維:
// 1. 把問題拆小，提升猜中數字的效率
//      (1) 猜過的不要猜
//      (2) 固定的範圍
// 2. 實際玩
// 3. 找到規律 - 歸納公式
// 4. 寫作業 - 執行電腦的指令，解決問題

// 分析:
// 假設answer: 66
// 使用二分法

//  1-100 猜50
// 50-100 猜75
// 50-75  猜62
// 62-75  猜68
// 62-68  猜65
// 65-68  猜66
// 恭喜答對!

// 由上規律得知
// (1) guess: 100/2、50/2、25/2...
// (2) 最大值、最小值
// (3) 要注意無限迴圈問題(延伸思考)

// Pseudocode: 
// 設定初始值: 66
// 設定最大值
// 設定最小值

// 因為要不斷地猜數字直到猜中為止，且條件不複雜所以可以用while
// while (guess !== answer) {

    // min = min + (max - min) / 2

    // IF (guess > answer) 
    //     '印出太大了'
    // ElSE IF (guess < answer) 
    //     '印出太小了'
    // ELSE
    //     '恭喜答對'
    // END IF
//}

// FlowChart (略)


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
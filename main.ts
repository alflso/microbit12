let 주사위숫자결정값 = 0
let 가속도센서변화크기 = 0
function 주사위숫자출력 () {
    if (주사위숫자결정값 == 0) {
        주사위불발표시()
    }
    if (주사위숫자결정값 == 1) {
        주사위1출력()
    }
    if (주사위숫자결정값 == 2) {
        주사위2출력()
    }
    if (주사위숫자결정값 == 3) {
        주사위3출력()
    }
    if (주사위숫자결정값 == 4) {
        주사위4출력()
    }
    if (주사위숫자결정값 == 5) {
        주사위5출력()
    }
    if (주사위숫자결정값 == 6) {
        주사위6출력()
    }
}
function 주사위랜덤결정 () {
    가속도센서변화크기 = Math.abs(input.acceleration(Dimension.X))
    if (가속도센서변화크기 >= 200) {
        주사위숫자결정값 = randint(1, 6)
    } else {
        주사위숫자결정값 = 0
    }
    basic.showNumber(가속도센서변화크기)
}
function 주사위불발표시 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(3000)
    basic.clearScreen()
}
function 주사위1출력 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.clearScreen()
}
function 주사위2출력 () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.pause(3000)
    basic.clearScreen()
}
function 주사위4출력 () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `)
    basic.pause(3000)
    basic.clearScreen()
}
function 주사위3출력 () {
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . .
        `)
    basic.pause(3000)
    basic.clearScreen()
}
function 주사위5출력 () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(3000)
    basic.clearScreen()
}
function 주사위6출력 () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
    basic.pause(3000)
    basic.clearScreen()
}
basic.forever(function () {
    주사위랜덤결정()
    주사위숫자출력()
})

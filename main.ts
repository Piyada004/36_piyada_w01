let falls = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.pause(1000)
    falls += 1
    basic.showNumber(falls)
})
input.onButtonPressed(Button.A, function () {
    falls = 0
    basic.showNumber(falls)
})

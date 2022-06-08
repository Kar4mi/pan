let sensor = 0
basic.forever(function () {
    sensor = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (sensor < 10) {
        basic.showLeds(`
            # . # # .
            # # # . #
            . # # . #
            # . # # #
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})

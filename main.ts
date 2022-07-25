basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(3)
        basic.pause(1000)
        basic.showNumber(2)
        basic.pause(1000)
        basic.showNumber(1)
        basic.pause(randint(500, 2000))
        basic.showIcon(IconNames.Square)
        music.playMelody(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Linear), 60)
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showArrow(ArrowNames.West)
    } else {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showArrow(ArrowNames.East)
        }
    }
    basic.pause(2000)
    basic.clearScreen()
})

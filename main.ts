input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 B A G - - - - ", 120), music.PlaybackMode.InBackground)
    led.plot(0, 0)
    basic.pause(500)
    led.plot(1, 1)
    basic.pause(500)
    led.plot(2, 2)
    basic.pause(500)
    led.plot(3, 3)
    basic.pause(500)
    led.plot(4, 4)
    led.unplot(0, 0)
    led.unplot(1, 1)
    led.unplot(2, 2)
    led.unplot(3, 3)
    led.unplot(4, 4)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C D E F - - - - ", 120), music.PlaybackMode.InBackground)
    led.plot(4, 4)
    basic.pause(500)
    led.plot(3, 3)
    basic.pause(500)
    led.plot(2, 2)
    basic.pause(500)
    led.plot(1, 1)
    basic.pause(500)
    led.plot(0, 0)
    led.unplot(0, 0)
    led.unplot(1, 1)
    led.unplot(2, 2)
    led.unplot(3, 3)
    led.unplot(4, 4)
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
let randomNumber15 = Math.randomRange(1, 5)
game.splash("This is a number 1-5" + ":" + randomNumber15, "")
let randomNumber610 = Math.randomRange(6, 10)
game.splash("This is a number 6-10" + ":" + randomNumber610, "")
let randomNumber1120 = Math.randomRange(11, 20)
game.splash("This is a number 11-20" + ":" + randomNumber1120, "")
let randomNumber1100 = Math.randomRange(1, 100)
game.splash("This is a number 1-100" + ":" + randomNumber1100, "")

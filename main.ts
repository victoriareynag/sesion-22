let Heroe = game.createSprite(0, randint(0, 4))
let Villano = game.createSprite(4, randint(0, 4))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        Heroe.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.A)) {
        Heroe.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.B)) {
        Heroe.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    while (input.pinIsPressed(TouchPin.P2)) {
        Heroe.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    if (Heroe.isTouching(Villano)) {
        Heroe.delete()
        Villano.delete()
        basic.showIcon(IconNames.Skull)
        control.reset()
        music.playMelody("C D B G C5 G E A ", 120)
    }
})

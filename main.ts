controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`villager1WalkLeft3`)
    controller.moveSprite(mySprite, 100, 0)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`villager1WalkFront1`)
    controller.moveSprite(mySprite, 0, 0)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`villager1WalkFront1`)
    controller.moveSprite(mySprite, 0, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`villager1WalkRight2`)
    controller.moveSprite(mySprite, 100, 0)
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`moon`)
mySprite = sprites.create(assets.image`villager1WalkFront1`, SpriteKind.Player)
scaling.scaleToPercent(mySprite, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)

forever(function () {
    pins.P22.digitalWrite(true)
    pause(1000)
    pins.P22.digitalWrite(false)
    pause(1000)
})

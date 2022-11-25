input.onButtonPressed(Button.A, function () {
    devices.tellCameraTo(MesCameraEvent.LaunchPhotoMode)
    basic.pause(5000)
    devices.tellCameraTo(MesCameraEvent.TakePhoto)
})

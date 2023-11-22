/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Lyver
 * Created on: Nov 2023
 * This program turns a 2 - 28BYJ-48 DC 5V until a sonar sensor senses an object 10cm away
*/

// variable
let distanceToObject: number = 0

// loop forever
while (true) {
  if (input.buttonIsPressed(Button.A) == true) {
    // get sonar distance 
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.clearScreen()
    // if distance > 10cm move wheels
    if ((distanceToObject) > 10) {
      robotbit.StpCarMove(10, 48)
      basic.showIcon(IconNames.Heart)
    }
    if ((distanceToObject) <= 10) {
      
      basic.showIcon(IconNames.Duck)
    }
  }
}
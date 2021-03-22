from gpiozero import RGBLED
import time

delay = 0.1

led = RGBLED(red=18, green=15, blue=14)

colors = {
            "white": (0, 0, 0),
            "red": (0, 1, 1),
            "green": (1, 0, 1),
            "blue": (1, 1, 0),
            "yellow": (0, 0, 1),
            "cyan": (1, 0, 0),
            "magenta": (0, 1, 0)
        }


def changeColor(color):
    led.color = colors.get(color)


# checking for update
while True:
    time.sleep(delay)
    with open("color", "r") as f:
        changeColor(f.read()[:-1])


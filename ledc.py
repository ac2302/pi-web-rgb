from gpiozero import RGBLED

led = RGBLED(red=18, green=15, blue=14)

colors = {
            "red": (0, 1, 1),
            "green": (1, 0, 1),
            "blue": (1, 1, 0)
        }


def changeColor(color):
    led.color = colors.get(color)


# checking for update
while True:
    changeColor(input(">> "))



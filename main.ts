input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    x = 0
    y = 0
    list = [
    [
    10,
    50,
    100,
    150,
    255
    ],
    [
    255,
    150,
    100,
    50,
    10
    ],
    [
    255,
    255,
    255,
    255,
    255
    ],
    [
    150,
    150,
    150,
    150,
    150
    ],
    [
    10,
    10,
    10,
    10,
    10
    ]
    ]
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plotBrightness(x, y, list[y][x])
        }
    }
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    let e = 0
    let d = 0
    let c = 0
    let b = 0
    let a: null = null
    basic.clearScreen()
    x = 0
    y = 0
    x = 0
    list = [
    [
    a,
    b,
    c,
    d,
    e
    ],
    [
    a,
    b,
    c,
    d,
    e
    ],
    [
    a,
    b,
    c,
    d,
    e
    ],
    [
    a,
    b,
    c,
    d,
    e
    ],
    [
    a,
    b,
    c,
    d,
    e
    ]
    ]
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plotBrightness(x, y, list[y][x])
        }
    }
})
let list: number[][] = []
let y = 0
let x = 0
x = 0
y = 0
list = [
[
1,
0,
1,
0,
1
],
[
0,
1,
0,
1,
0
],
[
1,
0,
0,
0,
1
],
[
1,
0,
0,
0,
1
],
[
1,
0,
0,
0,
1
]
]
for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        if (list[y][x] == 1) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
    }
}
basic.pause(500)
for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        if (list[y][x] == 1) {
            led.plot(y, x)
        } else {
            led.unplot(y, x)
        }
    }
}
basic.pause(500)
basic.clearScreen()

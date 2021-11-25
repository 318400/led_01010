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
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    if (true) {
        a = 255
        b = 150
        c = 100
        d = 50
        e = 10
    }
    x = 0
    y = 0
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
    basic.pause(100)
    for (let index = 0; index < 5; index++) {
        a += a
        b += b
        c += c
        d += d
        e += e
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                led.plotBrightness(x, y, list[y][x])
            }
        }
        basic.pause(100)
    }
    basic.pause(500)
    basic.clearScreen()
})
let e = 0
let d = 0
let c = 0
let b = 0
let a = 0
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
if (a >= 250) {
    a += a - 50
} else if (a <= 10) {
    a += a + 50
}
if (b >= 250) {
    b += b - 50
} else if (b <= 10) {
    b += b + 50
}
if (c >= 250) {
    c += c - 50
} else if (c <= 10) {
    c += c + 50
}
if (d >= 250) {
    d += d - 50
} else if (d <= 10) {
    d += d + 50
}
if (e >= 250) {
    e += e - 50
} else if (e <= 10) {
    e += e + 50
}

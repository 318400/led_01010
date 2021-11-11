let A = 0
let B = 0
let list = [
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
basic.forever(function () {
	
})
basic.forever(function () {
    for (let B = 0; B <= 4; B++) {
        for (let A = 0; A <= 4; A++) {
            if (list[B][A] == 1) {
                led.plot(A, B)
            } else {
                led.unplot(A, B)
            }
        }
    }
    basic.pause(500)
    for (let B = 0; B <= 4; B++) {
        for (let A = 0; A <= 4; A++) {
            if (list[B][A] == 1) {
                led.plot(B, A)
            } else {
                led.unplot(B, A)
            }
        }
    }
    basic.pause(500)
})

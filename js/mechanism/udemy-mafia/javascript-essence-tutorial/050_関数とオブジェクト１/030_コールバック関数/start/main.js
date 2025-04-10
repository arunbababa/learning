// 適当に何かコールバック関数の例を作るのだ
function a(b) {
    b()
}

const b = function () {
    console.log("im b")
}

a(b)

// よく使うやつ
setTimeout(() => {
    console.log("2秒待ったでしょ")
}, 2000);
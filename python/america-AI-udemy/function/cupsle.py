# カプセル化（encapsulation）：外からアクセスできないようにする（情報隠蔽）

def casino_enterance(age, min_age=21):
    if age < min_age:
        print(f"{min_age}歳未満お断り")
        return

    def inner_casino_entrance():
        print("ようこそカジノへ")

    return inner_casino_entrance()

casino_enterance(18)
# inner_casino_entrance()  # 外から直接呼び出すのは不可（カプセル化）

# こうすることで関数の責任の分離ができる
# が見通しは悪いのでクロージャやデコレータを見よう
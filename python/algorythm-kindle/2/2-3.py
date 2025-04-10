# 2-2をインポートしてテストsるう
# ほぉモジュール名先頭に数字あかんなimportできん
from non import max_of

print("配列の最大値を求めます")
print('注意:"End"で入力終了')

number = 0
x = []

while True:
    s = input(f'x[{number}]:')
    if s == "End":
        break
    x.append(int(s))
    number += 1

print(f"{number}個読み込みました。")
print(f"最大値は{max_of(x)}です。")

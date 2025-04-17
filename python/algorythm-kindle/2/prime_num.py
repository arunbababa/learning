# 素数を求めるプログラムの深掘り

# パターン１　何回も同じ数字に対して素数判定をする

# 1000以下の素数を列挙するプログラム
counter = 0

for n in range(2, 1001):
    for i in range(2, n):
        counter += 1
        if n % i == 0:    # 割り切れると素数ではない
            break         # それ以上の繰り返しは不要
        else:
            print(n)      # 割り切れなかった素数の出力
print(f'除算を行った回数:{counter}')

# 素数を求めるプログラムの深掘り

# パターン１　何回も同じ数字に対して素数判定をする

# 1000以下の素数を列挙するプログラム
# counter = 0

# for n in range(2, 1001):
#     for i in range(2, n):
#         counter += 1
#         if n % i == 0:    # 割り切れると素数ではない
#             break         # それ以上の繰り返しは不要
#         else:
#             print(n)      # 割り切れなかった素数の出力
# print(f'除算を行った回数:{counter}')

# 改良
# パターン2
counter = 0                                    # 除算の回数
ptr = 0                                        # 得られた素数の個数
prime = [None] * 500                           # 素数を格納する配列

prime[ptr] = 2                                 # 2は素数である
ptr += 1

for n in range(3, 1001, 2):                    # ステップを2ずつとしているのは偶数に関しては2で割り切れて明らかに素数ではないため、奇数だけ確認すればいいよねの意
    for i in range(1, ptr):
        counter += 1
        if n % prime[i] == 0:
            break
    else:
        prime[ptr] = n                         # 素数の配列として登録
        ptr += 1
        
for i in range(ptr):
    print(prime[i])
print(f'除算を行った回数:{counter}')

# メモ
# 同じ階を得るためのアルゴリズムは一つであるとは限らない
# 高速なアルゴリズムは、より多くの記憶領域を必要とする傾向がある
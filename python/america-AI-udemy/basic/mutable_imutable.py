"""
リスト型変数(mutable)と数値型変数による挙動の違いを見てみよう
"""

# リストに要素を追加した際に変数が参照するメモリID（イメージ）
l = [1,2,3,4,5]
print(id(l))
l.append(6)
print(id(l)) # ７行目と変わらない

# 数字型変数に要素を追加した際に変数が参照するメモリID（イメージ）
a = 1
print(id(a))
a += 2
print(id(a)) # 12行目とは異なる

# これがミュータブル、イミュータブル感の挙動の差

# for文での一例を考えてみよう、どちらが効率的？

# immutable
a = ''
for i in range(1,11):
    a += '-' + str(i)
print(a)               # こっちはなんどもa変数のメモリを新しく作るから非効率

# mutable
l = []
for n in range(1,11):  # こっちはリストメモリを使いまわすので上と比べて効率が良い
    l.append(str(n))
b ='-'.join(l)
print(b)

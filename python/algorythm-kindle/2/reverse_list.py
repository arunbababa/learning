# リストを反転するプログラム
# まずアルゴリズムを整理する
"""
要素数nのリストaをn//2回以下のことを実施すればよい 端数は端折っていい奇数の際は反転する必要がないからね
a[i], a[n-1-1] = a[n-1-1], a[i]
iは繰り返しの中で0スタートではじめインクリメントしていくための変数
よって以下のようになる 
"""

# a = [1,2,3,4,5,6,7]
# n = len(a)
# for i in range(n // 2):
#     a[i], a[n-1-i] = a[n-1-i], a[i]
# print(a)

# 以下汎用化しインタラクティブに
from typing import Any, MutableSequence

def reverse_array(a:MutableSequence) -> None:
    n = len(a)
    for i in range(n // 2):
        a[i], a[n-1-i] = a[n-1-i], a[i]

if __name__ == '__main__':
    print("配列の要素を反転させましょう")
    nx = int(input("要素数を入力してください"))
    x = [None] * nx
    
    for i in range(nx):
        x[i] = int(input(f"x[{i}]"))
        
    reverse_array(x)
    
    print(f"要素を逆にしたよ{x}")
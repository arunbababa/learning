# 階乗を求めるプログラム

# def factorial(n) -> int:
    
#     if n == 1:
#         return 1
#     return n * factorial(n-1)

# print(factorial(4))

# フィボナッチ数列
'''
要件
fib(0) = 0
fib(1) = 1
fib(n) = fib(n-1) + fib(n-2)
'''

def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)
print(fib(3))

# 再帰とキャッシュなしのフィボナッチプログラム
def fib_n(n):
    if n <= 1:
        return n

    a, b = 0, 1  # 最初の2項
    for _ in range(n-1): # 普通に再帰で考えた際の流れを繰り返しで考えるだけ 何を(どんな処理を)何回繰り返すべきか？(最初の設定とも考慮して)を考えれば単純、そして全体感も大事だが位置ループをのぞけばわかりやすいよ
        a, b = b, a + b  # 新しい値を更新していく aがbになることでf(n) = f(n-1) + f(n-2) のf(n-2)を表し(※次のループにおいてね)、bがb+aになることでf(n-1) + f(n-2)を表す(元のbをf(n-1)として使い、元のaをf(n-2)として利用粗油ことか!!!!)
    return b
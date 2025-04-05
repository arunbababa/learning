# 直角三角形を表示するプログラム
# 多重ループを利用することで繰り返し使ってできる系（この場合は２重ループ九九表も同じ）

n = int(input("直角何角形を表示したいですか？:"))
for i in range(n):
    for j in range(i + 1):
        print("*", end="")
    print()
# 読み込んだ10進数を2進数~32進数へと基数変換して表示する

def card_conv(x:int, r:int) -> str:
    """整数値xをr進数に変換した数値を表す文字列を返却"""
    d = ''
    dchar = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    while x > 0:
        d += dchar[x % r]
        x //= r
        
    return d[::-1]
        
print(card_conv(8921, 2))

# 自分なりの理解を追加
# 数学をブログラム言語に変換したのみ
# 気づけなかったのはｂ最後の部分を反転させて出力しないと行けないところ
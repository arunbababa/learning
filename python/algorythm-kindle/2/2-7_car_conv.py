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

# 2-7[B]ユーザと対話的に基数変換を行う
if __name__ == '__main__':
    
    print('10進数を基数変換します。')
    
    while True:
        while True:
            no = int(input('変換する非負の整数'))
            if no > 0:
                break
            
        while True:
            cd = int(input('何進数に変換しますか？(2~36)'))
            if 2 <= cd <= 36:
                break
            
        print(f'{cd}進数では{card_conv(no, cd)}です。')
        
        retry = input('もう一度処理を実行しますか？(Y / N)')
        if retry in {'N', 'n'}:
            break
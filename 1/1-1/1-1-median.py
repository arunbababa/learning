# 例 ちょっとずつ篩を書ける
def med3(a,b,c):
    if a >= b:
        if c > a:
            return a
        elif b > c:
            return b
        else:
            return c
    elif a > c:
        return a
    elif c > a:
        return c
    else:
        return b
    
print(med3(19,99,1399))
print(med3(1399, 19, 99)) 

# なんかバグるので用復習クイックソートで使う、決定木を書けば整理しやすいはず
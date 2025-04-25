from functools import lru_cache
import time

# .time(): 1970/1/1 から現在までに経過した秒数が表示 (Unix時間)
# print(time.time())

# fibでちょい重処理を実行し何秒かかるかをtimeを利用して計算する
# @lru_cache # この便利関数で同じ計算しなくて済む
# def fib(n: int)->int:
#     print(f"fib is runnning ...{n}")
#     if n < 2:
#         return n
#     return fib(n-1) + fib(n-2)

# before = time.time()
# fib(50)
# after = time.time()
# print(after - before)

# 課題　関数の実行時間を求めるtimerでこれーたを作成しよう

# んーなんかできねぇまぁ普通にデコレータがダメだろう
# def timer(func):
#     before = time.time()
#     func()
#     after = time.time()
    

# def jujo(num: int) ->int:
#     return num ** 10

# @timer
# jujo(10)

def timer(func):
    def wrapper(*args, **kwargs):
        before = time.time()
        result = func(*args, **kwargs)
        after = time.time()
        print(f"{func.__name__} 実行時間: {after - before:.5f} 秒")
        return result
    return wrapper

# テスト用関数
@timer
def jujo(num: int) -> int:
    return print(num ** 1000)
# 実行
jujo(10)
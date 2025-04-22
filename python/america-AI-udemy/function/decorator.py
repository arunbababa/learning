# デコレータ
# 関数に機能を付属する(デコレート)する

# デコレータで *args, **kwargs を使う理由について

# デコレータとは、関数を引数として受け取り、別の関数にラップして処理を追加できる仕組み。
# しかし、引数がある関数にデコレータをつける場合、注意が必要。

# 例1: *args や **kwargs を使わない場合

def my_decorator(func):
    def wrapper():
        print("呼び出し前")
        func()  # 引数がない前提
        print("呼び出し後")
    return wrapper

# @my_decorator
# # def say_hello(name):
#     print(f"Hello, {name}!")

# ↓ 実行するとエラーになる
# say_hello("Hatuka")
# → TypeError: wrapper() takes 0 positional arguments but 1 was given

# 理由:
# @my_decorator によって say_hello は wrapper に置き換えられている。
# wrapper() は引数を受け取らない定義になっているので、"Hatuka" を渡すとエラーになる。

# 例2: *args, **kwargs を使った場合（推奨）

def my_decorator_safe(func):
    def wrapper(*args, **kwargs):
        print("呼び出し前")
        func(*args, **kwargs)  # 渡された引数をそのまま func に渡す
        print("呼び出し後")
    return wrapper

@my_decorator_safe
def say_hello(name):
    print(f"Hello, {name}!")

say_hello("Hatuka")  # OK → 柔軟に引数を渡せる

# 結論:
# *args は可変長の位置引数、**kwargs は可変長のキーワード引数。
# これを使えば、どんな引数の関数にも対応できる柔軟なデコレータを作れる。
# 実践では、汎用的なデコレータ（ログ記録、タイマー、認証など）を作る際に必須となる。

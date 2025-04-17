# ---
# title: *argusと**kwardの誤解
# tags: Python 初心者
# author: arunbababa
# slide: false
# ---

# `*` や `**` は「アンパッキング（展開）するもの」と言われることが多いですが、
# 実際には状況によって「パック（まとめる）」動作にもなります。
# この2つの記号は、**関数の定義時と呼び出し時で全く逆の意味になる**ため、混乱しやすいポイントです。

# ---

# ## ✅ 結論

# 1. **関数定義時**： `*args`, `**kwargs` は「複数の引数をまとめて受け取る」 → **パック**
# 2. **関数呼び出し時**： `*`, `**` は「シーケンスや辞書をばらして渡す」 → **アンパック**

# ---

# ## 🟣 関数定義時の例（パック）

# ```python
# def func(*args, **kwargs):
#     print(args)
#     print(kwargs)

# func(1, 2, 3, a=10, b=20)
# # → args: (1, 2, 3)
# # → kwargs: {'a': 10, 'b': 20}
# ```

# - 位置引数は `args` という **タプル** に
# - キーワード引数は `kwargs` という **辞書** に

# ---

# ## 🟢 関数呼び出し時の例（アンパック）

# ```python
# def greet(greeting, name):
#     print(f"{greeting}, {name}!")

# args = ("Hello", "Alice")
# greet(*args)  # → Hello, Alice!
# ```

# ```python
# def display(voltage, action):
#     print(f"{action} at {voltage}V")

# d = {"voltage": 100, "action": "Run"}
# display(**d)  # → Run at 100V
# ```

# ※ このように、すでにタプルやリスト、辞書として持っている引数を、`*` や `**` を使って「ばらして渡す」ことで、個別の引数として関数に供給できます。

# ---

# ## ✅ まとめ

# | 使用場面         | `*` / `**` の意味                           |
# |------------------|----------------------------------------------|
# | 関数 **定義時**   | 複数の引数をまとめる（パック）                |
# | 関数 **呼び出し時** | タプル/リストや辞書をばらして渡す（アンパック） |

# ---

# 📎 公式ソース：
# - [任意の引数リスト（4.9.4）](https://docs.python.org/ja/3/tutorial/controlflow.html#arbitrary-argument-lists)
# - [引数リストのアンパック（4.9.5）](https://docs.python.org/ja/3/tutorial/controlflow.html#unpacking-argument-lists)

# 書いた
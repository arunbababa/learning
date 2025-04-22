# 了解！  
# じゃあラムダ関数の「模様」に慣れるための**典型的な問題＆回答**をいくつか出すわ。  
# **実用＋練習になるやつだけ厳選**したからサクッと力つく。

# ---

# ## 🧪 例題1：`"a"` を含む文字列だけ抽出せよ

# ```python
words = ["apple", "banana", "kiwi", "grape"]
# ```

# ### ✅ 回答：

# ```python
result = list(filter(lambda word: "a" in word, words))
print(result)  # ['apple', 'banana', 'grape']
# ```

# ---

# ## 🧪 例題2：タプルから90点以上の人を抽出せよ

# ```python
# students = [("John", 90), ("Alice", 85), ("Bob", 92)]
# ```

# ### ✅ 回答：

# ```python
# passed = list(filter(lambda x: x[1] >= 90, students))
# print(passed)  # [('John', 90), ('Bob', 92)]
# ```

# ---

# ## 🧪 例題3：数値を昇順に、文字列長でソートせよ

# ```python
# nums = ["1", "1234", "12", "123"]
# ```

# ### ✅ 回答：

# ```python
# sorted_nums = sorted(nums, key=lambda x: len(x))
# print(sorted_nums)  # ['1', '12', '123', '1234']
# ```

# ---

# ## 🧪 例題4：2つのリストの要素を掛け算せよ

# ```python
# a = [1, 2, 3]
# b = [4, 5, 6]
# ```

# ### ✅ 回答：

# ```python
# result = list(map(lambda x: x[0] * x[1], zip(a, b)))
# print(result)  # [4, 10, 18]
# ```

# ---

# ## 🧪 例題5：辞書の値を10倍にせよ（dict → dict）

# ```python
# d = {"a": 1, "b": 2, "c": 3}
# ```

# ### ✅ 回答：

# ```python
# scaled = dict(map(lambda item: (item[0], item[1] * 10), d.items()))
# print(scaled)  # {'a': 10, 'b': 20, 'c': 30}
# ```
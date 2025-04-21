# クロージャ
def make_counter():
    count = 0

    def counter():
        nonlocal count
        count += 1
        return count

    return counter

a = make_counter()
print(a())  # 1
print(a())  # 2

b = make_counter()
print(b())  # 1
print(b())  # 2
# クロージャの利点は、状態を保持できること、マジでなんかクラスみたいやなインスタンス化というか
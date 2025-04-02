# what is the max number in three digit?
print("3つの整数の最大値を求めます")
a = 1
b =2
c = 3

maximum = a
if maximum < b:
    maximum = b
    if maximum < c:
        maximum = c
print(f"最大値は{maximum}です")

print("3つの整数の最大値を求めます")
a = 1
b = 2
c = 3

maximum = a
if maximum < b:maximum = b
if maximum < c:maximum = c
print(f"最大値は{maximum}です")
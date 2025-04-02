# for文でa~bの総和を求める

# a~bつまりbが大きい方になるような前提、しかしinputで逆になり得る可能性があるためsortをする
print("a~bの合計を求めます")
a = int(input("aを設定してください"))
b = int(input("bを設定してください"))

# 2値の高官は以下のように単一分で書くのが定石
if a > b:
    a,b = b,a
    
sum = 0

# rangeやらジェネレータ系はだいたい未満ですなおrange(10)の場合は0異常10未満、range(1,10,2)であれば1異常10未満を2ステップごとにつまり1,3,5,7,9だな
for i in range(a, b+1):
    sum += i

print(sum)
# 公式から引用

# 4.4. break and continue Statements
# The break statement breaks out of the innermost enclosing for or while loop:

# >>>
# for n in range(2, 10):
#     for x in range(2, n):
#         if n % x == 0:
#             print(f"{n} equals {x} * {n//x}")
#             break

# 4 equals 2 * 2
# 6 equals 2 * 3
# 8 equals 2 * 4
# 9 equals 3 * 3
# The continue statement continues with the next iteration of the loop:

# >>>
# for num in range(2, 10):
#     if num % 2 == 0:
#         print(f"Found an even number {num}")
#         continue
#     print(f"Found an odd number {num}")

# Found an even number 2
# Found an odd number 3
# Found an even number 4
# Found an odd number 5
# Found an even number 6
# Found an odd number 7
# Found an even number 8
# Found an odd number 9

# 簡易カジノ
game_list = [{"none":None},{"roulet":"1:roulet"},{"black":"2:black"},{"poker":"3:poker"}]
while True:
    age = int(input("何さイエスか？"))
    if age < 18:
        print("まだ駄目")
        continue
    game = int(input(f"ゲームを選択してね(数字で入力):\n{game_list[1]["roulet"]}\n{game_list[2]["black"]}\n{game_list[3]["poker"]}\n"))
    print(f"よっしゃ、{game_list[game].key()}やるか")
    break

# あーいいか、設計に問題あるこの場合はgame_listにいろいろ責任持たせすぎだね


# 以下も反
count = 0
while count < 10:
    print(count)
    count += 1

# break と continue
while True:
    age = int(input("あなたは何歳ですか？"))
    if not 0 < age < 120:
        print("入力された値が正しくありません")
        continue
    else:
        print(f"あなたは{age}歳です")
        break

# challenge
age = int(input("何歳ですか？:"))
casino_age = 18
game_text = """プレイするゲームを選択してください. 
1: ルーレット
2: ブラックジャック 
3: ポーカー
:"""

if age >= casino_age:
    print("どうぞお入りください")
    while True:
        game = input(game_text)
        if game == '1':
            print("あなたはルーレットを選びました")
            break
        elif game == '2':
            print("あなたはブラックジャックを選びました")
            break
        elif game == '3':
            print("あなたはポーカーを選びました")
            break
        else:
            print("1~3を選んでください")
else:
    print(f"{casino_age}歳未満の方はカジノへは入れません！")

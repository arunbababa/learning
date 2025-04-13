# 辞書型と代表的なメソッドに対して学ぶ

# 大前提辞書のキーとバリューにはpythonのオブジェクトであればなんでも設定できる　嘘、ハッシュ可能であればOKリストと辞書はダメだって変更できてしまうもん

"""便利メソッド 
# for文でめちゃ使う .items→キーとバリューを順に values()→バリューを順に keys()→キーを順に
# .get()メソッド  → 使いどころをインタラクティブな部分でinputを制御できない場合にこれで制御したりする
例：ユーザから使えないinputが入力される → そのような入力は受け付けておりません。などと返す

# update()メソッド → 辞書の結合ができる
辞書1.update(辞書2)で使う
"""

# チャレンジ問題 whileのプログラムを辞書を使ってより良いものにしていく
age = int(input("何歳ですか？:"))
casino_age = 18
games = {
    1:'ルーレット',
    2:'ブラックジャック',
    3:'ポーカー',
    }
game_text = """プレイするゲームを選択してください. 
1: ルーレット
2: ブラックジャック 
3: ポーカー
:"""

if age >= casino_age:
    print("どうぞお入りください")
    while True:
        game = input(game_text)
        if game not in {'1','2','3'}:
            print('1,2,3の中からお選びください')
            continue
        if game == '1':
            print(f"あなたは{games[int(game)]}を選びました")
            break
        elif game == '2':
            print(f"あなたは{games[int(game)]}を選びました")
            break
        elif game == '3':
            print(f"あなたは{games[int(game)]}を選びました")
            break
        else:
            print("1~3を選んでください")
else:
    print(f"{casino_age}歳未満の方はカジノへは入れません！")
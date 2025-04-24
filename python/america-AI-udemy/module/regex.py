import re

# Regular Expression (正規表現 通称RegEx)

email = "hatu233@gmail.com"
matched = re.search('@\w+\.', 'maiemail@dondow.com')
print(matched)

#import re

# ^ 最初の文字
print(re.search('^[0-9]', 'test0'))

# {n} n回リピート
print(re.search('^[0-9]{4}', '21/3/31'))

# {n,m} 最低n回、最高m回リピート
print(re.search('^[0-9]{2,4}', '21/3/31'))

# $ 最後の文字
print(re.search('[0-9]{2}$', '2021/3/03'))

# * 左のパターンを0回以上繰り返す
print(re.search('a*b','aaaaab')) # aは0回以上なので無くてもいいんだbがないとNoneになる

# + 左のパターンを1回以上繰り返す
print(re.search('a+b','b'))

# ? 左のパターンを0か1回繰り返す 0or1やでそれ以外ダメ なおあぶない誤解しそうだった?がついているのはbやでabじゃない!!
print(re.search('ab?c','abbc'))

# |  or（どちらかにマッチ）
print(re.search('abc|012', '012'))

# () グループ化と選択（sまたはxのどちらか）
print(re.search('te(s|x)t', 'text'))

# 任意の一文字
print(re.search('t.t','tot'))

# \ エスケープ
print(re.search('h\.t','h.t')) # これでパターンの.を文字として扱ってくれる

# \w [a-zA-Z0-9_0] 全てアルファベット、数字およびアンダースコア
print(re.search('h\wt', 'hit'))
print(re.search('h\w+t', 'hiokswok199skwnst')) # なるほどなぁ\wに+をつけることで任意の数だけ好きな\wに当たる部分を入れられるのかこれ間がどうでもいいときは便利やな

# 正規表現 (RegEx) チャレンジ課題

# Challenge1:
# input() で入力した生年月日 (yyyy/mm/dd) のフォーマットが正しいかチェックするプログラムを作ろう。
# 書式の正確さだけをチェックすればOK。暦の正しさ（例：2021/2/30や2020/11/31）は無視してよい。
# 例として "2021/02/30" や "2020/11/31" もOKとする。
user_inp = input('好きな日付を入力してください:フォーマット:yyyy/mm/dd:')
isOKasCalender = re.search('^[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}$', user_inp)
# おしいというかまだ足りない、さらにバリデーションというか絞ると以下のようにできるはず
pattern = '^(19|20)[0-9]{2}/[1-9]|1[0-2]/([1-9]|1[0-9]||2[0-9]|3[01])$' # これででたらなあり得ない数値を排除できる 注意3[01]と3[0-1]は等価ね
print(isOKasCalender)

# ^ は「文字列の先頭」、$ は「文字列の末尾」を意味する
# フォーマットが文字列全体と一致しているか確認したい場合は両方必要
# → 一部だけに一致してもOKにしたい場合は ^ や $ は省略してもいい



# Challenge2:
# input() で入力された email アドレスのフォーマットが正しいかチェックするプログラムを作ろう。
# 例: my_email.address@gmail.com
#   - ローカル部（@の前）は1文字以上の英数字（大文字小文字）またはアンダースコア、ピリオド、ハイフン
#   - @の後ろは 2〜3文字のアルファベット（大文字小文字）
# パス！！


# 以下gptとの
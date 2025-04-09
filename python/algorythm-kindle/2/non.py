# 2-1.pyをより実践に

from typing import Any, Sequence

def max_of(a:Sequence) -> Any:
    """シーケンスaのの要素の最大値を返却する"""
    maximum = a[0]
    for i in range(1, len(a)):
        if a[i] > maximum:
            maximum = a[i]
    return maximum

if __name__ == '__main__':
    print('配列の最大値求めます')
    num = int(input("要素数:"))
    x = [None] * num
    
    for i in range(num):
        x[i] = int(input(f'x[{i}]:'))
        
    print(f'最大値は{max_of(x)}です。')
    
    
    '''アノテーションについて'''
    # AnyはなんでもOK 上のコードでは戻り値にAnyを設定
    # Sequenceはシーケンスとは、コレクションのうちで、集約する要素が一定の順序で並んでいて、その順序(インデックス)を使ってその要素を指定できる種類のオブジェクトのことを指します、まぁイテラブル系かな
    
    '''モジュール構築について'''
    # モジュールが直接実行されたとき　　変数__name__は'__main__'
    # インポートされたとき　　　　　　　変数__name__はモジュール名（この場合2-2）
class Person(object): # pythonではデフォルトでobjectオブジェクトを継承している
    def __init__(self, name, gender, age):
        self.name = name
        self.gender = gender
        self.age = age
        # returnを書かぬ手も自動的にインスタンスを作成してくれる
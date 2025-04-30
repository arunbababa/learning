class Account:
    account_number = 0
    
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance
        Account.account_number += 1
        self.account_number = Account.account_number # 直でクラス変数の方とったらダメだよ、インクリメントしたいのはクラス変数だけどそのインクリン面とした各値を保持したいのは各インスタンスだからね!!
        
    def withdraw(self,withdraw_ammount):
        self.balance -= withdraw_ammount
        return print(f"残高が更新されました:口座名[{self.name}]-口座番号[{self.account_number}]-口座残高[{self.balance}]")
     
    def deposit(self, deposit_ammount):
        self.balance += deposit_ammount
        return print(f"残高が更新されました:口座名[{self.name}]-口座番号[{self.account_number}]-口座残高[{self.balance}]")
    
arus = Account("arunba", 10000)
arus.withdraw(200)
arus.deposit(73983)

mais = Account("mai", 40000)
mais.withdraw(800)
mais.deposit(20000)
# 反省 return のところ関数か

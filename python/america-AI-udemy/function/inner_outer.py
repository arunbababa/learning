msg = "I am global"

def outer():
    msg = "I am outer"
    
    def inner():
        # nonlocal msg         # これで上の階層のmsgを参照する
        # global msg          # これでグローバルのmsgを参照する
        msg = "I am inner"
        print("This is inner function")
        print(msg)
    
    inner()
    print(msg)

outer()
print(msg)
# fizzbuz
for i in range(1, 51):
    if i % 3 == 0 and i % 5 == 0: # つまり15の倍数としてOK 
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)
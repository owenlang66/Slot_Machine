MAX_LINES = 3
MAX_BET = 100
MIN_BET = 1

def deposit():
    while True:
        amt = input("What's your deposit? $")
        if amt.isdigit(): 
            #checking if input is number
            amt = int(amt)
            #check if input is greater than zero
            if amt > 0:
                break
            else: 
                print("Must be larger than 0")
        else: 
            print("Please enter a number")
    return amt

def get_lines():
    while True:
        lines = input("How many lines do you want to bet on? (1-" + str(MAX_LINES) + ")?")
        if lines.isdigit(): 
            #checking if input is number
            lines = int(lines)
            #check if input is greater than zero
            if 1 <= lines <= MAX_LINES:
                break
            else: 
                print("Enter valid number")
        else: 
            print("Please enter a number")

    return lines

def get_bet():
    while True:
        amt = input("What's your deposit? $")
        if amt.isdigit(): 
            amt = int(amt)
            if MIN_BET <= amt <= MAX_BET:
                break
            else: 
                print(f"Amount must be between {MIN_BET} - {MAX_BET}")
        else: 
            print("Please enter a number")
    return amt


def main():
    balance = deposit()
    lines = get_lines()
    print(balance, lines)
main()

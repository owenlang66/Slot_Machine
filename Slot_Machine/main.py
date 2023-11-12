import random

MAX_LINES = 3
MAX_BET = 100
MIN_BET = 1

ROWS = 3
COLS = 3

symbol_count = {
    "@": 2,
    "#": 4, 
    "%": 6,
    "&": 8
}

symbol_values = {
    "@": 6,
    "#": 4, 
    "%": 3,
    "&": 2
}

def check_win(columns, lines, bet, values):
    winnings = 0
    winning_lines = []
    for line in range(lines):
        symbol = columns[0][line]
        for column in columns:
            symbol_to_check = column[line]
            if symbol != symbol_to_check:
                break
        else: 
            winnings += values[symbol] * bet
            winning_lines.append(line + 1)
    return winnings, winning_lines



def get_slot_spin(rows, cols, symbols):
    all_symbols = []
    for symbol, symbol_count in symbols.items():
        for i in range(symbol_count):
            all_symbols.append(symbol)

    columns = []
    for _ in range(cols):
        column = []
        # this colon copies the list and allows us to edit it without messing up the original
        current_symbols = all_symbols[:]
        for _ in range(rows):
            value = random.choice(current_symbols)
            current_symbols.remove(value)
            column.append(value)

        columns.append(column)

    return columns

def print_slot_machine(columns):
    for row in range(len(columns[0])):
        for i, column in enumerate(columns):
            if i != len(columns) - 1:
                print(column[row], end=" | ")
            else: 
                print(column[row], end="")

        print()


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
        amt = input("What would you like to bet on each line? $")
        if amt.isdigit():
            amt = int(amt)
            if MIN_BET <= amt <= MAX_BET:
                break
            else: 
                print(f"Amount must be between {MIN_BET} - {MAX_BET}")
        else: 
            print("Please enter a number")
    return amt


def spin(balance):
    lines = get_lines()
    while True:
        bet = get_bet()
        total_bet = bet * lines
        if total_bet > balance:
            print(f"You do not have the funds to support this. Your current balance is ${balance}")
        else: 
            break    
            
    print(f"you are betting ${bet} on {lines} lines. Total bet is ${total_bet}")

    slots = get_slot_spin(ROWS, COLS, symbol_count)
    print_slot_machine(slots)
    winnings, winning_lines = check_win(slots, lines, bet, symbol_values)
    print(f"You won ${winnings}!")
    print(f"You won on lines:", *winning_lines)
    return winnings - total_bet

def main():
    balance = deposit()
    while True: 
        print(f"Current balance is ${balance}")
        answer = input("Press enter to play (q to quit): ")
        if answer == "q":
            break
        balance += spin(balance)

    print(f"You left with ${balance}")

main()

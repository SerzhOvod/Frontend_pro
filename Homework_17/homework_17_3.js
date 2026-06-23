class BankAccount {
  constructor(currentBalance = 0) {
    this.balance = currentBalance;
  }

  deposit(depositAmount) {
    this.balance += depositAmount;
  }

  withdraw(withdrawAmount) {
    if (withdrawAmount > 0 && withdrawAmount <= this.balance) {
      this.balance -= withdrawAmount;
    } else {
      console.log("You don't have enough money");
    }
  }

  getBalance() {
    return this.balance;
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());

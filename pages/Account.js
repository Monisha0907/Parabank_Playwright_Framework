class Account {
    constructor(page) {
        this.page = page;
        this.openAccountLink = page.getByRole('link', { name: 'Open New Account' });
        this.accountType = page.locator('#type');
        this.fromAccount = page.locator('#fromAccountId');
        this.openNewAccountButton = page.getByRole('button', { name: 'Open New Account' });
        this.newAccountNumber = page.getByText('Your new account number:');
        this.accountDetailsLink = page.locator('#newAccountId');
        this.accountDetailsText = page.getByText('Account Details Account');
        this.accountID = page.locator('#accountId');
        this.accountTypeText = page.locator('#accountType');
        this.accountBalance = page.locator('#balance');
        this.accountAvailableBalance = page.locator('#availableBalance');

    }



async openAccount() 
  {
    await this.openAccountLink.click();
    await this.accountType.selectOption('1');
    await this.fromAccount.locator('option').first().waitFor({ state: 'attached' });
    await this.fromAccount.selectOption({ index: 0 });
    await this.openNewAccountButton.click();
    await this.newAccountNumber.waitFor();
    await this.accountDetailsLink.click();    
    await this.accountID.waitFor();
    await this.page.waitForFunction(() => {
      const accountType = document.querySelector('#accountType')?.textContent?.trim();
      const balance = document.querySelector('#balance')?.textContent?.trim();
      const availableBalance = document.querySelector('#availableBalance')?.textContent?.trim();

      return accountType && balance && availableBalance;
    });

    return {
      accountType: (await this.accountTypeText.innerText()).trim(),
      balance: (await this.accountBalance.innerText()).trim(),
      availableBalance: (await this.accountAvailableBalance.innerText()).trim(),
    };
  }

}
export default Account;

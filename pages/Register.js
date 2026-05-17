class register
{
    constructor(page)
    {
        this.page = page;
        this.URL = 'https://parabank.parasoft.com/parabank/register.htm';
        this.firstName = page.locator('[id="customer.firstName"]');
        this.lastName = page.locator('[id="customer.lastName"]');
        this.street = page.locator('[id="customer.address.street"]');
        this.city = page.locator('[id="customer.address.city"]');
        this.state = page.locator('[id="customer.address.state"]');
        this.zipCode = page.locator('[id="customer.address.zipCode"]');             
        this.phoneNumber = page.locator('[id="customer.phoneNumber"]');
        this.ssn = page.locator('[id="customer.ssn"]');
        this.username = page.locator('[id="customer.username"]');
        this.password = page.locator('[id="customer.password"]');
        this.confirmPassword = page.locator('[id="repeatedPassword"]');
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.successMessage = page.locator('text=Your account was created successfully. You are now logged in.');
    }

    async registerDetails()
    {
        await this.firstName.click();
        await this.firstName.fill('hello');
        await this.lastName.fill('parabank');
        await this.street.fill('xxx');
        await this.city.fill('yyy');
        await this.state.fill('xyz');
        await this.zipCode.fill('12345');
        await this.phoneNumber.fill('1234567890');
        await this.ssn.fill('456375');
        await this.username.fill('helloparabank');
        await this.password.fill('0987');
        await this.confirmPassword.fill('0987');
        await this.registerButton.click();
    }

   
}
export default register;
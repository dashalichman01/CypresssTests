import { MainPage } from '../pages/main.page';

const mainPage:MainPage = new MainPage();

const emailField:string = 'input[placeholder="Email"]';
const passwordField:string = 'input[placeholder="Password"]';
const signInBtn:string = 'button[type="submit"]';

export class LoginPage{

    getEmailField(){
        return cy.get(emailField);
    }

    getPasswordField(){
        return cy.get(passwordField);
    }

    getSignInBtn(){
        return cy.get(signInBtn);
    }

    setEmail(email:string){
        this.getEmailField().type(email);
    }

    setPassword(password:string){
        this.getPasswordField().type(password);
    }

    clickSignInBtn(){
        this.getSignInBtn().click();
    }

    login(email:string, password:string){
        mainPage.openMainPage();
        mainPage.clickSignInBtn();
        this.setEmail(email);
        this.setPassword(password);
        this.clickSignInBtn();
    }
}
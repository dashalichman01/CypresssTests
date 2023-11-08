const usernameField:string = 'input[placeholder="Username"]';
const emailField:string = 'input[placeholder="Email"]';
const passwordField:string = 'input[placeholder="Password"]';
const signUpBtn:string = 'button[type="submit"]';
const errorEmailMsg:string = 'li.ng-binding.ng-scope'

export class RegistrationPage {

    getUsernameField(){
        return cy.get(usernameField);
    }

    getEmailField(){
        return cy.get(emailField);
    }

    getPasswordField(){
        return cy.get(passwordField);
    }

    getSignUpBtn(){
        return cy.get(signUpBtn);
    }

    getErrorEmailMsg(){
        return cy.get(errorEmailMsg);
    }

    setUsername(username:string){
        this.getUsernameField().type(username);
    }

    setEmail(email:string){
        this.getEmailField().type(email);
    }

    setPassword(password:string){
        this.getPasswordField().type(password);
    }

    clickSignUpBtn(){
        this.getSignUpBtn().click();
    }
}
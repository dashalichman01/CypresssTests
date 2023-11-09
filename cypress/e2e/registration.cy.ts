import {randomUserName, randomEmail, randomPassword}   from '../helper/generator';
import {RegistrationPage} from "../pages/registration.page";
import { MainPage } from '../pages/main.page';
import { LoginPage } from '../pages/login.page';

const registerPage:RegistrationPage = new RegistrationPage();
const mainPage:MainPage = new MainPage();
const loginPage:LoginPage = new LoginPage();

const username:string = randomUserName();
const email:string = randomEmail();
const password:string = randomPassword();

describe('registration', () => {
  it('sign up with valid data', () => {
    mainPage.openMainPage();
    mainPage.clickSignUpBtn();
    registerPage.setUsername(username);
    registerPage.setEmail(email);
    registerPage.setPassword(password);
    registerPage.clickSignUpBtn();
    mainPage.getUserLogo().invoke('text').should('contain', username);
  });

  it('logout', () =>{
    loginPage.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
    mainPage.getSettingsBtn().click();
    mainPage.logout();
    mainPage.getUserLogo().should('not.be.visible');
    mainPage.getSignUpBtn().should('be.visible');
    mainPage.getSignInBtn().should('be.visible');
  });

  it('sign up without email', ()=>{
    mainPage.openMainPage();
    mainPage.clickSignUpBtn();
    registerPage.setUsername(username);
    registerPage.setPassword(password);
    registerPage.clickSignUpBtn();
    registerPage.getErrorEmailMsg().should('be.visible');
  });  
});
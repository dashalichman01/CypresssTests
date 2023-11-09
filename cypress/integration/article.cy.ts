import { MainPage } from "../pages/main.page";
import { LoginPage } from "../pages/login.page";
import { ArticlePage } from "../pages/article.page";
import {randomTitle, randomDescription, randomTextArticle} from '../helper/generator';

const loginPage:LoginPage = new LoginPage();
const mainPage:MainPage = new MainPage();
const articlePage:ArticlePage = new ArticlePage();

const title:string = randomTitle();
const description:string = randomDescription();
const textArticle:string = randomTextArticle();

describe('General tests', () => {
    beforeEach(() => {
        loginPage.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
      });

    it('Create article', () => {
        mainPage.createNewArticle();
        articlePage.setTitle(title);
        articlePage.setDescription(description);
        articlePage.setTextOfArticle(textArticle);
        articlePage.publishArticle();
        articlePage.getCreatedArticleText().should('have.text', textArticle)
    });

    it('Delete article', () => {
        mainPage.getUserLogo().click();
        articlePage.openMyArticle();
        articlePage.deleteArticle();
        mainPage.getUserLogo().click();
        articlePage.getArticlePreview().should('include.text', 'No articles are here... yet.')
    });
});
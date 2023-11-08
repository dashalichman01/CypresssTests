import { LoginPage } from '../pages/login.page';
import { MainPage } from '../pages/main.page';
import { UserPage } from '../pages/user.page';

const loginPage:LoginPage = new LoginPage();
const mainPage:MainPage = new MainPage();
const userPage:UserPage = new UserPage();

let likesBeforeClicking:number;
let likesAfterClicking:number;

describe('General tests', () => {
    beforeEach(() => {
        loginPage.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
      });

    it('check likes button', () => {        
        mainPage.clickGlobalFeedBtn();
        mainPage.getNumberOfLikes().then((likes) => {
            likesBeforeClicking = likes;
            cy.wait(2000);
            mainPage.clickLikesBtn();
            cy.wait(2000);
            mainPage.getNumberOfLikes().then((likes) => {
                likesAfterClicking = likes;
                mainPage.clickLikesBtn();
                cy.wrap(likesAfterClicking).should('eq', likesBeforeClicking + 1);
            });   
            mainPage.clickLikesBtn();
        });

    });

    it('Check following', ()=> {
        mainPage.clickGlobalFeedBtn();
        mainPage.getAuthor().first().click();
        mainPage.follow();
        mainPage.getFollowBtn().should('contain', 'Unfollow')
        mainPage.openMainPage();
        mainPage.getAuthor().should('be.visible');
    });

    it('Check unfollowing', ()=> {
        mainPage.getAuthor().first().click();
        mainPage.follow();
        mainPage.getFollowBtn().should('contain', 'Follow')
    });

    it('Check tags', () => {
        mainPage.clickOnTagBtn();
        mainPage.getArticleTags()
            .invoke('text')
            .then((articleTags:string) => {
                mainPage.getFirstTagBtn()
                .invoke('text')
                .then((firstTag:string) => {
                    expect(articleTags).to.include(firstTag);
            });
        });
    });

    it('Check adding favorite article', () => {
        mainPage.clickGlobalFeedBtn();
        mainPage.clickLikesBtn();
        mainPage.getUserLogo().click();
        userPage.openFavoritedArticles();
        userPage.getArticlePreview().should('be.visible');
        mainPage.openMainPage();
        mainPage.clickGlobalFeedBtn();
        mainPage.clickLikesBtn();
    });
  })
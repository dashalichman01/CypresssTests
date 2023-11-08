const mainPageURL:string = "/";
const signUpBtn:string = 'a[href="#/register"]';
const signInBtn:string = 'a[href="#/login"]';
const globalFeedBtn:string = 'a:contains("Global Feed")';
const settingsBtn:string = 'a[href="#/settings"]';
const logoutBtn:string  = 'button.btn.btn-outline-danger';
const userLogo:string = ':nth-child(4) > .nav-link';
const likesBtn:string = 'button.btn.btn-sm';
const author:string = 'a.author';
const followBtn:string = 'follow-btn > button';
const newArticleBtn:string = 'a[href="#/editor/"]';
const tagsBtns:string = 'a.tag-default';
const articlePreview:string = '.article-preview';
const articleTags:string = 'ul.tag-list .tag-default'

export class MainPage {

    openMainPage(){
        cy.visit(mainPageURL);
    }

    getSignUpBtn(){
        return cy.get(signUpBtn);
    }   
    
    getSignInBtn(){
        return cy.get(signInBtn);
    }

    getGlobalFeedBtn(){
        return cy.get(globalFeedBtn);
    }

    getSettingsBtn(){
        return cy.get(settingsBtn);
    }

    getLogoutBtn(){
        return cy.get(logoutBtn);
    }

    getUserLogo(){
        return cy.get(userLogo);
    }

    getLikesBtn(){
        return cy.get(likesBtn)
    }

    getNumberOfLikes(){
        return this.getLikesBtn()
        .invoke('text')
        .then((text) => {
            return parseInt(text, 10);
        });
    }

    getAuthor(){
        return cy.get(author);
    }

    getFollowBtn(){
        return cy.get(followBtn);
    }

    getNewArticleBtn(){
        return cy.get(newArticleBtn);
    }

    getFirstTagBtn(){
        return cy.get(tagsBtns).first();
    }

    getFirstArticlePreview(){
        return cy.get(articlePreview).first();
    }

    getArticleTags(){
        return cy.get(articleTags);
    }

    clickSignUpBtn(){
        this.getSignUpBtn().click();
    }

    clickSignInBtn(){
        this.getSignInBtn().click();
    }

    clickGlobalFeedBtn(){
        this.getGlobalFeedBtn().click();
    }

    clickLikesBtn(){
        this.getLikesBtn().first().click();
    }

    logout(){
        this.getLogoutBtn().click();
    }

    follow(){
        this.getFollowBtn().click();
    }

    createNewArticle(){
        this.getNewArticleBtn().click();
    }

    clickOnTagBtn(){
        this.getFirstTagBtn().click();
    }
}
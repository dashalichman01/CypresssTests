const titleField:string = 'input[placeholder="Article Title"]';
const descriptionField:string = 'input[placeholder="What\'s this article about?"]';
const textOfArticleField:string = 'textarea';
const publishArticleBtn:string = 'button[type="button"]';
const createdArticleText:string = '.ng-binding > p';
const myArticle:string = 'h1.ng-binding';
const deleteArticleBtn:string = '.banner button.btn-outline-danger';
const articlePreview:string = 'div.article-preview';

export class ArticlePage {

    getTitleField(){
        return cy.get(titleField);
    }

    getDescriptionField(){
        return cy.get(descriptionField);
    }

    getTextOfArticleField(){
        return cy.get(textOfArticleField);
    }

    getPublishArticleBtn(){
        return cy.get(publishArticleBtn);
    }

    getCreatedArticleText(){
        return cy.get(createdArticleText);
    }

    getMyArticle(){
        return cy.get(myArticle);
    }

    getDeleteArticleBtn(){
        return cy.get(deleteArticleBtn);
    }

    getArticlePreview(){
        return cy.get(articlePreview);
    }

    setTitle(title:string){
        this.getTitleField().type(title);
    }

    setDescription(description:string){
        this.getDescriptionField().type(description);
    }

    setTextOfArticle(textOfArticle:string){
        this.getTextOfArticleField().type(textOfArticle);
    }

    publishArticle(){
        this.getPublishArticleBtn().click();
    }

    openMyArticle(){
        this.getMyArticle().click();
    }

    deleteArticle(){
        this.getDeleteArticleBtn().click();
    }
}
const articleBtns:string = '.nav-pills .nav-link';
const favoritedArticlesBtn = 'Favorited Articles';
const articlePreview:string = 'article-preview[article="article"]';

export class UserPage{

    getFavoritedArticles(){
        return cy.get(articleBtns).contains(favoritedArticlesBtn);
    }

    getArticlePreview(){
        return cy.get(articlePreview);
    }

    openFavoritedArticles(){
        this.getFavoritedArticles().click();
    }
}
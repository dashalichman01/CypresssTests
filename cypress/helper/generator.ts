import { faker } from '@faker-js/faker'

export function randomUserName(){
    return faker.internet.userName()
}

export function randomPassword() {
    return faker.internet.password();
}

export function randomEmail() {
    return faker.internet.email();
}

export function randomTitle(){
    return faker.lorem.words({ min: 3, max: 5 })
}

export function randomDescription(){
    return faker.lorem.sentence()
}

export function randomTextArticle(){
    return faker.lorem.paragraph();
}
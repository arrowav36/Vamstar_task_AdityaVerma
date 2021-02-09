// Publication Date
document.querySelector('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(1) > font > font > font > font').innerText

// Object
document.querySelector('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > p:nth-child(6) > font > font > font > font').innerText

// Bidding Date
document.querySelector('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(19) > font > font > font > font').innerText

// LINK 1
document.querySelector('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-field-historico-da-licitacao > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > div > div > a').href

// LINK 2
document.querySelector('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-field-historico-da-licitacao > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > div > div > div > a').href

// LINK 3
document.querySelector('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-field-historico-da-licitacao > div > table > tbody > tr:nth-child(3) > td:nth-child(2) > div > div > div > a').href

const URL = "https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020";
const OPEN_DATE = "DATA DA PUBLICAÇÃO: 30/10/2020";
const BIDDING_DATE = "DATA DA LICITAÇÃO: 30/10/2020";
const OBJECTIVE = "Registro de Preços pelo prazo de 12 meses, para aquisição de grampo galvanizado.";
const NEW_PAGE_TITLE = "portal6.pbh.gov.br";

module.exports = {
    URL,
    OPEN_DATE,
    BIDDING_DATE,
    OBJECTIVE,
    NEW_PAGE_TITLE,
}

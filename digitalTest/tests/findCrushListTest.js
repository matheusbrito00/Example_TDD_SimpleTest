const should = require('should');
const findCrushs = require('../findCrushs');

describe('find crushs', () => {
    it('soma crushs', () => {
        findCrushs.somaCrush(2,3).should.be.equal(5)
    })
    it('deve somar dois numeros e retornar 30', () => {
        findCrushs.somaCrush(10, 20).should.be.equal(30)
    })
    it('Passar um nome e deve retornar mensagem de pessoa não encontrada',() =>{
        findCrushs.encontraCrush('Joselita Marques').should.be.equal('Crush não Encontrado')
    })
    it('retorna a mensagem de que o campo nome esta vazio', () => {
        findCrushs.encontraCrush().should.be.equal('Campo nome esta vazio')
    })
    it('Retornar mensagem de tipo invalido', () => {
        findCrushs.encontraCrush(123).should.be.equal('Tipo invalido')
    })
    it('Deve retornar um nome da lista', () => {
        findCrushs.encontraCrush('Carlos Daniel').should.be.equal('Carlos Daniel')
    })
})
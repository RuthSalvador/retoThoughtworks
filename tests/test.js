var assert    = require('assert');
var appTest = require('../assets/js/main.js');

describe("Tictactoe app test",function() {

  var agent;

  before(function() {
    app = new appTest.Agent();
  })

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('Resta', function(){
  it("should raise error if no input is entered",function(){
    assert.equal(Calculadora.resta(3,2),1)
  })

  it("should be able to add resources to array",function(){
    assert.equal(Calculadora.resta(2),"Error")
  })

  it("should be able to delete resources of array",function(){
    assert.equal(Calculadora.resta(2),"Error")
  })

  it("shouldn't add empty inputs to array",function(){
    assert.equal(Calculadora.resta(2),"Error")
  })

})

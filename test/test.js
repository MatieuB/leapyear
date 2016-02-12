var code = require('../main');
var expect = require('chai').expect;

describe("Leap Year", function (){
  it('will check if leapyear by checking remainders of leapyear criteria', function (){
    expect(code.leapYear()).to.equal(true)
  })
});

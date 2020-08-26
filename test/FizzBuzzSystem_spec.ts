import FizzBuzzSystem from "../src/FizzBuzzSystem";
import {expect} from 'chai';

describe('FizzBuzz', () => {
  
  var sut: FizzBuzzSystem;

  beforeEach(function() {
    sut = new FizzBuzzSystem();
  });

  describe('1st feature', () => {
    it('should return the number 0 ', () => {
      //ARANGE
      
      //ACT
      let result:string = sut.Say(0);
      //ASSERT
      expect(result).to.equal("0");
    });

    it('should return the number 1 ', () => {
      //ARANGE
      
      //ACT
      let result:string = sut.Say(1);
      //ASSERT
      expect(result).to.equal("1");
    });
  });
});

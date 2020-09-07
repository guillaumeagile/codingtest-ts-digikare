import FizzBuzzSystem from "../src/FizzBuzzSystem";
import {expect} from 'chai';

describe('FizzBuzz', () => {
  
  var sut: FizzBuzzSystem;

  beforeEach(function() {
    let mapOfRules = new Map<string, number>();
    //une initialisation en ligne de cette variable ne fonctionne pas :(
    mapOfRules.set("Fizz", 3);
    mapOfRules.set("Buzz", 5);

    sut = new FizzBuzzSystem(mapOfRules);

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

    it('should return fizz if the number is 3 or multiple of 3 ', () => {
      //ARANGE
      
      //ACT
      let result:string = sut.Say(3);
      let result2:string = sut.Say(9);
      //ASSERT
      expect(result).to.equal("Fizz");
      expect(result2).to.equal("Fizz");
    });

    it('should return Buzz if the number is a multiple of 5 ', () => {
      //ARANGE
      
      //ACT
      let result:string = sut.Say(5);
      let result2:string = sut.Say(10);
      //ASSERT
      expect(result).to.equal("Buzz");
      expect(result2).to.equal("Buzz");
    });

    it('should return FizzBuzz if the number is a multiple of 3 and 5 ', () => {
      //ARANGE
      
      //ACT
      let result:string = sut.Say(15);
      let result2:string = sut.Say(30);
      //ASSERT
      expect(result).to.equal("FizzBuzz");
      expect(result2).to.equal("FizzBuzz");
    });



  });
});

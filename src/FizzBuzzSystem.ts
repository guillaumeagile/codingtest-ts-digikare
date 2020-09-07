

export default class FizzBuzzSystem {

   mapOfRules_ : Map<string, number>;

  constructor(mapOfRules : Map<string, number>) {
    this.mapOfRules_= mapOfRules;
  }

  Say(x: number): string {
    
    let output: string = "";
    if (x ==0)
        return "0";
    this.mapOfRules_.forEach( ( value: number,key: string) => { if (x % value === 0) output+= key } );        
     if (output.length !==0)
        return output;
    return x.toString();
  }
}

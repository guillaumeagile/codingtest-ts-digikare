

export default class FizzBuzzSystem {

  Say(x: number): string {
    
    let output: string = "";
    let mapOfRules = new Map<string, number>();
    mapOfRules.set("Fizz", 3);
    mapOfRules.set("Buzz", 5);

    if (x ==0)
        return "0";

    mapOfRules.forEach( ( value: number,key: string) => { if (x % value === 0) output+= key } );    
    
     if (output.length !==0)
        return output;
    return x.toString();
  }
}

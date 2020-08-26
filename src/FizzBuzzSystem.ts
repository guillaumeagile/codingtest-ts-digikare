
export default class FizzBuzzSystem {

  Say(x: number): string {
    if (x ==0)
      return "0";  
    
    let output: string = "";
    let divBy3: boolean = (x % 3 ==0);
     let divBy5: boolean = (x % 5 ==0)
    if (divBy3)
      output += "Fizz";
    if (divBy5)
     output += "Buzz";

     if (output.length !=0)
        return output;
    return x.toString();
  }
}

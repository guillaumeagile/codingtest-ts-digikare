
export default class FizzBuzzSystem {

  Say(x: number): string {
    
    let output: string = "";
    let divBy3: boolean = (x>0) && (x % 3 ==0);
    let divBy5: boolean =(x>0) && (x % 5 ==0)
    if (divBy3)
      output += "Fizz";
    if (divBy5)
     output += "Buzz";

     if (output.length !=0)
        return output;
    return x.toString();
  }
}

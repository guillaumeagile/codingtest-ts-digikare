
export default class FizzBuzzSystem {

  Say(x: number): string {
    if (x ==0)
      return "0";  
    if (x % 3 ==0)
      return "fizz";
    return x.toString();
  }
}

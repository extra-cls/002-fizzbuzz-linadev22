// write your code below

for (let i = 1; i <=100; i++) {
  // For numbers divisible by 3 and also divisible by 5, print `FizzBuzz`
  if (i%3==0 && i%5==0) {
    console.log("FizzBuzz");
  // For numbers divisible by 3 but not divisible by 5, print `Fizz`
  }else if(i%3==0){
    console.log("Fizz");
  }
  // For numbers divisible by 5 but not divisible by 3, print `Buzz`
  else if(i%5==0){
    console.log("Buzz");
  // Other cases, just print the number in string format.
  }else{
    console.log(i.toString());
  }
  
}
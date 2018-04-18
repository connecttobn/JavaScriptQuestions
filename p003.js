/*
Problem 3
Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

/*
* Mathematical Solution/ Explanation
* If p is a number, start looking for prime from sqrt(p)
*/

//Solution

var compute = function(p){
  var result;
  var a = Math.floor(Math.sqrt(p))
  console.log("Sqrt value: "+a);
  if(a < 2){
    return p;
  }
  if(a%2 == 0){
    result = findMaxPrime(a-1,p);
  }  else{
    result = findMaxPrime(a);
  }
  return result;
};

var findMaxPrime = function(n,p){
  console.log("Finding maxPrime function: "+n);
  var i =0;
  while(n > 3){
    console.log("Iteration: "+i+" Value of possible prime: "+n);
    i++;
    if(p%n == 0){
      return (p/n);
    }
    else n -= 2;
  }
  return n;
}

console.log(compute(600851475143));

//sample results in console

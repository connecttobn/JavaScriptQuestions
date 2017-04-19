/*
* Problem 1 : Multiples of 3 and 5
* If we list all the natural numbers below 10 that are multiples of 3 or 5,
* we get 3, 5, 6 and 9. The sum of these multiples is 23.
* Find the sum of all the multiples of 3 or 5 below 1000.
* @author sunilbn
*/

/*
Mathematical Solution
Required Sum = Sum of Multiples of 3 + Sum of Multiples of 5 - Sum of Multiples of 15;
Sum of Arithmatic Progression (AP) = (n/2)[2a+(n-1)d]
where n: total numbers in the AP
a: first number
d: common difference
*/

var getSumOfMultiples = function (a,m){
  var n = Math.floor((m-1)/a);
  return ((n*(n+1)*a) >> 1); //simplied formula
}

var computeResult = function (limit){
  var s3 = getSumOfMultiples(3,limit);
  var s5 = getSumOfMultiples(5,limit);
  var s15 = getSumOfMultiples(15,limit);
  return s3+s5-s15;
}

for(var i= 1;i<6;i++){
  var t =Math.pow(10,i)
  console.log("Sum of all the multiples of 3 or 5 below "+t+": "+computeResult(t));
}

//result
// Sum of all the multiples of 3 or 5 below 10: 23
// Sum of all the multiples of 3 or 5 below 100: 2318
// Sum of all the multiples of 3 or 5 below 1000: 233168
// Sum of all the multiples of 3 or 5 below 10000: 23331668
// Sum of all the multiples of 3 or 5 below 100000: 185833020

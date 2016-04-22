
/*Given the positive integers, xx, yy, and zz, are consecutive terms of an arithmetic progression, the least value of the positive integer, nn, for which the equation, x2−y2−z2=nx2−y2−z2=n , has exactly two solutions is n=27n=27:

342−272−202=122−92−62=27
342−272−202=122−92−62=27
It turns out that n=1155n=1155 is the least value which has exactly 1010 solutions.

Let S(n)S(n) be the number of solutions for this value of nn. For example, S(27)=2S(27)=2 and S(1155)=nS(1155)=n.

Given nn, what is S(n)S(n)?

Input Format

The first line of input contains TT, the number of test cases.

Each test case consists of one line containing a single integer, nn.

Constraints

In the first 10 test cases (worth 50% of the total points): 
1≤T≤10001≤T≤1000 
1≤n≤50001≤n≤5000

In the next 5 test cases (worth 50% of the total points): 
1≤T≤1000001≤T≤100000 
1≤n≤8000000
*/
function processData(input) {
    input = input.split("\n");
    var testCases = parseInt(input[0]);
    var isInt = function(n) {
        return Number(n) === n && n % 1 === 0;
    };
    for (var k = 0; k < testCases; k++) {
        var n = parseInt((input[k + 1]).trim(),10);
        var limit = Math.floor(Math.sqrt(n) / 2);
        //console.log("D value:"+D + "when i:"+i);
        var res = [];
        var max = 8000000;
        if(n <max)max = n;
        for (var i = limit; i < max; i++) {
            var D = Math.sqrt((4 * i * i) - n);
            if (isInt(D)) {
                var alpha = (2 * i) + D;
                var beta = (2 * i) - D;
                //console.log("Alpha value:"+alpha);
                //console.log("Beta value:"+beta);
                if ((alpha - i) > 0 && res.indexOf(alpha) == -1) {
                    res.push(alpha);
                }
                if ((beta - i) > 0 && res.indexOf(beta) == -1) {
                    res.push(beta);
                }
            }
        }
        console.log(res.length);
    }
} 

var array = [3, 4, 5, 6, 1, 2];

/*find the peak when given an array and number of rotations
 *@param a Array
 *@param n integer
 */
var findPeak = function (a, n) {
    //    debugger;
    if (a.length === 1 || n == 0) {
        return a[a.length - 1];
    } else if (a.length > 1) {
        var peakLocLeftShift = a[a.length - ((n % a.length) + 1)];
        var index = (n % a.length) - 1;
        if (index === undefined || index < 0) index = 0;
        var peakLocRightShift = a[index];
        if (peakLocLeftShift > peakLocRightShift) {
            return peakLocLeftShift;
        } else {
            return peakLocRightShift;
        }
    } else {
        throw "Array is empty";
    }
};
//test cases
console.log(findPeak(array, 2));
console.log(findPeak(array, 4));
console.log(findPeak([1], 4));
console.log(findPeak([1], 0));
console.log(findPeak([1, 2], 0));
console.log(findPeak([1, 1], 2));
console.log(findPeak([], 2));
/*Test Output
6
6
1
1
2
1
"Array is empty"
*/

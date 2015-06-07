/*Question : Given an array and is rotated n number of times find the number where the peak happens. 
*The array is sorted in increasing order. 
*Follow up question: How will you rearrange them in normal sorted order.
*/

var array = [3, 4, 5, 6, 1, 2];

/*find the peak when given an sorted array and number of rotations
 *@param a Array
 *@param n integer
 */
var findPeak = function (a, n) {
    //    debugger;
    if (a.length === 1 || (a.length !== 0 || n == 0) {
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

//rearranges the array
var rearrangeArray = function (a, n) {
    try {
        if (a.length < 2) {
            return a;
        }
        debugger;
        var highest = findPeak(a, n);
        var oIndex = a.indexOf(highest);
        var part1 = a.slice(oIndex + 1, a.length);
        var part2 = a.slice(0, oIndex + 1);
        var result = part1;
        for (var i = 0; i < part2.length; i++) {
            result.push(part2[i]);
        }
        return result;
    } catch (e) {
        console.log(e.message);
    }
};
//test cases
console.log(rearrangeArray(array, 2));
console.log(findPeak(array, 2));
console.log(findPeak(array, 4));
console.log(findPeak([1], 4));
console.log(findPeak([1], 0));
console.log(findPeak([1, 2], 0));
console.log(findPeak([1, 1], 2));
console.log(findPeak([], 2));
/*Test Output
[1,2,3,4,5,6]
6
6
1
1
2
1
"Array is empty"
*/

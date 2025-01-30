function divideAndConquerSum(a) {
    if (a.length == 0) return 0;
    if (a.length == 1) return a[0];
    
    var third = Math.floor(a.length / 3);
    var twoThirds = Math.floor((2 * a.length) / 3)
    var left = divideAndConquerSum(a.slice(0, third));
    var middle = divideAndConquerSum(a.slice(third, twoThirds));
    var right = divideAndConquerSum(a.slice(twoThirds));
    return left + middle + right;
}

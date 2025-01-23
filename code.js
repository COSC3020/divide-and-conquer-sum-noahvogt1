function divideAndConquerSum(a) {
    if (a.length === 0) return 0;
    if (a.length === 1) return a[0];
    if (a.length === 2) return a[0] + a[1];
    
    third = Math.ceil(a.length / 3);
    left = divideAndConquerSum(a.slice(0, third));
    middle = divideAndConquerSum(a.slice(third, third * 2));
    right = divideAndConquerSum(a.slice(third * 2));
    return left + middle + right;
}

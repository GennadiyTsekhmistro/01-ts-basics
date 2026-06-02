function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

getFirstElement<number>([1, 2, 3]); // Returns 1
getFirstElement<string>(['a', 'b', 'c']); // Returns 'a'
getFirstElement<boolean>([true, false, true]); // Returns true
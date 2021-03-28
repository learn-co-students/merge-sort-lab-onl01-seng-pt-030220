
const findMinAndRemoveSorted = (array) => {
    return array.shift();
}

const merge = (left, right)  => {
    let leftIndex = 0;
    let rightIndex = 0;
    let result = [];

    while (leftIndex < left.length && rightIndex < right.length)

    if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex])
        leftIndex++
    } else {
        result.push(right[rightIndex])
        rightIndex++
    }

    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}

const mergeSort = (array) => {
    if (array.length === 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right))


}



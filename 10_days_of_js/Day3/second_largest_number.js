const unique = (value, index, self) => {
    return self.indexOf(value) === index
}

function getSecondLargest(nums) {
    // Complete the function
    let sorted_array = nums.sort(function (a, b) {
        return a - b;
    }).filter(unique)
    console.log(sorted_array)
    return (sorted_array[sorted_array.length - 2])
}
console.log(getSecondLargest([10, 9, 9, 8, 8, 11, 8, 0, 9, 1]))
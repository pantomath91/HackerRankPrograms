// Complete the sockMerchant function below.
// Alex works at a clothing store.There is a large pile of socks that must be paired by color for sale.Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// For example, there are  socks with colors.There is one pair of color  and one of color.There are three odd socks left, one of each color.The number of pairs is.
function sockMerchant(n, arr) {
    arr = arr.sort();
    let i = 0;
    let pairs = 0;
    while (i != arr.length) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 2);
            pairs++;
        }
        else { i++ };
    }
    return pairs;
}

console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]))
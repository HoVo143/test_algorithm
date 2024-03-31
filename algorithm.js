function miniMaxSum(arr) {

  arr.sort((a, b) => a - b)

  let minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0)

  let maxSum = arr.slice(1).reduce((a, b) => a + b, 0)

  return [minSum, maxSum]
}

const input = [1, 2, 3, 4, 5]
const [minSum, maxSum] = miniMaxSum(input)

document.getElementById('result').innerHTML = `<p>Minimum Sum: ${minSum}</p> <p>Maximum Sum: ${maxSum}</p>`
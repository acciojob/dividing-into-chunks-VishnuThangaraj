const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
	let sum = 0;
	let current = [];
	
	for(let num of arr){
	    sum += num;
	    if(sum > n){
			result.push(current);
	     	sum = num;
			current = [];
	    }
	    current.push(num);
	}
	result.push(current);

	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

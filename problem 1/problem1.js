var twoSum = function(nums, target) {
    const newNumbers = new Map();
    for(var i=0; i<nums.length; i++){
        const remainder = target - nums[i];
        if (newNumbers.has(remainder)){
            var j = nums.indexOf(remainder);
            return [newNumbers.get(remainder), i];
        }
        newNumbers.set(nums[i], i)
    }
};
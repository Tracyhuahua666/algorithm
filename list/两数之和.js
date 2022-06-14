// 用map的方法解决两数之和的问题,时间复杂度为O(n),时间复杂度为O(1)
// 1.先创建一个map，key为值，value为位置.
// 2.遍历数组，查看map里面有没有target-num的key，有就可以返回结果
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let hashTable = new Map()
    let res = []
    for(let i=0;i<nums.length;++i){
        if(hashTable.has(target-nums[i])){
            res = [i,hashTable.get(target-nums[i])]
        } else{
            hashTable.set(nums[i],i)
        }
    }
    return res
};
let nums = [2,7,11,15]
let target = 9
console.log(twoSum(nums,target))

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let result = [], path = []
    backtracking(nums,nums.length,[])
    function backtracking(nums,targrtlen,used){
        if(path.length===targrtlen){
            result.push(path.slice())
            return;
        }
        for(let i=0;i<targrtlen;++i){
            if(used[i]) continue;
            path.push(nums[i])
            used[i]=true
            backtracking(nums,targrtlen,used)
            path.pop()
            used[i] = false
        }
    }
    return result

};
console.log(permute([1,2,3]))   
function findMatrix(nums: number[]): number[][] {
    const rec : Record<number, number> = {}
    const ans: number[][] = []
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const count = rec[num] ?? 0
        
        if (!ans[count]) {
            ans.push([])
        }

        ans[count].push(num)
        rec[num] = count + 1
    }

    return ans
};

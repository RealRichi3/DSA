function maxArea(height: number[]): number {
    let left = 0
    let right = height.length - 1
    let maxArea = 0
    while (left < right) {
        const distance = right - left 
        const area = Math.min(height[right], height[left]) * distance
        maxArea = Math.max(maxArea, area)
        
        if (height[left] < height[right]) {
            left += 1
        } else {
            right -= 1
        }
    }

    return maxArea
};

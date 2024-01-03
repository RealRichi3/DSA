function topKFrequent(nums: number[], k: number): number[] {
    /**
        Create a map of all numbers and the count
        Get all the counts, -> num_count_map

        Create another map of <count, number[]> -> count_nums_map
        When update num_count_map, update count_nums_map
    */

    const mapOfNumberAndTheirCount: Record<number, number> = {}
    const mapOfOccurencesAndTheNumbers: Record<number, Record<number, boolean>> = {}

    const lengthOfNumbers = nums.length;
    for (let i = 0; i < lengthOfNumbers; i++) {
        const num = nums[i]
        const occurenceRecord = mapOfNumberAndTheirCount[num]

        let key = 0

        if (occurenceRecord) {
            mapOfNumberAndTheirCount[num] = occurenceRecord + 1
            
            delete mapOfOccurencesAndTheNumbers[occurenceRecord][num] 
            key = occurenceRecord + 1
        } else {
            mapOfNumberAndTheirCount[num] = 1
            key = 1
        }

        mapOfOccurencesAndTheNumbers[key] = mapOfOccurencesAndTheNumbers[key] ?? {}
        mapOfOccurencesAndTheNumbers[key][num] = true
    }

    console.log({
        mapOfNumberAndTheirCount,
        mapOfOccurencesAndTheNumbers
    })

    const frequencies = Object.keys(mapOfOccurencesAndTheNumbers).sort((a, b) => b - a)

    return []
};

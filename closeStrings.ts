function closeStrings(word1: string, word2: string): boolean {
    const wordFreq1 : Record<string, number> = {}
    const wordFreq2: Record<string, number> = {}

    for (let i = 0; i < word1.length; i++) {
        const char = word1[i]

        if (wordFreq1[char]) {
            wordFreq1[char] = wordFreq1[char] + 1
        } else {
            wordFreq1[char] = 1
        }
    }

    for (let i = 0; i < word2.length; i++) {
        const char = word2[i]

        if (wordFreq2[char]) {
            wordFreq2[char] = wordFreq2[char] + 1
        } else {
            wordFreq2[char] = 1
        }
    }

    const freq1 = Object.values(wordFreq1).sort().join('')
    const freq2 = Object.values(wordFreq2).sort().join('')
    const wordKeys1 = Object.keys(wordFreq1).sort().join('')
    const wordKeys2 = Object.keys(wordFreq2).sort().join('')

    return freq1 === freq2 && wordKeys1 === wordKeys2
};

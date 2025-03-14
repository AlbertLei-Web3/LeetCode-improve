function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');

        if (map.has(sortedStr)) {
            map.get(sortedStr)!.push(str);
        }
        else {
            map.set(sortedStr, [str]);
        }
    }
    return Array.from(map.values());
}

// 简化解题步骤 | Simplified Steps to Solve
// 拆分字符串：将每个字符串拆分成字符数组。
// Split the strings: Split each string into an array of characters.
// 排序字符：对字符数组进行排序。
// Sort the characters: Sort the character arrays.
// 遍历字符串：检查排序后的字符串是否已存在。
// Iterate through the strings: Check if the sorted string already exists.
// 存储或创建：
// 如果相同，存储到已有的数组中。
// If the same, store it in the existing array.
// 如果不同，创建新数组并存储。
// If different, create a new array and store it.
// 返回结果：返回所有分组的字母异位词。
// Return the result: Return all grouped anagrams.
// 这样就可以将字母异位词分组了！
// This way, you can group the anagrams!

// Group Anagrams (Group Anagrams.ts)
// 时间复杂度: O(n * k * log k)
// Time Complexity: O(n * k * log k)
// 计算方法:
// n 是字符串的数量。
// n is the number of strings.
// k 是字符串的最大长度。
// k is the maximum length of the strings.
// 对每个字符串进行排序的时间复杂度是 O(k * log k)，所以总的时间复杂度是 O(n * k * log k)。
// The time complexity for sorting each string is O(k * log k), so the total time complexity is O(n * k * log k).
// 空间复杂度: O(n * k)
// Space Complexity: O(n * k)
// 计算方法: 最坏情况下，所有字符串都是异位词，哈希表需要存储 n 个字符串，每个字符串的长度为 k，因此空间复杂度是 O(n * k)。
// Calculation Method: In the worst case, all strings are anagrams, and the hash map needs to store n strings, each of length k, so the space complexity is O(n * k).
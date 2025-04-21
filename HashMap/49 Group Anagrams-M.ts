// 问题描述
// 给你一个字符串数组 strs，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

// 解题思路
// 字母异位词的特点是包含相同的字母，只是字母顺序不同。因此，我们可以将每个单词按字母表顺序排序，
// 这样所有的字母异位词排序后都会得到相同的字符串。
// 我们可以使用这个排序后的字符串作为哈希表的键，原始字符串列表作为值。

function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const str of strs) {
        // 将字符串排序以创建一个唯一的键
        const sortedStr = str.split('').sort().join('');
        
        // 如果这个排序后的字符串已经在map中，将当前字符串添加到对应的列表
        if (map.has(sortedStr)) {
            map.get(sortedStr)!.push(str);
        } else {
            // 否则，创建一个新的列表
            map.set(sortedStr, [str]);
        }
    }
    
    // 返回map中的所有值（字母异位词组）
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
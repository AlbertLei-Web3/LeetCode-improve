// 问题描述
// 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。
// insert(word): 向 Trie 中插入一个单词 word
// search(word): 如果 word 在 Trie 中，返回 true；否则，返回 false
// startsWith(prefix): 如果之前插入的单词中有以 prefix 为前缀的，返回 true；否则，返回 false
class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    //从根节点开始，遍历单词的每个字符
    //如果字符不存在，则创建一个新的节点
    //如果字符存在，则移动到下一个节点
    //最后将最后一个节点的isEndOfWord设置为true
    insert(word: string): void {
        let current = this.root;

        for (const char of word) {
            if (!current.children.has(char)) { // 如果字符不存在，则创建新的节点
                current.children.set(char, new TrieNode()); // 创建新的节点
            }
            current = current.children.get(char)!; // 移动到下一个节点
        }

        current.isEndOfWord = true;
    }


// search(word): 从根节点开始，遍历单词的每个字符
// 如果字符不存在，则返回false
// 如果字符存在，则移动到下一个节点
// 最后最后一个节点是否是单词结尾
    search(word: string): boolean {
        let current = this.root;

        for (const char of word) {
            if (!current.children.has(char)) { // 如果字符不存在，则返回false
                return false;
            }
            current = current.children.get(char)!; // 移动到下一个节点
        }

        return current.isEndOfWord;
    }
    
    //与search类似，但是不需要检查最后一个节点是否是单词结尾
    //只需要检查是否存在以prefix为前缀的单词，
    //如果存在，则返回true，否则返回false
    startsWith(prefix: string): boolean {
        let current = this.root;

        for (const char of prefix) {
            if (!current.children.has(char)) { // 如果字符不存在，则返回false
                return false;
            }
            current = current.children.get(char)!; // 移动到下一个节点
        }

        return true;
    }
}

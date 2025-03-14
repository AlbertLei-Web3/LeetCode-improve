// 5. 练习 | Practice
// 尝试以下练习来巩固你的理解：
// 创建一个包含你最喜欢的书名的数组。
// 使用循环遍历并打印每本书的名称。
// 添加一本新书到数组中。
// 删除你不再喜欢的书。
// 找到数组中书名的数量。

let books: string[] = ["book1", "book2", "book3", "book4", "book5"];

for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
}

books.push("book6");

books.splice(2,2);

console.log(books.length);

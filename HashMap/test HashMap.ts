// 尝试以下练习来巩固你的理解：
// 1. 创建一个 HashMap，存储你最喜欢的电影及其评分。
// 2. 遍历 HashMap，打印每部电影及其评分。
// 3. 修改某部电影的评分。
// 4. 删除一部电影的记录。
// 5. 检查某部电影是否在 HashMap 中。

let movies: Map<string, number> = new Map();

movies.set("Inception", 9);
movies.set("The Dark Knight", 9);
movies.set("Interstellar", 8);
movies.set("The Matrix", 8);

// 遍历 HashMap | Iterate through HashMap
for (let [movie, score] of movies.entries()) { // entries is a method that returns an iterator of [key, value] pairs
    console.log(`${movie}: ${score}`); // 修正：使用反引号
}

movies.set("The Dark Knight", 5); // 修改评分

movies.delete("Inception"); // 删除电影记录

console.log(movies.has("The Dark Knight")); // 检查电影是否存在
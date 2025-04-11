// 题目描述
// 在区块链网络中，存在多个交易，每个交易可能依赖于之前的某些交易。例如，交易 B 可能需要等待交易 A 完成后才能执行
// （这在 DeFi 中很常见，比如先授权代币，然后才能交易）。
// 给定一组交易 n（编号从 0 到 n-1）和它们之间的依赖关系 dependencies，
// 其中 dependencies[i] = [a, b] 表示交易 a 依赖于交易 b（即交易 b 必须在交易 a 之前执行）。
// 请判断是否存在一种执行所有交易的顺序。如果存在，返回 true；否则返回 false。
//有向无环图的英语是 Directed Acyclic Graph，通常缩写为 DAG。

function canExecuteAllTransactions(n: number, dependencies: number[][]): boolean {
    // Build table and in-degree array
    const graph: number[][] = Array.from({ length: n}, () => []);
    const inDegree: number[] = Array(n).fill(0);

    // Fill the dependency relation
    for (const [a, b] of dependencies) {
        // transaction a depends on transaction b, so add an edge from b -> a
        graph[b].push(a);
        inDegree[a]++;
    }

    //topological sort
    const queue: number[] = [];

    // Add all nodes with 0 in-degree to the queue
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let count = 0;

    while (queue.length > 0) {
        const tx = queue.shift()!;
        count++;

        // Deal with the transactions that depend on tx
        for (const nextTx of graph[tx]) {
            inDegree[nextTx]--;
            if (inDegree[nextTx] === 0) {
                queue.push(nextTx);
            }
        }
    }

    // If all transactions are executed, return true
    return count === n;
}

// 测试用例
console.log(canExecuteAllTransactions(3, [[0, 1], [1, 2]])); // 输出: true
console.log(canExecuteAllTransactions(3, [[0, 1], [1, 2], [2, 0]])); // 输出: false

// 解释
// 在第一个测试用例中，交易 0 和 1 没有依赖关系，可以按任意顺序执行。交易 2 依赖于交易 1，所以必须在交易 1 之后执行。
// 在第二个测试用例中，交易 2 依赖于交易 0，交易 0 依赖于交易 1，交易 1 依赖于交易 2，形成了一个循环依赖，因此无法执行所有交易。




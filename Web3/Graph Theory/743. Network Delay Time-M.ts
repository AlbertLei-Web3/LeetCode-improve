function networkDelayTime(times: number[][], n: number, k: number): number {
    //构建邻接表 create adjacency list
    const graph: [number,number][][] = Array.from({length: n + 1}, () => []);

    //填充图
    for (const [source, target, time] of times) {
        graph[source].push([target, time]);
    }

    //初始化距离数组
    const distances: number[] = Array(n + 1).fill(Infinity);
    distances[k] = 0; //起点到起点的距离为0
    distances[0] = 0; //忽略节点0

    //使用优先队列实现Dijkstra算法
    const pq: [number, number][] = [[0, k]]; //[距离, 节点]

    //记录访问过的节点
    const visited: Set<number> = new Set();

    //Dijkstra算法
    while (pq.length > 0) {
        //获取当前距离最小的节点
        pq.sort((a, b) => a[0] - b[0]);
        const [currentDist, currentNode] = pq.shift()!; //shift() 删除并返回数组的第一个元素
        //如果节点已经访问过，则跳过
        if (visited.has(currentNode)) continue;
        //标记节点为已访问
        visited.add(currentNode);
        //处理所有邻居节点
        for (const [neighbor, time] of graph[currentNode]) {
            //如果找到更短的路径，则更新距离
            if (!visited.has(neighbor) && distances[neighbor] > currentDist + time) {
                distances[neighbor] = currentDist + time;
                //将邻居节点加入优先队列
                pq.push([distances[neighbor],neighbor]);
            }
        }
    }
    //计算最大距离
    let maxDistance = 0;
    for (let i = 1; i <= n; i++) {
        if (distances[i] === Infinity) return -1;
        maxDistance = Math.max(maxDistance, distances[i]);
    }
    return maxDistance;
}
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // 1. 构建图和入度数组
    const graph: number[][] = Array.from({ length: numCourses }, () => []);
    const inDegree: number[] = Array(numCourses).fill(0);
    
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course); // prereq -> course 表示course依赖prereq
        inDegree[course]++; // course的入度加1
    }
    
    // 2. 初始化队列，加入所有入度为0的节点
    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    let count = 0; // 记录处理过的节点数
    
    // 3. BFS处理
    while (queue.length > 0) {
        const course = queue.shift()!; 
        count++; // 处理一个节点
        
        // 遍历所有依赖当前节点的节点
        for (const nextCourse of graph[course]) {
            inDegree[nextCourse]--; // 减少依赖
            // 如果没有其他依赖，则可以学习该课程
            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        }
    }
    
    // 4. 检查是否有环
    return count === numCourses;
}
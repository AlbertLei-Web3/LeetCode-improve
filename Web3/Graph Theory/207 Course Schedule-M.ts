function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph: number[][] = Array.from({ length: numCourses }, () => []);
    const inDegree: number[] = Array(numCourses).fill(0);
    
    // 建立图和入度数组 / Build the graph and in-degree array
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        inDegree[course]++;
    }
    
    // 初始化队列 / Initialize the queue
    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    let count = 0; // 记录已学习的课程数量 / Count of completed courses
    
    // 拓扑排序 / Topological sorting
    while (queue.length > 0) {
        const course = queue.shift()!;
        count++;
        
        for (const nextCourse of graph[course]) {
            inDegree[nextCourse]--;
            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        }
    }
    
    // 判断是否可以完成所有课程 / Check if all courses can be completed
    return count === numCourses;
}

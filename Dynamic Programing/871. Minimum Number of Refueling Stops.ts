// A car travels from a starting position to a destination which is target miles away.
// It starts with startFuel gallons of fuel, and there are gas stations along the way.
// Each station[i] represents a gas station located at position station[i][0], with station[i][1] gallons of fuel.

// Return the minimum number of refueling stops the car must make in order to reach its destination.
// If it cannot reach the destination, return -1.

// 中文
// 一辆车从起点出发，目标是到达距离为 target 英里的终点。
// 它初始有 startFuel 加仑的油，沿途有一些加油站。
// 每个 station[i] 表示一个加油站，其位置为 station[i][0]，可以提供 station[i][1] 加仑的油。

// 返回到达终点所需的 最少加油次数。
// 如果无法到达终点，返回 -1。

// 思路：
// 1. 使用贪心算法，每次选择当前油量最多的加油站加油。
// 2. 使用动态规划，记录每个加油站加油后的油量和加油次数。
// 3. 使用优先队列，每次选择当前油量最多的加油站加油。

function minRefuelStops(target: number, startFuel: number, stations: number[][]): number{
    //Max heap to store fuels of passed stations
    const maxHeap: number[] = [];

    let fuel = startFuel;
    let i = 0; // stations index
    let stops = 0;

    //while we haven't reached the destination
    //只要我们还没有到达目的地，就继续
    while(fuel < target) {
        //Add all reachable stations to the maxHeap
        //将所有可达的加油站添加到最大堆中
        while(i < stations.length && stations[i][0] <= fuel) {
            maxHeap.push(stations[i][1]);
            i++;
        }

        //sort maxHeap descending to simulate a max-heap
        //TypeScript默认的数组不是最大堆，所以需要手动实现,用数组+排序模拟最大堆
        maxHeap.sort((a,b) => b - a);

        //If no fuel station can help and we can't reach the destination
        //如果没有任何加油站可以帮忙，并且我们无法到达目的地，返回-1
        if(maxHeap.length === 0) return -1;

        //Refuel with the most fuel available
        //用最多的油加油
        fuel += maxHeap.shift()!;
        stops++;
    }

    return stops;
}







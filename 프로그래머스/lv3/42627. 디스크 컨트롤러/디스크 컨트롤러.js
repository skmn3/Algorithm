function solution(jobs) {
  const count = jobs.length;
  jobs.sort((a, b) => a[0] - b[0]);

  const pq = new PriorityQueue((a, b) => a[1] - b[1]);

  let time = 0;
  let complete = 0;
  let total = 0;
  let idx = 0;

  while (idx < count || !pq.isEmpty()) {
    while (idx < count && jobs[idx][0] <= time) {
      pq.enqueue(jobs[idx]);
      idx++;
    }

    if (!pq.isEmpty()) {
      const [start, duration] = pq.dequeue();
      complete = time + duration;
      total += complete - start;
      time = complete;
    } else {
      time = jobs[idx][0];
    }
  }

  return Math.floor(total / count);
}

class PriorityQueue {
  constructor(compareFunc) {
    this.compareFunc = compareFunc || ((a, b) => a - b);
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
    this.items.sort(this.compareFunc);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

console.log(solution([[0, 3], [1, 9], [2, 6]]));

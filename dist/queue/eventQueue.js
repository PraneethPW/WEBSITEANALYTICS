const queue = [];
export const enqueue = (event) => {
    queue.push(event);
};
export const dequeue = () => {
    return queue.shift();
};
export const isEmpty = () => queue.length == 0;
//# sourceMappingURL=eventQueue.js.map
import type { AnalyticsEvent } from "../types/event.js";

const queue : AnalyticsEvent[] =[];

export const enqueue = (event : AnalyticsEvent)=>{
      queue.push(event);
};

export const dequeue = (): AnalyticsEvent | undefined =>{
return queue.shift();
}

export const isEmpty = ():boolean =>queue.length==0
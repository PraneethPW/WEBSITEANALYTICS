import type { AnalyticsEvent } from "../types/event.js";
export declare const saveEventToDB: (event: AnalyticsEvent) => Promise<void>;
export declare const getSiteStats: (siteid: string, date?: string) => Promise<{
    totalviews: number;
    uniqueusers: number;
    toppaths: any[];
}>;
//# sourceMappingURL=db.d.ts.map
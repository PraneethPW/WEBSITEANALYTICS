import express from 'express';
import { getSiteStats } from '../db/db.js';
const app = express();
app.get("/stats", async (req, res) => {
    const { siteid, date } = req.query;
    if (!siteid)
        return res.status(400).json({
            erroor: 'siteid required'
        });
    const stats = await getSiteStats(siteid, date);
    return res.json({
        stats
    });
});
app.listen(3002, () => {
    console.log(`REPORTING API IS RUNNING ON 3002`);
});
//# sourceMappingURL=index.js.map
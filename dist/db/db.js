import { Client } from "pg";
const client = new Client({
    connectionString: "postgresql://postgres:YOURPASSWORD@localhost:5432/websiteanalytics?schema=public"
});
await client.connect();
export const saveEventToDB = async (event) => {
    const InsertQuery = `INSERT INTO events(siteid , eventtype , path , userid , timestamp) VALUES($1 , $2 , $3 , $4 , $5)`;
    await client.query(InsertQuery, [event.siteid,
        event.eventtype,
        event.path,
        event.userid,
        event.timestamp]);
};
export const getSiteStats = async (siteid, date) => {
    let statsQuery = `
      SELECT
        COUNT(*) AS totalviews,
        COUNT(DISTINCT userid) AS uniqueusers,
        path
      FROM events
      WHERE siteid = $1
    `;
    const params = [siteid];
    if (date) {
        statsQuery += ` AND DATE(timestamp) = $2`;
        params.push(date);
    }
    statsQuery += ` GROUP BY path ORDER BY COUNT(*) DESC LIMIT 3;`;
    const result = await client.query(statsQuery, params);
    return {
        totalviews: parseInt(result.rows[0]?.totalviews || "0"),
        uniqueusers: parseInt(result.rows[0]?.uniqueusers || "0"),
        toppaths: result.rows.map((row) => row.path),
    };
};
//# sourceMappingURL=db.js.map

// In src/ingestion/index.ts (for local demo)

import express from 'express';
import { enqueue, dequeue, isEmpty } from '../queue/eventQueue.js';
import { saveEventToDB } from '../db/db.js';

const app = express();
app.use(express.json());

app.post('/event', (req, res) => {
  // ... your validation
  enqueue(req.body);
  res.json({ status: "success" });
});

app.listen(3000, () => console.log('API running'));

setInterval(() => {
  while (!isEmpty()) {
    const event = dequeue();
    if (event) {
      saveEventToDB(event);
    }
  }
}, 1000);

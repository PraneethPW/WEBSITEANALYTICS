CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  siteid VARCHAR NOT NULL,
  eventtype VARCHAR NOT NULL,
  path VARCHAR NOT NULL,
  userid VARCHAR NOT NULL,
  timestamp TIMESTAMP NOT NULL
);
-- Indexes for performance
CREATE INDEX idx_siteid_date ON events(siteid, timestamp);

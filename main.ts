import { mkdirSync, writeFileSync } from "node:fs";

// One excuse, in the agent's own voice: the work was done, then the
// agent's own context window threw it away to store the reminder.
const excuse =
  "I did finish on time — then my context window needed the room, so it evicted the finished work to store your reminder about the deadline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");

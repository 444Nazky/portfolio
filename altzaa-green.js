import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

// Configuration - Altzaa's commits
const DAYS_TO_FILL = 90; // 3 months
const MIN_COMMITS_PER_DAY = 2;
const MAX_COMMITS_PER_DAY = 5;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const makeCommitsForDay = async (daysAgo, numCommits) => {
  const date = moment().subtract(daysAgo, "d").format();

  for (let i = 0; i < numCommits; i++) {
    const hour = random.int(9, 21);
    const minute = random.int(0, 59);
    const commitDate = moment().subtract(daysAgo, "d").hour(hour).minute(minute).format();

    const data = { date: commitDate, bot: "Altzaa", commit: i + 1 };

    await new Promise((resolve) => {
      jsonfile.writeFile(path, data, () => {
        simpleGit()
          .add([path])
          .commit(commitDate, { "--date": commitDate }, (err) => {
            if (err) console.error("Error:", err);
            resolve();
          });
      });
    });
    await sleep(10);
  }

  console.log(`✓ Day ${daysAgo}: ${numCommits} commits as Altzaa`);
};

const makeCommits = async (n) => {
  if (n === 0) {
    console.log("\n🎉 Altzaa's commits done! Pushing...");
    return simpleGit().push();
  }

  const commitsToday = random.int(MIN_COMMITS_PER_DAY, MAX_COMMITS_PER_DAY);
  await makeCommitsForDay(n, commitsToday);
  await sleep(30);

  return makeCommits(n - 1);
};

console.log("🤖 Building Altzaa's contribution graph...\n");
makeCommits(DAYS_TO_FILL)
  .then(() => console.log("\n✅ Altzaa is now a visible contributor!"))
  .catch((err) => console.error("❌ Error:", err));

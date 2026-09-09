import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

// Configuration - Adjust these!
const DAYS_TO_FILL = 365; // Days to fill (full year)
const MIN_COMMITS_PER_DAY = 3;
const MAX_COMMITS_PER_DAY = 8;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const makeCommitsForDay = async (daysAgo, numCommits) => {
  const date = moment().subtract(daysAgo, "d").format();

  // Create multiple commits for this day with different times
  for (let i = 0; i < numCommits; i++) {
    // Vary the hour to make commits look more natural
    const hour = random.int(9, 21);
    const minute = random.int(0, 59);
    const commitDate = moment().subtract(daysAgo, "d").hour(hour).minute(minute).format();

    const data = { date: commitDate, day: daysAgo, commit: i + 1, total: numCommits };

    await new Promise((resolve) => {
      jsonfile.writeFile(path, data, () => {
        simpleGit()
          .add([path])
          .commit(commitDate, { "--date": commitDate }, (err) => {
            if (err) console.error("Commit error:", err);
            resolve();
          });
      });
    });

    // Small delay between commits
    await sleep(10);
  }

  console.log(`✓ Day ${daysAgo} (${moment().subtract(daysAgo, "d").format("YYYY-MM-DD")}): ${numCommits} commits`);
};

const makeCommits = async (n) => {
  if (n === 0) {
    console.log("\n🎉 All commits created! Pushing to remote...");
    try {
      await simpleGit().push();
      console.log("✅ Pushed to remote!");
    } catch (err) {
      console.log("⚠️ Push failed - you may need to push manually with: git push");
    }
    return;
  }

  const commitsToday = random.int(MIN_COMMITS_PER_DAY, MAX_COMMITS_PER_DAY);
  await makeCommitsForDay(n, commitsToday);

  // Small delay between days
  await sleep(50);

  // Progress indicator
  const progress = Math.round(((365 - n) / 365) * 100);
  if (n % 30 === 0) {
    console.log(`📊 Progress: ${progress}% complete`);
  }

  // Recursively continue
  return makeCommits(n - 1);
};

console.log("🌱 goGreen - Fully Green Graph Mode");
console.log(`📅 Filling ${DAYS_TO_FILL} days with ${MIN_COMMITS_PER_DAY}-${MAX_COMMITS_PER_DAY} commits/day`);
console.log("⏳ Creating commits... (this will take several minutes)\n");

makeCommits(DAYS_TO_FILL)
  .then(() => {
    console.log("\n✅ Done! Refresh your GitHub profile to see the green graph!");
  })
  .catch((err) => {
    console.error("❌ Error:", err);
  });

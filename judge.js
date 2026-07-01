const problems = {
  A: { name: "A - Nim Game Is XOR Game" },
  B: { name: "B - Decidophobia" },
  E: { name: "E - Time Complexity" },
};

// -----------------------------
// LOAD SUBMISSIONS
// -----------------------------
function getSubs() {
  return JSON.parse(localStorage.getItem("subs") || "[]");
}

function saveSubs(subs) {
  localStorage.setItem("subs", JSON.stringify(subs));
}

// -----------------------------
// SUBMIT (ALWAYS AC)
// -----------------------------
// -----------------------------
// SUBMIT (ALWAYS AC)
// -----------------------------
window.submit = function (problemId, userAnswer) {
  console.log("SUBMIT CALLED", problemId);

  const subs = getSubs();
  const problem = problems[problemId];

  if (!problem) return;

  const newSub = {
    id: Math.floor(Math.random() * 1e8),
    when: "Just now",
    user: "<span class=\"pupil\">siddhant_gawande</span>",
    problemId,
    problemName: problem.name,
    lang: "GNU C++23 (64 bit)",
    verdict: "JUDGING",
    time: "15ms",
    memory: "0KB",
  };

  subs.unshift(newSub);
  saveSubs(subs);

  // 1. Remove render() from here since this page doesn't have the table
  // render();

  // 2. Simulate the judge background delay BEFORE redirecting,
  // or let the next page handle the countdown.
  setTimeout(() => {
    judgeAlwaysAC(newSub.id);
  }, 1000);

  // 3. Redirect the user to the status page seamlessly!
  window.location.href = "result.html";
};

// -----------------------------
// ALWAYS ACCEPTED JUDGE
// -----------------------------
function judgeAlwaysAC(id) {
  const subs = getSubs();

  const sub = subs.find((s) => s.id === id);
  if (!sub) return;

  sub.when = "Just now";
  sub.verdict = "AC";
  sub.time = "15 ms";
  sub.memory = "0 KB";

  saveSubs(subs);
  render();
}

// -----------------------------
// RENDER TABLE
// -----------------------------
function render() {
  const tbody = document.getElementById("submission-body");
  if (!tbody) return;

  const subs = getSubs();

  tbody.innerHTML = "";

  subs.forEach((sub, i) => {
    const row = document.createElement("tr");

    row.className = i % 2 === 0 ? "row-even" : "row-odd";

    row.innerHTML = `
      <td>${sub.id}</td>
      <td>${sub.when}</td>
      <td>${sub.user}</td>
      <td>
        <a href="problems.html?id=${sub.problemId}">
          ${sub.problemName}
        </a>
      </td>
      <td>${sub.lang}</td>
      <td><span class="verdict-accepted">Accepted</span></td>
      <td>${sub.time}</td>
      <td>${sub.memory}</td>
    `;

    tbody.appendChild(row);
  });
}

// auto render on status page
document.addEventListener("DOMContentLoaded", render);

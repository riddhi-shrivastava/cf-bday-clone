const problems = {
  A: {
    title: "A. Wrong Answer",

    time: "1 second",

    memory: "256 megabytes",

    statement: `
<p>Today is Siddhant's birthday. Riddhi spent some amount of time preparing a surprise for him.</p>

<p>After seeing it, Siddhant will respond with exactly one sentence. Unfortunately, based on all available evidence, the most likely response is:</p>

<p></p>

<p>\\(\\text{"You didn't have to do all this."}\\)</p>

<p>However, this answer is incorrect. The only accepted response is:</p>


<p>\\(\\text{"Thank you."}\\)</p>

<p>Given Siddhant's response, determine whether it is accepted.</p>
`,

    input: `
The only line contains a string \\(s\\) — Siddhant's response.
`,

    output: `
If the response is exactly \\(\\text{"Thank you."}\\), print \\(\\text{"Accepted"}\\).

Otherwise, print \\(\\text{"Wrong Answer"}\\).
`,

    note: `
Although the first response is technically polite, it does not satisfy the requirements of the problem.

It has been proven that saying \\(\\text{"Why did you waste so much time!"}\\) or \\(\\text{"You didn't have to do all this."}\\) does not reduce the amount of work Riddhi has already put into preparing the surprise.
`,

    samples: [
      {
        input: `You didn't have to do all this.`,
        output: `Wrong Answer`,
      },

      {
        input: `You shouldn't have spent so much time on me!.`,
        output: `Wrong Answer`,
      },

      {
        input: `Thank you.`,
        output: `Accepted`,
      },
    ],
  },

  B: {
    title: "B. AI or no AI?",

    time: "2.0 seconds",

    memory: "512 megabytes",

    statement: `
<p>Siddhant and his friend Riddhi are pulling an all-nighter in their MANIT hostel rooms to finish their \\(\\text{"WebD Project"}\\)</p>

<p>The project is massive and requires a total of \\(n\\) lines of clean code to be fully functional.</p>

<p>Siddhant is highly focused; he starts typing immediately and writes code at a steady, uninterrupted speed of \\(x\\) lines per hour until the project is completely finished.</p>

<p>Riddhi, however, is lazy and is debating how to approach the task. She has two options before the timer starts:</p>

<ul>
<li><em>The Pure Manual Route:</em> Start coding from the very first minute at a baseline speed of \\(y\\) lines per hour.</li>

<li><em>The Over-Engineered Route:</em> Spend the first \\(z\\) hours setting up a highly advanced AI coding agent, writing absolutely zero lines of code during this setup phase. Once the AI agent is fully configured, Riddhi's typing speed is multi-threaded, allowing him to blast out code at a massive \(10 \cdot y\) lines per hour.</li>
</ul>

<p>Riddhi must lock in her choice before work begins and cannot change her mind later.</p>

<p>While Riddhi is busy configuring her AI agent, she contributes \\(0\\) lines, but Siddhant keeps grinding away at his regular speed of \\(x\\) lines per hour.</p>

<p>The project is considered completed as soon as Siddhant and Riddhi have jointly written at least \\(n\\) lines of code. If Siddhant manages to complete all \\(n\\) lines by himself before Riddhi's AI setup even finishes, the work stops immediately at that exact moment.</p>

<p>Time in the hostel is measured strictly using full hours: if the project is completed halfway through an hour, that entire hour is still counted fully (i.e., rounded up).</p>

<p>Assuming Riddhi chooses the absolute optimal strategy to finish as fast as possible, determine the minimum number of full hours after which the project will be completed.</p>
`,

    input: `
<p>The first line contains a single integer \\(t\\) (\\(1 \\le t \\le 100\\)) — the number of test cases.</p>

<p>The only line of each test case contains four integers \\(n\\), \\(x\\), \\(y\\), and \\(z\\) (\\(1 \\le n, x, y, z \\le 10000\\)) — the total lines required for the project, Siddhant's coding speed, Riddhi's manual speed, and the AI agent setup time, respectively.</p>
`,

    output: `
<p>For each test case, output a single integer — the minimum number of full hours after which the Matrix Pathfinder project will be completed if Riddhi acts optimally.</p>
`,

    note: `
<p>In the first test case, if Riddhi chooses not to use the AI, she and Siddhant will write \\(1 + 1 = 2\\) lines of code in the very first hour. Since the project only needs \\(n = 1\\) line, it is finished in \\(1\\) hour.</p>

<p>In the fourth test case, Riddhi spends the first hour setting up the AI agent. Siddhant writes \\(10\\) lines during this hour. In the second hour, the AI is ready, so they write a combined \\(10 + (9 \\cdot 10) = 100\\) lines. Total lines written = \\(10 + 100 = 110\\), matching the requirement perfectly in exactly \\(2\\) hours. Using the manual route would have taken them \\(6\\) hours.</p>
`,

    samples: [
      {
        input: `10
1 1 1 1
2 1 1 5
3 1 1 1
110 10 9 1
54 14 1 1
30 8 1 13
6 2 1 3
82 4 5 7
200 3 2 4
76 211 743 432`,
        output: `1
1
2
2
3
4
2
8
13
1`,
      },
    ],
  },

  E: {
    title: "E. Time Complexity",

    time: "1 second",

    memory: "256 megabytes",

    statement: `
<p>Siddhant has exactly \\(24\\) hours available every day.</p>

<p>To avoid disappointing everyone around him, he must allocate enough time to satisfy the following daily constraints:</p>

<ul>
    <li>Maintain a \\(\\text{CGPA of at least } 8.0\\) by attending lectures, completing assignments, and studying before exams.</li>

    <li>Practice \\(\\text{Data Structures and Algorithms}\\) to eventually stop getting hacked on hidden test cases.</li>

    <li>Work on personal projects that somehow always become much larger than originally intended.</li>

    <li>Spend time with his friends, who insist that <i>"this will only take five minutes."</i></li>

    <li>Spend time with \\(\\text{Riddhi}\\), who claims she understands when he is busy but secretly expects to be prioritized.</li>

    <li>Sleep enough to remain capable of writing code that compiles.</li>
</ul>

<p>For the next \\(n\\) days, the minimum number of hours required for each of these six activities is given.</p>

<p>Determine whether Siddhant can produce a valid schedule such that the total hours allocated per day is exactly \\(24\\), and every minimum constraint is satisfied.</p>
`,

    input: `
<p>The first line contains a single integer \\(n\\) (\\(1 \\le n \\le 365\\)) — the number of days.</p>

<p>Each of the next \\(n\\) lines contains six integers \\(a, b, c, d, e, f\\) (\\(0 \\le a, b, c, d, e, f \\le 24\\)) — the minimum hours required for academics, DSA, projects, friends, Riddhi, and sleep, respectively.</p>
`,

    output: `
<p>If it is impossible to satisfy the requirements for all \\(n\\) days, print a single line containing \\(\\text{IMPOSSIBLE}\\).</p>

<p>Otherwise, print \\(\\text{POSSIBLE}\\). Following this, print \\(n\\) lines. The \\(i\\)-th line must contain six space-separated integers representing the allocated hours for the six activities on day \\(i\\).</p>

<p>The sum of these six integers must be exactly \\(24\\), and each integer must be greater than or equal to its corresponding minimum requirement.</p>

<p>If multiple valid allocations exist, you may output any of them.</p>
`,

    note: `
<p>In the first sample, the sum of requirements for Day 1 is \\(4 + 3 + 2 + 1 + 5 + 7 = 22\\) hours. Siddhant has \\(2\\) hours remaining, which he can safely allocate to sleep.</p>

<p>On Day 2, the requirements sum to \\(12\\) hours, leaving \\(12\\) additional hours that may also be allocated to sleep.</p>

<p>In the second sample, Day 1 requires \\(5 \\times 6 = 30\\) hours, which strictly exceeds the \\(24\\)-hour limit of a day, making it impossible.</p>

<p>\\(\\text{It has been observed that reducing the value of } e \\text{ (time spent with Riddhi) may satisfy the mathematical constraints on paper, but causes the solution to fail on hidden real-world test cases.}\\)</p>
`,

    samples: [
      {
        input: `2
4 3 2 1 5 7
2 2 2 2 2 2`,
        output: `POSSIBLE
4 3 2 1 5 9
2 2 2 2 2 14`,
      },
      {
        input: `2
5 5 5 5 5 5
1 1 1 1 1 1`,
        output: `IMPOSSIBLE`,
      },
    ],
  },

  C: {
    title: "C. Decidophobia",

    time: "1 second",

    memory: "256 megabytes",

    statement: `
<p>After a long day of lectures, assignments, debugging, and pretending to have a healthy sleep schedule, Riddhi and Siddhant decide to go out to eat.</p>

<p>Initially, since they get to meet each other and eat tasty food, they both have happiness equal to \\(h\\).</p>

<p>Unfortunately, neither of them wants to choose the restaurant.</p>

<p>The following conversation is repeated:</p>

<ul>
<li>Siddhant asks Riddhi, "Where do you want to go?"</li>
    <li>Riddhi says, "Don't tell me to decide! I don't know."</li>
    <li>Riddhi asks Siddhant, "You tell me. Where should we go?."</li>
    <li>Siddhant says, "I don't know either!."</li>
</ul>

<p>One complete conversation is called an exchange.</p>

<p>After every exchange, both lose exactly \\(1\\) unit of happiness due to increasing hunger.</p>

<p>After exactly \\(k\\) exchanges, one of two things happens:</p>

<ul>
    <li>If \\(d = 1\\), one of them finally picks a restaurant, the conversation ends immediately, and they go eat.</li>
    <li>If \\(d = 0\\), neither of them ever makes a decision. The conversation continues until both happiness values become \\(0\\), after which they silently go home.</li>
</ul>

<p>Determine the final happiness of Riddhi and Siddhant when the process terminates.</p>
`,

    input: `
<p>The first line contains a single integer \\(t\\) (\\(1 \\le t \\le 10^4\\)) — the number of test cases.</p>

<p>Each test case begins with two integers \\(h\\) and \\(d\\) (\\(1 \\le h \\le 10^9\\), \\(d \\in \\{0,1\\}\\)).</p>

<p>If \\(d = 1\\), one additional integer \\(k\\) follows (\\(0 \\le k < h\\)) — the number of exchanges before someone finally decides.</p>
`,

    output: `
<p>For each test case, output two integers — the final happiness of Riddhi and Siddhant after the conversation terminates.</p>
`,

    note: `
<p>In the first sample, three exchanges take place before Siddhant finally gives up and picks a restaurant. Both therefore lose \\(3\\) units of happiness.</p>

<p>In the second sample, nobody ever makes a decision. The conversation continues until both happiness values reach \\(0\\).</p>

<p>It can be proven that replacing "You decide." with "I don't mind." produces identical behaviour.</p>

<p>The jury attempted to optimize the process by introducing logical arguments. Unfortunately, neither contestant listened.</p>
`,

    samples: [
      {
        input: `3
10 1 3
8 0
2 1 0`,
        output: `7 7
0 0
2 2`,
      },
    ],
  },

  D: {
    title: "D. Slightly less optimal",

    time: "1 second",

    memory: "256 megabytes",

    statement: `
<p>Siddhant is said to have an \\(\\text{optimal day}\\) if all of the following conditions are satisfied:</p>

<ul>
    <li>Sleep exactly \\(8\\) hours (from exactly 11:00 p.m. to 7:00 a.m.).</li>
    <li>Drink exactly \\(10000\\) litres of water.</li>
    <li>Consume \\(0\\) unhealthy food or sugary drinks.</li>
    <li>Complete exactly \\(1000000000\\) jump ropes every morning.</li>
</ul>

<p>Before meeting Riddhi, Siddhant managed to achieve an optimal day every single day.</p>

<p>Then, unexpectedly, he met Riddhi.</p>

<p>Now, each day, one of the following events may occur:</p>

<ul>
    <li>They stay up talking until 2 a.m. Siddhant loses exactly \\(3\\) hours of sleep.</li>
    <li>They go out for unhealthy food. (The food may range from pani puri at New Market to a fancy pizza that they don't even manage to finish.)</li>
    <li>They go for a walk around the MANIT campus instead of Siddhant completing his daily \\(1000000000\\) jump ropes.</li>
    <li>Siddhant reminds Riddhi to drink water because she forgot. Again.</li>
</ul>

<p>The events are represented by the following characters:</p>

<ul>
    <li>\\(S\\) — Siddhant loses \\(3\\) hours of sleep.</li>
    <li>\\(F\\) — Siddhant eats unhealthy food.</li>
    <li>\\(E\\) — Siddhant skips his exercise.</li>
    <li>\\(W\\) — Riddhi drinks one litre of water after Siddhant reminds her.</li>
</ul>

<p>Given the sequence of events, determine whether Siddhant still has an \\(\\text{optimal day}\\).</p>
`,

    input: `
<p>The first line contains a single integer \\(t\\) (\\(1 \\le t \\le 100\\)) — the number of test cases.</p>

<p>Each test case consists of an integer \\(n\\) (\\(1 \\le n \\le 2\\cdot10^5\\)) — the number of events.</p>

<p>The next line contains a string of length \\(n\\) consisting only of the characters \\(S\\), \\(F\\), \\(E\\), and \\(W\\).</p>
`,

    output: `
<p>For each test case, print \\(\\text{YES}\\) if Siddhant still has an optimal day after all events have occurred.</p>

<p>Otherwise, print \\(\\text{NO}\\).</p>
`,

    note: `
<p>Events of type \\(W\\) only help Riddhi stay hydrated and do not affect whether Siddhant had an optimal day.</p>

<p>Before meeting Riddhi, Siddhant's routine was mathematically perfect.</p>

<p>After meeting Riddhi, it became slightly less healthy, slightly less predictable, and significantly more fun.</p>

<p>The jury considers this an acceptable trade-off.</p>

<p>It has also been proven that reminding Riddhi to drink water has no upper bound.</p>

<p>Despite several attempts, Siddhant has never managed to convince Riddhi that \\(\\text{\\\"I do drink enough water!!.\\\"}\\) is a valid hydration strategy.</p>
`,

    samples: [
      {
        input: `4
3
WWW
2
SW
1
F
4
WEWW`,
        output: `YES
NO
NO
NO`,
      },
    ],
  },

  F: {
    title: "F. Invariance",

    time: "∞ seconds",

    memory: "Unlimited",

    statement: `
<p>Siddhant is currently trying to optimize his life.</p>

<p>He wants to maintain a good CGPA, keep doing CP, solve hundreds of DSA problems, build projects, obtain internships, get a <strong>gooodd</strong> placement, stay healthy, spend time with friends and family, and somehow still have enough time for his girlfriend and sleep for 8 hours.</p>

<p>Unfortunately, some days will be worse than others. Maybe an interview or an exam gone wrong, a fight with his loved ones, a contest with a huugee rating loss, or even an irritated mood due to insufficient sleep.</p>

<p>But fortunately! He will always have one value that does not depend on ratings, grades, achievements, success, or failure.</p>

<p>Your task is to determine whether Riddhi's support for Siddhant changes under any possible outcome.</p>
`,

    input: `
<p>The input consists of every future success and mistake, every accepted and wrong submission, every good day, and every bad day that Siddhant will ever have.</p>

<p>Thus, the input cannot be measured accurately.</p>
`,

    output: `
<p>Print the value of Riddhi's support.</p>

<p>The answer is guaranteed to be unique.</p>
`,

    note: `
<p>The solution does not depend on the input.</p>

<p>The correct output is always:</p>

<p style="text-align:center;">\\(\\text{CONSTANT}\\)</p>

<p>It can be proven that the answer does not depend on any measurable quantity.</p>

<p>Whether Siddhant is celebrating a success, or depressed about experiencing a failure, the answer remains exactly the same.</p>

<p>\\(\\text{I love youu so much.}\\)</p>

<p>\\(\\text{Happy Birthday ❤️}\\)</p>
`,

    samples: [
      {
        input: ``,
        output: `CONSTANT`,
      },
    ],
  },
};

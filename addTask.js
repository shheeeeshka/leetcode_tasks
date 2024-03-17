import fs from "fs";

const levels = {
    e: "easy",
    m: "medium",
    h: "hard"
}

const taskName = "5. Longest Palindromic Substring";
const funcName = "longestPalindrome";
const level = levels["m"];
const taskUrl = "https://leetcode.com/problems/longest-palindromic-substring/description/";

const defaultContent = `import checkSolution from "../checkSolution.js";

const ${funcName} = (params) => {
    return true;
};

checkSolution(
    [[1, 8, 6, 2, 5, 4, 8, 3, 7], [1, 1]],
    [49, 1],
    ${funcName}
);

// ${taskUrl}`;

const fileName = taskName
    .split(" ")
    .map((w, i) => i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1))
    .join("")
    .trim();

fs.promises
    .writeFile(`./${level}/${fileName}.js`, defaultContent)
    .then(() => console.log(`Task ${fileName} successfully added\nLevel: ${level}\nHappy coding!!`))
    .catch(e => console.error(e));
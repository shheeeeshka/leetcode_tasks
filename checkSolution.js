const checkSolution = async (cases = [], answers = [], f) => {
    for (let i = 0; i < cases.length; i++) {
        const start = process.hrtime();
        const r = await f(cases[i]);
        const diff = process.hrtime(start);
        const dIMs = (diff[0] * 1e9 + diff[1]) / 1e6;

        const rs = JSON.stringify(r);
        const as = JSON.stringify(answers[i]);

        if (rs === as) {
            console.log(`Test ${i + 1} passed\nTime: ${dIMs} ms\n`);
        } else {
            console.log(`Test ${i + 1} failed\nExpected ${typeof answers[i]} ${as}\nGot ${typeof r} ${rs}\nTime: ${dIMs} ms\n`);
        }
    }
}

export default checkSolution;
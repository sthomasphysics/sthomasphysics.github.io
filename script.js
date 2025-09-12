function runSimulation() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const iterations = parseInt(document.getElementById("iterations").value);
    let inside = 0;

    for (let i = 0; i < iterations; i++) {
        const x = Math.random();
        const y = Math.random();
        if (x*x + y*y <= 1) inside++;

        ctx.fillStyle = x*x + y*y <= 1 ? 'red' : 'blue';
        ctx.fillRect(x*canvas.width, y*canvas.height, 2, 2);
    }

    const piEstimate = 4 * (inside / iterations);
    document.getElementById("pi-value").innerText = `π ≈ ${piEstimate}`;
}

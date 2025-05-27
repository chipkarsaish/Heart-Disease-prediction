document.addEventListener("DOMContentLoaded", () => {
    const facts = [
        "Your heart beats about 100,000 times a day!",
        "Regular exercise can reduce your heart disease risk by 50%.",
        "A healthy diet can lower the risk of heart disease by 80%.",
        "Your heart pumps around 2,000 gallons of blood daily.",
        "Laughter is good for the heart—it increases blood flow by 20%!"
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("random-fact").textContent = randomFact;
});

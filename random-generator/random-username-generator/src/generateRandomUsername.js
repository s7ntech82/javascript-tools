function generateRandomUsername() {
    const adjectives = ["Quick", "Happy", "Bright", "Silent", "Clever", "Brave", "Bold", "Shiny"];
    const nouns = ["Lion", "Tiger", "Eagle", "Shark", "Wolf", "Falcon", "Panther", "Bear"];

    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const adjective = adjectives[random(0, adjectives.length - 1)];
    const noun = nouns[random(0, nouns.length - 1)];
    const number = random(100, 999);

    return `${adjective}${noun}${number}`;
}

module.exports = generateRandomUsername;

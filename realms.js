
const backgrounds = {
    ocean: ["ocean1.jpeg", "ocean2.jpeg", "ocean3.jpeg"],
    diamond: ["diamond1.jpeg", "diamond2.jpeg", "diamond3.jpeg"],
    goddess: ["goddess1.jpeg", "goddess2.jpeg", "goddess3.jpeg"]
};

const pageId = document.body.dataset.vibe;
let index = 0;

function rotateBackground() {
    if (backgrounds[pageId]) {
        document.body.style.backgroundImage = `url('assets/images/${backgrounds[pageId][index]}')`;
        index = (index + 1) % backgrounds[pageId].length;
        setTimeout(rotateBackground, 4000);
    }
}
rotateBackground();

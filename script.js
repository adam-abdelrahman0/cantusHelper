let keys = ["c", "d", "e", "f", "g", "a", "b"];
let currentKey = [];

function getKey() {
    keys = ["c", "d", "e", "f", "g", "a", "b"];
    currentKey = [];
    let obj = document.getElementById("keySelect");
    let keyIndex = obj.options[obj.selectedIndex].text;
    keyIndex = keys.indexOf(keyIndex.toLowerCase());

    for (let j = 0; j < keyIndex; j++) {
        currentKey.push(keys.shift());
    }

    currentKey = keys.concat(currentKey);
    currentKey = currentKey.map(k => k + "/4"); // convert to correct octaves
    console.log(currentKey);

    placeNotes();

}

//formatter places mode notes on stave
function placeNotes() {
    notes = [];
    for (let i = 0; i < currentKey.length; i++) {
        notes.push(new Vex.Flow.StaveNote({keys: [currentKey[i]], duration: "w",}));
    }

    Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
}

const { Renderer, Stave } = Vex.Flow;

const div = document.getElementById("output");
const renderer = new Renderer(div, Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(600, 200);
const context = renderer.getContext();

// Create a stave of width 400 at position 10, 40 on the canvas.
let stave = new Stave(10, 40, 500);

// Add a clef and time signature.
stave.addClef("bass").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();

const sampleNotes = [keys[0] + "/4", "d/4", "e/4", "f/4", "g/4", "a/4", "b/4", "c/5"];
let notes = [];



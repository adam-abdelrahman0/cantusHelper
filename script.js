let keys = ["c", "d", "e", "f", "g", "a", "b"];
let currentKey = [];

function getKey() {
    let obj = document.getElementById("keySelect");
    let keyIndex = obj.options[obj.selectedIndex].text;
    console.log(keys.indexOf(keyIndex.toLowerCase()));

    for (let j = 0; j < 4; j++) {
        console.log(j);
        console.log(keys.shift());
        
    }
    console.log(currentKey);

    keys = ["c", "d", "e", "f", "g", "a", "b"];
    // Render voices.
    voices.forEach(function (v) {
        v.draw(context, stave);
    });
}

const { Renderer, Stave } = Vex.Flow;

const div = document.getElementById("output");
const renderer = new Renderer(div, Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(600, 200);
const context = renderer.getContext();

// Create a stave of width 400 at position 10, 40 on the canvas.
const stave = new Stave(10, 40, 500);

// Add a clef and time signature.
stave.addClef("bass").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();

const sampleNotes = [keys[0] + "/4", "d/4", "e/4", "f/4", "g/4", "a/4", "b/4", "c/5"];
const notes = [];

for (let i = 0; i < sampleNotes.length; i++) {
    notes.push(new Vex.Flow.StaveNote({keys: [sampleNotes[i]], duration: "w",}));
}


// Create a voice in 4/4 and add above notes
const voices = [
    new Vex.Flow.Voice({
        num_beats: 8,
        beat_value: 1,
    }).addTickables(notes),

];

// Format and justify the notes to 400 pixels.
new Vex.Flow.Formatter().joinVoices(voices).format(voices, 350);



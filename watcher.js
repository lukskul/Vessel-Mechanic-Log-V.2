const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");

const dataFolder = path.join(__dirname, "DataFiles");
const indexFile = path.join(dataFolder, "fileIndex.json"); // Store inside DataFiles

// Function to update fileIndex.json with sorted data
function updateIndex() {
    const boats = {};

    // Get all boat folders, sort them alphabetically
    const boatFolders = fs.readdirSync(dataFolder, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .sort(); // Sort boat names

    boatFolders.forEach(boatName => {
        const boatPath = path.join(dataFolder, boatName);
        
        // Get JSON files inside the boat folder, sort them alphabetically
        const files = fs.readdirSync(boatPath)
            .filter(file => file.endsWith(".json"))
            .sort(); // Sort file names

        boats[boatName] = files;
    });

    fs.writeFileSync(indexFile, JSON.stringify(boats, null, 4));
    console.log("✅ fileIndex.json updated and stored inside DataFiles!");
}

// Watch for changes in the DataFiles folder
chokidar.watch(dataFolder, { persistent: true, ignoreInitial: false }).on("all", () => {
    updateIndex();
});

// Initial run to generate sorted fileIndex.json
updateIndex();

//    node watcher.js
// Run This Command in Terminal 
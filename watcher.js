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
        boats[boatName] = {}; // Store languages inside each boat

        // Check for 'en' and 'es' folders
        ["en", "es"].forEach(lang => {
            const langPath = path.join(boatPath, lang);
            if (fs.existsSync(langPath)) {
                const files = fs.readdirSync(langPath)
                    .filter(file => file.endsWith(".json"))
                    .sort(); // Sort JSON file names

                boats[boatName][lang] = files; // Store files under the language
            }
        });
    });

    fs.writeFileSync(indexFile, JSON.stringify(boats, null, 4));
    console.log("✅ fileIndex.json updated with language subfolders!");
}

// Watch for changes inside language folders
chokidar.watch(dataFolder, { persistent: true, ignoreInitial: false }).on("all", () => {
    updateIndex();
});

// Initial run to generate sorted fileIndex.json
updateIndex();

// Run using: node watcher.js


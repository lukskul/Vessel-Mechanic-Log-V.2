# Task Renderer (`tasks`)

## Overview
`tasks.js` is a **modular JavaScript file** responsible for rendering task-specific content dynamically on the vessel application page. It is **isolated from specific task content**, allowing tasks to change, expand, or be replaced without modifying the core renderer.

- Each task has its own JSON file stored in `DataFiles/<vesselName>/<taskName>.json`.
- Each task has a corresponding module in `tasks/<taskName>.js` exporting a function `<taskName>Populate(data)`.
- The renderer imports the task module dynamically and calls its populate function with the JSON data.

---

## Structure

### 1. Data Fetching
- `fetchVesselData()` → Loads the master list of vessels from the remote JSON index.
- `fetchVesselFiles(vesselName)` → Loads the list of task JSON files for the selected vessel.
- All network requests are handled within this file.

### 2. Vessel Selection
- Autocomplete input allows users to select a vessel.
- Selecting a vessel:
  - Stores the vessel in `localStorage`.
  - Loads available task JSON files.
  - Updates the task menu to show available tasks.

### 3. Task Selection
- Clicking a task:
  - Sets it as the current task in `localStorage`.
  - Dynamically imports the corresponding task module from `tasks/<taskName>.js`.
  - Calls `<taskName>Populate(data)` with the JSON content for that task.

### 4. Dynamic Rendering
- `loadHTML()` creates the container for the selected task inside `#html-container`.
- A `MutationObserver` watches the container and triggers `loadTaskJSON()` when content changes.
- Each task module is responsible for populating its own HTML structure.
- The renderer ensures consistent styling and placement without hardcoding content.

### 5. Reset / Back Button
- `clearPageContent()` clears all task-related HTML and resets the vessel selection form.
- Prepares the page for selecting a new vessel or task without leftover content.

---

## Usage

### 1. Import the renderer
```javascript
import { loadHTML, clearPageContent } from './task.js';


## Task Rendering Flow

```mermaid
flowchart TD
    A[User selects vessel] --> B[task.js fetches vessel JSON index]
    B --> C[Fetch available task JSON files for selected vessel]
    C --> D[Update task menu with available tasks]
    D --> E[User clicks a task]
    E --> F[task.js dynamically imports tasks/<taskName>.js]
    F --> G[Call <taskName>Populate(data) with JSON content]
    G --> H[Render task HTML in #html-container]
    H --> I[MutationObserver watches for dynamic content changes]

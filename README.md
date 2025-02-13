# Vessel Mechanic Log V.2  

## Overview  
Version 2 of the Vessel Mechanic Log is a **read-only** system, allowing users to reference vessel data and specifications. This lightweight version is designed to run on **IPFS** without requiring a traditional server to fetch or push data.  

## Features  
- 📄 **Read-Only Access** – Users can view vessel data but cannot modify it.  
- ⚡ **Lightweight** – Optimized for speed and minimal resource usage.  
- 🌐 **Decentralized** – Fully functional on **IPFS** and **GitHub Pages**, no backend required.  

## How It Works  
- Data is stored in **JSON files** inside the repository.  
- The web page dynamically loads data based on user selection.  
- A **static index file** (`fileIndex.json`) lists available data files per vessel.  
- Users can select a vessel and a specific JSON file to view its data.  

## Getting Started  
1. **Access the website** via GitHub Pages or IPFS.  
2. **Select a boat** from the dropdown menu.  
3. **Choose a data file** to view its contents.  

## Data Structure  
Each vessel has its own folder inside `/DataFiles`, containing various JSON files:  


- `fileIndex.json` maps boats to their available JSON files.  
- The web app reads this index and dynamically loads available data.  

## Deployment  
- **GitHub Pages**: Hosted directly from the repository.  
- **IPFS**: Can be uploaded and accessed without reliance on centralized servers.  

## Future Improvements  
- Automate `fileIndex.json` updates.  
- Add support for markdown descriptions.  
- Enhance UI for better navigation.  
---



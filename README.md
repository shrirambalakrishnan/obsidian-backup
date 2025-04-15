# obsidian-backup

A simple Obsidian plugin to back up your vault contents to your local machine on demand.

## Features

- **On-demand Backup**: Manually back up your entire Obsidian vault with a single click.
- **Simple and lightweight**: No unnecessary features, just straightforward backup functionality.

## Installation

1. Clone or download the repository.
2. In Obsidian, open the **Settings** > **Community Plugins**.
3. Enable **Developer Mode** (if not already enabled).
4. Click **Load Plugin** and select the plugin folder (the folder containing the `main.js` and `manifest.json` files).
5. Once the plugin is loaded, you can access it via the plugin's interface.

## Usage

1. After installing the plugin, open the Command Palette (press `Cmd+P` or `Ctrl+P`).
2. Run the command: “Obsidian Backup: Backup Now”.
3. A new folder named Backups will be created inside your vault.
4. Inside it, you’ll find a subfolder with a timestamp containing a full snapshot of your vault’s contents.

## Roadmap
Here are some features planned for future releases:
- Backup as ZIP: Compress backups into a .zip archive instead of plain folders.
- Remote Backup Support: Upload backups to GoogleDrive storage.

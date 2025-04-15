import { Plugin, TFile  } from 'obsidian';

export default class SimpleBackup extends Plugin {

	async onload() {
		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'backup-now',
			name: 'Backup Now',
			callback: () => {
				new BackupGenerator(this.app).generate();
			}
		});
	}

	onunload() {}
}

class BackupGenerator {
	// This class will handle the backup generation logic
	constructor(private app: any) {
		this.app = app;
	}

	async generate() {
		// Logic to generate a backup of the vault
		const files = this.app.vault.getFiles();		
		const backupFolderName = "Backup_" + new Date().toISOString().replace(/[:.]/g, '-');
		const backupDir = this.app.vault.getRoot().path + "/Backups/" + backupFolderName;

		try {
			for(let i=0; i < files.length; i++) {
				const file = files[i];

				// Skip files in the Backups folder
				if (file.path.includes("Backups/")) {
					continue;
				}

				if (file instanceof TFile) {
					// Ensure no double slashes in the path
					const targetPath = backupDir + "/" + file.path.replace(/^\//, "");
					const targetDir = targetPath.substring(0, targetPath.lastIndexOf("/"));

					try {
						await this.app.vault.createFolder(targetDir);
					} catch (error) {
						console.error("Error creating folder: " + error);
					}

					try {
						// Read the file content and write it to the backup location
						const content = await this.app.vault.read(file);
						await this.app.vault.adapter.write(targetPath, content);
					} catch (error) {
						console.error("Error processing file: " + file.path + " - " + error);
					}
				}
			}
		} catch (error) {
			console.error("Error creating backup folder: " + error);
		}
	}
}

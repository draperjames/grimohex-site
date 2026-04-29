# Files and Projects

## Project Storage

Projects are saved as JSON files in the app's Application Support directory under:

```text
Application Support/GrimoHex/projects/
```

Each project file is named with its project UUID. Before overwriting an existing project file, GrimoHex rotates the current file to a `.bak` backup.

The last opened project ID is stored in:

```text
Application Support/GrimoHex/projects/last_opened.txt
```

## Autosave

Most project mutations schedule a debounced save 500 ms after the last change. Manual save is also available from Settings or the app menu.

## Save As

Save As creates a copy of the current project with a new UUID and name. Blank names default to the current project name plus `COPY`.

## Load

The project list reads saved JSON files, extracts project name and ID, and sorts projects by modification date descending.

Loading a project:

- Stops playback.
- Clears transient selection and clipboard state.
- Restores persisted sample sources.
- Synchronizes sample assignments for the current pattern.
- Publishes the loaded pattern to the sequencer.

## Delete

Deleting a project removes its JSON file and backup file. The current loaded project cannot be deleted from the project list.

## Sample Storage

Imported and recorded samples are stored under:

```text
Application Support/GrimoHex/samples/
```

Imported sample names are prefixed with a UUID on disk to avoid collisions. The UI strips that prefix for display when possible.

Recorded sample file names are sanitized from the proposed sample name and written as WAV files. If a name already exists, GrimoHex appends a numeric suffix.

## Bundled Samples

Bundled samples live in the app bundle under `Samples/`. The current repository includes:

- `clap.wav`
- `cowbell.wav`
- `hat.wav`
- `kick.wav`
- `open_hat.wav`
- `perc_1.wav`
- `perc_2.wav`
- `rim.wav`
- `snare.wav`


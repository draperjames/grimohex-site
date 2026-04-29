# Settings

The Settings view is available from the app menu and the settings view code. It is organized into project, audio, debug audio, MIDI, and pattern sections.

## Project

Project controls:

- Rename project.
- View total pattern count.
- View track count.
- New project.
- Load project.
- Save project.
- Save As.

New project saves the current project before resetting to a blank project and restoring the default bundled kit when needed.

## Audio

The audio section shows:

- Sample rate: 48000 Hz.
- Voices: 8.
- Bit depth: 32-bit float.
- Buffer: 256 frames.

## Audio Diagnostics

In DEBUG builds, audio diagnostics show:

- Current route.
- Session category and mode.
- Session sample rate and IO buffer duration.
- Debug toggles for graph/session behavior.
- A session category picker for playback or play-and-record.

These controls are intended for development and device diagnostics, not normal end-user operation.

## MIDI

The MIDI section shows:

- Out port: GrimoHex Out.
- In port: GrimoHex In.
- Clock: Internal.
- Channels: 1-8 audio / 9-16 MIDI.

## Pattern

The pattern section shows:

- BPM.
- Swing.
- Length.
- Scale mode.

Scale mode controls:

- **PER PAT**: pattern master length applies globally.
- **PER TRK**: each track can use its own track length internally.

The UI exposes the scale mode toggle. Dedicated per-track length editing is present in app state but not surfaced as a complete settings control.


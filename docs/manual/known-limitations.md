# Known Limitations

This page lists features that are partially implemented, internally present, or visibly planned but not complete in the current codebase.

## Sample Recording Sources

Implemented:

- MIC recording.
- USB recording when a USB audio input is available.

Not implemented:

- MAIN L.
- MAIN R.
- MAIN L+R.
- TRACK 1-8.

Those internal capture sources are present in the source enum but explicitly marked unavailable with TODO comments.

## WERP Machine

The WERP machine exists in the model and appears in the machine selector. The current voice DSP does not implement a distinct WERP playback algorithm.

## MIDI Workflows

Implemented:

- Virtual MIDI output.
- Virtual MIDI input.
- MIDI note-on/note-off output from MIDI tracks.
- Utility methods for CC, program change, all notes off.
- Incoming clock and note callbacks.

Partial or not exposed:

- Full external MIDI clock sync.
- MIDI clock output.
- Full CC sequencing UI.
- Program change UI.
- MIDI channel selection UI using the stored `midiChannel` model field.

## Song and Chain Playback

Song rows and pattern chain data exist. The UI can add song rows, toggle song mode, clear rows, and cycle row patterns. The chain editor has quick presets.

Limitations:

- Full song playback advancement is not complete.
- Pattern chain advancement is represented internally, but published pattern handoff is not fully coordinated in the current implementation.

## Conditions UI

The model and sequencer support many trig conditions. The UI currently exposes:

- Always/fill toggle in step actions.
- Probability via the STEP page.

Other conditions need a dedicated picker or editor before they are fully user-facing.

## Sample Slot Parameter

Sample slots exist and the Sound Browser assigns actual samples. The SOURCE page displays a sample slot parameter value, but changing that encoder is not currently wired as a full sample-selection workflow. Use LOAD in the SAMPLE page for reliable sample assignment.

## Waveform Editing

The waveform view displays start, end, loop, playhead, and slice markers. There are no direct drag handles for editing waveform markers yet; use SOURCE parameters.

## Solo, Control All, Sound Locks, and Sample Locks

These features have internal state or methods:

- Solo bitfield.
- Control All broadcasting.
- Sound locks.
- Sample locks.

They do not currently have complete primary UI workflows.

## Settings Page Selector

The code defines a settings page type, and Settings is available from the app menu. The visible global page selector currently lists FX, MIX, SAMPLE, and SONG.

## True Stereo Processing

Stereo sample buffers are supported, but the current voice filter uses shared filter state between left and right channels. This is most suitable for mono drum samples.

## Debug-Only Audio Diagnostics

Audio diagnostics controls exist only in DEBUG builds.


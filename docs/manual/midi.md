# MIDI

GrimoHex includes CoreMIDI support for its eight MIDI tracks and external MIDI callbacks.

## Virtual Ports

The MIDI manager creates:

- Virtual output: **GrimoHex Out**
- Virtual input: **GrimoHex In**
- Output port: **GrimoHex Out Port**

Setup is lazy: MIDI is initialized when MIDI output is needed or when the manager is prepared.

## MIDI Tracks

Each pattern contains eight MIDI tracks, shown as M1-M8. Internally they are tracks 9-16.

During sequencer playback, MIDI track trigs are sent as note-on messages through the virtual output. Note-off messages are scheduled based on the step length and current BPM.

## Channels

The settings screen currently describes channels as `1-8 AUDIO / 9-16 MIDI`.

Implementation detail: MIDI track output currently derives the channel from the overall track index. M1 starts from channel 9 in human numbering. The `Track.midiChannel` model value exists and defaults M1-M8 to 0-7, but sequencer MIDI output currently uses track index derivation rather than that stored field.

## Sent Events

The MIDI manager can send:

- Note on.
- Note off.
- Control change.
- Program change.
- All notes off, CC 123 on all 16 channels.

The current UI focuses on note sequencing. CC and program change sending methods exist in code but do not have a complete user-facing editing workflow.

## Incoming MIDI

The virtual input can receive:

- MIDI clock tick `0xF8`, exposed through `onClockTick`.
- External note-on messages, exposed through `onExternalNote`.

These callbacks exist, but the app does not currently document or expose a complete external-sync or external-note recording workflow in the UI.

## MIDI Clock

Settings shows clock as **INTERNAL**. MIDI clock input callbacks exist in code, but full external clock sync is not currently wired into transport behavior.


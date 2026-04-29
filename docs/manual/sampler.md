# Sampler

GrimoHex audio tracks play samples through the app's voice engine. Each audio track can hold a sample assignment and a full set of sound parameters.

## Sample Sources

Samples can come from:

- Bundled factory WAV files in the app.
- Imported audio files selected with the Files picker.
- Recordings created in Sample Record.

Supported imported file extensions are:

`wav`, `aif`, `aiff`, `mp3`, `m4a`, `caf`, `flac`

Imported files are copied into the app's sample directory before use.

## Sample Slots

Each project has 127 sample slots. The sound browser shows all slots and marks the selected track's current sample as **ACTIVE**.

Newly discovered bundled or imported samples are registered into the first available slots. Empty slots show `EMPTY`.

## Sound Browser

Open the SAMPLE page and tap **LOAD**.

The browser shows:

- Selected track.
- Current sample.
- Used slot count.
- Search field.
- Slot list.
- Import button.

Tap an assigned sample slot to assign it to the selected audio track. Tap **IMPORT** to choose an audio file from the system file picker.

## Loading and Normalization

Sample files are decoded with AVFoundation, resampled to 48 kHz when needed, converted to 32-bit floating point sample buffers, and normalized to a peak of 0.99 when the source peak is below full scale.

Audio buffers can be mono or stereo. Stereo samples are stored interleaved in the engine buffer. The current filter implementation uses shared filter state for left and right playback, which is acceptable for mono drum-machine material but is a limitation for true stereo material.

## Machines

Audio tracks expose these machine modes:

- **OneShot**: normal sample playback.
- **Repitch**: varispeed/tape-like mode that enables looping behavior.
- **WERP**: listed in the UI and model, but the current DSP path does not implement a distinct WERP algorithm beyond the shared sample playback behavior.
- **Slice**: divides a sample into equal or transient-detected regions and triggers one region at a time.

## Playback Modes

Audio playback mode can be set at the track level or locked per step:

- Forward.
- Reverse.
- Forward loop.
- Reverse loop.

Start, end, and loop markers are visible in the waveform display and are controlled through SOURCE parameters.


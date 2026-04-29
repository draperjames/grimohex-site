# Sample Recording

Sample Record captures external audio into a temporary file, converts it into a GrimoHex sample buffer, and can save it into the project sample library.

## Open Sample Record

Open the SAMPLE page and tap **RECORD SAMPLE**.

The Sample Record screen shows:

- State.
- Elapsed time.
- Target track.
- Source.
- Sample rate.
- Record length.
- Threshold.
- Live input display.
- Input level meter.
- ARM, REC, STOP, CANCEL, preview, save, and discard controls depending on state.

## Sources

Current source availability:

| Source | Status |
|---|---|
| MIC | Available |
| USB | Available only when a class-compliant USB audio input is present |
| MAIN L | Planned, not implemented |
| MAIN R | Planned, not implemented |
| MAIN L+R | Planned, not implemented |
| TRACK 1-8 | Planned, not implemented |

Unavailable sources are disabled in the menu.

## Sample Rates

Recording can be configured for:

- 44.1 kHz.
- 48 kHz.
- 96 kHz.

Saved buffers are converted to the app's 48 kHz engine rate when needed.

## Record Length

Record length options:

- 1, 2, 4, 8, 16, 32, 64, or 128 steps.
- MAX, a free-record limit of 5:00.

Step-based recording length follows the current pattern BPM. One step is one 16th note.

## Threshold

Threshold ranges from 0-127.

- 0 means off and records immediately.
- Values above 0 let ARM wait until input level crosses the threshold.

## Recording Flow

1. Choose **SRC**, **RATE**, **RLEN**, and threshold.
2. Tap **REC** to start immediately, or **ARM** to wait for threshold.
3. Tap **STOP**, or let RLEN auto-stop.
4. Preview the recorded waveform.
5. Optionally enter a sample name.
6. Tap **SAVE** to save the sample and assign it to the selected track.
7. Tap **DISCARD** to throw the recording away.

If you close with an unsaved preview, GrimoHex asks whether to save, cancel, or discard.

## Saving

Saved recordings are normalized, written as WAV files to the app sample directory, registered in the project sample slots, loaded into the sample manager, and assigned to the selected track.

Blank names use a timestamp-based default ending in `-grimohex-sample`.

## Current Caveats

The recording implementation uses `AVAudioRecorder` for device input capture. Internal bus and per-track resampling sources are explicitly marked TODO in the code and are not available yet.

Historical device notes in the repository indicate a previous mismatch between actual captured audio and the live meter/waveform perception. The current UI includes live level, preview waveform, peak, and RMS values, but microphone behavior should still be verified on real devices before publishing support claims.


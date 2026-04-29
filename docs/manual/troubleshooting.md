# Troubleshooting

## I Do Not Hear Sound

Try these checks:

- Make sure the device is not muted and volume is up.
- Tap an audio pad T1-T8 while transport is stopped. Pads should preview sounds.
- Open SAMPLE and verify the selected track has a sample name rather than `INIT`.
- Tap LOAD and assign a sample to the selected audio track.
- Press Play only after adding at least one enabled step in GRID mode.
- If using Bluetooth, test with built-in speaker or wired output. Bluetooth route behavior can vary by device and iOS version.

## Pads Work, but the Pattern Is Silent

- Confirm the selected track has enabled steps.
- Check MUTE mode and make sure the track is not muted.
- Check pattern length and page: steps on page 2-4 only play if the pattern length reaches those steps.
- Confirm the active pattern is the one you edited.

## My Sample Did Not Load

- Confirm the file is an audio file with one of the supported extensions.
- Try WAV or AIFF if a compressed file fails.
- Large files may take longer to decode and resample.
- If an imported file disappears from the app sandbox, the project will clear invalid references during normalization.

## Sample Recording Does Not Start

- iOS must grant microphone permission.
- MIC is the default supported source.
- USB appears only when a compatible USB audio input is available.
- MAIN and TRACK sources are planned and currently unavailable.
- If threshold is above 0, ARM waits for the input meter to cross the threshold. Set threshold to 0 to record immediately.

## Recorded Waveform Looks Quiet

Recorded samples can have a high peak but low average level. The preview shows waveform plus PEAK and RMS values. Try speaking or tapping close to the microphone and compare PEAK/RMS after recording.

## SAVE Is Disabled in Sample Record

SAVE becomes available only after a recording reaches preview state. Tap STOP or wait for RLEN auto-stop.

## MIDI Does Not Reach Another App

- Confirm the receiving app can see **GrimoHex Out**.
- Confirm it is listening on the expected MIDI channel.
- Start playback with enabled steps on a MIDI track M1-M8.
- The app currently focuses on note output; full external clock sync and CC editing are not complete UI workflows.

## Project Did Not Reopen

GrimoHex opens the last saved project from Application Support. If the last-opened file is missing or invalid, the app starts from a blank project and restores the bundled default kit.


# Sample Slicing

Slice mode lets an audio track trigger portions of a loaded sample instead of playing the whole sample.

## Enable Slice Mode

On the SAMPLE page, tap **SLICE**. This toggles the selected audio track between the Slice machine and OneShot.

When Slice mode is active:

- The waveform display shows slice markers.
- The highlighted slice is shown in cyan.
- The SOURCE page changes from playback-mode controls to slice controls.
- KEYS mode becomes slice-key mode.

## Equal Slices

Equal slicing divides the selected start-to-end region into a fixed number of slices.

The slice count is controlled by the **SLICES** parameter and can range from 1 to 64.

## Auto Slicing

Tap **AUTO** on the SAMPLE page to detect transient boundaries for the current sample. Auto slicing:

- Analyzes the loaded sample buffer.
- Stores normalized slice boundaries on the sample slot.
- Sets the sample slot to transient slice mode.
- Switches the track to the Slice machine.
- Updates the track's slice count and selected slice.

The current sensitivity default is 0.35. There is code support for sensitivity storage, but the UI does not currently expose a sensitivity control.

## Slice Keys

In KEYS mode, Slice tracks show slices instead of notes.

- Each pad triggers one slice.
- **OCT-** and **OCT+** page through groups of 16 slices.
- Empty slice-key cells are disabled when the slice count does not fill the page.
- Live or step recording can write slice locks to steps.

## Slice Parameters

SOURCE page parameters in Slice mode:

- Tune.
- Slice index.
- Slice count.
- Sample slot value.
- Start point.
- End point.
- Loop point.
- Sample balance.

## Limits

The maximum slice count is 64. Auto-detected boundaries include both 0 and 1, so a 16-slice sample stores 17 boundary values.


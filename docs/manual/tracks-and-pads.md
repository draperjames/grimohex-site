# Tracks and Pads

## Track Types

Each pattern contains 16 tracks:

| Track range | Type | Use |
|---|---|---|
| T1-T8 | Audio | Sample playback, machines, filter, amp, LFO, sends |
| M1-M8 | MIDI | MIDI note sequencing through the virtual MIDI output |

Audio tracks are highlighted in orange. MIDI tracks are highlighted in cyan.

## Track Pads

When recording is not armed and KEYS mode is off, the lower 4x4 grid acts as track pads.

- Tap an audio track pad to preview its sample and select the track.
- Tap a MIDI pad to send a MIDI note and select the track.
- Pad labels show track numbers and audio sample names.
- Active playback can light pads when their current step fires.

## Mute Mode

Tap **MUTE** to turn the pad grid into mute controls.

- Tap a pad to mute or unmute that track.
- Muted pads show red feedback.
- Mutes are stored as sequencer bitfields and are applied during playback.

## Chromatic Keys

Tap **KEYS** to turn the lower grid into note keys for the selected track.

- The grid shows 16 notes at a time.
- **OCT-** and **OCT+** shift the visible note range.
- Audio tracks preview pitched sample playback.
- MIDI tracks send external MIDI notes.
- In live or step record modes, key presses can write note locks to steps.

## Slice Keys

If the selected audio track is using the Slice machine, KEYS mode becomes slice-key mode.

- The grid shows slice numbers instead of note names.
- **OCT-** and **OCT+** page through groups of 16 slices.
- Pressing a slice key previews that slice.
- In live or step record modes, slice key presses can write slice playback locks to steps.

## Track Selection

Selecting a track updates:

- The active track parameter page.
- The sample waveform page.
- Step grid content.
- Pad highlight.

If the current page is not valid for the selected track type, GrimoHex returns to the STEP page.


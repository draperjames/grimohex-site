# Mixer and Buses

## Track Level and Pan

The MIX page exposes current track:

- Level.
- Pan.

These update both track sound parameters and mixer state arrays when applicable.

Audio track LEVEL pages also expose volume and pan as part of the track sound.

## Master Volume

The MIX page exposes master volume. Master volume is applied after dry voices, effects, and master compression.

## Swing in Mix

The MIX page includes swing for quick performance adjustment. This changes the current pattern's swing value.

## Mutes and Solos

Mute mode is exposed in the UI. Tapping a track pad in MUTE mode toggles a pattern mute bit for that track.

Solo support exists in `AppState` and the sequencer as a global solo bitfield, but there is no complete user-facing solo control in the current UI.

## Cue and External Input Monitor

The mixer model contains:

- Cue enabled.
- External input monitor level.

The landscape context panel can display these values on the MIX page, but there are no complete primary controls for cue or external input monitoring in the current UI.

## Audio Routing

The current engine renders:

1. Audio voices.
2. Per-voice delay and reverb sends.
3. Global delay and reverb returns.
4. Master compressor.
5. Master volume.
6. Peak metering.

The engine runs at a project sample rate of 48 kHz and targets a 256-frame buffer.


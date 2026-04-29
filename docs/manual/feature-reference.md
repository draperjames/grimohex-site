# Feature Reference

This page summarizes GrimoHex features by implementation status.

## Implemented and User-Facing

| Feature | Status |
|---|---|
| 8 audio tracks | User-facing |
| 8 MIDI tracks | User-facing |
| 128 patterns | User-facing |
| 64-step maximum pattern length | User-facing |
| Pattern copy/paste/clear/duplicate | User-facing |
| Tempo 30-300 BPM | User-facing |
| Swing 50-80 | User-facing |
| Grid recording | User-facing |
| Live recording | User-facing |
| Step recording | User-facing |
| Track pads | User-facing |
| Mute mode | User-facing |
| Chromatic keys | User-facing |
| Slice keys | User-facing |
| Parameter locks | User-facing |
| Microtiming | User-facing |
| Retrig | User-facing |
| Probability/fill conditions | User-facing |
| Sample import | User-facing |
| Sample recording from MIC/USB | User-facing |
| Equal slicing | User-facing |
| Transient auto slicing | User-facing |
| Global delay | User-facing |
| Global reverb | User-facing |
| Master compressor core controls | User-facing |
| Project save/load/delete | User-facing |

## Implemented Internally or Partially Exposed

| Feature | Current state |
|---|---|
| Full trig condition set | Sequencer/model support; limited UI |
| Song mode | Row UI and data exist; full playback not complete |
| Pattern chain | Quick UI presets; handoff is limited |
| MIDI input clock callbacks | Code exists; full sync not exposed |
| MIDI CC/program change methods | Code exists; no complete UI |
| Solo | App state and sequencer bits exist; no main UI |
| Control All | App state exists; no main UI |
| Sound locks | Model/app methods exist; no browser workflow |
| Sample locks | Model/sequencer support exists; no complete UI |
| Cue/external input monitor | Mixer state exists; limited display |
| Settings page enum | Exists; settings are mainly reached through app menu |

## Planned or Not Implemented

| Feature | Current state |
|---|---|
| Main bus sample recording | TODO in source |
| Per-track sample recording/resampling | TODO in source |
| Distinct WERP DSP | Machine exists; distinct algorithm not implemented |
| Waveform drag handles | Markers display; edit through parameters |
| External MIDI clock sync workflow | Callback exists; transport sync not complete |
| MIDI clock output | Not implemented |
| AUv3, Ableton Link, iCloud sync | Roadmap only in existing notes |


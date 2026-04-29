# Parameter Pages

Parameter pages use encoder-style controls. Drag vertically to adjust a value. Double-tap resets to the default. Long-press can create or clear a parameter lock when editing a step and the parameter supports locks.

## STEP Page

| Label | Parameter |
|---|---|
| NOTE | Note |
| VEL | Velocity |
| LEN | Step length |
| COND or PROB | Probability/condition |
| TIME | Microtiming |
| RPT | Retrig rate |
| RPT LN | Retrig length |
| TUNE | Tune |

## SOURCE / NOTE Page

For audio tracks, SOURCE shows a machine selector plus source parameters.

Machines listed in the UI:

- `oneShot`
- `repitch`
- `werp`
- `slice`

For OneShot, Repitch, and WERP tracks:

| Label | Parameter |
|---|---|
| TUNE | Tune |
| MODE | Playback mode |
| BITS | Bit reduction parameter |
| SLOT | Sample slot value |
| START | Start point |
| END | End point |
| LOOP | Loop point |
| BAL | Sample balance |

For Slice tracks, MODE and BITS are replaced by:

| Label | Parameter |
|---|---|
| SLICE | Slice index |
| SLICES | Slice count |

For MIDI tracks, the same page is titled NOTE and currently maps to note, velocity, length, balance, pan, volume, delay send, and reverb send parameter slots. MIDI CC-specific editing is limited in the current UI.

## FILTER / CC Page

Audio track FILTER parameters:

| Label | Parameter |
|---|---|
| ATK | Filter envelope attack |
| DEC | Filter envelope decay/hold stage |
| SUS | Filter sustain parameter |
| REL | Filter release/decay stage |
| FREQ | Filter cutoff |
| RES | Filter resonance |
| TYPE | Filter type |
| ENV | Filter envelope amount |

The DSP voice currently maps filter type across lowpass, bandpass, and highpass regions. Notch exists in the filter implementation but is not currently selected by the UI mapping.

MIDI track CC page maps to filter frequency/resonance/env-style parameter slots plus base/width and LFO-related parameters.

## LEVEL / MOD Page

Audio track LEVEL parameters:

| Label | Parameter |
|---|---|
| ATK | Amp attack |
| HOLD | Amp hold |
| DEC | Amp decay |
| DRV | Overdrive |
| DLY | Delay send |
| REV | Reverb send |
| PAN | Pan |
| VOL | Volume |

MIDI track MOD page maps to amp/mod timing, LFO depth, and send parameters.

## MOTION Page

| Label | Parameter |
|---|---|
| SPD | LFO speed |
| MULT | LFO multiplier |
| FADE | LFO fade |
| DEST | LFO destination |
| WAVE | LFO wave |
| PHASE | LFO start |
| MODE | LFO mode |
| DEP | LFO depth |

The voice engine implements multiple LFO shapes and destination routing for filter cutoff, pan, volume, tune, and filter resonance. Some displayed LFO labels are simplified compared with the internal enum.

## FX Page

The global FX page exposes eight controls:

- Delay time.
- Delay feedback.
- Delay level.
- Reverb level.
- Reverb decay.
- Compressor threshold.
- Compressor attack.
- Compressor release.

## MIX Page

The global MIX page exposes:

- Current track level.
- Current track pan.
- Master volume.
- Pattern swing.

## SAMPLE, SONG, and SETTINGS

The SAMPLE page shows waveform, load, record, and slice controls.

The SONG page shows song mode controls and rows.

The settings view is available through the app menu and is represented by the settings page type in code.


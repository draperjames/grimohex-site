# UI Reference

This page is a control inventory for the current GrimoHex interface.

## Main View

`MainView` is the root app screen after the splash screen. It adapts between portrait and landscape.

Portrait order:

1. Top bar.
2. Transport bar.
3. Page selector.
4. Parameter page.
5. Lower performance panel.
6. Bottom step-action overlay when a step is held.

Landscape order:

1. Top bar.
2. Transport bar.
3. Page selector and parameter page on the left.
4. Lower performance panel in the center.
5. Expanded context panel on wide screens.

## Splash Screen

The app shows a splash overlay for about 1.8 seconds after launch, then fades it out.

## Top Bar Controls

| Control | Action |
|---|---|
| Menu icon | Opens app menu |
| PATTERN | Opens pattern editor |
| TEMPO | Opens tempo editor |
| SWING | Opens swing editor |
| LEN | Opens pattern length editor |
| CHAIN | Opens quick chain editor |
| CLIP | Displays clipboard scope |
| STATE | Displays transport/record state |

## App Menu

The app menu includes:

- Project controls from Settings.
- Settings sections.
- Transport state.
- Record state.
- STOP.
- PLAY or PAUSE.
- REC arm toggle.
- DONE.

## Pattern Editor

Controls:

- Bank stepper.
- Slot stepper.
- PREV.
- NEXT.
- COPY PAT.
- PASTE PAT.
- CLEAR PAT.
- DUPL NEXT.
- INIT PAT.
- CLIP status.

## Numeric Editors

Tempo, swing, and length editors use:

- Text field.
- Current value display.
- Slider.
- Minus button.
- Plus button.
- DONE.

## Transport Bar

| Control | Action |
|---|---|
| Stop icon | Stop sequencer and all MIDI notes |
| Play/Pause icon | Start or pause playback |
| REC | Arm or disarm recording |
| GRID | Toggle grid record mode |
| LIVE | Toggle live record mode |
| STEP | Toggle step record mode |
| MUTE | Toggle mute mode |
| KEYS | Toggle chromatic/slice key mode |

## Page Selector

Track page tabs:

- STEP.
- SOURCE or NOTE.
- FILTER or CC.
- LEVEL or MOD.
- MOTION.

Global page tabs:

- FX.
- MIX.
- SAMPLE.
- SONG.

## Parameter Encoders

Each parameter cell shows:

- Short label.
- Current value text.
- Circular encoder visualization.
- Optional yellow LOCK badge.

Gestures:

- Vertical drag adjusts the value.
- Double-tap resets to default.
- Long-press can toggle a step lock when available.

## Step Grid

Controls:

- 16 step cells.
- Page indicator bars.
- PREV page.
- NEXT page.

Cell markers:

- `L`: lock.
- `C`: condition.
- `R`: retrig.
- `0`, `<`, or `>`: microtiming state.

## Track Pad Grid

Controls:

- T1-T8 audio track pads.
- M1-M8 MIDI track pads.

Track pads trigger/select in normal mode and mute/unmute in mute mode.

## Chromatic and Slice Key Grid

Controls:

- 16 key pads.
- OCT-.
- OCT+.

In chromatic mode, pads show note names and MIDI note numbers. In slice-key mode, pads show slice numbers and slice range status.

## Step Actions

Controls:

- COPY STEP.
- PASTE STEP.
- CLEAR STEP.
- COND.
- RPT.
- PLAY.
- DONE on compact overlay.

Additional sheets:

- Retrig rate sheet with OFF, DONE, and available retrig rates.
- Playback mode sheet with TRACK, DONE, Forward, Reverse, Forward Loop, Reverse Loop.

## SAMPLE Page

Controls:

- SLICE.
- AUTO.
- RECORD SAMPLE.
- LOAD.

Display:

- Sample name.
- Waveform.
- Start marker.
- End marker.
- Loop marker.
- Slice markers when Slice mode is active.
- Playback mode label.

## Sound Browser

Controls:

- CLOSE.
- IMPORT.
- Search field.
- Sample slot rows.

Each slot row shows slot number, assigned/empty state, sample name, and ACTIVE when assigned to the selected track.

## Sample Record

Controls:

- CLOSE.
- SRC menu.
- RATE menu.
- RLEN menu.
- THRESHOLD slider.
- ARM.
- REC.
- STOP while armed or recording.
- CANCEL while armed or recording.
- PLAY/STOP PREVIEW.
- SAVE.
- DISCARD.
- Name field after recording.

Display:

- State.
- Time.
- Track.
- Live input visualization.
- Input level meter.
- Preview waveform.
- Length, frames, rate, peak, and RMS for recorded sample.
- Error banner when recording fails.

## SONG Page

Controls:

- ON/OFF song mode toggle.
- ADD row.
- CLR rows.
- Per-row previous pattern.
- Per-row next pattern.
- Per-row delete.

Displays row number, playhead indicator, pattern label, row length, and transpose when nonzero.

## Settings

Controls:

- Project name edit and OK.
- NEW.
- LOAD.
- SAVE.
- SAVE AS.
- PER PAT.
- PER TRK.
- DEBUG-only audio diagnostic toggles and picker.

Sheets:

- Project list with LOAD, DEL, DONE.
- Save As sheet with name field, CANCEL, SAVE AS.
- New-project confirmation.
- Delete-project confirmation.


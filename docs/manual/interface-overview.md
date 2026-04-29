# Interface Overview

GrimoHex uses one main adaptive screen. Portrait layout stacks the main controls vertically. Landscape layout places pages and performance controls side by side, and on wider screens shows an expanded context panel.

## Main Areas

| Area | Purpose |
|---|---|
| Top bar | App menu, pattern, tempo, swing, length, chain, clipboard, playback state |
| Transport bar | Stop, play/pause, record arm, grid/live/step/mute/keys modes |
| Page selector | Track pages and global pages |
| Parameter page | Encoders, waveform, song rows, or settings depending on selected page |
| Lower performance panel | Track pads, step grid, or chromatic/slice keys |
| Context panel | Step actions and secondary summaries in wide landscape layouts |

## Top Bar

The top bar shows live project and transport status:

- **Menu** opens project, settings, and transport shortcuts.
- **PATTERN** opens pattern selection and pattern actions.
- **TEMPO** opens the BPM editor.
- **SWING** opens the swing editor.
- **LEN** opens the pattern length editor.
- **CHAIN** opens quick chain presets.
- **CLIP** shows the current clipboard scope: step, track, pattern, or empty.
- **STATE** shows stopped, playing, record armed, or play plus record.

## Transport Bar

The transport bar contains:

- Stop.
- Play or pause.
- **REC** arm/disarm.
- **GRID** for step grid recording.
- **LIVE** for live record mode.
- **STEP** for step-advance recording.
- **MUTE** for track mute mode.
- **KEYS** for chromatic or slice-key performance mode.

## Page Selector

Track pages are shown for the selected audio or MIDI track:

- **STEP**
- **SOURCE** or **NOTE**
- **FILTER** or **CC**
- **LEVEL** or **MOD**
- **MOTION**

Global pages are always available:

- **FX**
- **MIX**
- **SAMPLE**
- **SONG**

The model also defines a **SET** page. The app menu exposes settings directly, and the page enum supports settings, but the current global page selector shows FX, MIX, SAMPLE, and SONG.

## Performance Panel

The lower panel changes by mode:

- Track-pad mode: 16 pads for T1-T8 and M1-M8.
- Step-edit mode: 16 visible steps for the selected track.
- Chromatic mode: 16 note keys for the selected track.
- Slice-key mode: when an audio track uses the Slice machine in KEYS mode, the 16 keys trigger slices instead of chromatic notes.
- Mute mode: tapping pads toggles mutes instead of triggering tracks.

## Step Actions

Long-press a step in the step grid to open step actions. Depending on screen size, this appears as a bottom overlay or a landscape side panel.

Available step actions:

- Copy step.
- Paste step.
- Clear step.
- Toggle condition between always and fill.
- Toggle retrig.
- Long-press or open retrig rate choices.
- Set or clear step playback mode.


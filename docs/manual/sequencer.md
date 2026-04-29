# Sequencer

GrimoHex's sequencer is a 16-track step sequencer with 384 PPQN timing resolution. The visible grid shows 16 steps at a time, while patterns can be up to 64 steps long.

## Step Editing

In GRID mode:

- Tap a step to enable or disable it.
- Enabled steps fire the selected track on playback.
- The selected step drives parameter lock editing.
- Long-press a step to open step actions.

In STEP mode:

- Tapping a step enables it.
- The selected step advances to the next step.
- The visible page follows the selected step.

In LIVE mode:

- Track pad or key input can be recorded while the sequencer is playing.
- Events are quantized to the current sequencer step.

## Step Indicators

Step cells can display markers:

| Marker | Meaning |
|---|---|
| L | Parameter lock or sound lock |
| C | Conditional trig |
| R | Retrig enabled |
| `<` or `>` | Negative or positive microtiming |

Beat divisions are visually marked every four steps.

## Parameter Locks

A parameter lock overrides a track parameter for one step only. Locks are stored sparsely on the step, then baked into a dense parameter snapshot when the sequencer triggers the event.

Dedicated step fields behave differently from normal locks:

- Velocity is stored on the step.
- Length is stored on the step.
- Probability/condition is stored on the step.
- Microtiming is stored on the step.
- Retrig rate and length are stored on the step.

Other parameter edits can be written as locks when editing a selected or held step.

## Conditions

The model and sequencer support these conditional trig types:

- Always.
- Probability.
- Fill.
- Not fill.
- First pass.
- Not first pass.
- Previous conditional trig.
- Not previous conditional trig.
- Neighbor/previous trig on track.
- Not neighbor.
- Ratio, such as 1:2.

The current step actions UI exposes a simple condition toggle between always and fill. Probability is exposed on the STEP parameter page. The other condition types exist in the model and sequencer but do not currently have full picker UI.

## Microtiming

Microtiming offsets a step by -23 to +23 ticks at 384 PPQN. In the UI, the STEP page shows this as a centered value.

## Retrig

Retrig repeats an audio step inside its retrig window. Available rates are:

`1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80`

The step actions panel toggles retrig with an audible default rate of 1/32. The retrig bottom sheet lets you choose a rate or turn retrig off.

## Playback Mode Locks

Audio steps can lock playback mode:

- Forward.
- Reverse.
- Forward loop.
- Reverse loop.

The playback mode bottom sheet can set the step to a specific mode or return it to the track default.


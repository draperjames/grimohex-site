# Effects

GrimoHex has global send effects and a master compressor.

## Delay

The stereo delay is tempo-synced and supports:

- Delay time.
- Feedback.
- Wet level.
- Stereo width.
- Ping-pong flag.
- High-pass filtering in the feedback path.
- Low-pass filtering in the feedback path.

The FX page currently exposes delay time, feedback, and delay level. Other delay state fields exist in the model and DSP but do not currently have dedicated main UI controls.

Delay time maps to note divisions:

- 1/128
- 1/64
- 1/32
- 1/16
- 1/8
- 1/4
- 1/2
- 1/1

## Reverb

The reverb is a Schroeder-style design with:

- Pre-delay.
- Decay.
- High-pass tone control.
- Low-pass tone control.
- Wet level.

The FX page currently exposes reverb level and reverb decay. Reverb shelf parameters exist in the model but are not used by the current DSP code.

## Master Compressor

The compressor is a feed-forward VCA-style compressor with RMS detection and soft knee behavior.

Available state:

- Threshold.
- Attack.
- Release.
- Makeup gain.
- Ratio.
- Sidechain value in the model.

The FX page currently exposes threshold, attack, and release. Makeup, ratio, and sidechain are present in state or DSP but do not currently have dedicated UI controls.

## Sends

Audio track LEVEL pages expose:

- Delay send.
- Reverb send.

The render engine mixes per-voice delay and reverb sends into global delay and reverb buses.


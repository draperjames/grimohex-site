# Transport and Patterns

## Transport

GrimoHex has a simple transport:

- **Stop** stops the sequencer, sends all MIDI notes off, clears the playhead, and returns record-armed operation to step mode.
- **Play/Pause** starts or pauses pattern playback.
- **REC** toggles record arm. When armed from idle, it enters grid record mode.

When playback starts, GrimoHex ensures the audio engine is running before starting the sequencer.

## Tempo

Patterns store their own BPM. The UI clamps tempo to 30.0-300.0 BPM. Delay time and MIDI note-off timing use the active BPM.

## Swing

Swing is stored per pattern and ranges from 50-80. A value of 50 is straight timing. Values above 50 delay odd-numbered 16th-note steps.

## Pattern Length

Pattern master length ranges from 1-64 steps. The step grid shows 16 steps at a time and adds page indicators for longer patterns.

## Banks and Patterns

A project contains:

- 8 banks: A-H.
- 16 patterns per bank.
- 128 total patterns.

Pattern labels use bank plus slot, such as `A01`, `A16`, or `B01`.

## Pattern Actions

The pattern editor supports:

- Select bank and slot.
- Previous or next pattern.
- Copy current pattern.
- Paste copied pattern into current slot.
- Clear/init current pattern while preserving tempo, swing, length, scale mode, track sounds, levels, track lengths, and MIDI channels.
- Duplicate current pattern to the next pattern slot and select it.

## Pattern Chain

The chain editor currently provides quick presets:

- **OFF** clears the chain.
- **NEXT** chains the current pattern and next pattern once each.
- **DOUBLE** chains the current pattern once and the next pattern twice.

The sequencer contains chain state, but pattern handoff is still limited: queued pattern and chain advancement are represented internally, while full song/chain playback coordination is not complete in the current UI/engine flow.


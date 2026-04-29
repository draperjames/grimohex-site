# FAQ

## How many tracks does GrimoHex have?

Each pattern has 16 tracks: 8 audio tracks and 8 MIDI tracks.

## How many patterns are in a project?

A project has 128 patterns: 8 banks with 16 patterns per bank.

## What is the maximum pattern length?

64 steps.

## Does GrimoHex include factory samples?

Yes. The repository includes nine bundled WAV samples, and the default project assigns an eight-track kit to T1-T8.

## Can I import my own samples?

Yes. The Sound Browser uses the iOS file importer and supports common audio file types including WAV, AIFF, MP3, M4A, CAF, and FLAC.

## Can I record samples?

Yes. Current recording supports microphone input and USB input when available. Internal main-bus and per-track recording sources are planned but not implemented.

## Does GrimoHex support slicing?

Yes. Slice mode supports equal slicing and transient-based auto slicing up to 64 slices per sample.

## Does GrimoHex have parameter locks?

Yes. Step parameter locks are implemented and visible in the UI. Step fields such as velocity, length, condition, microtiming, and retrig are stored directly on the step.

## Does GrimoHex support MIDI?

Yes. MIDI tracks send notes through a CoreMIDI virtual output called GrimoHex Out. A virtual input called GrimoHex In exists for incoming clock and notes, but full external-sync workflow is not currently exposed.

## Does GrimoHex run in the background?

The app declares the iOS audio background mode. Background behavior should be verified on target devices as part of release testing.


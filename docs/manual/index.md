# GrimoHex Documentation

GrimoHex is an iOS/iPadOS sampler, beat machine, and sequencer built around a hardware-style, touch-first workflow. The current app combines eight audio tracks, eight MIDI tracks, a 64-step sequencer, sample playback and recording, parameter locks, global effects, project persistence, and performance-focused pad modes.

This documentation set is generated from the current codebase. It describes what exists now, what is partially implemented, and what is present in the model or engine but not yet fully exposed in the user interface.

## Start Here

- [Quick Start](quick-start.md): make a first beat, load or record a sample, and save a project.
- [Interface Overview](interface-overview.md): learn the main screen, top bar, transport, pages, and pad grid.
- [UI Reference](ui-reference.md): inventory of current screens, controls, sheets, and gestures.
- [Feature Reference](feature-reference.md): implementation status by feature.
- [Troubleshooting](troubleshooting.md): fix common audio, sample, recording, project, and MIDI issues.
- [Known Limitations](known-limitations.md): current gaps and partially implemented features.

## Core Reference

- [Transport and Patterns](transport-and-patterns.md)
- [UI Reference](ui-reference.md)
- [Feature Reference](feature-reference.md)
- [Tracks and Pads](tracks-and-pads.md)
- [Sequencer](sequencer.md)
- [Parameter Pages](parameter-pages.md)
- [Sampler](sampler.md)
- [Sample Recording](sample-recording.md)
- [Sample Slicing](sample-slicing.md)
- [MIDI](midi.md)
- [Effects](effects.md)
- [Mixer and Buses](mixer-and-buses.md)
- [Settings](settings.md)
- [Files and Projects](files-and-projects.md)

## Support and Compliance

- [FAQ](faq.md)
- [Privacy](privacy.md)
- [Support](support.md)
- [Known Limitations](known-limitations.md)

## Current Product Shape

GrimoHex projects contain 8 banks with 16 patterns each, for 128 total patterns. Each pattern contains 8 audio tracks and 8 MIDI tracks. Patterns can be up to 64 steps long. Audio tracks use one voice per track and can load bundled, imported, or recorded samples. MIDI tracks send note events through the app's virtual CoreMIDI output.

The app starts with a factory audio kit assigned to the eight audio tracks: kick, snare, hat, clap, cowbell, snare, hat, and clap. Additional bundled one-shot samples are available in the sample browser.

# Privacy

This page describes the privacy-relevant behavior present in the current GrimoHex codebase.

## Microphone

GrimoHex requests microphone access for sample recording. The app's microphone usage string is:

> GrimoHex uses the microphone for sampling external audio.

Microphone audio is captured only while using Sample Record. Recorded samples are saved locally into the app's sample library when the user chooses to save them.

## Local Files

When importing a sample, GrimoHex uses the iOS file picker. The selected file is copied into the app's local sample directory.

## Projects and Samples

Projects and samples are stored locally in the app's Application Support directory.

The current codebase does not implement:

- User accounts.
- Analytics.
- Advertising.
- Server upload.
- Cloud sync.
- Push notifications.
- In-app purchases.

## MIDI

GrimoHex creates local CoreMIDI virtual input and output endpoints. MIDI events are exchanged with other MIDI-capable apps or devices through iOS MIDI services. The current code does not send MIDI data to a network service.


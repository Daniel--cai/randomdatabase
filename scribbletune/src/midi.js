'use strict';

const fs = require('fs');
const assert = require('assert');
const jsmidgen = require('jsmidgen');

/**
 * Take an array of note objects to generate a MIDI file in the same location as this method is called
 * @param  {Array} notes    Notes are in the format: {note: 'c3', level: 127, length: 64}
 * @param  {String} fileName If a filename is not provided, then `music.mid` is used by default
 */
const midi = (notes, fileName, tempo=100) => {
	assert(notes !== undefined && typeof notes !== 'string', 'You must provide an array of notes to write!');
	fileName = fileName || 'music.mid';
	let file = new jsmidgen.File();
	let track = new jsmidgen.Track();
	file.addTrack(track);
	track.setTempo(tempo);

	notes.forEach((noteObj) => {
		
		let level = noteObj.level || 127;
		// While writing chords (multiple notes per tick)
		// only the first noteOn (or noteOff) needs the complete arity of the function call
		// subsequent calls need only the first 2 args (channel and note)
		if (noteObj.note) {
			if (typeof noteObj.note === 'string') {
				track.noteOn(1, noteObj.note, noteObj.length, level); // channel, pitch(note), length, velocity
				track.noteOff(1, noteObj.note, noteObj.length, level);
				console.log(noteObj.note)
			} else {
				track.addChord(0, noteObj.note, noteObj.length, level);
			}
					
		} else {
			track
				.noteOff(0, '', noteObj.length);
		}
		console.log(noteObj.note)
		console.log("--")
	});

	fs.writeFileSync(fileName, file.toBytes(), 'binary');
}

module.exports = midi;

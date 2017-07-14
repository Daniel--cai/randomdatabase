const fs = require('fs');
const Midi = require('jsmidgen');

const file = new Midi.File();
const track = new Midi.Track()

track.c = function(note,length){
  if (typeof(note) === 'string'){
    this.note(0,note,length)
  } else {
    this.addChord(0, note, length)
  }
  return this
}

track.n = function(note,length){
  if (typeof(note) === 'string'){
    this.note(1,note,length)
  } else {
    this.addChord(1, note, length)
  }
  return this
}

const SEMIBREVE = 512
const MINIM = 256
const CROTCHET = 128////<-
const QUAVER = 64 
const SEMIQUAVER = 32
const DEMISEMIQUAVER = 16


file.addTrack(track);
track.setTempo(89)
track/*
    .c('d4', 16)
    .c('f#4', 16)
    .c('b4', 16)
    .c('d5',16)
    .c('c#5', 16)
    .c('b4', 16)
    .c('a#4', 16)
    .c('b4', 192)

    .c('b4',16)
    .c('c#5',16)
    .c('d5',64)
    .c('e5',64)
    .c('f#5',64)
    .c('d5',64)
    .c('f#5',64)
    .c('d5',64)
    .c('f#5',64)
    .c('d5',64)
    
    //d5', 'f#4','c#5','f#4','b4','b2'
    .c('f#5',128)
*/
    .c('f#4',32)
    .c('d5',128)
    .c('f#4',32)
    .c('c#5',128)
    .c('f#4',32)
    .c(['b4','b2'],64)
    .c('f#3',64)
    .c('b2',64)
    .c('f#3',64)

  

fs.writeFileSync('test2.mid', file.toBytes(), 'binary');
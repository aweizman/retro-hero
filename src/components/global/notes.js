const NOTES = [
    'B2','C3','C_3','D3','D_3',
    'E3','F3','F_3','G3',
    'G_3','A3','A_3','B3',
    'C4','C_4','D4','D_4',
    'E4','F4','F_4','G4',
    'G_4','A4','A_4','B4',
    'C5','C_5','D5','D_5',
    'E5', 'F5'
];

const KEY_TO_NOTE = {
    f: 'B3',   
    d: 'A3',    r: 'A_3', 
    s: 'G3',    e: 'G_3',
    a: 'F3',    w: 'F_3',
    g: 'C4',    y: 'C_4',
    h: 'D4',    u: 'D_4',
    j: 'E4',
    k: 'F4',    o: 'F_4',
    l: 'G4',    p: 'G_4',
    
};

const NOTE_TO_KEY = {
    B3: 'f',
    A3: 'd',    A_3: 'r',
    G3: 's',    G_3: 'e',
    F3: 'a',    F_3: 'w',
    C4: 'g',    C_4: 'y',
    D4: 'h',    D_4: 'u',
    E4: 'j',
    F4: 'k',    F_4: 'o',
    G4: 'l',    G_4: 'p'

};

export { NOTES, KEY_TO_NOTE, NOTE_TO_KEY }
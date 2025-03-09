export const links = [
    { source: 'fdp', target: 'spd', value: 120 },
    { source: 'nic', target: 'spd', value: 250 },
    { source: 'gru', target: 'uni', value: 460 },
    { source: 'nic', target: 'uni', value: 900 },
    { source: 'fdp', target: 'uni', value: 1350 },
    { source: 'spd', target: 'uni', value: 1760 },
    { source: 'fdp', target: 'gru', value: 100 },
    { source: 'nic', target: 'gru', value: 110 },
    { source: 'spd', target: 'gru', value: 140 },
    { source: 'gru', target: 'afd', value: 100 },
    { source: 'lin', target: 'afd', value: 110 },
    { source: 'spd', target: 'afd', value: 720 },
    { source: 'fdp', target: 'afd', value: 890 },
    { source: 'uni', target: 'afd', value: 1010 },
    { source: 'nic', target: 'afd', value: 1810 },
    { source: 'uni', target: 'lin', value: 70 },
    { source: 'fdp', target: 'lin', value: 100 },
    { source: 'nic', target: 'lin', value: 290 },
    { source: 'spd', target: 'lin', value: 560 },
    { source: 'gru', target: 'lin', value: 700 },
    { source: 'afd', target: 'bsw', value: 60 },
    { source: 'gru', target: 'bsw', value: 150 },
    { source: 'uni', target: 'bsw', value: 220 },
    { source: 'fdp', target: 'bsw', value: 260 },
    { source: 'lin', target: 'bsw', value: 350 },
    { source: 'nic', target: 'bsw', value: 400 },
    { source: 'spd', target: 'bsw', value: 440 }
];


export const nodes = [
    { id: 'spd', name: 'SPD', color: '#d71f1d' },
    { id: 'uni', name: 'Union', color: '#121212' },
    { id: 'gru', name: 'Grüne', color: '#78bc1b' },
    { id: 'fdp', name: 'FDP', color: '#ffcc00' },
    { id: 'afd', name: 'AfD', color: '#009de0' },
    { id: 'lin', name: 'Linke', color: '#bd3075' },
    { id: 'bsw', name: 'BSW', color: '#691940' },
    { id: 'nic', name: 'Nichtwähler', color: '#707173' }
];

export interface Party {
    short: string;
    
}
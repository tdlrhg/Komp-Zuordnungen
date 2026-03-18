var aufgabenPool_1_6 = [
  {
    format: 'mc',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180" width="300" height="180" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <rect x="40" y="50" width="220" height="100" rx="18" fill="#f0f0f0" stroke="#333" stroke-width="2"/>
  <polygon points="65,12 95,12 80,50" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
  <line x1="65" y1="12" x2="95" y2="12" stroke="#333" stroke-width="2"/>
  <rect x="75" y="48" width="10" height="5" fill="#f0f0f0" stroke="#333" stroke-width="1"/>
  <rect x="260" y="118" width="32" height="14" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="277" y="128" width="14" height="24" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="275" y="118" width="16" height="16" rx="2" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <text x="80" y="7" text-anchor="middle" font-size="13" font-weight="bold" fill="#3b5bdb" font-family="Arial">2</text>
  <text x="80" y="22" text-anchor="middle" font-size="11" fill="#3b5bdb" font-family="Arial">↓</text>
  <text x="150" y="95" text-anchor="middle" font-size="11" fill="#888" font-family="Arial">Rechenregel: ?</text>
  <text x="64" y="75" text-anchor="middle" font-size="11" fill="#3b5bdb" font-family="Arial">2→6</text>
  <text x="64" y="92" text-anchor="middle" font-size="11" fill="#e67700" font-family="Arial">5→15</text>
  <text x="64" y="109" text-anchor="middle" font-size="11" fill="#2f9e44" font-family="Arial">8→24</text>
  <text x="284" y="162" text-anchor="middle" font-size="13" font-weight="bold" fill="#333" font-family="Arial">?</text>
</svg>`,
    frage: 'Welche Rechenregel wendet die Maschine an?',
    optionen: ['· 3', '+ 4', '· 2 + 2', '· 3 + 1'],
    richtig: 0,
    erklaerung: '2·3=6, 5·3=15, 8·3=24 – die Maschine multipliziert mit 3.'
  },
  {
    format: 'mc',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180" width="300" height="180" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <rect x="40" y="50" width="220" height="100" rx="18" fill="#f0f0f0" stroke="#333" stroke-width="2"/>
  <polygon points="65,12 95,12 80,50" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
  <line x1="65" y1="12" x2="95" y2="12" stroke="#333" stroke-width="2"/>
  <rect x="75" y="48" width="10" height="5" fill="#f0f0f0" stroke="#333" stroke-width="1"/>
  <rect x="260" y="118" width="32" height="14" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="277" y="128" width="14" height="24" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="275" y="118" width="16" height="16" rx="2" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <text x="150" y="95" text-anchor="middle" font-size="11" fill="#888" font-family="Arial">Rechenregel: ?</text>
  <text x="64" y="75" text-anchor="middle" font-size="11" fill="#3b5bdb" font-family="Arial">3→8</text>
  <text x="64" y="92" text-anchor="middle" font-size="11" fill="#e67700" font-family="Arial">6→11</text>
  <text x="64" y="109" text-anchor="middle" font-size="11" fill="#2f9e44" font-family="Arial">10→15</text>
</svg>`,
    frage: 'Welche Rechenregel wendet die Maschine an?',
    optionen: ['+ 5', '· 2', '+ 4', '· 2 + 2'],
    richtig: 0,
    erklaerung: '3+5=8, 6+5=11, 10+5=15 – die Maschine addiert 5.'
  },
  {
    format: 'mc',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180" width="300" height="180" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <rect x="40" y="50" width="220" height="100" rx="18" fill="#f0f0f0" stroke="#333" stroke-width="2"/>
  <polygon points="65,12 95,12 80,50" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
  <line x1="65" y1="12" x2="95" y2="12" stroke="#333" stroke-width="2"/>
  <rect x="75" y="48" width="10" height="5" fill="#f0f0f0" stroke="#333" stroke-width="1"/>
  <rect x="260" y="118" width="32" height="14" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="277" y="128" width="14" height="24" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="275" y="118" width="16" height="16" rx="2" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <text x="80" y="7" text-anchor="middle" font-size="13" font-weight="bold" fill="#3b5bdb" font-family="Arial">3</text>
  <text x="80" y="22" text-anchor="middle" font-size="11" fill="#3b5bdb" font-family="Arial">↓</text>
  <text x="150" y="88" text-anchor="middle" font-size="16" font-weight="bold" fill="#333" font-family="Arial">· 4</text>
  <text x="64" y="75" text-anchor="middle" font-size="11" fill="#3b5bdb" font-family="Arial">5→20</text>
  <text x="64" y="92" text-anchor="middle" font-size="11" fill="#e67700" font-family="Arial">9→36</text>
  <text x="284" y="162" text-anchor="middle" font-size="13" font-weight="bold" fill="#2f9e44" font-family="Arial">?</text>
</svg>`,
    frage: 'Was gibt die Maschine aus, wenn 7 eingegeben wird?',
    optionen: ['28', '11', '21', '47'],
    richtig: 0,
    erklaerung: '7 · 4 = 28.'
  },
  {
    format: 'mc',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180" width="300" height="180" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <rect x="40" y="50" width="220" height="100" rx="18" fill="#f0f0f0" stroke="#333" stroke-width="2"/>
  <polygon points="65,12 95,12 80,50" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
  <line x1="65" y1="12" x2="95" y2="12" stroke="#333" stroke-width="2"/>
  <rect x="75" y="48" width="10" height="5" fill="#f0f0f0" stroke="#333" stroke-width="1"/>
  <rect x="260" y="118" width="32" height="14" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="277" y="128" width="14" height="24" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="275" y="118" width="16" height="16" rx="2" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <text x="80" y="7" text-anchor="middle" font-size="13" font-weight="bold" fill="#3b5bdb" font-family="Arial">13</text>
  <text x="80" y="22" text-anchor="middle" font-size="11" fill="#3b5bdb" font-family="Arial">↓</text>
  <text x="150" y="88" text-anchor="middle" font-size="16" font-weight="bold" fill="#333" font-family="Arial">+ 6</text>
  <text x="64" y="75" text-anchor="middle" font-size="11" fill="#3b5bdb" font-family="Arial">4→10</text>
  <text x="64" y="92" text-anchor="middle" font-size="11" fill="#e67700" font-family="Arial">9→15</text>
  <text x="284" y="162" text-anchor="middle" font-size="13" font-weight="bold" fill="#2f9e44" font-family="Arial">?</text>
</svg>`,
    frage: 'Was gibt die Maschine aus, wenn 13 eingegeben wird?',
    optionen: ['19', '78', '7', '20'],
    richtig: 0,
    erklaerung: '13 + 6 = 19.'
  },
  {
    format: 'mc',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180" width="300" height="180" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <rect x="40" y="50" width="220" height="100" rx="18" fill="#f0f0f0" stroke="#333" stroke-width="2"/>
  <polygon points="65,12 95,12 80,50" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
  <line x1="65" y1="12" x2="95" y2="12" stroke="#333" stroke-width="2"/>
  <rect x="75" y="48" width="10" height="5" fill="#f0f0f0" stroke="#333" stroke-width="1"/>
  <rect x="260" y="118" width="32" height="14" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="277" y="128" width="14" height="24" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="275" y="118" width="16" height="16" rx="2" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <text x="80" y="7" text-anchor="middle" font-size="13" font-weight="bold" fill="#3b5bdb" font-family="Arial">?</text>
  <text x="80" y="22" text-anchor="middle" font-size="11" fill="#3b5bdb" font-family="Arial">↓</text>
  <text x="150" y="88" text-anchor="middle" font-size="16" font-weight="bold" fill="#333" font-family="Arial">· 5</text>
  <text x="64" y="75" text-anchor="middle" font-size="11" fill="#3b5bdb" font-family="Arial">2→10</text>
  <text x="64" y="92" text-anchor="middle" font-size="11" fill="#e67700" font-family="Arial">5→25</text>
  <text x="284" y="162" text-anchor="middle" font-size="13" font-weight="bold" fill="#2f9e44" font-family="Arial">35</text>
</svg>`,
    frage: 'Welche Zahl wurde eingegeben, wenn 35 herauskommt?',
    optionen: ['7', '30', '175', '6'],
    richtig: 0,
    erklaerung: '35 : 5 = 7. Man dreht die Rechenregel um.'
  },
  {
    format: 'mc',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180" width="300" height="180" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <rect x="40" y="50" width="220" height="100" rx="18" fill="#f0f0f0" stroke="#333" stroke-width="2"/>
  <polygon points="65,12 95,12 80,50" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
  <line x1="65" y1="12" x2="95" y2="12" stroke="#333" stroke-width="2"/>
  <rect x="75" y="48" width="10" height="5" fill="#f0f0f0" stroke="#333" stroke-width="1"/>
  <rect x="260" y="118" width="32" height="14" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="277" y="128" width="14" height="24" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="275" y="118" width="16" height="16" rx="2" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <text x="80" y="7" text-anchor="middle" font-size="13" font-weight="bold" fill="#3b5bdb" font-family="Arial">?</text>
  <text x="80" y="22" text-anchor="middle" font-size="11" fill="#3b5bdb" font-family="Arial">↓</text>
  <text x="150" y="88" text-anchor="middle" font-size="16" font-weight="bold" fill="#333" font-family="Arial">– 3</text>
  <text x="64" y="75" text-anchor="middle" font-size="11" fill="#3b5bdb" font-family="Arial">5→2</text>
  <text x="64" y="92" text-anchor="middle" font-size="11" fill="#e67700" font-family="Arial">9→6</text>
  <text x="284" y="162" text-anchor="middle" font-size="13" font-weight="bold" fill="#2f9e44" font-family="Arial">4</text>
</svg>`,
    frage: 'Welche Zahl wurde eingegeben, wenn 4 herauskommt?',
    optionen: ['7', '1', '12', '4'],
    richtig: 0,
    erklaerung: '4 + 3 = 7. Man dreht die Rechenregel um: statt –3 rechnet man +3.'
  },
  {
    format: 'mc',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180" width="300" height="180" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <rect x="40" y="50" width="220" height="100" rx="18" fill="#f0f0f0" stroke="#333" stroke-width="2"/>
  <polygon points="65,12 95,12 80,50" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
  <line x1="65" y1="12" x2="95" y2="12" stroke="#333" stroke-width="2"/>
  <rect x="75" y="48" width="10" height="5" fill="#f0f0f0" stroke="#333" stroke-width="1"/>
  <rect x="260" y="118" width="32" height="14" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="277" y="128" width="14" height="24" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="275" y="118" width="16" height="16" rx="2" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <text x="80" y="7" text-anchor="middle" font-size="13" font-weight="bold" fill="#3b5bdb" font-family="Arial">5</text>
  <text x="80" y="22" text-anchor="middle" font-size="11" fill="#3b5bdb" font-family="Arial">↓</text>
  <text x="150" y="88" text-anchor="middle" font-size="16" font-weight="bold" fill="#333" font-family="Arial">· 3</text>
  <text x="284" y="162" text-anchor="middle" font-size="13" font-weight="bold" fill="#2f9e44" font-family="Arial">15</text>
  <rect x="58" y="8" width="44" height="20" rx="4" fill="none" stroke="#3b5bdb" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="80" y="4" text-anchor="middle" font-size="9" fill="#3b5bdb" font-family="Arial">▼ hier</text>
</svg>`,
    frage: 'Wie nennt man den Wert, der oben in die Maschine eingegeben wird?',
    optionen: ['Ausgangsgröße', 'zugeordnete Größe', 'Rechenregel', 'Ausgabewert'],
    richtig: 0,
    erklaerung: 'Der eingegeben Wert ist die Ausgangsgröße – von ihr hängt das Ergebnis ab.'
  },
  {
    format: 'mc',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180" width="300" height="180" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <rect x="40" y="50" width="220" height="100" rx="18" fill="#f0f0f0" stroke="#333" stroke-width="2"/>
  <polygon points="65,12 95,12 80,50" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
  <line x1="65" y1="12" x2="95" y2="12" stroke="#333" stroke-width="2"/>
  <rect x="75" y="48" width="10" height="5" fill="#f0f0f0" stroke="#333" stroke-width="1"/>
  <rect x="260" y="118" width="32" height="14" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="277" y="128" width="14" height="24" rx="3" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <rect x="275" y="118" width="16" height="16" rx="2" fill="#bbb" stroke="#888" stroke-width="1.5"/>
  <text x="80" y="7" text-anchor="middle" font-size="13" font-weight="bold" fill="#3b5bdb" font-family="Arial">5</text>
  <text x="80" y="22" text-anchor="middle" font-size="11" fill="#3b5bdb" font-family="Arial">↓</text>
  <text x="150" y="88" text-anchor="middle" font-size="16" font-weight="bold" fill="#333" font-family="Arial">· 3</text>
  <text x="284" y="162" text-anchor="middle" font-size="13" font-weight="bold" fill="#2f9e44" font-family="Arial">15</text>
  <rect x="268" y="148" width="36" height="20" rx="4" fill="none" stroke="#2f9e44" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="286" y="144" text-anchor="middle" font-size="9" fill="#2f9e44" font-family="Arial">▼ hier</text>
</svg>`,
    frage: 'Wie nennt man den Wert, der unten aus der Maschine herauskommt?',
    optionen: ['zugeordnete Größe', 'Ausgangsgröße', 'Proportionalitätsfaktor', 'Rechenregel'],
    richtig: 0,
    erklaerung: 'Der ausgegebene Wert ist die zugeordnete Größe – er ergibt sich aus der Ausgangsgröße.'
  }
];

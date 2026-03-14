var aufgabenPool_1_6 = [
  {
    format: 'mc',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 170" width="230" height="170" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <line x1="30" y1="145" x2="195" y2="145" stroke="#333" stroke-width="1.5"/>
  <line x1="30" y1="145" x2="30" y2="15" stroke="#333" stroke-width="1.5"/>
  <polygon points="195,140 202,145 195,150" fill="#333"/>
  <polygon points="25,15 30,8 35,15" fill="#333"/>
  <text x="205" y="149" font-size="10" fill="#333" font-family="Arial">Anzahl</text>
  <text x="2" y="12" font-size="10" fill="#333" font-family="Arial">Preis</text>
  <polyline points="30,145 60,125 90,105 120,85 150,65 180,45" fill="none" stroke="#3b5bdb" stroke-width="2"/>
</svg>`,
    frage: 'Welche Situation passt zu diesem Diagramm?',
    optionen: [
      'Im Supermarkt kostet jedes Brötchen gleich viel.',
      'Der Preis eines Handys sinkt, je mehr Geräte verkauft werden.',
      'Ein Schwimmbad kostet 3 Euro Eintritt, jede weitere Stunde kostet 2 Euro extra.',
      'Beim Flohmarkt schwanken die Preise je nach Angebot.',
      'Ein Händler kauft erst ab einer Mindestbestellmenge von 10 Stück ein.'
    ],
    richtig: 0,
    erklaerung: 'Der Graph steigt gleichmäßig durch den Ursprung – das passt zu einer Situation, bei der jedes Stück gleich viel kostet und der Preis proportional zur Anzahl steigt.'
  },
  {
    format: 'mc',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 170" width="230" height="170" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <line x1="30" y1="145" x2="195" y2="145" stroke="#333" stroke-width="1.5"/>
  <line x1="30" y1="145" x2="30" y2="15" stroke="#333" stroke-width="1.5"/>
  <polygon points="195,140 202,145 195,150" fill="#333"/>
  <polygon points="25,15 30,8 35,15" fill="#333"/>
  <text x="205" y="149" font-size="10" fill="#333" font-family="Arial">Zeit</text>
  <text x="2" y="12" font-size="10" fill="#333" font-family="Arial">Temperatur</text>
  <polyline points="30,120 55,95 80,55 105,90 130,45 155,75 180,50" fill="none" stroke="#3b5bdb" stroke-width="2"/>
</svg>`,
    frage: 'Welche Situation passt zu diesem Diagramm?',
    optionen: [
      'Die Außentemperatur wird über eine Woche gemessen.',
      'Ein Ofen wird aufgeheizt.',
      'Wasser kühlt nach dem Kochen ab.',
      'Ein Mensch läuft und wird dabei wärmer.',
      'Die Körpertemperatur eines gesunden Menschen wird gemessen.'
    ],
    richtig: 0,
    erklaerung: 'Der Graph schwankt unregelmäßig – das passt zu einer Außentemperatur, die über mehrere Tage mal steigt, mal sinkt.'
  },
  {
    format: 'mc',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 170" width="230" height="170" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <line x1="30" y1="145" x2="195" y2="145" stroke="#333" stroke-width="1.5"/>
  <line x1="30" y1="145" x2="30" y2="15" stroke="#333" stroke-width="1.5"/>
  <polygon points="195,140 202,145 195,150" fill="#333"/>
  <polygon points="25,15 30,8 35,15" fill="#333"/>
  <text x="205" y="149" font-size="10" fill="#333" font-family="Arial">Anzahl</text>
  <text x="2" y="12" font-size="10" fill="#333" font-family="Arial">Gewicht</text>
  <polyline points="30,105 60,93 90,81 120,69 150,57 180,45" fill="none" stroke="#3b5bdb" stroke-width="2"/>
  <circle cx="30" cy="105" r="3" fill="#3b5bdb"/>
</svg>`,
    frage: 'Welche Situation passt zu diesem Diagramm?',
    optionen: [
      'Auf einem Erdbeerfeld kostet das Körbchen 1 Euro und jedes Kilo Erdbeeren 5,60 Euro.',
      'Äpfel werden gewogen: Je mehr Äpfel, desto schwerer.',
      'Je mehr Bücher man kauft, desto mehr zahlt man.',
      'Eine Waage zeigt das Gewicht von Mehlportionen.',
      'Beim Abnehmen verliert man pro Woche unterschiedlich viel.'
    ],
    richtig: 0,
    erklaerung: 'Der Graph steigt gleichmäßig, beginnt aber nicht im Ursprung – das passt zu einer Situation mit einer Grundgebühr, zu der gleichmäßig mehr dazukommt.'
  },
  {
    format: 'mc',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 170" width="230" height="170" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <line x1="30" y1="145" x2="195" y2="145" stroke="#333" stroke-width="1.5"/>
  <line x1="30" y1="145" x2="30" y2="15" stroke="#333" stroke-width="1.5"/>
  <polygon points="195,140 202,145 195,150" fill="#333"/>
  <polygon points="25,15 30,8 35,15" fill="#333"/>
  <text x="205" y="149" font-size="10" fill="#333" font-family="Arial">Preis</text>
  <text x="2" y="12" font-size="10" fill="#333" font-family="Arial">Anzahl</text>
  <polyline points="30,25 60,45 90,70 120,95 150,115 180,135" fill="none" stroke="#3b5bdb" stroke-width="2"/>
</svg>`,
    frage: 'Welche Situation passt zu diesem Diagramm?',
    optionen: [
      'Je teurer ein Produkt ist, desto weniger Kunden kaufen es.',
      'Ein Händler senkt den Preis, wenn er zu viel Ware hat.',
      'Teure Produkte sind bei Sammlern besonders begehrt.',
      'Der Preis eines Produkts bleibt konstant, egal wie viele gekauft werden.',
      'Je mehr von einem Produkt produziert wird, desto günstiger wird es.'
    ],
    richtig: 0,
    erklaerung: 'Der Graph sinkt – bei steigendem Preis auf der x-Achse sinkt die Anzahl der Käufer auf der y-Achse.'
  },
  {
    format: 'mc',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 170" width="230" height="170" style="border:1px solid #ccc;border-radius:4px;background:#fff;display:block;margin:8px auto;">
  <line x1="30" y1="145" x2="195" y2="145" stroke="#333" stroke-width="1.5"/>
  <line x1="30" y1="145" x2="30" y2="15" stroke="#333" stroke-width="1.5"/>
  <polygon points="195,140 202,145 195,150" fill="#333"/>
  <polygon points="25,15 30,8 35,15" fill="#333"/>
  <text x="205" y="149" font-size="10" fill="#333" font-family="Arial">Zeit</text>
  <text x="2" y="12" font-size="10" fill="#333" font-family="Arial">Anzahl</text>
  <polyline points="30,125 60,125 90,125 115,120 135,105 155,80 175,45" fill="none" stroke="#3b5bdb" stroke-width="2"/>
</svg>`,
    frage: 'Welche Situation passt zu diesem Diagramm?',
    optionen: [
      'Eine Pflanze wächst zunächst kaum, dann immer schneller.',
      'Ein Baum wächst von Anfang an.',
      'Die Anzahl der Blätter an einem Baum bleibt über Jahre gleich.',
      'Im Winter verliert ein Baum seine Blätter.',
      'Die Anzahl der Früchte hängt von der Jahreszeit ab.'
    ],
    richtig: 0,
    erklaerung: 'Der Graph bleibt zunächst flach und steigt dann immer steiler – das passt zu einer Pflanze, die erst langsam und dann immer schneller wächst.'
  }
];

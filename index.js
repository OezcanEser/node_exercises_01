// console.log("Hello World")
// lev1_1_node.js-import_export

// Aufgabenstellung

// Erstelle dir drei Dateien. In der einen sollen die Funktionen liegen,
// in einer die Daten und in der dritten wollen wir alles zusammen führen.
// Arbeite Schritt für Schritt und teste viel!
// Am Ende soll das ein Array mit Text sortiert werden. Schaue hier nach ;-) 
// Der Inhalt für deine data.js liegt im Kommentarbereich.
// Importiere deine Funktion und die data in deine Hauptdatei.
const datas = require("./datas")
const funcs = require("./functions")

funcs.sortData(datas.arrayNumbers)
funcs.sortData(datas.arrayCars)
console.log(datas)

// lev1_2_node.js-import_export

// Aufgabenstellung
// Erstelle dir eine Datei, in der deine Funktionen gespeichert werden sollen.
// Diese sollen am Ende exportiert werden.
// Erstelle dir eine Datei, in der deine Data gespeichert werden soll.
// Importiere diese Funktionen / Data in deiner main.js
// alle Funktionen bekommen ein Array übergeben.
// Jeder der folgenden Punkte ist eine EIGENE Funktion!

// gib nur das ERSTE Element des Arrays zurück
console.log(funcs.firstEle(datas.arrayCars))

// gib alle AUSSER dem letzten Element des Arrays zurück
console.log(funcs.notLast(datas.arrayCars))

// gib nur das LETZTE Element des Arrays zurück
console.log(funcs.lastEle(datas.arrayCars))

// gib ALLE AUSSER DEM ERSTEN Element des Arrays zurück
console.log(funcs.notFirst(datas.arrayCars))

// gib das Element zurück, das an Position n steht 
// (du brauchst einen zweiten Parameter in deiner Funktion),
// wenn n negativ oder größer als die Länge des Arrays ist
// gib das letzte Element zurück
console.log(funcs.nPosition(datas.arrayCars))

// schreibe eine Funktion,
// die ein bestimmtes Element komplett
// aus deinem Array entfernt
// => Input: ([“remove”, “stay”, “stay5”, 22, true, “remove”], “remove”)
// => Output: [“stay”, “stay5”, 22, true]
console.log(funcs.removeEle(datas.someArray))

// gib ein Array zurück, dass nur aus einzigartigen Werten besteht.
// Entferne die doppelten Elemente!
// => Input: [1,6,9,2,1,6,7,10]
// => Output: [1,6,9,2,7,10]
console.log(funcs.removeDouble(datas.otherArray))

// gib die Summe des Arrays zurück
console.log(funcs.sumArray(datas.otherArray))
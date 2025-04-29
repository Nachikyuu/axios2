# Pokemon API by Claude 3.5

## Allgemeiner Ablauf
Mit einem ausführlichem initialen Prompt, welches sowohl die Aufgabenstellung als auch Ideen zur Umsetzung enthielt, generierte Copilot ein vollständiges Projekt, das allerdings nicht erfolgreich interpretiert werden konnte, da es zu Duplikaten von App.jsx/tsx kam und die erstellten Komponenten ihre Parameter nicht korrekt übergaben. Durch Neubennenung der Duplikate und 2 neue Prompts konnten beide Probleme gelöst werden.
Die dann zwar funktionale aber unansehnliche Seite wurde mit einigen kleineren Prompts neudesignt, wobei zwischenzeitlich das Problem auftrat, dass Copilot mit Weiß auf Weiß schrieb, was aber auch schnell wieder zu lösen war ohne auch nur eine Zeile Code selbst schreiben zu müssen.

## Weitere Detailprobleme

* Code-Generierungsprobleme
An verschiedenen Stellen kam es dazu, dass Copilot erklärenden Text mit in den Code schrieb, der offensichtlich nicht als kommentar gedacht war, sondern das Ende des vorangegangenen Text war, da es mit "Hier der zugehörige Code:" (o.ä.) endete.

* Dependency-Probleme
Beim Neustarten des lokalen Entwicklungsservers stellte sich raus, dass Copilot bei der Generation des Projektes veraltete Versionen der verschiedenen Inhalte von node_modules generiert hatte und diese sogar in package.json und package-lock.json vor konsolenseitiger Korrektur gesichert hatte (npm run dev war ein unbekanntes kommando und bei npm install kamen ca 160 vulnerabilities raus). Dieses Problem ließ sich allerdings durch einfaches Neuaufsetzen des Projektes lösen.

## Fazit
Zusammenfassend lässt sich sagen, dass GitHub Copilot zur generellen Erstellung eines React Projekts durchaus hilfreich sein kann. In diesem Fall war der erste Prompt die ganze Aufgabenstellung mit zusätzlichen Kommentaren und Anweisungen, was trotz der Menge relativ gut umgesetzt wurde. Das generierte Projekt war zunächst nicht ganz stimmig aufgrund der Duplikate, die dann manuell angepasst werden mussten.

Das Generieren des Stylings funktionierte grundsätzlich auch, wobei weißer Text auf weißem Hintergrund eben für das menschliche Auge erschwert lesbar war. Die css Dateien wurden sehr ausführlich im Vergleich zur Komplexität des Projekts generiert.

Copilot hat durch den Eingriff in node_modules aus funktionierendem Code nicht mehr ausführbaren Code gemacht und dies musste dann schließlich manuell behoben werden.

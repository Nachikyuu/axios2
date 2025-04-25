# Pokemon API by Claude 3.5

## Allgemeiner Ablauf
Mit einem auusführlichem intialen Prompt, welches sowohl die Aufgabenstellung als auch Ideen zur Umsetzung enthielt, generierte Copilot ein Vollständiges Projekt, das allerdings nicht erfolgreich interpretiert werden konnte, da es zu duplikaten von App.jsx/tsx kam und die erstellten Komponenten ihre Parameter nicht korrekt übergaben. Durch neubennenung der Duplikate und 2 neue Prompts konnten beide Probleme gelöst werden.
Die dann zwar funktionale aber unansehnliche Seite wurde mit einigen kleineren Prompts neudesignt wobei zwischenzeitlich das Problem auftrat, dass copilot mit weiß auf weiß schrieb, was aber auch schnell wieder zu lösen war ohne auch nur eine Zeile Code selbst schreiben zu müssen.

## Weitere Detailprobleme

* Code-Generierungsprobleme
An verschiedenen Stellen kam es dazu, dass Copilot erklärenden Text mit in den Code schrieb, der offensichtlich nicht als kommentar gedacht war, sondern das Ende des vorangegangenen Text war, da es mit "Hier der zugehörige Code:" (o.ä.) endete.

* Dependency-Probleme
Beim neustarten des lokalen Entwicklungsservers stellte sich raus, dass copilot bei der Generation des Projectes veraltete versionen der verschiedenen Inhalte von node_modules generiert hatte und diese sogar in package.json und package-lock.json vor kosolenseitiger Korrektur gesichert hatte (npm run dev war ein unbekanntes kommando und bei npm install kamen ca 160 vulnerabilities raus). Dieses Problem ließ sich allerdings durch einfaches neuaufsetzen des Projektes lösen.
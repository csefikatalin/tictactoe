# Hagyományos 3x3-as TicTacToe játék React-tel

## Modell

 A TicTacToeModel osztály feladata, hogy reprezentálja a játékteret és ellenőrizze a győzelmet, valamint megadja, hogy melyik a következő játékos. 
 A játékteret egy lista írja le, melynek elemei "X", "O" és " " karakterek lehetnek. 

## App 

A gyökérkomponens.
Itt példányosítjuk a modell osztályunkat. 
Itt hozzuk létre a program állapotát leíró state-ket. 

### A program állapota

Három state-et használ a program: 

const [lista, setLista] = useState(model.lista);
const [kikovetkezik, setKikovetkezik] = useState(model.kikovetkezik);
const [nyertes, setNyertes] = useState("");

### kivalaszt függvény

Ez a metódus kezeli le az egyes elemekre való kattintás eseményt. 
Lekérdezi a modelltől a program állapotát és... 
Beállítja a state-eket az állapotnak megfelelően. 

## JatekTer komponens

Végigiterál a listán és létrehozza a 9 Elem komponenst. 
props-ok: 
1. lista - a program állapotát jelképező lista. 
2. kivalaszt - Az a metódus, ami majd az elemre való kattintást lekezeli. Ezt nem itt használjuk fel, hanem majd az Elem komponensben, a JatekTer csak "átvezeti" az információt. 

##  Elem komponens

Feladata egyetlen DIV megjelenítése, amire kattinthatunk, és amibe belekerül majd a megfelelő jel.
props-ok: 
1. adat - a konkrét jelet jelenti, értéke a listából jön. 
2. index - az adott komponens helye a listában. 
3. blocked - true/false, attól függően, hogy van-e X/O érték a listában az adott pozíción. 
4. kivalaszt - a főkomponens metódusa, ezt kell meghívni kattintáskor. 





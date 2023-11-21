<script>

</script>


<template>
    <main id="docum">

        <div class="container">

            <div class="row justify-content-around">

                <div id="objects" class="col-12 col-lg-8">
                    <br>
                    <br>
                    <!-- variabili -->
                    <h2 style="color:rgb(255, 191, 0)">Objects</h2>
                    <br>
                    <p>Gli oggetti sono uno dei concetti fondamentali di JavaScript e consentono di rappresentare dati in
                        forma di coppie chiave-valore. In questa lezione, esploreremo in dettaglio come creare, manipolare e
                        utilizzare gli oggetti in JavaScript.
                    </p>
                    <h4>Creazione di Oggetti</h4>
                    <p>Gli oggetti sono definiti utilizzando parentesi graffe <code class="code_txt">{}</code> e contengono
                        una serie di proprietà,
                        ciascuna delle quali è una coppia chiave-valore.
                    </p>
                    <pre class="pannel_code">let person = {
  name: "Zoi",
  age: 30,
  isStudent: false,
};
                    </pre>

                    <h4>Accesso alle Proprietà degli Oggetti</h4>

                    <p>
                        Puoi accedere alle proprietà degli oggetti utilizzando la notazione punto o la notazione delle
                        parentesi quadre.
                    </p>

                    <pre class="pannel_code">let person = {
  name: "Zoi",
  age: 28,
};
person.age = 30; // Modifica dell'età da 28 a 30
                    </pre>

                    <h4>Aggiunta di Proprietà agli Oggetti</h4>

                    <p>
                        Puoi aggiungere nuove proprietà a un oggetto assegnando loro un valore.
                    </p>

                    <pre class="pannel_code">let person = {
  name: "David",
  age: 35,
};
person.city = "New York"; // Aggiunta della proprietà "city" con valore "New York"
                    </pre>

                    <h4>Iterare negli Array</h4>

                    <p>
                        Gli array possono essere iterati utilizzando vari tipi di cicli. Ad esempio:
                    </p>

                    <p>Ciclo <code class="code_txt">for</code>:</p>

                    <pre class="pannel_code">let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i &lt numbers.length; i++) {
  console.log(numbers[i]);
}
                    </pre>

                    <h4>Rimozione di Proprietà dagli Oggetti</h4>

                    <p>
                        Puoi rimuovere una proprietà da un oggetto utilizzando l’operatore <code
                            class="code_txt">delete</code>.
                    </p>

                    <pre class="pannel_code">let person = {
  name: "Kris",
  age: 40,
};
delete person.age; // Rimozione della proprietà "age"
                    </pre>

                    <h4>Oggetti Annessi (Nested)</h4>

                    <p>
                        Gli oggetti possono anche contenere oggetti al loro interno, creando strutture annidate.
                    </p>

                    <pre class="pannel_code">let person = {
  name: "Frank",
  address: {
    street: "123 Main St",
    city: "San Francisco",
  },
};
let street = person.address.street; // "123 Main St"
                    </pre>

                    <h4>Iterare negli Oggetti</h4>

                    <p>
                        Puoi iterare attraverso le proprietà di un oggetto utilizzando un ciclo <code
                            class="code_txt">for...in</code>.
                    </p>

                    <pre class="pannel_code">let person = {
  name: "Rudy",
  age: 45,
};
for (let key in person) {
  console.log(key + ": " + person[key]);
}
                    </pre>

                    <h4>Funzioni all’interno di Proprietà degli Oggetti</h4>

                    <p>
                        Gli oggetti possono contenere funzioni come proprietà. Queste funzioni vengono spesso chiamate
                        “metodi” dell’oggetto.
                    </p>

                    <pre class="pannel_code">let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};
let sum = calculator.add(5, 3); // 8
                    </pre>

                    <h4>Metodi degli Oggetti</h4>

                    <p>
                        Gli oggetti in JavaScript possono avere anche metodi, che sono funzioni associate all’oggetto
                        stesso. Ecco alcuni esempi di metodi degli oggetti:
                    </p>

                    <p>
                        <code class="code_txt">toString()</code>: Restituisce una rappresentazione in forma di stringa
                        dell’oggetto..
                    </p>

                    <pre class="pannel_code">let person = {
  name: "Gio",
  age: 50,
  toString: function () {
    return this.name + " (" + this.age + " anni)";
  },
};
console.log(person.toString()); // "Gio (50 anni)"
                    </pre>

                    <p>
                        <code class="code_txt">hasOwnProperty(prop)</code>: Restituisce valore booleano (true o false) se
                        l’oggetto ha una determinata proprietà.
                    </p>

                    <pre class="pannel_code">let person = {
  name: "Isaac",
  age: 55,
};
let hasName = person.hasOwnProperty("name"); // true
let hasEmail = person.hasOwnProperty("email"); // false
                    </pre>

                    <p>
                        <code class="code_txt">keys()</code>: Restituisce un array delle chiavi delle proprietà
                        dell’oggetto.
                    </p>

                    <pre class="pannel_code">let person = {
  name: "James",
  age: 60,
};
let keys = Object.keys(person); // ["name", "age"]
                    </pre>

                    <h4>Oggetti come Costanti</h4>

                    <p>
                        Puoi dichiarare un oggetto come costante utilizzando la parola chiave const. Tuttavia, ciò non
                        significa che le proprietà dell’oggetto sono immutabili. Puoi ancora modificare il valore delle
                        proprietà, ma non puoi assegnare un nuovo oggetto alla variabile costante.
                    </p>

                    <pre class="pannel_code">const person = {
  name: "John",
  age: 65,
};
person.age = 70; // Consentito
person = { name: "Jane", age: 55 }; // Errore: non consentito
                    </pre>


                    <h4>Conclusioni</h4>
                    <p>
                        Gli oggetti sono uno strumento potente in JavaScript, consentendoti di rappresentare dati complessi
                        in modo strutturato. Ora che hai familiarità con la creazione, l’accesso e la manipolazione degli
                        oggetti, sei pronto per esplorare ulteriori concetti avanzati e approfondire le tue competenze di
                        programmazione.
                    </p>

                    <div class="card border-1 border-warning m-5 ">
                        <h2 class="text-warning text-center p-4 mb-3">🚀 Fai
                            pratica
                            con
                            <button class="rounded-5 sty_bt"><a href="https://www.w3schools.com/js/js_objects.asp"
                                    target="_blank">W3S</a></button>

                        </h2>
                    </div>

                    <div class="row rounded-4 justify-content-center" style="background-color: rgba(119, 26, 102, 0.292);">
                        <h4 style="color:rgb(255, 191, 0)" class=" text-center p-4 mb-3">Prova a svolgere degli
                            esercizi di logica JavaScript
                            <button class="rounded-5 sty_bt">
                                <a href="https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_objects1"
                                    target="_blank">W3S</a>
                            </button>

                        </h4>
                    </div>

                </div>
            </div>
        </div>

    </main>
</template>

<style scoped></style>
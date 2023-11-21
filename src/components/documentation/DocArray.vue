<script>

</script>


<template>
    <main id="docum">

        <div class="container">

            <div class="row justify-content-around">

                <div id="array" class="col-12 col-lg-8">
                    <br>
                    <br>
                    <!-- variabili -->
                    <h2 style="color:rgb(255, 191, 0)">Array</h2>
                    <br>
                    <p>Gli array sono collezioni ordinate di elementi che possono essere di qualsiasi tipo. In questa
                        lezione, esploreremo in dettaglio come creare, manipolare e utilizzare gli array in JavaScript.</p>
                    <h4>Creazione di Array</h4>
                    <p>Gli array possono contenere elementi di qualsiasi tipo, inclusi numeri, stringhe, oggetti e altro
                        ancora. Puoi creare un array utilizzando le parentesi quadre <code class="code_txt">[]</code> e
                        separando gli elementi con
                        virgole.</p>
                    <pre class="pannel_code">let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "kiwi", "orange"];
let mixed = [42, "hello", true];
                    </pre>

                    <h4>Accesso agli Elementi dell’Array</h4>

                    <p>
                        Puoi accedere agli elementi di un array utilizzando l’indice dell’elemento desiderato. Gli indici
                        degli array iniziano da 0.
                    </p>

                    <pre class="pannel_code">let colors = ["red", "green", "blue"];
let firstColor = colors[0]; // "red"
let secondColor = colors[1]; // "green"
                    </pre>

                    <h4>Lunghezza dell’Array</h4>

                    <p>
                        Puoi ottenere la lunghezza di un array utilizzando la proprietà <code
                            class="code_txt">length</code>.
                    </p>

                    <pre class="pannel_code">let numbers = [10, 20, 30, 40, 50];
let length = numbers.length; // 5
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

                    <p>Ciclo <code class="code_txt">for...of</code>:</p>

                    <pre class="pannel_code">let fruits = ["apple", "kiwi", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}
                    </pre>

                    <h4>Metodi degli Array</h4>

                    <p>
                        Gli array in JavaScript dispongono di numerosi metodi incorporati che semplificano la loro
                        manipolazione.
                        Ecco alcuni esempi:
                    </p>

                    <p><code class="code_txt">push(element)</code>: Aggiunge un elemento alla fine dell’array.</p>

                    <pre class="pannel_code">let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i &lt numbers.length; i++) {
  console.log(numbers[i]);
}
                    </pre>

                    <p><code class="code_txt">pop()</code>: Rimuove e restituisce l’ultimo elemento dell’array.</p>

                    <pre class="pannel_code">let numbers = [1, 2, 3, 4];
let lastNumber = numbers.pop(); // 4
                    </pre>

                    <p><code class="code_txt">shift()</code>: Rimuove e restituisce il primo elemento dell’array.</p>

                    <pre class="pannel_code">let numbers = [1, 2, 3, 4];
let firstNumber = numbers.shift(); // 1
                    </pre>

                    <p><code class="code_txt">unshift(element)</code>: Aggiunge uno o più elementi all’inizio dell’array.
                    </p>

                    <pre class="pannel_code">let numbers = [2, 3, 4];
numbers.unshift(1); // [1, 2, 3, 4]
                    </pre>

                    <p><code class="code_txt">sort()</code>: Ordina gli elementi dell’array.</p>

                    <pre class="pannel_code">let numbers = [3, 1, 4, 2];
numbers.sort(); // [1, 2, 3, 4]
                    </pre>

                    <p><code class="code_txt">splice(start, deleteCount, element1, ..., elementN)</code>: Modifica il
                        contenuto di un array rimuovendo o sostituendo elementi.</p>

                    <pre class="pannel_code">let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "grape"); // ["banana"] è stato rimosso e sostituito con ["grape"]
                    </pre>

                    <p><code class="code_txt">slice(start, end)</code>: Estrae una porzione dell’array.</p>

                    <pre class="pannel_code">let numbers = [1, 2, 3, 4, 5];
let sliced = numbers.slice(1, 4); // [2, 3, 4]
                    </pre>

                    <p><code class="code_txt">join(separator)</code>: Unisce gli elementi dell’array in una stringa
                        utilizzando il separatore specificato.</p>

                    <pre class="pannel_code">let fruits = ["apple", "banana", "orange"];
let fruitString = fruits.join(", "); // "apple, banana, orange"
                    </pre>

                    <p><code class="code_txt">delete(index)</code>: Rimuove un elemento dall’array lasciando un buco
                        nell’indice corrispondente.</p>

                    <pre class="pannel_code">let numbers = [1, 2, 3];
delete numbers[1]; // numbers diventa [1, empty, 3]
                    </pre>

                    <p><code class="code_txt">concat(array1, array2, ..., arrayN)</code>: Unisce due o più array in uno
                        nuovo.</p>

                    <pre class="pannel_code">let array1 = [1, 2];
let array2 = [3, 4];
let combined = array1.concat(array2); // [1, 2, 3, 4]
                    </pre>

                    <p><code class="code_txt">flat(depth)</code>: “Appiattisce” un array annidato.</p>

                    <pre class="pannel_code">let nestedArray = [1, [2, [3]]];
let flatArray = nestedArray.flat(2); // [1, 2, 3]
                    </pre>

                    <p><code class="code_txt">map(callback)</code>: Crea un nuovo array applicando una funzione a ciascun
                        elemento.</p>

                    <pre class="pannel_code">let numbers = [1, 2, 3];
let doubled = numbers.map((num) => num * 2); // [2, 4, 6]
</pre>

                    <h4>Array come Costante</h4>
                    <p>Puoi dichiarare un array come costante utilizzando la parola chiave <code
                            class="code_txt">const</code>. Tuttavia, ciò non
                        significa che gli elementi dell’array sono immutabili. Puoi ancora modificare gli elementi
                        dell’array, ma non puoi assegnare un nuovo array alla variabile costante.
                    </p>

                    <pre class="pannel_code">const fruits = ["apple", "banana", "orange"];
fruits[1] = "grape"; // Consentito
fruits = ["pear", "kiwi"]; // Errore: non consentito
</pre>

                    <h4>Conclusioni</h4>
                    <p>
                        Gli array sono fondamentali per la programmazione in JavaScript e ti consentono di organizzare,
                        manipolare e gestire insiemi di dati. Ora che hai familiarità con la creazione, l’accesso e la
                        manipolazione degli array, sei pronto per esplorare ulteriori concetti avanzati e approfondire le
                        tue competenze di programmazione.
                    </p>

                </div>
            </div>
        </div>

    </main>
</template>

<style scoped></style>
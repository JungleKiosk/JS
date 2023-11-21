<script>

</script>


<template>
    <main id="docum">

        <div class="container">

            <div class="row justify-content-around">

                <div id="set" class="col-12 col-lg-8">
                    <br>
                    <br>
                    <!-- variabili -->
                    <h2 style="color:rgb(255, 191, 0)">Set</h2>
                    <br>
                    <p>I Set sono collezioni di valori
                        unici, il che significa che non possono contenere duplicati. Vedremo come creare, manipolare e
                        utilizzare Set per gestire dati senza ripetizioni.
                    </p>

                    <h4>Creazione di Set</h4>
                    <p>I Set possono essere creati utilizzando il costruttore <code class="code_txt">Set()</code> senza
                        argomenti.</p>
                    <pre class="pannel_code">let colors = new Set();
colors.add("red");
colors.add("green");
colors.add("blue");
                    </pre>

                    <h4>Aggiunta e Rimozione di Elementi da un Set</h4>

                    <p>
                        Puoi aggiungere elementi a un Set utilizzando il metodo <code class="code_txt">add()</code> e
                        rimuoverli con il metodo <code class="code_txt">delete()</code>.
                    </p>

                    <pre class="pannel_code">colors.add("yellow"); // Aggiunta dell'elemento "yellow"
colors.delete("green"); // Rimozione dell'elemento "green"
                    </pre>

                    <h4>Verifica della Presenza di un Elemento in un Set</h4>

                    <p>
                        Puoi verificare se un elemento è presente in un Set utilizzando il metodo <code
                            class="code_txt">has()</code>.
                    </p>

                    <pre class="pannel_code">let hasBlue = colors.has("blue"); // true
let hasPurple = colors.has("purple"); // false
                    </pre>

                    <h4>Iterare in un Set</h4>

                    <p>
                        Puoi utilizzare cicli <code class="code_txt">for...of</code> per iterare attraverso gli elementi di
                        un Set.
                    </p>

                    <pre class="pannel_code">for (let color of colors) {
  console.log(color);
}
                    </pre>

                    <h4>Dimensione di un Set</h4>

                    <p>
                        La proprietà <code class="code_txt">size</code> restituisce la quantità di elementi in un Set.
                    </p>

                    <pre class="pannel_code">let size = colors.size; // 2
                    </pre>

                    <h4>Conversione tra Array e Set</h4>

                    <p>
                        Puoi convertire un Set in un array utilizzando l’operatore spread <code class="code_txt">...</code>
                        o il costruttore <code class="code_txt">Array.from()</code>.
                    </p>

                    <pre class="pannel_code">let colorsArray = [...colors]; // Converte Set in Array
let colorsSet = new Set(colorsArray); // Converte Array in Set
                    </pre>

                    <h4>Uso Comune di <code>Set</code></h4>

                    <p>
                        I Set sono spesso utilizzati per rimuovere duplicati da un array.
                    </p>

                    <pre class="pannel_code">let numbers = [1, 2, 3, 4, 2, 3, 5];
let uniqueNumbers = [...new Set(numbers)]; // [1, 2, 3, 4, 5]
                    </pre>

                    <h4>Conclusioni</h4>
                    <p>
                        I Set in JavaScript offrono un modo semplice per gestire collezioni di valori unici. Sono
                        particolarmente utili quando è necessario garantire l’assenza di duplicati nei dati. Ora che hai
                        familiarità con i concetti di base dei Set, puoi utilizzarli per semplificare la gestione dei dati
                        nelle tue applicazioni JavaScript.
                    </p>

                    <div class="card border-1 border-warning m-5 ">
                        <h2 class="text-warning text-center p-4 mb-3">🚀 Fai
                            pratica
                            con
                            <button class="rounded-5 sty_bt"><a href="https://www.w3schools.com/js/js_object_sets.asp"
                                    target="_blank">W3S</a></button>

                        </h2>
                    </div>

                </div>
            </div>
        </div>

    </main>
</template>

<style scoped></style>
<script>
export default {
    data() {
        return {
            isSidebarOpen: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
    }
};
</script>



<template>

    <button class="toggle_sidebar_button btn_menu pulp" @click="toggleSidebar">menu
    </button>

    <a href="#" class="scroll-to-top upper_arrow" @click="scrollToTop">
        <i class="fas fa-arrow-up">Go up</i>
    </a>

    <nav class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">

        <div class="row align-items-center sticky-top">
            <div class="col-6 col-lg-8">
                <h1 class="p-3">menu</h1>
            </div>
            <div class="col-6 col-lg-4 p-3">
                <button class="btn btn-outline-light " @click="toggleSidebar">x</button>
            </div>
        </div>

        <ul class="p-3">
            <li><a class="ancor_menu" href="#variabili">Variabili</a></li>
            <hr>
            <li><a class="ancor_menu" href="#tipididati">Tipi di dati</a></li>
            <hr>
            <li><a class="ancor_menu" href="#casting">Casting</a></li>
            <hr>
            <li><a class="ancor_menu" href="#output">Output</a></li>
            <hr>
            <li><a class="ancor_menu" href="#numbers">Numbers</a></li>
            <hr>
            <li><a class="ancor_menu" href="#math">Math</a></li>
            <hr>
            <li><a class="ancor_menu" href="#boolean">Boolean</a></li>
            <hr>
            <li><a class="ancor_menu" href="#string">String</a></li>
            <hr>
            <li><a class="ancor_menu" href="#array">Array</a></li>
            <hr>
            <li><a class="ancor_menu" href="#objects">Objects</a></li>
            <hr>
            <li><a class="ancor_menu" href="#set">Set</a></li>
            <hr>
            <li><a class="ancor_menu" href="#variabili">Variabili</a></li>
            <hr>
            <li><a class="ancor_menu" href="#tipididati">Tipi di dati</a></li>
            <hr>
            <li><a class="ancor_menu" href="#casting">Casting</a></li>
            <hr>
            <li><a class="ancor_menu" href="#output">Output</a></li>
            <hr>
            <li><a class="ancor_menu" href="#numbers">Numbers</a></li>
            <hr>
            <li><a class="ancor_menu" href="#math">Math</a></li>
            <hr>
            <li><a class="ancor_menu" href="#boolean">Boolean</a></li>
            <hr>
            <li><a class="ancor_menu" href="#string">String</a></li>
            <hr>
            <li><a class="ancor_menu" href="#array">Array</a></li>
            <hr>
            <li><a class="ancor_menu" href="#objects">Objects</a></li>
            <hr>
            <li><a class="ancor_menu" href="#set">Set</a></li>
            <hr>
        </ul>

    </nav>
</template>

<style scoped>

nav::-webkit-scrollbar {
    width: 6px;
}

nav::-webkit-scrollbar-thumb {
    background-color: #020215ca;
    height: 123px;
    border-radius: 50px;
    border: 1px solid #286090ca;
}

nav::-webkit-scrollbar-thumb:hover {
    background-color: #ffbf0065;
    border: 1px solid #ffbf0065;
}

/* nav::-webkit-scrollbar-track {
    border-left: 1px solid #ffbf0065;
}
 */


.sidebar,
.sidebar ul,
.sidebar a {
    list-style-type: none;
    font-family: monospace;
}

li a:hover {
    color: rgba(218, 218, 218, 0.995);
    border-bottom: 2px solid #ffbf0065;

}

.sidebar {
    width: auto;
    background-color: #020215ca;
    position: fixed;
    top: 0;
    bottom: 0;
    left: -100%;
    overflow-y: auto;
    overflow-x: hidden;
    transition: left 0.3s ease;
    z-index: 1000;
    /* Valore più alto di quello delle card */
}


.sidebar-open {
    left: 0;
    /* Mostra la sidebar quando è aperta */
}

.upper_arrow {
    font-weight: bold;
    font-size: large;
    cursor: pointer;
    position: fixed;
    top: 80px;
    right: 25px;
    z-index: 2;
    display: flex;
    align-items: center;
    color: #ffbf00;
    overflow-x: inherit;
}


.toggle_sidebar_button {
    font-weight: bold;
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 2;
    display: flex;
    align-items: center;
    background-color: #27272a65;
    color: #ffbf00;
    border: 1px solid #ffbf00;
    border-radius: 10px;
    overflow-x: inherit;
}

.toggle_sidebar_button:hover {
    background-color: #ffbf00;
    color: #27272a;
    border: white;
}


.pulp {
    padding: 10px 20px;
    cursor: pointer;
    animation: pulper 3s infinite ease-in-out;
    /*transition: background-color 0.3s ease, color 0.3s ease; */
}

@keyframes pulper {
    0% {
        transform: scale(1);
        /* Stato normale */
    }

    50% {
        transform: scale(1.1);
        /* Stato ingrandito */
    }

    100% {
        transform: scale(1);
        /* Ritorna allo stato normale */
    }
}
</style>
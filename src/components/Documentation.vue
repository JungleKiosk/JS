<script>
import DocVariables from "../components/documentation/DocVariables.vue";
import DocTypeData from "../components/documentation/DocTypeData.vue";
import DocCasting from "../components/documentation/DocCasting.vue";




export default {
    data() {

    },
    components: {
    DocVariables,
    DocTypeData,
    DocCasting
}
}


</script>


<template>
    <div class="documentation_container">

        <main class="main-content">

            <header>

            </header>

            <section>
                <DocVariables></DocVariables>
                <DocTypeData></DocTypeData>
                <DocCasting></DocCasting>
            </section>

        </main>
    </div>
</template>
  
<style>
</style>
  
  
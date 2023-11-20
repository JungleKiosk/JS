<script>
import DocVariables from "../components/documentation/DocVariables.vue";
import DocTypeData from "../components/documentation/DocTypeData.vue";




export default {
    data() {

    },
    components: {
    DocVariables,
    DocTypeData
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
            </section>

        </main>
    </div>
</template>
  
<style>
</style>
  
  
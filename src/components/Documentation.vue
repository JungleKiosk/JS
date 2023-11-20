<script>
import ToggleSideMenu from "../components/documentation/ToggleSideMenu.vue";
import DocVariables from "../components/documentation/DocVariables.vue";
import DocTypeData from "../components/documentation/DocTypeData.vue";
import DocCasting from "../components/documentation/DocCasting.vue";
import DocOutput from "../components/documentation/DocOutput.vue";
import DocNumbers from "../components/documentation/DocNumbers.vue";




export default {
    data() {

    },
    components: {
        ToggleSideMenu,
        DocVariables,
        DocTypeData,
        DocCasting,
        DocOutput,
        DocNumbers
    }
}


</script>


<template>
    <div class="documentation_container">

        <main class="main-content">

            <header>

            </header>

            <section>
                <ToggleSideMenu></ToggleSideMenu>
                <DocVariables></DocVariables>
                <DocTypeData></DocTypeData>
                <DocCasting></DocCasting>
                <DocOutput></DocOutput>
                <DocNumbers></DocNumbers>
            </section>

        </main>
    </div>
</template>
  
<style></style>
  
  
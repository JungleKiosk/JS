<script>
import ToggleSideMenu from "../components/documentation/ToggleSideMenu.vue";
import DocVariables from "../components/documentation/DocVariables.vue";
import DocTypeData from "../components/documentation/DocTypeData.vue";
import DocCasting from "../components/documentation/DocCasting.vue";
import DocOutput from "../components/documentation/DocOutput.vue";




export default {
    data() {

    },
    components: {
        ToggleSideMenu,
        DocVariables,
        DocTypeData,
        DocCasting,
        DocOutput
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
            </section>

        </main>
    </div>
</template>
  
<style></style>
  
  
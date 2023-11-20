<script>
import DocVariables from "../components/documentation/DocVariables.vue";
import DocTypeData from "../components/documentation/DocTypeData.vue";
import DocCasting from "../components/documentation/DocCasting.vue";
import ToggleSideMenu from "../components/documentation/ToggleSideMenu.vue";




export default {
    data() {

    },
    components: {
        DocVariables,
        DocTypeData,
        DocCasting,
        ToggleSideMenu
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
                <ToggleSideMenu></ToggleSideMenu>
            </section>

        </main>
    </div>
</template>
  
<style></style>
  
  
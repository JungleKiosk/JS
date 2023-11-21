<script>
import ToggleSideMenu from "../components/documentation/ToggleSideMenu.vue";
import DocVariables from "../components/documentation/DocVariables.vue";
import DocTypeData from "../components/documentation/DocTypeData.vue";
import DocCasting from "../components/documentation/DocCasting.vue";
import DocOutput from "../components/documentation/DocOutput.vue";
import DocNumbers from "../components/documentation/DocNumbers.vue";
import DocMath from "../components/documentation/DocMath.vue";
import DocBoolean from "../components/documentation/DocBoolean.vue";
import DocString from "../components/documentation/DocString.vue";
import DocArray from "./documentation/DocArray.vue";

export default {
    data() {

    },
    components: {
    ToggleSideMenu,
    DocVariables,
    DocTypeData,
    DocCasting,
    DocOutput,
    DocNumbers,
    DocMath,
    DocBoolean,
    DocString,
    DocArray
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
                <DocMath></DocMath>
                <DocBoolean></DocBoolean>
                <DocString></DocString>
                <DocArray></DocArray>
            </section>

        </main>
    </div>
</template>
  
<style></style>
  
  
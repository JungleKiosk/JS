<script>


</script>


<template>
 
  <h1 class="text-center" style="font-family: monospace; font-weight: bold; color: #ffbf00;">JavaScript</h1>

  <div class="container my-4 px-5">
    <div class="row">
      <div class="col-12 col-lg-12">
        <div class="links">
          <!-- use <RouterLink></RouterLink> instead <a></a> to save for each pagand not refresh_e.g. button count stay fixed!-->

          <RouterLink active-class=" active" class="page_link p-2 rounded-pill" to="/">Home</RouterLink>
          <RouterLink active-class=" active" class="page_link p-2 rounded-pill" to="/documentation">Documentazione</RouterLink>
          <RouterLink active-class=" active" class="page_link p-2 rounded-pill" to="/exercise">Exercise</RouterLink>
        </div>
      </div>
    </div>

    <RouterView />
  </div>
</template>

<style></style>
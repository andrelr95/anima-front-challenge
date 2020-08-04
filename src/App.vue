<template>
  <div id="app">
    <SideBar />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SideBar from '@/components/SideBar.vue'

export default Vue.extend({
  components: {
    SideBar
  }
})
</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap);

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html body {
    #app {
      width: 100%;
      height: 100vh;
    }
  }
  main {
    width: calc(100% - 228px);
    float: right;
    padding: 28px 122px;

    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 16px;
      margin-top: 80px;
    }
  }
</style>

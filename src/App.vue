<template>
    <div id="app">
        <!-- Header -->
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg1="Welcome to Your Vue.js App" msg2="Vue-Boilerplate" author="yonas g" />

        <!-- Our router components will be switched from here based on path -->
        <router-view />
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "app",
    components: {
        HelloWorld
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

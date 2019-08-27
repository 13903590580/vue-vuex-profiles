<template>
  <div id="app">
    <Nav />
    <keep-alive>
      <router-view />
    </keep-alive>
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./views/Landing";
export default {
  components: {
    Nav,
    Footer,
    Landing
  }
};
</script>

<style>
</style>

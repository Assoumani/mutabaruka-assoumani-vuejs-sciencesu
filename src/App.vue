<template>
  <div id="app">
    <div id="nav">
      <NavComponent/>
      <router-view/>
      <!-- Footer -->
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">Made with ❤ 4 YOU</p>
        </div>
        <!-- /.container -->
      </footer>
    </div>
  </div>
</template>

<script>
import NavComponent from "./components/NavComponent";

export default {
  name: 'App',
  components: {
    NavComponent,
  }
}
</script>

<style>
@import "./assets/vendor/bootstrap/css/bootstrap.min.css";
@import "./assets/css/shop-item.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

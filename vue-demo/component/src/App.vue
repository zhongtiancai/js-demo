<template>
  <div id="app">
    <img src="./assets/logo.png">
	 <ul>
      <li>
        <router-link to="/hi">To Hi</router-link>
        <router-link to="/">To welcome</router-link>
        <router-link to="/index">To welcome</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

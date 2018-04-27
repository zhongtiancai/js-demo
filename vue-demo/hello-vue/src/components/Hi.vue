<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<router-link to="/inner">To Inner</router-link>
	<router-view/>
  </div>
</template>

<script>
import Inner from './Inner'
export default {
  name: 'Hi',
  components: {
      Inner
    },
  data () {
    return {msg: 'hi page'}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

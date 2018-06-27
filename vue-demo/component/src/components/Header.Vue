<template>
  <header @click="changeTitleTxt">
    {{this.titleTxt.name}}
  </header>
</template>
<script>
  export default {
    name: 'header-box',
    props: {
      titleTxt: Object
    },
    data () {
      return {
        thisTitleTxt: this.titleTxt.name
      }
    },
    methods: {
      changeTitleTxt () {
        this.thisTitleTxt= '切换'
        this.$emit('msgFunc');
      }
    }
  }
</script>

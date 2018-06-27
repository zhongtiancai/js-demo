<template>
  <div>
  <header-box :titleTxt="showTitleTxt" @msgFunc="func"></header-box>
  <div>{{showTitleTxt.name}}</div>
  </div>
</template>
<script>
  import Header from './header'
  export default {
    name: 'index',
    components: {
      'header-box': Header
    },
    data () {
      return {
        showTitleTxt:{
          name: '首页'
        }
      }
    },
    methods: {
      func () {
        this.showTitleTxt ={
          name: '听说要切换'
        }
      }
    }
  }
</script>

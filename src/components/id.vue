<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="r('/test/aaa')">路由/test/aaa</button>
    <button @click="r('/')">路由/</button>
    <button @click="back">回退</button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is child3 -id '
    }
  },
  created(){
    console.log(this.$route)
  },
  methods:{
    r(path){
      this.$router.push({path:path})
    },
    back(){ 
      VK.back()
    }
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

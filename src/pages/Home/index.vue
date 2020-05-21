<template>
  <div>
      <h1>Home</h1>
      <button @click="toadmin">去Admin</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
     name: 'Home',
     methods: {
       toadmin() {
         this.$router.push('/admin')
       }
     }
  }
</script>
<style lang="less" scoped>

 
</style>

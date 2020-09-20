<template>
  <div id="main-blog">
    <div class="main-blog">
      <router-link class="main" to="/" tag="span">博客主页</router-link>
      <router-link class="add" to="/addBlog" tag="span">添加博客</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-blog {
  text-align: center;
  margin: 50px;
}

.main,
.add {
  background-color: crimson;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 20px;
}
</style>
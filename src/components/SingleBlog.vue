<template>
  <div id="single-blog">
    <div class="title">{{ blog.title }}</div>
    <div class="content">{{ blog.content }}</div>
    <div class="author">作者: {{ blog.author }}</div>
    <div  class="type">
        <span>博客分类: </span>
       <ul>
        <li v-for="type in blog.type" :key="type">{{ type }} </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    console.log(this.id);
    this.axios
      .get("https://vue-post-4eef6.firebaseio.com/posts/" + this.id + ".json")
      .then((res) => {
        this.blog = res.data;
        console.log(this.blog);
      });
  },
};
</script>

<style scoped>
#single-blog {
  width: 70%;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  background-color: rgba(34, 218, 172, 0.9);
  border-radius: 10px;
  padding: 10px;
  padding-bottom: 40px;
  position: relative;
}
.title {
  color: #fff;
  font-size: 28px;
  margin: 10px;
  font-weight: bold;
}
.content {
  margin: 5px;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 50px;
}
.author {
  position: absolute;
  right: 20px;
  top: 30px;
  color: #fff;
}
.type {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
  display: flex;
}
.type span{
    color: #fff;
    font-size: 18px;
    margin-right: 20px;
}
.type li{
    margin: 2px;
    display: inline;
}
</style>
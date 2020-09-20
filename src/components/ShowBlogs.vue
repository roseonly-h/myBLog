<template>
  <div id="showBlogs">
    <div class="overview">博客总览</div>
    <div class="search">
      <label for="search">搜索: </label>
      <input type="text" id="search" placeholder="请输入搜索内容" v-model="searchVal">
    </div>
    <div v-for="(blog,index) in filterBlogs" :key="index" class="item">
      <router-link :to="'/blog/'+blog.id" tag="span">
        <h2 v-rainbow>
          {{ blog.title }}
        </h2>
      </router-link>
      <article>{{ blog.content }}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowBlog",
  data() {
    return {
      blogs: [],
      searchVal:''
    };
  },
  directives:{
    'rainbow':{
      bind(el){
        el.style.color = '#' + Math.random().toString(16).slice(2,8)
      }
    }
  },
  created() {
    this.axios.get("https://vue-post-4eef6.firebaseio.com/posts.json").then(res => {
      // console.log(typeof res.data)
      let blogArray = []
      for (const key in res.data) {
        res.data[key].id = key
        blogArray.push(res.data[key])
      }
      this.blogs = blogArray

      // this.blogs = res.data.slice(0, 10);
      console.log(blogArray)
    });
    
  },
  computed:{
    filterBlogs(){
      return this.blogs.filter(blog=>{
        return blog.title.match(this.searchVal)
      })
    }
  }
};
</script>

<style scoped>

#showBlogs{
  width: 70%;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  background-color: rgba(240, 172, 83, 0.9);
  border-radius: 10px;
}
.overview {
  margin: 20px;
  font-size: 30px;
  color: brown;
  font-weight: 700;
}
.item{
  margin: 20px auto;
  width: 80%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  overflow: hidden;
}
.item h2{
  font-size: 28px;
  margin: 10px 0;
  width: 50%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.item article{
  width: 100%;
  padding-left: 5px;
  font-size: 18px;
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.search{
  margin: 0 20px;
}
.search label{
  font-size: 24px;
  font-weight: 700;
  margin: 0 5px;
  margin-top: 5px;
}
.search input{
  height: 30px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 40%;
}
</style>
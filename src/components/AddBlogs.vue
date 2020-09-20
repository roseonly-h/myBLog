<template >
  <div>
    <div class="addBlog" v-if="!isShow">
      <div class="writeBlog">添加博客</div>
      <div class="title">
        <label for="title">博客主题:</label>
        <input type="text" id="title" placeholder="请输入博客主题" v-model="blogs.title" />
      </div>
      <div class="content">
        <label for="content">博客内容:</label>
        <textarea id="content" placeholder="请输入博客内容" v-model="blogs.content"></textarea>
      </div>
      <div class="category">
        <p>博客分类:</p>
        <label for="vue">vue.js:</label>
        <input type="checkbox" value="vue" id="vue" v-model="blogs.category" />
        <label for="js">javaScript:</label>
        <input type="checkbox" value="javaScript" id="js" v-model="blogs.category" />
        <label for="html">html:</label>
        <input type="checkbox" value="html" id="html" v-model="blogs.category" />
        <label for="ts">TypeScript.js:</label>
        <input type="checkbox" value="TypeScript" id="ts" v-model="blogs.category" />
      </div>
      <div class="author">
        <label for="author">作者</label>
        <input type="text" id="author" placeholder="请输入作者" v-model="blogs.author" />
      </div>
      <button class="btn" @click="playBlog" type="submit">发布博客</button>
    </div>
    <hr />
    <div class="show"  v-if="isShow">
      <div class="suc">发布成功!</div>
      <div class="overView">博客总览</div>
      <div class="show-title">
        <span>博客主题:</span>
        {{blogs.title}}
      </div>
      <div class="show-content">
        <span>博客内容:</span>
        {{blogs.content}}
      </div>
      <div class="show-category">
        <span>博客分类:</span>
        <span v-show="blogs.category.length !='' ">{{blogs.category}}</span>
      </div>
      <div class="show-author">
        <span>作者:</span>
        {{blogs.author}}
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "addBlog",
  data() {
    return {
      blogs: {
        title: "",
        content: "",
        category: [],
        author: "",
      },
      isShow:false
    };
  },
  methods: {
    playBlog() {
      this.isShow = true
      // https://vue-post-4eef6.firebaseio.com/
      this.axios.post('https://vue-post-4eef6.firebaseio.com/posts.json',{
        title:this.blogs.title,
        content:this.blogs.content,
        type:this.blogs.category,
        author:this.blogs.author,
        // userId:1
      }).then(res=>{
          console.log(res)
          this.isShow = true
      })
    },
  },
};
</script>

<style scoped>
.addBlog {
  width: 70%;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  background-color: rgba(241, 146, 28, 0.5);
  border-radius: 20px;
}
div {
  margin: 20px;
}
.writeBlog {
  margin: 20px auto;
  font-size: 30px;
  color: brown;
  font-weight: 700;
}
.title,
.content,
.author {
  display: flex;
  flex-direction: column;
}
.title label,
.content label,
.category p,
.author label {
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 700;
}

.category input {
  margin-right: 20px;
}
input::placeholder,
textarea::placeholder {
  color: #aaa;
  font-size: 14px;
}
.title input,
.author input {
  width: 40%;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.content textarea {
  width: 90%;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.btn {
  width: 100px;
  padding: 14px;
  background-color: crimson;
  color: #fff;
  cursor: pointer;
  margin: 10px 10px;
  font-size: 18px;
  border-radius: 10px;
}
.show {
  width: 70%;
  margin: 50px auto;
}
.overView,.suc{
  margin: 20px auto;
  font-size: 30px;
  color: brown;
  font-weight: 700;
}
.show-title span,
.show-content span,
.show-category span,
.show-author span {
  margin: 20px 0;
  font-size: 18px;
  font-weight: 700;
}
</style>
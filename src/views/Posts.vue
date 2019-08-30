<template>
  <div class="feed">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <PostForm @update="updatePost" />
          <PostFeed @update="updatePost" v-for="post in posts" :key="post.id" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "../components/post/PostForm";
import PostFeed from "../components/post/PostFeed";
export default {
  data() {
    return {
      posts: []
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getPosts());
  },
  methods: {
    getPosts() {
      this.$axios.get("/api/posts").then(res => {
        this.posts = res.data;
        // console.log(this.posts);
      });
    },
    updatePost() {
      this.getPosts();
    }
  },
  components: {
    PostForm,
    PostFeed
  }
};
</script>

<style scoped>
</style>
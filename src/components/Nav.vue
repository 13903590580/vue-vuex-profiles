<template>
  <!-- 导航 -->
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link class="navbar-brand" to="/">中北大学个人履历</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mobile-nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/landing">开发者</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li v-if="isLogin" class="nav-item">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
          <li v-if="!isLogin" class="nav-item">
            <router-link class="nav-link" to="/register">注册</router-link>
          </li>
          <li v-if="!isLogin" class="nav-item">
            <router-link class="nav-link" to="/login">登录</router-link>
          </li>
          <li v-if="isLogin && user != null" class="nav-item">
            <a class="nav-link" @click.prevent="logout">注销</a>
            <img class="rounded-circle headerImg" :src="user.avatar" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "app-nav",
  computed: mapGetters(["isLogin", "user"]),
  methods: {
    logout() {
      localStorage.removeItem("jwtToken");
      this.$store.dispatch("setIsLoginAsync", false);
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.headerImg {
  width: 25px;
  margin-right: 5px;
}
</style>

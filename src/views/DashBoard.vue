<template>
  <!-- 仪表盘 -->
  <div class="dashboard">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-4">仪表盘</h1>
          <p v-if="user != null" class="lead text-muted">Welcome {{user.name}}</p>
          <h4 v-if="profile">Todo: 显示数据</h4>
          <div v-else>
            <p>没有任何相关的个人信息，请添加您的个人信息</p>
            <router-link to="/create-profile" class="btn btn-lg btn-info">添加个人信息</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DashBoard",
  computed: mapGetters(["user"]),
  data() {
    return {
      profile: null
    };
  },
  created() {
    this.getProfileData();
  },
  methods: {
    getProfileData() {
      this.$axios
        .get("/api/profile")
        .then(res => {
          // console.log(res.data);
          this.profile = res.data;
          // 存到vuex中
          this.$store.dispatch("setProfileAsync", res.data);
        })
        .catch(err => {
          this.$store.dispatch("setProfileAsync", null);
        });
    }
  }
};
</script>

<style scoped>
</style>
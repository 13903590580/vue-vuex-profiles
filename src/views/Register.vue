<template>
  <!-- Register -->
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">注册</h1>
          <p class="lead text-center">创建一个新的账号</p>
          <form @submit.prevent="handleSubmit" autocomplete="off" method="post">
            <div class="form-group">
              <input
                v-model="newUser.name"
                type="text"
                class="form-control form-control-lg"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="newUser.email"
                type="email"
                class="form-control form-control-lg"
                placeholder="Email Address"
                name="email"
              />
              <small class="form-text text-muted">
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small>
            </div>
            <div class="form-group">
              <input
                v-model="newUser.password"
                type="password"
                class="form-control form-control-lg"
                placeholder="Password"
                name="password"
              />
            </div>
            <div class="form-group">
              <input
                v-model="newUser.password2"
                type="password"
                class="form-control form-control-lg"
                placeholder="Confirm Password"
                name="password2"
              />
            </div>
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      newUser: {
        name: "",
        email: "",
        password: "",
        password2: ""
      },
      errors: {}
    };
  },
  methods: {
    handleSubmit() {
      //   console.log(this.newUser);
      this.$axios
        .post("/api/users/register", this.newUser)
        .then(res => {
          this.$router.push("/login");
          // this.$router.push({ name: "/login", params: "helloword" });
          // this.$router.replace("/login");
          // this.$router.replace({ name: "/login", params: "helloword" });
          // this.$router.go(-1);
        })
        .catch(err => {
          this.errors = err.response.data;
        });
      // 同源策略   只要不同源，就是跨域
      /** http://localhost:8080/
       * 1.请求头 http:// https:// file://
       * 2.域名   localhost / 127.0.0.1 /www.baidu.com
       * 3.端口号 :8080 :8081 :5000 :5001
       */
    }
  }
};
</script>

<style scoped>
</style>
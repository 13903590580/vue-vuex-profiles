<template>
  <!-- Register -->
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">注册</h1>
          <p class="lead text-center">创建一个新的账号</p>
          <form @submit.prevent="handleSubmit" autocomplete="off" method="post">
            <TextFieldGroup
              v-model="newUser.name"
              type="name"
              placeholder="Name"
              name="name"
              :error="errors.name"
            />
            <TextFieldGroup
              v-model="newUser.email"
              type="email"
              placeholder="Email Address"
              name="email"
              info="This site uses Gravatar so if you want a profile image, use a
                Gravatar email"
              :error="errors.email"
            />
            <TextFieldGroup
              v-model="newUser.password"
              type="password"
              placeholder="Password"
              name="password"
              :error="errors.password"
            />
            <TextFieldGroup
              v-model="newUser.password2"
              type="password"
              placeholder="Confirm Password"
              name="password2"
              :error="errors.password2"
            />
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { maxHeaderSize } from "http";
import TextFieldGroup from "../components/common/TextFieldGroup";
export default {
  name: "register",
  components: {
    TextFieldGroup
  },
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
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    }
  }
};
</script>

<style scoped>
</style>
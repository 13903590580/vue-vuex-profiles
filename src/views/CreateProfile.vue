<template>
  <!-- 个人信息 -->
  <div class="create-profile">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <a @click.prevent="$router.go(-1)" class="btn btn-light">返回</a>
          <h1 class="display-4 text-center">创建个人信息</h1>
          <p class="lead text-center">写一些有关于你的个人信息</p>
          <small class="d-block pb-3">* = 必填</small>
          <form action="add-experience.html">
            <TextFieldGroup
              v-model="msgInfo.handle"
              placeholder="* Profile handle"
              name="handle"
              info="有关于你的个人信息"
              :error="errors.handle"
            />

            <div class="form-group">
              <select class="form-control form-control-lg" name="status">
                <option value="0">* 选择你的职业</option>
                <option value="Developer">前端开发</option>
                <option value="Junior Developer">后端开发</option>
                <option value="Senior Developer">后端开发</option>
                <option value="Manager">后端开发</option>
                <option value="Student or Learning">后端开发</option>
                <option value="Instructor">后端开发</option>
                <option value="Intern">后端开发</option>
                <option value="Other">后端开发</option>
              </select>
              <small class="form-text text-muted">写一些关于你工作的内容</small>
            </div>

            <TextFieldGroup
              v-model="msgInfo.company"
              placeholder="公司"
              name="company"
              info="公司"
              :error="errors.company"
            />

            <TextFieldGroup
              v-model="msgInfo.website"
              type="text"
              placeholder="网址"
              name="website"
              info="网址"
              :error="errors.website"
            />

            <TextFieldGroup
              v-model="msgInfo.location"
              type="text"
              placeholder="地点"
              name="location"
              info="地点"
              :error="errors.location"
            />

            <TextFieldGroup
              v-model="msgInfo.skills"
              type="text"
              placeholder="技能"
              name="skills"
              info="技能"
              :error="errors.skills"
            />

            <TextFieldGroup
              v-model="msgInfo.githubusername"
              type="text"
              placeholder="Github 用户名"
              name="githubusername"
              info="Github 用户名"
              :error="errors.githubusername"
            />

            <div class="form-group">
              <textarea class="form-control form-control-lg" placeholder="个人介绍" name="bio"></textarea>
              <small class="form-text text-muted">个人介绍</small>
            </div>

            <div class="mb-3">
              <button type="button" class="btn btn-light">社交应用</button>
              <span class="text-muted">选项</span>
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fab fa-QQ"></i>
                </span>
              </div>
              <input type="text" class="form-control form-control-lg" placeholder="QQ" name="QQ" />
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fab fa-wechat"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="wechat"
                name="wechat"
              />
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fab fa-linkedin"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Linkedin"
                name="linkedin"
              />
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fab fa-weibo"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="weibo"
                name="weibo"
              />
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fab fa-instagram"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Instagram"
                name="instagram"
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
import TextFieldGroup from "../components/common/TextFieldGroup";
export default {
  name: "CreateProfile",
  data() {
    return {
      msgInfo: {
        handle: "",
        company: "",
        website: "",
        location: "",
        skills: "",
        githubusername: ""
      },
      errors: {}
    };
  },
  components: {
    TextFieldGroup
  }
};
</script>

<style scoped>
</style>

<template>
  <div>
    <Header></Header>
    <div class="add-blog-container">
      <div class="add-blog-title">
        <p class="title-text">标题</p>
        <input placeholder="请输入标题" class="title-input" />
      </div>
      <div class="add-blog-content">
        <p class="content-text">内容</p>
      </div>
        <quillEditor
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
        ></quillEditor>
    </div>
  </div>
</template>
<script>
import Header from "./Header";
import { quillEditor } from "vue-quill-editor";
export default {
  name: "AddBlog",
  data() {
    return {
      content: null,
      editorOption: {}
    };
  },
  methods: {
    onEditorBlur() {
      //失去焦点事件
    },
    onEditorFocus() {
      //获得焦点事件
    },
    onEditorChange() {
      //内容改变事件
    }
  },
  components: {
    Header,
    quillEditor
  }
};
</script>
<style lang="scss" scoped type="text/css">
.add-blog-container {
  margin-left: 280px;
  padding: 30px;
  .add-blog-title {
    .title-text {
      color: #333;
      font-size: 18px;
    }
    .title-input {
      border: none;
      border-bottom: 1px solid #ccc;
      width: 100%;
      font-size: #333;
      line-height: 2;
      font-size: 14px;
    }
    .title-input:focus {
      outline: none;
      border-bottom: 1px solid #ccc;
    }
    .title-input::-webkit-input-placeholder {
      color: #ccc;
      font-size: 14px;
    }
  }
  .add-blog-content {
    margin-top: 15px;
    .content-text {
      color: #333;
      font-size: 18px;
    }
  }
}
.ql-container {
  min-height: 450px;
  background: red;
}
</style>
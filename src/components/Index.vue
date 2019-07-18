<template>
  <div>
    <Header></Header>
    <div class="main-wrapper">
      <section class="cta-section theme-bg-light py-5">
        <div class="container text-center">
          <h2 class="heading">DevBlog - A Blog Template Made For Developers</h2>
          <div
            class="intro"
          >Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
          <form class="signup-form form-inline justify-content-center pt-3">
            <div class="form-group">
              <label class="sr-only" for="semail"></label>
              <input
                type="email"
                id="semail"
                name="semail1"
                class="form-control mr-md-1 semail"
                placeholder=""
              />
            </div>
            <button type="submit" class="btn btn-primary">搜索</button>
          </form>
        </div>
        <!--//container-->
      </section>
      <section class="blog-list px-3 py-5 p-md-5">
        <div class="container">
          <div class="item mb-5" v-for="(item, index) in blogList" v-bind:key="index">
            <div class="media">
              <div class="media-body">
                <h3 class="title mb-1">
                  <a href="blog-post.html">{{item.title}}</a>
                </h3>
                <div class="meta mb-1">
                  <span class="date">发布于：{{item.date}}</span>
                  <span class="comment">
                    浏览次数：{{item.visitCount}}
                  </span>
                </div>
                <div
                  class="intro"
                >{{item.content}}</div>
                <a class="more-link" href="blog-post.html">查看更多 &rarr;</a>
              </div>
              <!--//media-body-->
            </div>
            <!--//media-->
          </div>
          <!--//item-->

          <nav class="blog-nav nav nav-justified my-5">
            <a class="nav-link-prev nav-item nav-link d-none rounded-left" href="#">
              上一页
              <i class="arrow-prev fas fa-long-arrow-alt-left"></i>
            </a>
            <a class="nav-link-next nav-item nav-link rounded" href="blog-list.html">
              下一页
              <i class="arrow-next fas fa-long-arrow-alt-right"></i>
            </a>
          </nav>
        </div>
      </section>
    </div>
    <!--//main-wrapper-->
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: 'Index',
  data () {
    return {
      blogList: [{
        'id': 1,
        'title': '一套基础自动化部署搭建过程1',
        'date': '2019-07-15',
        'visitCount': 120,
        'content': '为了快速搭建一套PHP测试环境我决定用laradock了，虽然文件很多，但是里面封装的东西也是比较全的，后期开发不知道会用到什么技术，就决定先用这个，随时可以启动用得到的服务。laradock官方文档给的介绍也很全面，我这里采用的方式是部署多套项目方式目录结构如下：'
      },
      {
        'id': 2,
        'title': '一套基础自动化部署搭建过程2',
        'date': '2019-07-15',
        'visitCount': 120,
        'content': '为了快速搭建一套PHP测试环境我决定用laradock了，虽然文件很多，但是里面封装的东西也是比较全的，后期开发不知道会用到什么技术，就决定先用这个，随时可以启动用得到的服务。laradock官方文档给的介绍也很全面，我这里采用的方式是部署多套项目方式目录结构如下：'
      }]
    }
  },
  components: { Header }
}
</script>

<style lang="scss" scoped type="text/css">
/* Main wrapper */
.main-wrapper {
  margin-left: 280px;
  background: #fff;
  .container {
    max-width: 820px;
  }
}
.blog-list {
  .item {
    .title {
      font-size: 1.275rem;
      a {
        color: #292929;
        &:hover {
          color: #292929;
        }
      }
    }
    .post-thumb {
      max-width: 110px;
      border-radius: 2px;
    }

    .intro {
      font-size: 0.875rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .more-link {
      font-size: 0.8125rem;
    }
  }
}
.meta {
  color: #8f8f8f;
  font-size: 0.8125rem;
  span {
    display: inline-block;
    a {
      color: #8f8f8f;
      &:hover {
        color: lighten(#8f8f8f, 15%);
      }
    }
    &:after {
      content: "";
      display: inline-block;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: #8f8f8f;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      position: relative;
      top: -3px;
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
  }
}
.btn-primary {
  background: #5ECCA9;
  border: none;
}
.more-link {
  color: #5ECCA9;
}
.blog-nav {
  .nav-link {
    background: #5ECCA9;
    color: #fff;
    font-size: 1rem;
    padding: 1rem;
    font-weight: bold;
    position: relative;
    &:hover {
      background: darken(#5ECCA9, 10%);
    }
  }
  .nav-link-prev {
    border-right: 1px solid darken(#5ECCA9, 20%);
  }
  .arrow-prev {
    position: absolute;
    left: 1rem;
    top: 1.25rem;
    color: #fff;
  }

  .arrow-next {
    position: absolute;
    right: 1rem;
    top: 1.25rem;
    color: #fff;
  }
}

.blog-post {
  .title {
    font-weight: bold;
    font-size: 2rem;
  }
  .blog-post-body {
    p,
    li {
      font-size: 1.125rem;
      line-height: 1.6;
    }
    h1 {
      font-size: 2.125rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1.5rem;
    }
    h5 {
      font-size: 1.25rem;
    }
    h6 {
      font-size: 1.125rem;
    }
  }
  .image-caption {
    color: #292929;
    font-size: 0.875rem;
    a {
      color: #292929;
      text-decoration: underline;
      &:hover {
        color: lighten(#292929, 15%);
      }
    }
  }
  .blockquote {
    font-family: Georgia, "Times New Roman", Times, serif;
    border-left: 2px solid #292929;
    font-size: 1.5rem;
    p {
      font-size: 1.5rem;
    }
  }
}
</style>
<template>
  <header class="header text-center">
    <h1 class="blog-name pt-lg-4 mb-0">
      <a href="index.html">Anthony's Blog</a>
    </h1>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navigation" class="collapse navbar-collapse flex-column">
        <div class="profile-section pt-3 pt-lg-0">
          <img
            class="profile-image mb-3 rounded-circle mx-auto"
            src="../assets/profile.png"
            alt="image"
          />
          <div class="bio mb-3">
            Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page.
            <br />
            <a href="about.html" class="color-text">Find out more about me</a>
          </div>
          <!--//bio-->
          <ul class="social-list list-inline py-3 mx-auto">
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-twitter fa-fw"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-linkedin-in fa-fw"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-github-alt fa-fw"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-stack-overflow fa-fw"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-codepen fa-fw"></i>
              </a>
            </li>
          </ul>
          <!--//social-list-->
          <hr />
        </div>
        <!--//profile-section-->

        <ul class="navbar-nav flex-column text-left">
          <li class="nav-item active">
            <a class="nav-link">
              <i class="fas fa-home fa-fw mr-2"></i>
              <router-link to="index">首页</router-link>
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="blog-post.html">
              <i class="fas fa-bookmark fa-fw mr-2"></i>Blog Post
            </a>
          </!-->
          <li class="nav-item">
            <a class="nav-link">
              <i class="fas fa-user fa-fw mr-2"></i>
              <router-link to="addBlog">添加博客</router-link>
            </a>
          </li>
        </ul>

        <!-- <div class="my-2 my-md-3">
          <a class="btn btn-primary" href="#" target="_blank">Get in Touch</a>
        </div> -->
      </div>
    </nav>
  </header>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped type="text/css">
/* Header */
.header {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 280px;
  background: #5ecca9;
  color: #fff;

  .blog-name {
    font-weight: bold;
    font-size: 1.5rem;
    color: #fff;
    a {
      color: #fff;
      &:hover {
        text-decoration: none;
      }
    }
  }

  .btn-primary {
    background: rgba(0, 0, 0, 0.3);
    border-color: transparent;
    font-size: 1rem;
    padding-top: 0.5rem;
    &:hover {
      background: rgba(0, 0, 0, 0.4);
      border-color: transparent;
    }
  }

  .navbar {
    padding: 2rem 1rem;
  }

  .navbar-dark {
    .navbar-toggler {
      border-radius: 2px;
      opacity: 0.8;
      border: 1px solid rgba(256, 256, 256, 0.8);
      padding: 0.25rem 0.6rem;

      &:hover {
        opacity: 1;
      }
    }

    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(256,256,256, 1)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    }
  }

  .nav-item {
    font-weight: bold;
    .nav-link {
      a {
        color: rgba(0,0,0,0.5);
      }
    }
    .router-link-active {
      color: #fff !important;
  }
  }
  .color-text {
    color: rgba(0,0,0,0.5);
  }
}
</style>
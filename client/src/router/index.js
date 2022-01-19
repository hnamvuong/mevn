import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddPost from "../views/AddPost.vue";
import Post from "../views/Post.vue";
import EditPost from "../views/EditPost.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-post",
    name: "AddPost",
    component: AddPost,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
  },
  {
    path: "/edit-post/:id",
    name: "EditPost",
    component: EditPost,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

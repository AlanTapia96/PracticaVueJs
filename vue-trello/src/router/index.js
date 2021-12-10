import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/views/Home";
import Board from "@/components/views/Board";
import CountButtonPage from "@/components/views/CountButtonPage";
import DogSearchView from "@/components/views/DogSearchView";
import Dog from "@/components/Dog";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/board/:id",
      name: "board",
      component: Board,
      props: true
    },
    {
      path: "/countButtonPage",
      name: "countPage",
      component: CountButtonPage
    },
    { path: "/DogSearchView", name: "DogSearchView", component: DogSearchView },
    { path: "/Dog/:breed", name: "DogDetail", component: Dog }
  ]
});

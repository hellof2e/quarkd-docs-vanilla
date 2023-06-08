<template>
  <quark-doc-header></quark-doc-header>

  <doc-nav :fixed="fixed"></doc-nav>

  <div :class="{ 'pr-390': isShow() }" class="doc-content" id="doc-content">
    <div class="doc-content-document">
      <router-view />
    </div>

    <doc-demo-preview
      v-show="isShow()"
      :url="demoUrl"
      :class="{ fixed: fixed }"
      :fixed="fixed"
      type="vue"
    ></doc-demo-preview>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { demoUrl as defaultUrl, nav } from "@/config/index";
import {
  onBeforeRouteUpdate,
  RouteLocationNormalized,
  useRoute,
} from "vue-router";
import Nav from "@/components/Nav.vue";
import DemoPreview from "@/components/DemoPreview.vue";
import "quark-doc-header/lib/index";

export default defineComponent({
  name: "doc",
  components: {
    [Nav.name]: Nav,
    [DemoPreview.name]: DemoPreview,
  },
  setup() {
    const isZhLang = localStorage.getItem("language") === "zh-CN";
    const route = useRoute();
    // const router = useRouter();
    const state = reactive({
      fixed: false, // 是否吸顶
      hidden: false, // 是否隐藏
      // 组件名称
      componentName: {
        name: "",
        cName: "",
      },
    });

    const data = reactive({
      demoUrl: "demo.html",
      tabs: [
        {
          key: "vue",
          text: "vue",
        },
        {
          key: "react",
          text: "react",
        },
      ],
    });

    const isShow = () => {
      return !(route.path.includes("guide") || route.path.includes("pages"));
    };

    const watchDemoUrl = (router: RouteLocationNormalized) => {
      data.demoUrl = `${demoUrl}/${router.path
        .toLocaleLowerCase()
        .split("/")
        .pop()}?lang=${localStorage.getItem("language")}`;
    };

    const isReact = (router: RouteLocationNormalized) => {
      return router.path.indexOf("react") > -1;
    };

    onMounted(async () => {
      componentTitle();
      watchDemoUrl(route);
      document.addEventListener("scroll", scrollTitle);
    });

    const scrollTitle = () => {
      let top = document.documentElement.scrollTop;
      if (top > 127) {
        state.fixed = true;
        if (top < 142) {
          state.hidden = true;
        } else {
          state.hidden = false;
        }
      } else {
        state.fixed = false;
        state.hidden = false;
      }
    };

    // 获得组件名称
    const componentTitle = (to?: any) => {
      let routename = "";
      if (to?.name) {
        routename = to.path.toLocaleLowerCase().split("/").pop() || "";
      } else {
        routename = route.path.toLocaleLowerCase().split("/").pop() || "";
      }

      state.componentName.name = routename.indexOf("-react")
        ? routename.split("-").shift()
        : routename;
      nav.forEach((i: any) => {
        i.packages.forEach((item: any) => {
          if (item.name.toLowerCase() == state.componentName.name) {
            state.componentName.name = item.name;
            state.componentName.cName = item.cName;
            return;
          }
        });
      });
    };

    onBeforeRouteUpdate((to) => {
      watchDemoUrl(to);
      componentTitle(to);
      document.getElementById("doc-content")?.scrollTo({ top: 0 });
    });

    const demoUrl =
      import.meta.env.VITE_ENV === "dev"
        ? "https://quark-design.hellobike.com/demo/demo.html#"
        : defaultUrl;

    return {
      ...toRefs(state),
      ...toRefs(data),
      isShow,
      isZhLang,
    };
  },
});
</script>
<style lang="scss" scoped>
.doc-content {
  overflow: auto;
  display: flex;
  flex-direction: column;
  margin-left: 260px;
}
.pr-390 {
  padding-right: 390px;
}
</style>

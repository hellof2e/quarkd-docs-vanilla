<template>
  <div v-if="isShowSideBar()" class="doc-nav" :class="{ 'fixed-class': fixed }">
    <!-- Docs' nav -->
    <ol class="side-bar" v-if="isGuideNav">
      <ul>
        <li
          :class="{ active: isActive(_package.name) }"
          v-for="_package in docs.packages"
          :key="_package"
          v-show="_package.show"
        >
          <router-link :to="_package.name.toLowerCase()">
            {{ isZhLang ? _package.cName : _package.name }}
          </router-link>
        </li>
      </ul>
    </ol>

    <!-- Components' nav -->
    <template v-else>
      <ol class="side-bar" v-for="_nav in nav" :key="_nav">
        <li>{{ isZhLang ? _nav.name : _nav.enName }}</li>
        <ul>
          <template
            :class="{ active: isActive(_package.name) }"
            v-for="_package in reorder(_nav.packages)"
            :key="_package"
          >
            <li v-if="_package.show">
              <router-link
                :to="_package.name.toLowerCase()"
                :class="{ active: isActive(_package.name) }"
              >
                {{ _package.name }}&nbsp;&nbsp;<b v-if="isZhLang">{{
                  _package.cName
                }}</b>
              </router-link>
            </li>
          </template>
        </ul>
      </ol>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted, toRefs } from "vue";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
import { RefData } from "@/assets/util/ref";
import { nav, docs } from "@/config";

export default defineComponent({
  name: "DocNav",
  props: {
    fixed: Boolean,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      // fixed: false,
      isGuideNav: false,
    });

    const data = reactive({
      demoUrl: "demo.html",
    });

    const isShow = () => {
      return !route.path.includes("guide");
    };

    const isShowSideBar = () => {
      return !route.path.includes("pages");
    };

    const isActive = computed(() => {
      return function (name: string) {
        const currentValue = RefData.getInstance().currentRoute.value;
        const value = currentValue;
        return value == name.toLowerCase();
      };
    });

    const reorder = (packages: any) => {
      return packages.sort(function (x: any, y: any) {
        return x["name"].localeCompare(y["name"]);
      });
    };

    onMounted(() => {
      if (route.path) getIsGuaid(route.path);
    });

    const getIsGuaid = (path: string) => {
      state.isGuideNav = path.indexOf("guide") > -1;
    };

    onBeforeRouteUpdate((to: any) => {
      getIsGuaid(to.path);
    });

    return {
      ...toRefs(data),
      ...toRefs(state),
      isZhLang: localStorage.getItem("language") === "zh-CN",
      isActive,
      nav: reactive(nav),
      docs: reactive(docs),
      reorder,
      isShow,
      isShowSideBar,
    };
  },
});
</script>

<style lang="scss">
.doc-nav {
  bottom: 0px;
  left: 0px;
  z-index: 10;
  width: 260px;
  position: fixed;
  top: 75px;
  overflow: auto;
  transition: all 150ms;

  &.fixed-class {
    top: 0;
  }
  ol {
    margin-bottom: 20px;
    padding-left: 32px;

    li {
      font-size: 14px;
      font-weight: bold;
      position: relative;

      &.active {
        &::before {
          position: absolute;
          content: "";
          left: 0;
          top: 50%;
          width: 22px;
          margin-top: -5px;
          height: 10px;
          transform: rotate(90deg);
        }
      }
    }

    > ul {
      padding-left: 26px;

      li {
        /* padding-left: 29px; */
        cursor: pointer;

        &:hover {
          a {
            color: #646cff;
          }
        }

        a {
          height: 48px;
          line-height: 48px;
          display: flex;

          &.router-link-active,
          &.active {
            color: #646cff;
          }

          b {
            font-weight: normal;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>

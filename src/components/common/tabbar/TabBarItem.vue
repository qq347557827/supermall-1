<template>
  <!--总结：slot不要写条件语句，模板渲染会将整个slot标签替换 
      在外边包裹一层标签
  -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="avtiveStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>


export default {
  name: "TabBarItem",
  props: {
    path:String,
    activeColor:{
      type: String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive() {
     
      //return this.$route.path.indexOf(this.path) !== -1

      return this.$route.path === this.path
    },
    avtiveStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

/* .active {
  color: red;
} */
</style>
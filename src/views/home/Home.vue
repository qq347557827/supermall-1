<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <child-swiper :banners="banners"></child-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import childSwiper from './childComs/HomeSwiper'
import RecommendView from './childComs/RecommendView'

import { getHomeMultidata } from 'network/home'


export default {
  name: 'Home',
  components: {
    NavBar,
    childSwiper,
    RecommendView
  },
  data() {
    return {
      // result: null
      banners: [],
      recommends: []
    }
  },
  created() {
    //1.请求多个数据
    getHomeMultidata()
      .then(res => {
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;

        // console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: var(--color-background);
}
</style>
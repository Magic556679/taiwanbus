<template>
  <div class="bar rounded-pill bg-busgreen w-100"></div>
  <div class="container">
    <div class="row mt-3">
      <div class="col-12">
        <h1 class="text-busgreen">公車動態</h1>
        <h5>指定公車路線，查看公車途經站牌及動態</h5>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12">
        <h5 class="text-green">路線名稱或關鍵字</h5>
        <input type="text" placeholder="請輸入關鍵字" v-model="searchKeyWord" />
        <!-- <div class="buttonNum">
          <button></button>
        </div> -->
        <div class="row">
          <div class="col-lg-12 col-12">
            <button>紅線</button>
            <button>幹線</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
          <div class="col-lg-12 col-12">
            <button>黃</button>
            <button>小</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
          </div>
          <div class="col-lg-12 col-12">
            <button>藍</button>
            <button>棕</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
          </div>
          <div class="col-lg-12 col-12">
            <button>綠</button>
            <button>橘</button>
            <button>0</button>
            <button>Del</button>
          </div>
        </div>
      </div>
      <div class="col-12 mt-3 text-center">
        <button type="button" class="btn btn-busgreen text-white" @click="search">搜尋</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      keyBoard: {
        a: {
          name: 'a',
          id: Math.floor(Math.random() * 1000),
        },
      },
      keyBoard2: ['紅線', '幹線', '1', '2', '3', '黃', '小', '4', '5', '6', '藍', '棕', '7', '8', '9', '綠橘', '0', 'Del'],
    };
  },
  methods: {
    search() {},
  },
  watch: {},
};
</script>

<style scoped lang="scss">
@import '@/assets/all';

.bar {
  height: 10px;
}
</style>

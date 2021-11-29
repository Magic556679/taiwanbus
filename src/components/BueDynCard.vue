<template>
  <div class="bar rounded-pill bg-busgreen w-100"></div>
  <div class="container">
    <div class="row mt-3">
      <div class="col-12">
        <h1 class="text-busgreen">公車動態</h1>
        <h3>指定公車路線，查看公車途經站牌及動態</h3>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12">
        <h5 class="text-green">路線名稱或關鍵字</h5>
        <input type="text" placeholder="請輸入關鍵字" />
      </div>
      <div class="col-12 mt-3 text-center">
        <button type="button" class="btn btn-busgreen text-white">搜尋</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/all";

.bar {
  height: 10px;
}
</style>

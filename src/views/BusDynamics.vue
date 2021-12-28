/* eslint-disable no-proto */ /* eslint-disable no-dupe-keys */
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-12">
        <BueDynCard></BueDynCard>
      </div>
      <div class="col-lg-9 col-12">
      </div>
    </div>
  </div>
</template>

<script>
import jsSHA from 'jssha';
import { mapState } from 'vuex';
import BueDynCard from '@/components/BueDynCard.vue';

export default {
  components: {
    BueDynCard,
  },
  data() {
    return {
      popularPostsData: {
        displayNote: [],
        spanNote: [],
        timeArea: '',
        suggestion: [],
      },
    };
  },
  methods: {
    getAuthorizationHeader() {
      const AppID = '5b92a1059adc479db7aac18c4913150a';
      const AppKey = 'IZj0rm4jFCuk7Yl_DrfEZrs48Lw';
      const GMTString = new Date().toGMTString();
      const ShaObj = new jsSHA('SHA-1', 'TEXT');
      ShaObj.setHMACKey(AppKey, 'TEXT');
      ShaObj.update(`x-date: ${GMTString}`);
      const HMAC = ShaObj.getHMAC('B64');
      const Authorization = `hmac username=\"${AppID}\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"${HMAC}\"`;
      return { Authorization, 'X-Date': GMTString };
    },
    verify() {
      const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$top=${30}&$skip=${0}&$format=JSON`;
      this.$http
        .get(url, { headers: this.getAuthorizationHeader() })
        .then((res) => {
          // this.place = res.data;
          // this.pagination();
          console.log(res);
        })
        .catch(() => {
          console.log('失敗');
        });
    },
  },
  computed: {
    dataFilter() {
      return this.popularPostsData.data;
    },
    ...mapState({
      storData: 'data',
    }),
  },
  created() {
    this.verify();
  },
};
</script>
<style lang="scss" scoped>
// @import "@/assets/all";
h1 {
  color: $text-h1-color;
}
</style>

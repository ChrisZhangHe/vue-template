<template>
  <div>
    双屏 地图界面
    <alert-list></alert-list>
  </div>
</template>
<script>
const mainPageBC = new BroadcastChannel("zhdd_channel");

export default {
  name: "OtherPage",
  data() {
    return {};
  },
  provide() {
    return {
      mainPageBC: mainPageBC
    };
  },
  components: {
    AlertList: () => import("@views/mainPageLeft/alertList.vue")
  },
  methods: {
    init() {
      mainPageBC.onmessage = ev => {
        switch (ev.data.type) {
          case "mutation":
            this.$store.commit(ev.data.param.path, ev.data.param.data);
            break;
        }
      };
    }
  },
  created() {
    this.init();
  }
};
</script>

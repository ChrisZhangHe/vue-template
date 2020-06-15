/* eslint-disable */
<template>
  <div>
    双屏 操作界面
    <other-page-alert-monitor></other-page-alert-monitor>
  </div>
</template>
<script>
const otherPageBC = new BroadcastChannel("zhdd_channel");

export default {
  name: "OtherPage",
  data() {
    return {};
  },
  provide() {
    return {
      otherPageBC: otherPageBC
    };
  },
  components: {
    otherPageAlertMonitor: () => import("@views/otherPageAlertMonitor/index.vue")
  },
  methods: {
    init() {
      otherPageBC.onmessage = ev => {
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

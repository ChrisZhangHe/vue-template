<template>
  <div>获取到的警情ID:{{ AlertId }}</div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("otherPage");

export default {
  name: "OtherPageAlertMonitor",
  computed: {
    ...mapState({
      AlertId: state => state.AlertId
    })
  },
  watch: {
    AlertId(val, oldVal) {
      console.log(val, oldVal);
    }
  },
  created() {}
};
</script>

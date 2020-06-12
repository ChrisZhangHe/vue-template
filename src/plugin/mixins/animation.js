export default {
  methods: {
    numberAnimation(prop, start, end) {
      const obj = {};
      obj[prop] = start;
      const _ = this;
      window.TweenLite.to(obj, 1, {
        [prop]: end,
        onUpdate() {
          _[prop] = obj[prop].toFixed(0);
        }
      });
    }
  }
};

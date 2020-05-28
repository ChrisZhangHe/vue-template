const filters = {
  install(Vue) {
    Vue.filter("capitalize", value => {
      if (!value) return "";
      return (
        value
          .toString()
          .charAt(0)
          .toUpperCase() + value.slice(1)
      );
    });
  }
};

export default filters;

<template>
  <div>
    <avue-crud
      :data="data"
      :option="option"
      @row-save="rowSave"
      @row-update="rowUpdate"
      @error="error"
    ></avue-crud>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          name: "张三",
          sex: "男"
        },
        {
          name: "李四",
          sex: "女"
        }
      ],
      option: {
        page: false,
        align: "center",
        menuAlign: "center",
        column: [
          {
            label: "姓名",
            prop: "name",
            rules: [
              {
                required: true,
                message: "请输入姓名",
                trigger: "blur"
              }
            ]
          },
          {
            label: "性别",
            prop: "sex",
            rules: [
              {
                required: true,
                message: "请输入性别",
                trigger: "blur"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    error() {
      this.$message.success("请查看控制台");
      // eslint-disable-line no-console
      // console.error(err);
      // alert;
    },
    rowSave(form, done) {
      //   this.$message.success("新增数据" + JSON.stringify(form));
      done();
    },
    rowUpdate(form, index, done) {
      //   this.$message.success("编辑数据" + JSON.stringify(form) + "数据序号" + index);
      done();
    }
  }
};
</script>

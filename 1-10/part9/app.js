var app = Vue.createApp({
  data() {
    return {
      activeClass: "red"
    };
  },

  methods: {
    setClass(className) {
      this.activeClass = className;
    }
  }
});

app.mount("#app");

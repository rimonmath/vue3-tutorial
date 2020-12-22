var app = Vue.createApp({
  data() {
    return {
      count: 0
    };
  },

  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    }
  }
});

app.mount("#app");

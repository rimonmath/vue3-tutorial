var app = Vue.createApp({
  data() {
    return {
      count: 0
    };
  },

  methods: {
    increase(evt, amount) {
      this.count = this.count + amount;
      console.log(evt);
    },
    decrease(amount) {
      this.count = this.count - amount;
    },
    test(ev) {
      console.log("test");
      console.log(ev);
    }
  }
});

app.mount("#app");

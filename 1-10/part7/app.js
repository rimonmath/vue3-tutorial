var app = Vue.createApp({
  data() {
    return {
      name: ""
    };
  },

  methods: {
    handleKeyup(e) {
      this.name = e.target.value;
    },

    handleFormSubmit() {
      console.log("Form submitted!");
    },

    handleCardClick(e) {
      console.log(e);
      console.log("Card clicked!");
    },

    handleViewClick(e) {
      console.log(e);
      console.log("View clicked!");
    }
  }
});

app.mount("#app");

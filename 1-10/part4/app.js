var app = Vue.createApp({
  data() {
    return {
      tutorialInfo: {
        name: "Vue JS 3 Bangla Tutorial",
        githubLink: "https://github.com/rimonmath/vue3-tutorial"
      },
      htmlCode:
        '<a href="https://github.com/rimonmath/vue3-tutorial">Github</a>'
    };
  }
});

app.mount("#app");

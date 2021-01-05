var app = Vue.createApp({
  data() {
    return {
      aboutMe: {
        name: "Mamunur Rashid",
        nickName: "Rimon",
        website: "https://rimonbd.com"
      },

      skills: [
        { name: "HTML", experience: 5 },
        { name: "CSS", experience: 10 },
        { name: "JS", experience: 15 }
      ]
    };
  },

  methods: {}
});

app.mount("#app");

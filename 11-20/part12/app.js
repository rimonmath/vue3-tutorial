var app = Vue.createApp({
  data() {
    return {
      aboutMe: {
        name: "Mamunur Rashid"
      },
      skills: [
        { name: "HTML", experience: 5 },
        { name: "CSS", experience: 10 },
        { name: "JS", experience: 15 }
      ],
      newSkill: { name: "", experience: 0 }
    };
  },

  methods: {
    addSkill() {
      this.skills.push(this.newSkill);
      this.newSkill = {};
    },
    removeSkill(i) {
      this.skills.splice(i, 1);
    }
  }
});

app.mount("#app");

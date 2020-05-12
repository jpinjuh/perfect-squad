<template>
  <v-container class="main fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="card pa-8" elevation="12">
          <v-container class="pitch pa-0" fill-height>
            <PitchPlayer v-for="n in 11" :key="n" :style="setPosition(n)" />
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PitchPlayer from "@/components/PitchPlayer";

export default {
  name: "Home",
  components: {
    PitchPlayer
  },
  data: () => ({
    visible: false,
    formation1: {
      name: "4-2-2-2",
      bottoms: [
        "1%",
        "16%",
        "16%",
        "23%",
        "23%",
        "47%",
        "47%",
        "54%",
        "54%",
        "77%",
        "77%"
      ],
      lefts: [
        "46%",
        "34%",
        "58%",
        "7%",
        "83%",
        "34%",
        "58%",
        "7%",
        "83%",
        "34%",
        "58%"
      ]
    },
    formation2: {
      name: "4-4-2",
      bottoms: [
        "1%",
        "16%",
        "16%",
        "23%",
        "23%",
        "34%",
        "47%",
        "47%",
        "47%",
        "77%",
        "77%"
      ],
      lefts: [
        "46%",
        "34%",
        "58%",
        "7%",
        "83%",
        "46%",
        "46%",
        "26%",
        "65%",
        "34%",
        "58%"
      ]
    },
    formation3: {
      name: "4-1-3-2",
      bottoms: [
        "1%",
        "16%",
        "16%",
        "23%",
        "23%",
        "34%",
        "65%",
        "54%",
        "54%",
        "77%",
        "77%"
      ],
      lefts: [
        "46%",
        "34%",
        "58%",
        "7%",
        "83%",
        "46%",
        "46%",
        "7%",
        "83%",
        "34%",
        "58%"
      ]
    },
    formation4: {
      name: "4-3-3",
      bottoms: [
        "1%",
        "16%",
        "16%",
        "23%",
        "23%",
        "34%",
        "47%",
        "47%",
        "65%",
        "65%",
        "77%"
      ],
      lefts: [
        "46%",
        "34%",
        "58%",
        "7%",
        "83%",
        "46%",
        "34%",
        "58%",
        "7%",
        "83%",
        "46%"
      ]
    },
    formation5: {
      name: "4-2-1-3",
      bottoms: [
        "1%",
        "16%",
        "16%",
        "23%",
        "23%",
        "34%",
        "47%",
        "65%",
        "65%",
        "65%",
        "77%"
      ],
      lefts: [
        "46%",
        "34%",
        "58%",
        "7%",
        "83%",
        "46%",
        "46%",
        "46%",
        "7%",
        "83%",
        "46%"
      ]
    },
    formation6: {
      name: "5-3-2",
      bottoms: [
        "1%",
        "16%",
        "16%",
        "16%",
        "23%",
        "23%",
        "34%",
        "47%",
        "47%",
        "77%",
        "77%"
      ],
      lefts: [
        "46%",
        "46%",
        "26%",
        "65%",
        "83%",
        "7%",
        "46%",
        "34%",
        "58%",
        "34%",
        "58%"
      ]
    },
    formation7: {
      name: "3-3-2-2",
      bottoms: [
        "1%",
        "16%",
        "16%",
        "16%",
        "54%",
        "54%",
        "34%",
        "47%",
        "47%",
        "77%",
        "77%"
      ],
      lefts: [
        "46%",
        "46%",
        "26%",
        "65%",
        "83%",
        "7%",
        "46%",
        "34%",
        "58%",
        "34%",
        "58%"
      ]
    }
  }),
  methods: {
    setPosition(n) {
      return `bottom: ${this.formation7.bottoms[n - 1]}; left: ${
        this.formation7.lefts[n - 1]
      }`;
    }
  }
};
</script>

<style>
.card {
  height: 510px;
  background: url("../assets/football-pitch1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.main {
  height: 90vh;
}

.pitch {
  position: relative;
}
</style>

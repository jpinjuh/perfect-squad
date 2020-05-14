<template>
  <v-container class="main fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="card pa-8" elevation="12">
          <v-container class="pitch pa-0" fill-height>
            <PitchPlayer
              @open-popup="visible = true"
              v-for="n in 11"
              :key="n"
              :style="setPosition(n)"
            />
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <PossiblePlayersPopup @close-popup="visible = false" v-if="visible" />
  </v-container>
</template>

<script>
import PitchPlayer from "@/components/PitchPlayer";
import PossiblePlayersPopup from "@/components/PossiblePlayersPopup";

export default {
  name: "Home",
  components: {
    PitchPlayer,
    PossiblePlayersPopup
  },
  data: () => ({
    visible: false
  }),
  methods: {
    setPosition(n) {
      if (this.$store.getters.formations) {
        return `bottom: ${
          this.$store.getters.formations.bottoms[n - 1]
        }; left: ${this.$store.getters.formations.lefts[n - 1]}`;
      }
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

<template>
  <v-container class="main fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="card pa-8" elevation="12">
          <v-container
            v-if="formations.length !== 0"
            class="pitch pa-0"
            fill-height
          >
            <PitchPlayer
              @open-popup="openPopup(formation.id, formation.name)"
              v-for="formation in formations"
              :key="formation.id"
              :positionName="formation.name"
              :positionId="formation.id"
              :style="setPosition(formation.id)"
            />
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <PossiblePlayersPopup
      @close-popup="visible = false"
      :popup-data="popupData"
      v-if="isSelected"
    />
  </v-container>
</template>

<script>
import PitchPlayer from "@/components/PitchPlayer";
import PossiblePlayersPopup from "@/components/PossiblePlayersPopup";

export default {
  name: "Favorites",
  components: {
    PitchPlayer,
    PossiblePlayersPopup
  },
  data: () => ({
    visible: false,
    popupData: {}
  }),
  computed: {
    formations() {
      return this.$store.getters.formations;
    },
    isSelected() {
      return this.$store.state.isFavoriteSelected;
    }
  },
  methods: {
    setPosition(n) {
      return `bottom: ${this.formations[n].bottom}; 
              left: ${this.formations[n].left}`;
    },
    openPopup(positionId, positionName) {
      this.visible = true;
      this.$store.dispatch("updateIsFavoriteSelected");
      this.popupData = { positionId, positionName };
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

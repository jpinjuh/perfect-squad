<template>
  <div
    id="position-circle"
    @click="
      $emit('open-popup');
      setItem();
    "
  >
    <v-card
      v-if="!!player"
      elevation="0"
      class="d-flex align-center justify-center"
      id="popover"
    >
      <v-container pa-0>
        <v-row class="ma-0">
          <v-col class="pa-0 d-flex justify-center">
            <img
              @click="
                setItem();
                $emit('open-popup');
              "
              class="player-img"
              :src="player.formationPicture"
            />
          </v-col>
        </v-row>
        <v-row class="ma-0">
          <v-col class="pa-0 d-flex justify-center">
            <v-card class="pa-1 body-2 text-no-wrap">{{
              player.lastName || player.name
            }}</v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "PitchPlayer",
  components: {},
  data: () => ({
    favoritePlayer: {}
  }),
  computed: {
    player() {
      return this.$store.getters.getFavorite(this.positionId);
    }
  },
  methods: {
    setItem() {
      localStorage.setItem("positionName", this.positionName);
      localStorage.setItem("positionId", this.positionId);
    }
  },
  props: ["positionName", "positionId"]
};
</script>

<style>
#position-circle {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #1f1f1f;
  border: 1px solid red;
}

#popover {
  position: absolute;
  background-color: transparent;
  top: 50%;
  left: 50%;
  max-width: 1000px;
  transform: translate(-50%, -50%);
}

.player-img {
  background-position: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-size: cover;
  background-color: #b3b3b3;
  cursor: pointer;
}
</style>

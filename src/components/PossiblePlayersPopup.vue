<template>
  <div class="possible-players overflow-y-auto">
    <div>
      <v-row no-gutters>
        <v-col>
          <v-card
            class="pa-0 text-center headline"
            elevation="0"
            color="#ebebeb"
            outlined
            tile
          >
            AM
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-card
            class="pa-0 text-center title"
            elevation="0"
            color="#b3b3b3"
            outlined
            tile
          >
            Popularity
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-0 text-center title"
            elevation="0"
            color="#b3b3b3"
            outlined
            tile
          >
            Value
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-0 text-center title"
            elevation="0"
            color="#b3b3b3"
            outlined
            tile
          >
            Age
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-layout>
      <v-expansion-panels multiple :value="openedPanels" tile readonly>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="3"
              v-for="player in players"
              :key="player.id"
            >
              <Player :player="player" :favorite="isFavorite(player.id)" />
            </v-col>
          </v-row>
        </v-container>
      </v-expansion-panels>
    </v-layout>
    <div></div>
    <v-btn
      color="#b3b3b3"
      dark
      fixed
      large
      bottom
      fab
      :style="{ left: '50%', transform: 'translateX(-50%)' }"
      @click="$emit('close-popup')"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script>
import Player from "@/components/Player.vue";

export default {
  name: "App",
  components: {
    Player
  },

  data: () => ({
    //
  }),
  methods: {
    isFavorite(id){
      if(this.favorite){
        return this.favorite.id === id
      }
      return false;
    }
  },
  computed: {
    players() {
      return this.$store.getters.getByPitchPosition(this.popupData.positionName);
    },
    favorite() {
      return this.$store.getters.getFavorite(this.popupData.positionId);
    },
    openedPanels() {
      let opened = [];

      for (let i = 0; i < this.players.length; i++) {
        opened.push(i);
      }
      return opened;
    }
  },
  props: ['popupData']
};
</script>

<style>
.possible-players {
  min-height: 100vh;
  background-image: url("../assets/perfect-squad-bg.jpg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  position: fixed;
  margin-top: 65px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>

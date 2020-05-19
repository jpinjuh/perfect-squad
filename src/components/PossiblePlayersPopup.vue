<template>
  <div class="possible-players overflow-y-auto">
    <div>
      <v-row no-gutters>
        <v-col>
          <v-card
            class="pa-1 text-center headline"
            elevation="0"
            color="#ebebeb"
            outlined
            tile
          >
            {{ popupData.positionName }}
          </v-card>
        </v-col>
      </v-row>
      <v-tabs hide-slider grow background-color="#b3b3b3">
        <v-tab @click="sortValue = 1" class="title">
          Popularity
        </v-tab>
        <v-tab @click="sortValue = 2" class="title">
          Value
        </v-tab>
        <v-tab @click="sortValue = 3" class="title">
          Age
        </v-tab>
      </v-tabs>
    </div>
    <v-layout>
      <v-expansion-panels multiple :value="openedPanels" tile readonly>
        <v-container pt-12>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="3"
              v-for="player in sortPlayers(sortValue)"
              :key="player.id"
            >
              <Player :player="player" :favorite="isFavorite(player.id)" />
            </v-col>
          </v-row>
        </v-container>
      </v-expansion-panels>
    </v-layout>
    <div class="pt-8"></div>
    <!-- <v-btn
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
    </v-btn> -->
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
    sortValue: 1
  }),
  methods: {
    isFavorite(id) {
      if (this.favorite) {
        return this.favorite.id === id;
      }
      return false;
    },
    sortPlayers(sortValue) {
      switch (sortValue) {
        case 1:
          return this.sortByPopularity();
        case 2:
          return this.sortByValue();
        case 3:
          return this.sortByAge();
        default:
          console.log("Sorting failed!");
          break;
      }
    },
    sortByPopularity() {
      const sortedArray = this.players.sort((a, b) => {
        return b.popularity - a.popularity;
      });

      return sortedArray;
    },
    sortByValue() {
      const sortedArray = this.players.sort((a, b) => {
        return ("" + b.stats.value).localeCompare(a.stats.value);
      });

      return sortedArray;
    },
    sortByAge() {
      const sortedArray = this.players.sort((a, b) => {
        return b.age - a.age;
      });

      return sortedArray;
    }
  },
  computed: {
    players() {
      return this.$store.getters.getByPitchPosition(
        this.popupData.positionName
      );
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
  props: ["popupData"]
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
  margin-top: 55px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>

<template>
  <div class="player">
    <v-expansion-panel class="mb-4 elevation-12">
      <v-expansion-panel-header
        class="pa-0 px-2"
        color="#ebebeb"
        :hide-actions="true"
      >
        <v-row class="ma-0" fluid align="center">
          <v-col class="pa-0 d-flex ">
            <v-btn @click="favoritize(player)" icon>
              <v-icon :color="favorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6" class="pa-0">
            <v-card-text class="pa-0 text-center subtitle-1">
              {{ player.name }} {{ player.lastName }}
            </v-card-text>
          </v-col>
          <v-col class="pa-0">
            <v-card-text
              :style="{ color: color }"
              class="pa-0 text-right title"
            >
              {{ player.stats.position }}
            </v-card-text>
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="pa-0 ma-0">
        <v-dialog v-model="dialog" width="70vw">
          <template v-slot:activator="{ on }">
            <v-card v-on="on" color="#ebebeb" tile class="elevation-0">
              <v-img :src="player.playerPicture" height="200"></v-img>
              <v-card-subtitle class="pa-2 body-1">
                <v-row class="ma-0" fluid align="center">
                  <img :src="player.teamCrest" />
                  <span class="ml-2">{{ player.stats.club }}</span>
                </v-row>
              </v-card-subtitle>
            </v-card>
          </template>
          <PlayerDetails
            :color="color"
            @close-dialog="dialog = false"
            :id="player.id"
          />
        </v-dialog>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
import PlayerDetails from "@/components/PlayerDetails.vue";

export default {
  name: "Player",
  components: {
    PlayerDetails
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    favoritize(player) {
      if (this.$route.path === "/favorites") {
        const positionId = localStorage.getItem("positionId"),
          formationType = localStorage.getItem("formationType");

        if (!this.favorite) {
          this.$store.dispatch("addFavorite", {
            positionId,
            player,
            formationType
          });
        } else {
          this.$store.dispatch("removeFavorite", {
            positionId,
            player,
            formationType
          });
        }
      } else {
        console.log("Favorites only can be chosen on the pitch!");
      }
    }
  },
  props: ["player", "color", "favorite"]
};
</script>

<style>
.v-expansion-panel-content__wrap {
  padding: 0 !important;
}

.v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 48px !important;
}
</style>

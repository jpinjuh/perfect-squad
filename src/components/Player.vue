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
            <v-btn @click="position.isFavorite = !position.isFavorite" icon>
              <v-icon :color="position.isFavorite ? 'red' : '#b3b3b3'"
                >mdi-heart</v-icon
              >
            </v-btn>
          </v-col>
          <v-col cols="6" class="pa-0">
            <v-card-text class="pa-0 text-center subtitle-1">
              Luka Modrić
            </v-card-text>
          </v-col>
          <v-col :style="{ color: position.color }" class="pa-0">
            <v-card-text class="pa-0 text-right title">
              {{ position.name }}
            </v-card-text>
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="pa-0 ma-0">
        <PlayerDetails />
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
  props: ["position"]
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

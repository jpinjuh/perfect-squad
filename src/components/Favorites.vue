<template>
  <v-container pa-0 fill-height>
    <v-container pa-0>
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
    </v-container>
    <v-layout>
      <v-expansion-panels class="d-block" multiple :value="[0,1,2,3,4,5,6,7]" tile>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="3" v-for="n in 4" :key="n">
              <Player :position="positions[0]" />
            </v-col>
          </v-row>
        </v-container>
      </v-expansion-panels>
    </v-layout>
  </v-container>
</template>

<script>
import Player from "@/components/Player.vue";

export default {
  name: "Favorites",
  components: {
    Player
  },
  data: () => ({
    positions: [
      { name: "GK", players: 2, isFavorite: true, color: "#54688e" }
    ],
    arr: []
  })
};
</script>

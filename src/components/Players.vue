<template>
  <v-container pa-0>
    <v-row no-gutters>
      <v-col
        v-for="(position, index) in positions"
        :key="index"
        cols="12"
        lg="3"
        md="6"
        sm="6"
      >
        <v-card
          class="pa-2 mb-12 text-center title"
          elevation="2"
          border="right"
          color="#ebebeb"
          outlined
          tile
        >
          {{ position.name }}
        </v-card>
        <v-container px-4 py-0>
          <v-expansion-panels class="d-block" tile>
            <Player :position="position" v-for="n in position.players" :key="n" />
          </v-expansion-panels>
        </v-container>
      </v-col>
    </v-row>
    <v-row v-for="player in players" :key="player.name">
      {{player.name}}
    </v-row>
  </v-container>
</template>

<script>
import Player from "@/components/Player.vue";

export default {
  name: "Players",
  components: {
    Player
  },
  data: () => ({
    positions: [
      { name: "GK", players: 2, isFavorite: true, color: "#54688e" },
      { name: "DEF", players: 8, isFavorite: false, color: "#471321" },
      { name: "MID", players: 6, isFavorite: true, color: "#0b8227" },
      { name: "ATT", players: 4, isFavorite: false, color: "#cdcf32" }
    ]
  }),
  computed: {
    players() {
      return this.$store.getters.players;
    }
  },
};
</script>

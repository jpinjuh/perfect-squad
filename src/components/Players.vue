<template>
  <v-container pa-0>
    <v-row no-gutters>
      <v-col
        v-for="(position, index) in players"
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
            <Player
              v-for="player in position.players"
              :key="player.id"
              :player="player"
              :color="position.color"
            />
          </v-expansion-panels>
        </v-container>
      </v-col>
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
    //
  }),
  computed: {
    players() {
      return [
        { name: "GK", players: this.$store.getters.getGks, color: "#54688e" },
        { name: "DEF", players: this.$store.getters.getDefs, color: "#471321" },
        { name: "MID", players: this.$store.getters.getMids, color: "#0b8227" },
        { name: "ATT", players: this.$store.getters.getAtts, color: "#cdcf32" }
      ];
    }
  }
};
</script>

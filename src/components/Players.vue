<template>
  <v-container pa-0>
    <v-row no-gutters>
      <v-col
        v-for="(position, index) in positions"
        :key="index"
        cols="12"
        md="3"
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
          <v-card
            v-for="n in position.players"
            :key="n"
            elevation="12"
            class="mb-4 text-center"
            color="#ebebeb"
            outlined
            tile
          >
            <v-container py-0 px-2>
              <v-row class="ma-0" fluid align="center">
                <v-col class="pa-0 d-flex ">
                  <v-btn icon>
                    <v-icon color="#b3b3b3">mdi-heart</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="6" class="pa-0">
                  <v-card-text class="pa-0 text-center subtitle-1">
                    Luka Modrić
                  </v-card-text>
                </v-col>
                <v-col class="pa-0">
                  <v-card-text class="pa-0 text-right title">
                    {{ position.name }}
                  </v-card-text>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Players",
  components: {},
  data: () => ({
    positions: [
      { name: "GK", players: 2 },
      { name: "DEF", players: 8 },
      { name: "MID", players: 6 },
      { name: "ATT", players: 4 }
    ]
  })
};
</script>

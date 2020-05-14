<template>
  <nav>
    <v-toolbar dark fixed>
      <v-container>
        <v-row justify="center" no-gutters>
          <v-col class="d-flex align-center">
            <v-toolbar-title>Perfect Squad</v-toolbar-title>
          </v-col>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn class="text-capitalize mr-4" text to="/">
              Home
            </v-btn>
            <v-btn class="text-capitalize mr-4" text to="/players">
              Players
            </v-btn>
            <v-btn class="text-capitalize mr-4" text to="/favorites">
              Favorites
            </v-btn>
            <v-col class="text-center subtitle-2">
              Formation:
            </v-col>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn class="text-capitalize" dark v-on="on">
                  None selected
                </v-btn>
              </template>
              <v-list dark>
                <v-list-item
                  v-for="(formation, index) in formations"
                  :key="index"
                  @click="sendData(formation)"
                >
                  <v-list-item-title>{{ formation.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar-items>
        </v-row>
      </v-container>
    </v-toolbar>
  </nav>
</template>

<script>
import pitchPositions from "@/pitchPositions.js";
console.log(pitchPositions);
export default {
  data: () => ({
    formations: pitchPositions
  }),
  methods: {
    sendData(formation) {
      console.log(formation.name);
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
      this.$store.dispatch("getFormation", formation);
    }
  }
};
</script>

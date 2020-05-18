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
              Players
            </v-btn>
            <v-btn class="text-capitalize mr-4" text to="/favorites">
              Favorites
            </v-btn>
            <v-col class="d-flex align-center text-center subtitle-2">
              Formation:
            </v-col>
            <v-select
              :items="types"
              label="None selected"
              :value="types"
              single-line
              hide-details
              @change="selected($event)"
              dense
              height="40"
              flat
              append-icon=""
            ></v-select>
          </v-toolbar-items>
        </v-row>
      </v-container>
    </v-toolbar>
  </nav>
</template>

<script>
import { formationTypes } from "@/utils/pitchPositions.js";

export default {
  data: () => ({
    types: formationTypes
  }),
  methods: {
    selected(formationType) {
      this.$store.dispatch("changeFormation", formationType);
      localStorage.setItem("formationType", formationType);

      if (this.$route.path !== "/favorites") {
        this.$router.push("/favorites");
      }
    }
  }
};
</script>

<style>
.v-text-field.v-text-field--solo.v-input--dense > .v-input__control {
  height: 0px;
}

.theme--dark.v-text-field > .v-input__control > .v-input__slot:before {
  border: none;
}

.v-input__slot {
  max-width: 120px;
}
</style>

<template>
  <nav>
    <div class="meni" v-show="hamburgerMenu">
      <v-container class="d-flex flex-column">
        <v-btn
          @click="closePopover()"
          color="white"
          class="text-capitalize font-weight-regular px-6"
          text
          to="/"
        >
          Players
        </v-btn>
        <v-btn
          @click="closePopover()"
          color="white"
          class="text-capitalize font-weight-regular px-6"
          text
          to="/favorites"
        >
          Favorites
        </v-btn>
        <v-layout>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-center">
              <div>
                <span class="float-left mr-4">Formation:</span>
                <v-select
                  :items="types"
                  label="None selected"
                  :value="types"
                  single-line
                  hide-details
                  @change="selected($event)"
                  dense
                  flat
                  append-icon=""
                ></v-select>
              </div>
            </v-col>
          </v-row>
        </v-layout>
      </v-container>
    </div>
    <v-toolbar dark fixed>
      <v-container>
        <v-row justify="center" no-gutters>
          <v-col class="d-flex align-center">
            <v-toolbar-title>Perfect Squad</v-toolbar-title>
          </v-col>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
              @click="closePopover()"
              class="text-capitalize font-weight-regular px-6"
              text
              to="/"
            >
              Players
            </v-btn>
            <v-btn
              @click="closePopover()"
              class="text-capitalize font-weight-regular px-6"
              text
              to="/favorites"
            >
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
      <v-btn class="d-md-none" @click="hamburgerMenu = !hamburgerMenu" icon
        ><v-icon>mdi-menu</v-icon></v-btn
      >
    </v-toolbar>
  </nav>
</template>

<script>
import { formationTypes } from "@/utils/pitchPositions.js";

export default {
  data: () => ({
    types: formationTypes,
    hamburgerMenu: false
  }),
  methods: {
    selected(formationType) {
      this.$store.dispatch("changeFormation", formationType);
      localStorage.setItem("formationType", formationType);

      if (this.$route.path !== "/favorites") {
        this.$router.push("/favorites");
      }

      this.closePopover();
    },
    closePopover() {
      this.$store.dispatch("notFavoriteSelected");
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

.theme--light.v-list {
  background-color: #272727 !important;
}

.v-list-item__title {
  color: white;
}

.theme--light.v-select .v-select__selection--comma {
  color: white !important;
}

.meni {
  height: 150px;
  width: 100vw;
  background-color: #272727;
  position: fixed;
  color: white;
  z-index: 9999;
  top: 55px;
}
</style>

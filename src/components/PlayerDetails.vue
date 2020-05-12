<template>
  <div class="player-details">
    <v-dialog v-model="dialog" width="70vw">
      <template v-slot:activator="{ on }">
        <v-card v-on="on" color="#ebebeb" tile class="elevation-0">
          <v-img
            src="https://picsum.photos/350/165?random"
            height="200"
          ></v-img>
          <v-card-subtitle class="pa-2 body-1">
            <v-row class="ma-0" fluid align="center">
              <img
                src="https://www.fifaindex.com/static/FIFA20/images/crest/3/light/243.webp"
              />
              <span class="ml-2">Real Madrid</span>
            </v-row>
          </v-card-subtitle>
        </v-card>
      </template>
      <v-card height="80vh" tile class="grey lighten-3">
        <v-container class="grey lighten-3">
          <v-row class="ma-0">
            <v-col cols="12" align="end">
              <v-btn @click="dialog = false" icon>
                <v-icon x-large color="#b3b3b3"
                  >mdi-close-circle-outline</v-icon
                >
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="ma-0">
            <v-col cols="12" md="6">
              <v-container pb-0>
                <v-row class="ma-0 mb-3">
                  <v-col>
                    <v-row>
                      <span class="headline mr-2">Luka Modrić</span>
                      <v-avatar color="brown" size="36">
                        <span class="subtitle-1">CM</span>
                      </v-avatar>
                    </v-row>
                    <v-row class="mt-3">
                      <div class="profile ml-3" :style="bgImg"></div>
                    </v-row>
                  </v-col>
                  <v-col cols="12" md="6" class="d-flex justify-end pr-0">
                    <span>
                      <v-rating
                        v-model="rating"
                        background-color="#b3b3b3"
                        color="yellow darken-3"
                        dense
                        empty-icon="$ratingFull"
                        hover
                        size="24"
                      ></v-rating>
                    </span>
                  </v-col>
                </v-row>
              </v-container>
              <!-- Stats -->
              <v-container pt-0>
                <v-row class="ma-0 mb-3 d-flex align-center">
                  <v-col class="pa-0">
                    <span>Croatia</span>
                  </v-col>
                  <v-col class="pa-0 d-flex justify-end">
                    <img :src="flagLink" />
                  </v-col>
                </v-row>
                <v-row class="ma-0 mb-3 d-flex align-center">
                  <v-col class="pa-0">
                    <span>Real Madrid</span>
                  </v-col>
                  <v-col class="pa-0 d-flex justify-end">
                    <img :src="flagLink" />
                  </v-col>
                </v-row>
                <v-row class="ma-0 mb-3 d-flex align-center">
                  <v-col class="pa-0">
                    <span>Birth Date</span>
                  </v-col>
                  <v-col class="pa-0 d-flex justify-end">
                    <span>Sept. 9, 1985</span>
                  </v-col>
                </v-row>
                <v-row class="ma-0 mb-3 d-flex align-center">
                  <v-col class="pa-0">
                    <span>Preferred Position</span>
                  </v-col>
                  <v-col class="pa-0 d-flex justify-end">
                    <span>RM</span>
                  </v-col>
                </v-row>
                <v-row class="ma-0 mb-3 d-flex align-center">
                  <v-col class="pa-0">
                    <span>Positions</span>
                  </v-col>
                  <v-col class="pa-0 d-flex justify-end">
                    <span>CM, RM</span>
                  </v-col>
                </v-row>
                <v-row class="ma-0 mb-3 d-flex align-center">
                  <v-col class="pa-0">
                    <span>Foot</span>
                  </v-col>
                  <v-col class="pa-0 d-flex justify-end">
                    <span>Right</span>
                  </v-col>
                </v-row>
                <v-row class="ma-0 mb-3 d-flex align-center">
                  <v-col class="pa-0">
                    <span>Value</span>
                  </v-col>
                  <v-col class="pa-0 d-flex justify-end">
                    <span>$39.000.000</span>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
            <v-divider color="brown" :vertical="true"></v-divider>
            <v-col class="pt-0">
              <v-container
                style="max-height: 484px"
                class="overflow-y-auto"
                id="scrollbar"
              >
                <v-container v-for="n in 5" :key="n">
                  <v-row>
                    <v-col class="grey lighten-5">
                      <span class="font-weight-medium"
                        >Ball Skills {{ n }}</span
                      >
                    </v-col>
                  </v-row>
                  <v-row v-for="skill in 2 + n" :key="skill">
                    <v-container pb-0 pt-2>
                      <v-row>
                        <v-col class="pr-0 py-0">
                          <span>Ball Control{{ skill }}</span>
                        </v-col>
                        <v-col cols="8" class="d-flex py-0 align-center">
                          <v-progress-linear
                            color="brown"
                            height="6px"
                            :value="progressValue"
                          ></v-progress-linear>
                          <span class="ml-2">{{ progressValue }}</span>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-row>
                </v-container>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "PlayerDetails",
  components: {},
  data: () => ({
    dialog: false,
    rating: 4.5,
    progressValue: 90,
    link:
      "https://www.fifaindex.com/static/FIFA20/images/players/10/177003.webp",
    flagLink: "https://www.fifaindex.com/static/FIFA20/images/flags/2/10.webp"
  }),
  computed: {
    bgImg() {
      return `background-image: url(${this.link});`;
    }
  }
};
</script>

<style>
.profile {
  height: 100px;
  width: 80px;
  background-position: center;
  background-size: cover;
  background-color: #b3b3b3;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 15%,
    100% 85%,
    80% 100%,
    20% 100%,
    0% 85%,
    0% 15%
  );
}

#scrollbar::-webkit-scrollbar-track {
  background-color: #b3b3b3;
}

#scrollbar::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

#scrollbar::-webkit-scrollbar-thumb {
  background-color: #795548;
}
</style>

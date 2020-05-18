<template>
  <div class="player-details">
    <v-card height="85vh" tile class="grey lighten-3">
      <v-container class="grey lighten-3">
        <v-row class="ma-0">
          <v-col cols="12" align="end">
            <v-btn @click="$emit('close-dialog')" icon>
              <v-icon x-large color="#b3b3b3">mdi-close-circle-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="ma-0">
          <v-col cols="12" lg="6">
            <v-container pb-0>
              <v-row class="ma-0 mb-3">
                <v-col>
                  <v-row>
                    <span class="headline mr-2"
                      >{{ player.name }} {{ player.lastName }}</span
                    >
                    <v-avatar :color="color" size="36">
                      <span class="subtitle-1">{{ stats.position }}</span>
                    </v-avatar>
                  </v-row>
                  <v-row class="mt-3">
                    <div
                      class="profile ml-3"
                      :style="bgImg(player.formationPicture)"
                    ></div>
                  </v-row>
                </v-col>
                <v-col cols="12" md="6" class="d-flex justify-end pr-0">
                  <span>
                    <v-rating
                      v-model="getPopularity"
                      background-color="#b3b3b3"
                      color="yellow darken-3"
                      dense
                      empty-icon="$ratingFull"
                      readonly
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
                  <span class="text-capitalize">{{ player.nationality }}</span>
                </v-col>
                <v-col class="pa-0 d-flex justify-end">
                  <img :src="player.nationalityFlag" />
                </v-col>
              </v-row>
              <v-row class="ma-0 mb-3 d-flex align-center">
                <v-col class="pa-0">
                  <span>{{ stats.club }}</span>
                </v-col>
                <v-col class="pa-0 d-flex justify-end">
                  <img :src="player.teamCrest" />
                </v-col>
              </v-row>
              <v-row class="ma-0 mb-3 d-flex align-center">
                <v-col class="pa-0">
                  <span>Birth Date</span>
                </v-col>
                <v-col class="pa-0 d-flex justify-end">
                  <span>{{ stats.birthDate }}</span>
                </v-col>
              </v-row>
              <v-row class="ma-0 mb-3 d-flex align-center">
                <v-col class="pa-0">
                  <span>Age</span>
                </v-col>
                <v-col class="pa-0 d-flex justify-end">
                  <span>{{ getAge(stats.birthDate) }}</span>
                </v-col>
              </v-row>
              <v-row class="ma-0 mb-3 d-flex align-center">
                <v-col class="pa-0">
                  <span>Preferred Position</span>
                </v-col>
                <v-col class="pa-0 d-flex justify-end">
                  <span>{{ stats.position }}</span>
                </v-col>
              </v-row>
              <v-row class="ma-0 mb-3 d-flex align-center">
                <v-col class="pa-0">
                  <span>Positions</span>
                </v-col>
                <v-col class="pa-0 d-flex justify-end">
                  <span>{{ stats.posiblePositions.join(", ") }}</span>
                </v-col>
              </v-row>
              <v-row class="ma-0 mb-3 d-flex align-center">
                <v-col class="pa-0">
                  <span>Foot</span>
                </v-col>
                <v-col class="pa-0 d-flex justify-end">
                  <span class="text-capitalize">{{ stats.preferredFoot }}</span>
                </v-col>
              </v-row>
              <v-row class="ma-0 mb-3 d-flex align-center">
                <v-col class="pa-0">
                  <span>Value</span>
                </v-col>
                <v-col class="pa-0 d-flex justify-end">
                  <span>{{ stats.value }}</span>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <!-- <v-divider color="brown" vertical></v-divider> -->
          <v-col border="left" cols="12" lg="6" class="pt-0">
            <v-container
              style="max-height: 484px"
              class="overflow-y-auto"
              id="scrollbar"
            >
              <v-container v-for="(n, index) in playerSkillKeys" :key="index">
                <v-row>
                  <v-col class="grey lighten-5">
                    <span class="font-weight-medium text-capitalize">
                      {{ playerSkills[n].name }}
                    </span>
                  </v-col>
                </v-row>
                <v-row
                  v-for="(skill, index) in Object.keys(playerSkills[n].skills)"
                  :key="index"
                >
                  <v-container pb-0 pt-2>
                    <v-row>
                      <v-col class="pr-0 py-0">
                        <span class="text-capitalize">{{
                          playerSkills[n].skills[skill].name
                        }}</span>
                      </v-col>
                      <v-col
                        v-if="playerSkills[n].skills[skill].value"
                        cols="12"
                        sm="8"
                        class="d-flex py-0 align-center"
                      >
                        <v-progress-linear
                          color="brown"
                          height="6px"
                          :value="playerSkills[n].skills[skill].value"
                        ></v-progress-linear>
                        <span class="ml-2">{{
                          playerSkills[n].skills[skill].value
                        }}</span>
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
  </div>
</template>

<script>
export default {
  name: "PlayerDetails",
  components: {},
  data: () => ({
    dialog: false,
    player: [],
    playerSkillKeys: [],
    playerSkills: [],
    stats: {}
  }),
  methods: {
    bgImg(link) {
      return `background-image: url(${link});`;
    },
    getAge(dateString) {
      const today = new Date();
      const birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  },
  computed: {
    getPopularity() {
      let popularitySum = 0,
        counter = 0;

      for (let prop in this.playerSkills) {
        popularitySum += this.playerSkills[prop].popular;
        counter++;
      }

      return popularitySum / counter;
    }
  },
  created() {
    this.player = this.$store.getters.getPlayer(this.id);
    this.playerSkillKeys = Object.keys(this.player.playerSkills);
    const { stats, playerSkills } = this.player;

    this.playerSkills = playerSkills;
    this.stats = stats;
  },
  props: ["id", "color"]
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

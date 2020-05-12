<template>
  <v-hover v-slot:default="{ hover }" open-delay="100">
    <div id="position-circle">
      <v-card
        v-if="hover"
        elevation="0"
        class="d-flex align-center justify-center"
        id="popover"
      >
        <v-dialog v-model="dialog" width="70vw">
          <template v-slot:activator="{ on }">
            <v-container v-on="on" pa-0>
              <v-row class="ma-0">
                <v-col class="pa-0 d-flex justify-center">
                  <img
                    @click="openPopUp($event)"
                    class="player-img"
                    :src="link"
                  />
                </v-col>
              </v-row>
              <v-row class="ma-0">
                <v-col class="pa-0 d-flex justify-center">
                  <v-card class="pa-1">Luka Modrić</v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>
        </v-dialog>
      </v-card>
    </div>
  </v-hover>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    link:
      "https://www.fifaindex.com/static/FIFA20/images/players/10/177003.webp",
    dialog: false
  }),
  methods: {
    openPopUp(e) {
      // na hover prikazati sliku koju preko props posaljem iz Home i bindat je za :src
      e.preventDefault();
      e.stopPropagation();
      console.log("red");
      // na klik dispatch action koja ce pretražiti na osnovu name (pozicija npr. 'CB') sve igrače za tu poziciju i vratiti niz
    }
  }
};
</script>

<style>
#position-circle {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #1f1f1f;
  border: 1px solid red;
}

#popover {
  position: absolute;
  background-color: transparent;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 130px;
  max-width: 1000px;
  transform: translate(-50%, -50%);
}

.player-img {
  background-position: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-size: cover;
  background-color: #b3b3b3;
  cursor: pointer;
}
</style>

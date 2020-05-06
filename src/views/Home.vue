<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card :class="$style.card" elevation="12"> </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style module>
.card {
  height: 525px;
  background: url("../assets/football-pitch1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>

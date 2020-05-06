<template>
  <div :class="$style.main">
    <Navbar />
    <v-content :class="$style.content" fill-height>
      <v-container fill-height py-0>
        <v-layout>
          <v-flex>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "MainLayout",
  components: {
    Navbar
  }
};
</script>

<style module>
.main {
  height: 100vh;
  background: url("../assets/perfect-squad-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.content {
  height: 90%;
}
</style>

<template>
  <v-app>
    <MainLayout />
  </v-app>
</template>

<script>
import MainLayout from "@/views/MainLayout.vue";

export default {
  name: "App",
  components: {
    MainLayout
  },

  data: () => ({
    //
  }),
  created() {
    this.$store.dispatch("fetchData");
  }
};
</script>

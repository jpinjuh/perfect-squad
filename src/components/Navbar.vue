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
                  Choose formation
                </v-btn>
              </template>
              <v-list dark>
                <v-list-item
                  v-for="(formation, index) in formations"
                  :key="index"
                  @click="sendData(formation.name)"
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
export default {
  data: () => ({
    formations: [
      { name: "4-4-2" },
      { name: "4-1-3-2" },
      { name: "4-3-3" },
      { name: "4-2-1-3" },
      { name: "4-2-2-2" },
      { name: "5-3-2" },
      { name: "3-3-2-2" }
    ]
  }),
  methods: {
    sendData(name) {
      console.log(name);
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    }
  }
};
</script>

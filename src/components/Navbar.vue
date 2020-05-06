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
                <v-list-item v-for="(item, index) in items" :key="index" to="/">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
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
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  })
};
</script>

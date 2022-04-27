<template>
  <v-app>
    <v-card flat>
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify Components</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="currentItem"
          center-active
          slider-color="white"
        >
          <v-tab
            v-for="item in items"
            :key="item"
            @click="appComponent = item"
            :href="'#tab-' + item"
          >
            {{ item }}
          </v-tab>

          <v-menu
            v-if="more.length"
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="align-self-center mr-4"
                v-bind="attrs"
                v-on="on"
              >
                more
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>

            <v-list class="grey lighten-3">
              <v-list-item
                v-for="item in more"
                :key="item"
                @click="appComponent=item"
              >
                {{ item }}
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="currentItem">
      <v-tab-item
        v-for="item in items.concat(more)"
        :key="item"
        :value="'tab-' + item"
      >
        <v-card flat>
          <v-card-text>
            <component :is="appComponent" />
          </v-card-text>
        </v-card>
       
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </v-app>
</template>

<script>
import Login from "@/components/Login"
import Register from "@/components/Register"
import ForgotPassword from "@/components/ForgotPassword"
import ProfileContactCard from "@/components/ProfileContactCard"

export default {
  data() {
    return {
      appComponent: Login,
      items: [
        'Login', 'Register',
      ],
      more: [
        'ForgotPassword', 'ProfileContactCard'
      ],
    }
  },

  components: {
    Login,
    Register,
    ForgotPassword,
    ProfileContactCard,
  },
}
</script>
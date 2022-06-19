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
		:href="'/?tab=' + item.title"
            @click="appComponent = item.title"
          >
            {{ item.title }}
            <!-- :href="'#tab-' + item.title" -->
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
              <!-- <v-list-item
                v-for="item in more"
                :key="item"
                @click="addItem(item)"
              >
                {{ item }}
              </v-list-item> -->
              <v-list-item
                v-for="item in more"
                :key="item"
                @click="appComponent = item.title"
              >
                {{ item.title }}
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
        :value="'tab-' + item.title"
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
      currentItem: "tab-Login",
      items: [
	{ title: "Login", slug: "login" },
	{ title: "Register", slug: "register" },
	{ title: "ForgotPassword", slug: "forgot-password" },
	{ title: "ProfileContactCard", slug: "profile-contactCard" },
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

  methods: {
      addItem (item) {
        const removed = this.items.splice(0, 1)
        this.items.push(
          ...this.more.splice(this.more.indexOf(item), 1),
        )
        this.more.push(...removed)
        this.$nextTick(() => { this.currentItem = 'tab-' + item })
      },
    },
}
</script>

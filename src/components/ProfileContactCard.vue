<template>
  <v-app>
    <v-main>
      <v-container align="center" justify="center" fill-height>
        <v-row class="bg-img" justify="space-around">
          <v-col cols="12" class="mt-8">
            <v-card width="400">
              <v-img
                  height="200px"
                  src="https://cdn.pixabay.com/photo/2021/07/09/06/52/lavender-6398415_960_720.jpg"
              >
                <v-app-bar
                    class="mt-8"
                    flat
                    color="rgba(0, 0, 0, 0)"
                >
                  <v-avatar size="100">
                    <img
                        alt="user"
                        src="https://cdn.pixabay.com/photo/2019/12/16/21/39/tree-4700352_960_720.jpg"
                    >
                  </v-avatar>

                  <v-spacer></v-spacer>

                  <v-menu offset-y left>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          v-bind="attrs"
                          v-on="on"
                          color="white"
                          icon
                      >
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item href="https://edu.fedorae.com">
                        <v-list-item-title>Edit</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>

                </v-app-bar>

                <v-card-title class="white--text mt-8">
                  <p class="ml-3">
                    Jane Doe
                  </p>
                </v-card-title>
              </v-img>

              <v-card-text>

                <div class="font-weight-bold ml-8 mb-2">
                  Details
                </div>

                <v-list two-line>
                  <v-list-item href="https://edu.fedorae.com">
                    <v-list-item-icon>
                      <v-icon color="indigo">
                        mdi-phone
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>1 444 555 8888</v-list-item-title>
                      <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                  </v-list-item>

                  <v-divider inset></v-divider>

                  <v-list-item href="https://edu.fedorae.com">
                    <v-list-item-icon>
                      <v-icon color="indigo">
                        mdi-email
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>jane@edu.fedorae.com</v-list-item-title>
                      <v-list-item-subtitle>Work</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                  </v-list-item>

                  <v-divider inset></v-divider>

                  <v-list-item href="https://edu.fedorae.com">
                    <v-list-item-icon>
                      <v-icon color="indigo">
                        mdi-map-marker
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>Fedorae Education</v-list-item-title>
                      <v-list-item-subtitle>Online</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.bg-img {
  background-image: url("https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  border-radius: 3px;
}
</style>
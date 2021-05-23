<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card elevation="0">
              <div class="text-center">
                <h1 class="mb-2">Forgot Password</h1>
                <p>We will send a password reset link to the email address of the connected accounted.</p>
              </div>
              <a href="#">
                <v-img src="@/assets/logo.png" alt="vuetify components logo" contain height="200" />
              </a>
              <v-form>
                <v-text-field
                  label="Enter your email address"
                  name="email"
                  prepend-inner-icon="mdi-email"
                  type="email"
                  class="rounded-0"
                  outlined
                  ></v-text-field>
                  <v-btn class="rounded-0" color="black" x-large block dark>Reset Password</v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>

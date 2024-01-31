<script setup>
    import { ref } from 'vue'

    defineProps({
        identifierPlaceholder: {
            type: String,
            default: 'email@example.com',
        },
        passwordPlaceholder: {
            type: String,
            default: 'Enter your password',
        }
    })

    const emits = defineEmits(['submit-login'])

     const visible =  ref(false)
     const form = ref(null)

     const identifier = ref('')
     const password = ref('')

     const submitLogin = async () => {

        const { valid } = await form.value.validate()

        if (valid) {
            emits('submit-login', { identifier: identifier.value, password: password.value })
        }
     }
</script>

<template>
  <div>
      <slot name="logo">
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>
      </slot>

      <v-form @submit.prevent="submitLogin()" ref="form">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
              v-model="identifier"
        density="compact"
        :placeholder="identifierPlaceholder"
        :rules="[v => !!v || 'Item is required']"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
          style="pointer-events: none;"
        >
          Forgot login password?</a>
      </div>

      <v-text-field
              v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        :placeholder="passwordPlaceholder"
        :rules="[v => !!v || 'Item is required']"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <slot name="notice">
      <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
        </v-card-text>
      </v-card>
      </slot>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        type="submit"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
          style="pointer-events: none;"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
      </v-form>
  </div>
</template>

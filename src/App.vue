<template>
  <div>
    <Login v-if="false" />
    <ForgotPassword />
  </div>
</template>


<script>
import Login from "@/components/Login"
import ForgotPassword from "@/components/ForgotPassword"

export default {
  name: 'App',
  components: {
    Login,
    ForgotPassword
  }
};
</script>

<template>
  <div>
    <Login v-if="false" />
    <ForgotPassword v-if="false" />
    <Register />
  </div>
</template>


<script>
import Login from "@/components/Login"
import ForgotPassword from "@/components/ForgotPassword"
import Register from "@/components/Register"

export default {
  name: 'App',
  components: {
    Login,
    ForgotPassword,
    Register
  }
};
</script>

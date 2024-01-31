<script setup>

    const login = (data) => {
       console.log('login data:', data) 
    }

</script>

<template>
    <v-app>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center" dense>
                <v-col>
                    <VFCLogin @submit-login="login" identifier-placeholder="Enter username" />
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

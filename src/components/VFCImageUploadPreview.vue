<template>
    <v-card height="50vh">
        <v-card-text>
            <v-img
                :src="
                    image ? imagePreview : 'https://picsum.photos/id/11/500/300'
                "
                lazy-src="https://picsum.photos/id/11/10/6"
                height="30vh"
            ></v-img>
            <v-file-input
                v-model="image"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an image"
                prepend-icon="mdi-camera"
                @change="selectImage"
                @click:clear="clearImagePreview()"
                label="Image"
            ></v-file-input>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'VFCImageUploadPreview',
    data() {
        return {
            image: '',
            imagePreview: '',
        }
    },

    methods: {
        async selectImage(e) {
            const file = e

            if (!file) return

            const readData = (f) =>
                new Promise((resolve) => {
                    const reader = new FileReader()
                    reader.onloadend = () => resolve(reader.result)
                    reader.readAsDataURL(f)
                })

            const data = await readData(file)
            this.imagePreview = data
        },

        async clearImagePreview() {
            this.imagePreview = ''
        },
    },
}
</script>
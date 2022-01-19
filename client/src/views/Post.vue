<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <v-img :src="`/${post.image}`"></v-img>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm-2>
                                <v-btn small outlined color="primary">{{ post.category }}</v-btn>
                            </v-col>
                            <v-col sm-10 class="d-flex justify-end">
                                <v-btn color="success" text :to="{ name: 'EditPost', params: { id:post._id } }">Edit</v-btn>
                                <v-btn color="red" text @click="openPopupConfirm">Delete</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                        <h3>{{ post.title }}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        <p>{{ post.content }}</p>
                        <p>{{ post.created }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="290">
                <v-card>
                    <v-card-title class="text-h5">
                        Do you want to delete?
                    </v-card-title>
                    <!-- <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text> -->
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                        >
                            Disagree
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="removePost(post._id)"
                        >
                            Agree
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>
<script>
    import API from '../api';
    export default {
        name: "Post",
        data() {
            return {
                post: [],
                dialog: false
            }
        },
        async created() {
            const response = await API.getPostById(this.$route.params.id);
            this.post = response;
        },
        methods: {
            openPopupConfirm() {
                this.dialog = true;
            },
            async removePost(id) {
                const response = await API.deletePost(id);
                this.$router.push({ name: 'Home', params: { message: response.message } });
            }
        },
    };
</script>
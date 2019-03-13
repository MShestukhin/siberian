<template>
    <v-toolbar app fixed>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>Link One</v-btn>
            <v-btn flat>Link Two</v-btn>
            <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "SibHeader"
    }
</script>

<style>
    #inspire {
        background-image: url('http://1truba.ru/wp-content/uploads/2017/09/IMG_3219.jpg');
        /*background-color: gray;*/
        /* background-color: #8f2c2c; */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
</style>
<template>
    <section>
        <b-card-group class="card-group" deck :key="user.id" v-for="user in users" >
            <b-card
                class="card"
                header-tag="header"
                border-variant="success"
                header-bg-variant="success"
                header-text-variant="white"
            >
                <template v-slot:header>
                    {{ user.firstName }} {{ user.lastName }} 
                    <b-badge variant="light">{{ user.properties.length }}</b-badge>
                </template>
                <PropertyList :properties="user.properties"/>
            </b-card>
        </b-card-group>
    </section>
</template>

<script>
import PropertyList from "./PropertyList";
export default {
    name: 'Users',
    components: {
        PropertyList
    },
    props: {
        users: Array,
    }
}
</script>

<style scoped>
    .card {
        text-align: left;
    }
    .card-group:not(:last-child) {
        margin-bottom: 20px;
    }
</style>
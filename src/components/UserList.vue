<template>
    <section>
        <b-card-group deck :key="user.id" v-for="user in users" >
            <b-card
                class="header"
                header-tag="header"
            >
                <template v-slot:header>
                    {{ user.firstName }} {{ user.lastName }} 
                    <b-badge variant="success">{{ user.properties.length }}</b-badge>
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
    .header {
        text-align: left;
    }
</style>
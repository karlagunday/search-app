<template>
    <section>
        <b-list-group class="list" v-if="!properties.length">
            <b-list-group-item>No properties</b-list-group-item>
        </b-list-group>
        <b-list-group class="list" :key="property.id" v-for="property in properties" >
            <b-list-group-item>
                <b-row>
                    <b-col cols="4">{{property.street}}</b-col>
                    <b-col cols="2">{{property.city}}</b-col>
                    <b-col>{{property.state}}</b-col>
                    <b-col cols="2">{{property.zip}}</b-col>
                    <b-col>{{property.rent}}</b-col>
                </b-row>
            </b-list-group-item>
        </b-list-group>
    </section>
</template>

<script>
export default {
    name: 'Properties',
    props: {
        properties: Array,
    }
}
</script>

<style scoped>
    .list {
        text-align: left;
    }
</style>
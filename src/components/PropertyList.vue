<template>
    <section>
        <b-list-group class="list" :key="property.id" v-for="property in properties" >
            <b-list-group-item>{{property.street}} {{property.city}} {{property.state}} {{property.zip}} {{property.rent}}</b-list-group-item>            
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
<template>
    <section>
        <b-list-group class="list" v-if="!properties.length">
            <b-list-group-item>No properties</b-list-group-item>
        </b-list-group>
        <b-list-group
            class="list"
            :key="property.id"
            v-for="property in properties"
        >
            <b-list-group-item class="list-item">
                <b-row>
                    <b-col cols="3">
                        <small class="super">Street</small>
                        <p>{{property.street}}</p>
                    </b-col>
                    <b-col cols="3">
                        <small class="super">City</small>
                        <p>{{property.city}}</p>
                    </b-col>
                    <b-col>
                        <small class="super">State</small>
                        <p>{{property.state}}</p>
                    </b-col>
                    <b-col cols="2">
                        <small class="super">Zip</small>
                        <p>{{property.zip}}</p>
                    </b-col>
                    <b-col>
                        <small class="super">Rent</small>
                        <p>${{property.rent}}</p>
                    </b-col>
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
    .list:not(:last-child) .list-item {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 0px;
    }
    .list:not(:first-child) .list-item {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    .list-item {
        border-color: #95cbd4;
    }
    .super {
        color:gray;
    }
</style>
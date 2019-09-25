<template>
    <section>
        <ul class="list">
          <li :key="user.id" v-for="user in users" >
            {{user.firstName}} {{user.lastName}}
            <h3>Properties</h3>
            <PropertyList :properties="user.properties"/>
          </li>
        </ul>
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
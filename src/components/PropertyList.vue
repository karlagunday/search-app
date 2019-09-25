<template>
    <section>
        <ul class="list">
            <li :key="property.id" v-for="property in properties" >
            {{property.street}} {{property.city}} {{property.state}} {{property.zip}} {{property.rent}}
            </li>
        </ul>
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
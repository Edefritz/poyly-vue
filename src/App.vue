<template>
    <div id="app">
        <div class="columns is-marginless is-gapless is-fullheight">
                <LeftContainer></LeftContainer>
                <PolylineMap></PolylineMap>
        </div>
    </div>
</template>

<script>

    import PolylineMap from './components/Map.vue'
    import LeftContainer from './components/LeftContainer.vue'

    export default {
        name: 'app',
        components: {
            LeftContainer,
            PolylineMap
        }
    }
</script>

<style>

</style>

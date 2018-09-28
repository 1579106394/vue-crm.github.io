<template>
    <div>
        <cmtbox :id="id"></cmtbox>
    </div>
</template>

<script>

import cmtbox from '../subcomponents/comment.vue'

export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    components: {
        cmtbox
    }
}

</script>

<style scoped>

</style>
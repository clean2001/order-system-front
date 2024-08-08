<template>
    <v-container>

            <StoreTestComponent2 />

            <StoreTestComponent3 />
    </v-container>
</template>
<script>
import StoreTestComponent2 from '@/components/StoreTestComponent2.vue';
import StoreTestComponent3 from '@/components/StoreTestComponent3.vue';

export default{
    components: {
        StoreTestComponent2,
        StoreTestComponent3
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
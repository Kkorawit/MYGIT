<script setup>

import { ref} from 'vue';
defineEmits([])
const props = defineProps({
    eventDetail:{
        type: Object,
        default:{}
    }
})


</script>
 
<template>
    <div>
        <div>
                <div>{{props.eventDetail}}</div>
        </div>
    </div>
</template>
 
<style>

</style>
<script setup>
import {onMounted, ref} from 'vue';
import EventDetail from './EventDetail.vue';

const events = ref([])
//const eventID = ref('')
const eventDetail = ref({})
const message = ref('')

const getAllEvent = async ()=>{
    const res = await fetch('http://localhost:5000/event')
    console.log(res.status);
    if(res.status == 200){
        events.value = await res.json()
        console.log(events.value)
        if(events.value.length <= 0){
            message.value = 'No Scheduled Events'
            return  message.value
        }
        return events.value
    }else if(res.status != 200){
        message.value = 'Not found'
        return  message.value
    }
}

const getDetail = async (eventID) => {
    const res = await fetch(`http://localhost:5000/event/${eventID}`)
    if(res.status == 200){
        eventDetail.value = await res.json()
        console.log(eventDetail.value);
        return eventDetail.value
    }else{
        message.value = `not found Event id : ${eventID} `
        return  message.value
    }

}

// onMounted( async()=>{
//     await getAllEvent()
//     console.log(event.value)
// })

</script>
 
<template>
    <div>
        <div>
            <button class="btn btn-blue"  @click="getAllEvent"> show list all event</button>
        </div>
        <diV>
            <div v-if="message != '' ">{{message}}</div>
            <div v-else>
                <ul>
                    <li v-for=" (event,index) in events" :index="index">
                        <hr>
                        <br>
                        <div> event id : {{event.id}}</div>
                        <div> booking name : {{event.bookingName}}</div>
                        <div> category name : {{event.category}}</div>
                        <div> start time : {{event.startTime}}</div>
                        <div> event duration :{{event.duration}}</div>
                        <button class="btn-blue" @click="getDetail(event.id)"> Show Details </button>
                        <EventDetail :eventDetail="eventDetail"></EventDetail>
                        <br>
                        <hr>
                    </li>
                </ul>
            </div>
        </diV>
    </div>
</template>
 
<style>

</style>

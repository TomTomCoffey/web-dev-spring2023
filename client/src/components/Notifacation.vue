<script setup lang="ts">
import { ref } from 'vue';
import { useSession, deleteMessage } from '@/model/session';



const session = useSession();
const isActive = ref(false);

</script>


<template>
    <div class="notifacations">
        <button class="button is-primary" @click="isActive = !isActive">
            <span class="icon">
                <i class="fas fa-bell fa-lg "></i>
            </span>
        </button>
        <div class="notifacation-list" v-show="isActive">
            <div v-for="msg in session.messages" :class="'notifacation is-${msg.type}'">
                <button class="delete " @click=deleteMessage(0)></button>
                {{ msg.msg }}
            </div>
        </div>


    </div>
</template>



<style scoped>

.notifacations {
    position: relative;
}
.notifacation-list{
    position: absolute;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    width: 300px;
    padding: 1rem;
    z-index: 100;
    margin-top: 5px;
    display: none
  
}
.notifacation{
    margin: 5px;

}

</style>
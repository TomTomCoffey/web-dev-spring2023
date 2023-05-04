
<script setup lang="ts">

    const props = defineProps({
        title: String,
        isActive: Boolean,
        onClose: Function
    })

</script>


<template>
                <div>
                    <div class="modal is active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <slot name = "header"></slot>
                <p class="modal-card-title">Modal title</p>
                <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                <!-- Content ... -->
                <slot>

                </slot>
                </section>
                <footer class="modal-card-foot">
                <slot name = "footer">
                <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button>
                </footer>
            </slot>
       
</div>



    </div>
</template>



<style scoped>

</style>
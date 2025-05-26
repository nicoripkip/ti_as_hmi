<script setup>

import {ref} from "vue" 
import { globalBuffers } from "@/buffers";

let robot_selected = ref("none")
let global_buffers = globalBuffers
let robot_buffer = global_buffers.robotBuffer()

console.log(robot_buffer.buffer)

</script>

<template>
  <div class="hmi-page-container">
    <div class="hmi-page-section-left">
        <div class="hmi-page-header">
            <h1>Status + Alarms:</h1>
        </div>
    </div>
    <div class="hmi-page-section-right">
        <div class="hmi-page-section-item-robot">

        </div>

        <div class="hmi-page-section-item-control">
            
        </div>
    </div>
  </div>
</template>

<style scoped>
.hmi-page-container {
    display: flex;
}

.hmi-page-section-left {
    border-right: 1px solid darkgray;
    height: 700px;
    width: 100%;
}

.hmi-page-section-right {
    border-left: 1px solid darkgray;
    height: 700px;
    width: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
}

.hmi-page-header {
    align-content: center;
}

.hmi-page-section-item-robot {
    border-bottom: 1px solid darkgray;
    height: 100%;
}

.hmi-page-section-item-control {
    border-top: 1px solid darkgray;
    height: 100%;
}
</style>

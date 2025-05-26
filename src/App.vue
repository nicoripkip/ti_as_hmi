<script setup>
import Home from './components/Home.vue'
import Hypervisor from './components/Hypervisor.vue'
import Map from './components/Map.vue'
import Robot from './components/Robot.vue'
import Settings from './components/Settings.vue'
import {ref, onMounted} from "vue"
import { globalBuffers } from './buffers'

var hmi_nav_id = ref("hmi-nav-home")
// let mqtt_client = connect("ws://145.24.223.53:8989")
let global_buffers = globalBuffers
let robot_buffer = global_buffers.robotBuffer()
robot_buffer.push("Dit is een testje")

function select_page(event) 
{
  hmi_nav_id.value = event.target.id
  console.log("Item clicked: ", event.target.id)
}

onMounted(() => {

})

</script>

<template>
  <header>
    <div class="hmi-nav-container">
      <ul class="hmi-nav-list">
        <li :class="['hmi-nav-list-item', { 'hmi-nav-list-item-selected': hmi_nav_id === 'hmi-nav-home' }]" id="hmi-nav-home" @click="select_page"><p>Home</p></li>
        <li :class="['hmi-nav-list-item', { 'hmi-nav-list-item-selected': hmi_nav_id === 'hmi-nav-map' }]" id="hmi-nav-map" @click="select_page"><p>Map</p></li>
        <li :class="['hmi-nav-list-item', { 'hmi-nav-list-item-selected': hmi_nav_id === 'hmi-nav-robot' }]" id="hmi-nav-robot" @click="select_page"><p>Robot</p></li>
        <li :class="['hmi-nav-list-item', { 'hmi-nav-list-item-selected': hmi_nav_id === 'hmi-nav-hypervisor' }]" id="hmi-nav-hypervisor" @click="select_page"><p>Hypervisor</p></li>
        <li :class="['hmi-nav-list-item', { 'hmi-nav-list-item-selected': hmi_nav_id === 'hmi-nav-settings' }]" id="hmi-nav-settings" @click="select_page"><p>Settings</p></li>
      </ul>
    </div>
  </header>

  <main>
    <div class="hmi-body-container">
      <div v-if="hmi_nav_id == 'hmi-nav-home'"><Home /></div>
      <div v-else-if="hmi_nav_id == 'hmi-nav-map'"><Map /></div>
      <div v-else-if="hmi_nav_id == 'hmi-nav-robot'"><Robot /></div>
      <div v-else-if="hmi_nav_id == 'hmi-nav-hypervisor'"><Hypervisor /></div>
      <div v-else-if="hmi_nav_id == 'hmi-nav-settings'"><Settings /></div>
      <div v-else >404</div>
    </div>
  </main>
</template>

<style scoped>
.hmi-nav-container {
  margin-top: 5px;
  margin-bottom: 5px;
}

.hmi-nav-list {
  display: flex;
  list-style-type: none;
  gap: 5px; 
}

.hmi-nav-list-item {
  border: 3px solid darkgray;
  border-radius: 10px;
  height: 100px;
  width: 100%;
  cursor: pointer;
  font-size: 30px;
  color: black;
}

.hmi-nav-list-item-selected {
  background-color: darkred;
  color: white;
}

.hmi-nav-list-item p {
  text-align: center;
}

.hmi-body-container {
  width: 100%;
}
</style>

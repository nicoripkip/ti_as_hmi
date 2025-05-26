import mqtt from "mqtt";
import { globalBuffers } from "./buffers";


const mqtt_client = mqtt.connect("ws://145.24.223.53:8989/");
const buffers = globalBuffers


/**
 * @brief Register here all mqtt settings and subscribtions
 * 
 */
mqtt_client.on("connect", () => {
    console.log("MQTT connected!")

    mqtt_client.subscribe("robot2hmi", (err) => {
        if (err) {
            console.log(`Error detected: ${err}`)
        }
    })

    mqtt_client.subscribe("beacon2hmi", (err) => {
        if (err) {
            console.log(`Error detected: ${err}`)
        }
    })

    mqtt_client.subscribe("hypervisor2hmi", (err) => {
        if (err) {
            console.log(`Error detected: ${err}`)
        }
    })
})


/**
 * @brief Handle here all incoming messages for the subscriptions and place them in the correct buffers
 * 
 */
mqtt_client.on("message", (topic, message) => {
    switch (topic) {
        case "robot2hmi":
            const robot_buffer = buffers.robotBuffer()
            robot_buffer.clear()

            let h = new TextDecoder().decode(message)

            robot_buffer.set(h)

            console.log(h)
            break;
        case "beacon2hmi":

            break;
        case "hypervisor2hmi":

            break;
    }
})


export default mqtt_client
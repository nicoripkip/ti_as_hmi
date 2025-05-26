import { defineStore } from "pinia"

export const globalBuffers = {
    robotBuffer: defineStore("robotBuffer", {
        state: () => ({
            buffer: ""
        }),
        actions: {
            set(value) {
                this.buffer = value
            },
            get() {
                return this.buffer
            },
            clear() {
                this.buffer = ""
            }
        },
    }),
}
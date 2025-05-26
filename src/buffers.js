import { defineStore } from "pinia"

export const globalBuffers = {
    robotBuffer: defineStore("robotBuffer", {
        state: () => ({
            buffer: []
        }),
        actions: {
            push(value) {
                this.buffer.push(value)
            },
            pop() {
                return this.buffer.pop()
            },
            lookup(value) {
        
            },
            clear() {
                this.buffer = []
            }
        }  
    }),
}
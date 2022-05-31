export default {
    template: `
        <button @click="toggle" class="bg-blue-500 disabled:cursor-not-allowed hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        :disabled="processing">
            <slot />
        </button>
     `,
    data() {
        return {
            processing: true
        }
    },
}
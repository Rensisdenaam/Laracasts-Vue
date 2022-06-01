export default {
    template: `
        <button
        :class="{
            'font-bold py-2 px-4 rounded disabled:cursor-not-allowed': true,
            'bg-gray-200 hover:bg-gray-300' : type === 'primary',
            'bg-blue-400 hover:bg-blue-500' : type === 'secondary',
            'bg-green-400 hover:bg-green-500' : type === 'muted',
            'is-loading' : processing
            }"        
        :disabled="processing"
        >
            <slot />
        </button>
     `,

    props: {
        type: {
            type: String,
            default: "primary"
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
}
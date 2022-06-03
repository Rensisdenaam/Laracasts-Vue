export default {
    template: `
         <div class="flex gap-2">
            <button 
            @click="$emit('update:currentTagnpm', tag)"
            class="px-2 py-px rounded border-2 border-white font-semibold text-sm" 
            :class="{'border-blue-500 text-blue-500 bg-gray-600': currentTag === tag}"
            v-for="tag in tags"
            >{{ tag }}</button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}
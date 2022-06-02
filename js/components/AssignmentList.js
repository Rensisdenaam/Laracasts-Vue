import Asignment from "./Assignment.js";

export default {
    components: { Asignment },
    template: `
        <section class="space-y-6" v-show="assignments.length">
            <h2 class="font-bold text-3xl">
            {{ title }}
            <span>({{ assignments.length }})</span>
            </h2>
            
            <div class="flex gap-2">
                <button 
                @click="currentTag = tag"
                class="px-2 py-px rounded border-2 border-white font-semibold text-sm" 
                :class="{'border-blue-500 text-blue-500 bg-gray-600': currentTag === tag}"
                v-for="tag in tags"
                >{{ tag }}</button>
            </div>
            
            <ul class="border-2 border-gray-600 divide-y divide-gray-600">
                <Asignment
                 v-for="assignment in filteredAssignments" 
                :key="assignment.id" 
                :assignment="assignment"
                >{{ assignment.id }}</Asignment>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String
    },

    data() {
        return {
            currentTag: 'all'
        }
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}
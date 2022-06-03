import Asignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Asignment, AssignmentTags },
    template: `
        <section class="space-y-6 w-60" v-show="assignments.length">
            <div class="flex justify-between items-start">
                <h2 class="font-bold text-xl">
                {{ title }}
                <span>({{ assignments.length }})</span>
                </h2>
                
                <button v-show="canToggle" @click="$emit('toggle-list')">&times;</button>
            </div>
            
            <AssignmentTags 
            v-model:currentTag="currentTag"
            :initialTags="assignments.map(a => a.tag)"
            />
            
            <ul class="border-2 border-gray-600 divide-y divide-gray-600">
                <Asignment
                 v-for="assignment in filteredAssignments" 
                :key="assignment.id" 
                :assignment="assignment"
                >{{ assignment.id }}</Asignment>
            </ul>
            
            <slot></slot>
        </section>
    `,
    props: {
        assignments: Array,
        title: String,
        canToggle: Boolean
    },

    data() {
        return {
            currentTag: 'all',
        }
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
    }
}
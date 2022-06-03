import Asignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Asignment, AssignmentTags },
    template: `
        <section class="space-y-6" v-show="assignments.length">
            <h2 class="font-bold text-3xl">
            {{ title }}
            <span>({{ assignments.length }})</span>
            </h2>
            
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
    }
}
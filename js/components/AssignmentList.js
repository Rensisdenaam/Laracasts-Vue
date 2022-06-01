import Tasks from "./Assignment.js";

export default {
    components: { Tasks },
    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul>
                <Tasks
                 v-for="assignment in assignments" 
                :key="assignment.id" 
                :assignment="assignment"
                >{{ assignment.id }}</Tasks>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String
    }
}
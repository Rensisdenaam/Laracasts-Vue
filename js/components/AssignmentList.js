import Asignment from "./Assignment.js";

export default {
    components: { Asignment },
    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul>
                <Asignment
                 v-for="assignment in assignments" 
                :key="assignment.id" 
                :assignment="assignment"
                >{{ assignment.id }}</Asignment>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String
    }
}
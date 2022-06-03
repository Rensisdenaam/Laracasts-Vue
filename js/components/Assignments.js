import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="space-y-6">
            <AssignmentList :assignments="filters.inProgress" title="In progress" />
            <AssignmentList :assignments="filters.completed" title="Completed" />
            
            <AssignmentCreate @add="add"></AssignmentCreate>
        </section>
   `,

    data() {
        return {
            assignments: [],
        }
    },

    computed: {
        filters() {
            return{
                inProgress: this.assignments.filter(assignment => ! assignment.completed),
                completed: this.assignments.filter(assignment => assignment.completed)
            };
        }
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignmnets => {
                this.assignments = assignmnets;
            });
    },

    methods: {

        add(name) {

            if (name === '') return;

            if (name.includes(',')) {
                name.split(',').forEach(assignment => {
                    this.assignments.push({
                        name: assignment.trim(),
                        completed: false,
                        id: this.assignments.length + 1
                    });
                });
            } else {
                this.assignments.push({
                    name: name.trim(),
                    completed: false,
                    id: this.assignments.length + 1
                });
            }
        }
    }
}
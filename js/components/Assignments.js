import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },
    template: `
        <section class="space-y-6">
            <AssignmentList :assignments="filters.inProgress" title="In progress" />
            <AssignmentList :assignments="filters.completed" title="Completed" />
        </section>
   `,

    data() {
        return {
            assignments: [
                { name: 'Finnish project', completed: false, id: 1  },
                { name: 'Get good', completed: false, id: 2 },
                { name: 'get even better', completed: false, id: 3 },
            ]
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
}
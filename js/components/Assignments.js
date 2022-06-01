import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },
    template: `
        <AssignmentList :assignments="inProgressAssignments" title="In progress" />
        <AssignmentList :assignments="completedAssignments" title="Completed" />
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
        inProgressAssignments() {
            return this.assignments.filter(assignment => ! assignment.completed)
        },
        completedAssignments() {
            return this.assignments.filter(assignment => assignment.completed)
        }
    },
}
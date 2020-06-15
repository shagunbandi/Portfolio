import overview from './Files/Overview';
import work from './Files/Work';
import education from './Files/Education';
import deployDjango from './Files/Tutorials/djangoApacheMySQL.js'
// Only Sigle Nesting is Allowed

export const fileDetails = [
    {
        type: "file",
        title: "SHAGUNBANDI.md",
        content: overview,
    },
    {
        type: "file",
        title: "EDUCATION.md",
        content: education
    },
    {
        type: "file",
        title: "WORK.md",
        content: work,
    },
    {
        type: "folder",
        title: "Tutorials",
        files: [
            {
                type: "file",
                title: "Deploy-Django-Apache2-MySQL-Ubuntu.md",
                content: deployDjango
            }
        ]
        
    }
]

export default fileDetails;
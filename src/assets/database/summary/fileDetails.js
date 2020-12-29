import overview from "./Files/Overview";
import work from "./Files/Work";
import education from "./Files/Education";
import deployDjango from "./Files/Tutorials/djangoApacheMySQL";
import MigrateSql from "./Files/Tutorials/MigrateSql";
import CloudDNSGoDaddy from "./Files/Tutorials/CloudDNSGoDaddy";
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
    content: education,
  },
  {
    type: "file",
    title: "WORK.md",
    content: work,
  },
  // {
  //     type: "folder",
  //     title: "Tutorials",
  //     files: [
  //         {
  //             type: "file",
  //             title: "Deploy-Django-Apache2-MySQL-Ubuntu.md",
  //             date: "14th June",
  //             content: deployDjango
  //         },
  //         {
  //             type: "file",
  //             title: "Migrate-SQL-Between-2-Servers.md",
  //             date: "14th June",
  //             content: MigrateSql
  //         },
  //         {
  //             type: "file",
  //             title: "Google-Cloud-DNS-and-GoDaddy.md",
  //             date: "15th June",
  //             content: CloudDNSGoDaddy
  //         }
  //     ]

  // }
];

export default fileDetails;

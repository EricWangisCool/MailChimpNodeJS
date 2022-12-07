// ===========================  Configuration Setup ================================================
const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
    apiKey: "Use your apiKey here",
    server: "Use your server here",
});


// ---------------------------  Test- Make first API call. ---------------------------------------
// async function run() {
//     const response = await client.ping.get();
//     console.log(response);
// }

// run();


// ===========================   Task1- Create a new List (Audience). =========================== 
// ---------------------------   Result in ERROR CODE: "MailChimp API 3.0: Status 403 "User does not have access to the requested operation" when trying to create a list" --------------------------------------
// const event = {
//   name: "Ematic Solutions Meetup"
// };

// const footerContactInfo = {
//   company: "Company Name",
//   address1: "10F, No. 200, Sec. 3",
//   address2: "Nanjing E. Rd., Songshan Dist.,",
//   city: "Taipei City",
//   state: "NONE",
//   zip: "105405",
//   country: "Taiwan (R.O.C.)"
// };

// const campaignDefaults = {
//   from_name: "Gettin' Together",
//   from_email: "ericwang12399@gmail.com",
//   subject: "Meetup",
//   language: "EN_US"
// };

// async function run() {
//   const response = await client.lists.createList({
//     name: event.name,
//     contact: footerContactInfo,
//     permission_reminder: "permission_reminder",
//     email_type_option: true,
//     campaign_defaults: campaignDefaults
//   });

//   console.log(
//     `Successfully created an audience. The audience id is ${response.id}.`
//   );
// }

// run();


// --------------------  Checked the error code and found mailChimp policy "free user is not able to create more than one list". --------------------
// --------------------  Therefore, check my account and found a list was already created after signing up (List_ID: "d52ea36d52") -------------------------
// const run = async () => {
//     const response = await client.lists.getAllLists();
//     console.log(response);
// };

// run();


// --------------------------  Solution: Delete the list (List_ID: "d52ea36d52") . ---------------------------------------
// const run = async () => {
//   const response = await client.lists.deleteList("d52ea36d52");
//   console.log(response);
// };

// run();


// -------------------------- Then create other list --------------------------------------------
// -------------------------- Result in success: (List_ID: 6b1371d607) --------------------------
// const event = {
//   name: "Meetup"
// };

// const footerContactInfo = {
//   company: "Company",
//   address1: "10F, No. 200, Sec. 3",
//   address2: "Nanjing E. Rd., Songshan Dist.,",
//   city: "Taipei City",
//   state: "NONE",
//   zip: "105405",
//   country: "Taiwan (R.O.C.)"
// };

// const campaignDefaults = {
//   from_name: "Gettin' Together",
//   from_email: "ericwang12399@gmail.com",
//   subject: "Meetup",
//   language: "EN_US"
// };

// async function run() {
//   const response = await client.lists.createList({
//     name: event.name,
//     contact: footerContactInfo,
//     permission_reminder: "permission_reminder",
//     email_type_option: true,
//     campaign_defaults: campaignDefaults
//   });

//   console.log(
//     `Successfully created an audience. The audience id is ${response.id}.`
//   );
// }

// run();


// ========================== Task2- Add my email to the list.(List_ID: 6b1371d607) =========================================
// -------------------------- Result in success: (Contact's id: 4bf2f10a2ce8d5bd1e734d94edee4b9e). --------------------------
// const listId = "6b1371d607";
// const subscribingUser = {
//   firstName: "Eric",
//   lastName: "Wang",
//   email: "ericwang12399@gmail.com"
// };

// async function run() {
//   const response = await client.lists.addListMember(listId, {
//     email_address: subscribingUser.email,
//     status: "subscribed",
//     merge_fields: {
//       FNAME: subscribingUser.firstName,
//       LNAME: subscribingUser.lastName
//     }
//   });

//   console.log(
//     `Successfully added contact as an audience member. The contact's id is ${
//       response.id
//     }.`
//   );
// }

// run();


// =========================== Task3- Send a campaign to the list. (List_ID: 6b1371d607) =======
// --------------------------- Step1: Create a template.  --------------------------------------
// --------------------------- Result in success: (template_id: 993) ---------------------------
// var fs = require('fs');

// const createTemplate = async (err, htmlTemplate) => {
//     if (err) {
//         console.log("An error occured while reading template html file!")
//     }
//     try {
//         const template = await client.templates.create({
//             name: "Eric's Template",
//             html: htmlTemplate
//         })
//         console.log(template.id)
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
/* Read the html document as utf8*/
// fs.readFile('./template.html', 'utf8', createTemplate)


// --------------------------- Step2: Create a campaign then put my template in -----------------------
// --------------------------- Result in success: (Campaign_id: 28066d886f) ---------------------------
// const run = async () => {
//     try {
//         const campaign = await client.campaigns.create({
//             type: "regular",
//             recipients: {
//                 list_id: "6b1371d607"
//             },
//             settings: {
//                 subject_line: "Eric's task",
//                 preview_text: "This is a previewText",
//                 title: "Eric's campaign Title",
//                 template_id: 993,
//                 from_name: "Eric Wang",
//                 reply_to: "ericwang12399@gmail.com",
//                 auto_footer: true,
//                 inline_css: true,
//             }
//         })
//         console.log(campaign.id);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// run();


// --------------------------- Step3: Send campaign (campaign_id: 28066d886f) ------------------------
// --------------------------- Result in success: received null ---------------------------
// const run = async () => {
//     const response = await client.campaigns.send("28066d886f");
//     console.log(response);
// };

// run();
// test


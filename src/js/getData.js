import popEmailList from "./popluateEmailList";

import globals from "./globals"

async function getData(url){
    try{
        let response = await fetch(url);
        let emailData = await response.json();

        
        // globals = emailData;
        // globals.emailData += emailData.inbox;
        globals.emailData.inbox = emailData.inbox;
        globals.emailData.sent = emailData.sent;
        globals.emailData.starred = emailData.starred;
        globals.emailData.drafts = emailData.drafts;
        globals.emailData.trash = emailData.trash;


        return emailData;
    }
    catch(error){
        alert('we got an unexpected error - please try later');
        console.log(error);
    }
    
}

export default getData;
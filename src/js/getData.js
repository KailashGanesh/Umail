import {updateNumber} from "./domFunctions";
import globals from "./globals"

/**
 * fetches json from a url and adds emailData to globals.emailData 
 * then opens the inbox and first email in inbox, finally calls the updateNumber() function
 * @param  {String} url the url to fetch
 */
async function getData(url){
    try{
        let response = await fetch(url);
        let emailData = await response.json();

        
        // globals = emailData;
        globals.emailData.inbox = emailData.inbox;
        globals.emailData.sent = emailData.sent;
        globals.emailData.starred = emailData.starred;
        globals.emailData.drafts = emailData.drafts;
        globals.emailData.trash = emailData.trash;


        const inboxBtn = document.getElementById('inboxBtn');
        const emailList =  document.getElementById('email-list');

        inboxBtn.click(); // open inbox on page load
        emailList.firstElementChild.click(); // open first email on page load
        updateNumber(); // update numbers on menus
    }
    catch(error){
        alert('we got an unexpected error - please try later');
        console.log(error);
    }
    
}

export default getData;
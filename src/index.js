import getData from './js/getData';
import globals from './js/globals';
import {popEmailList, popEmailReader, highlightElement, updateNumber, defaultScreen, filterObject} from './js/popluateEmailList';
import './styles/main.scss'


let url = 'https://raw.githubusercontent.com/KailashGanesh/Umail/master/emails.json';
// url = 'http://127.0.0.1:5500/emails.json'

const sideBar =  document.getElementById('sidebar');
const emailList =  document.getElementById('email-list');
// const emailReader = document.getElementById('email-reader');
const searchBar = document.getElementById('searchBar');

const inboxBtn = document.getElementById('inboxBtn');


getData(url).then( () => {
    // highlightElement(inboxBtn,'sidebarMenu')
    // popEmailList(globals.emailData,'inbox', true);
    inboxBtn.click();
    emailList.firstElementChild.click();
    updateNumber();
    // const firstEmail = document.getElementById('1');
    // highlightElement(firstEmail,'emailList')
    // popEmailReader(globals.emailData,firstEmail);
})

let data = globals.emailData;

sideBar.addEventListener('click', (e) => {
    let eventTarget = e.target.closest('button');

    if(eventTarget == null) return;

    // switch(eventTarget.id){
    //     case 'inboxBtn':
    //         // eventTarget.classList.add('active');
    //         highlightElement(eventTarget,'sidebarMenu')
    //         defaultScreen(false,true)
    //         popEmailList(data, 'inbox')
    //     break;
    //     case 'sentBtn':
    //         highlightElement(eventTarget,'sidebarMenu')
    //         defaultScreen(false,true)
    //         popEmailList(data, 'sent')
    //     break;
    //     case 'starredBtn':
    //         highlightElement(eventTarget,'sidebarMenu')
    //         defaultScreen(false,true)
    //         popEmailList(data, 'starred')
    //     break;
    //     case 'draftsBtn':
    //         highlightElement(eventTarget,'sidebarMenu')
    //         defaultScreen(false,true)
    //         popEmailList(data, 'drafts')
    //     break;
    //     case 'trashBtn':
    //         highlightElement(eventTarget,'sidebarMenu')
    //         defaultScreen(false,true)
    //         popEmailList(data, 'trash')
    //     break;

        // let result;

        // case 'personalBtn':
        //     result = { 'inbox': data['inbox'].filter(obj => obj.tag == 'personal')};
        //     highlightElement(eventTarget,'sidebarMenu')
        //     defaultScreen(false,true)
        //     popEmailList(result, 'inbox')
        // break;
        // case 'clientsBtn':
        //     result = { 'inbox': data['inbox'].filter(obj => obj.tag == 'clients')};
        //     highlightElement(eventTarget,'sidebarMenu')
        //     defaultScreen(false,true)
        //     popEmailList(result, 'inbox')
        // break;
        // case 'familyBtn':
        //     result = { 'inbox': data['inbox'].filter(obj => obj.tag == 'family')};
        //     highlightElement(eventTarget,'sidebarMenu')
        //     defaultScreen(false,true)
        //     popEmailList(result, 'inbox')
        // break;
        // case 'friendsBtn':
        //     result = { 'inbox': data['inbox'].filter(obj => obj.tag == 'friends')};
        //     highlightElement(eventTarget,'sidebarMenu')
        //     defaultScreen(false,true)
        //     popEmailList(result, 'inbox')
        // break;
        // case 'archivesBtn':
        //     result = { 'inbox': data['inbox'].filter(obj => obj.tag == 'archives')};
        //     highlightElement(eventTarget,'sidebarMenu')
        //     defaultScreen(false,true)
        //     popEmailList(result, 'inbox')
        // break;
    // }
    if(eventTarget.dataset.type == 'folder'){
        let folderName = eventTarget.id.slice(0, -3);


        highlightElement(eventTarget,'sidebarMenu')
        defaultScreen(false,true)
        popEmailList(data, folderName)
    }else if(eventTarget.dataset.type == 'tag'){
        let search = eventTarget.id.slice(0, -3);
        let result = filterObject('inbox', 'tag', search);


        highlightElement(eventTarget,'sidebarMenu')
        defaultScreen(false,true)
        popEmailList({'inbox':result}, 'inbox')
    }
})

emailList.addEventListener('click', (e) => {
    let eventTarget = e.target.closest('li');

    if(eventTarget == null) return;

    highlightElement(eventTarget, 'emailList')
    popEmailReader(globals.emailData,eventTarget);
})

searchBar.addEventListener('keyup', (e) => {
    let searchText = searchBar.value;

    if (e.key == 'Enter'){
        e.preventDefault()

        let currentActiveMenuBtn = globals.activeSidebarMenu;
        let folderName = currentActiveMenuBtn.id.slice(0, -3);

        if(currentActiveMenuBtn.dataset.type == 'folder'){
            let result = filterObject(folderName, 'subject', searchText, true);
            let resultObj = {};
            resultObj[folderName] = result;

            popEmailList(resultObj, folderName)
        }else if(currentActiveMenuBtn.dataset.type == 'tag'){

            let result = filterObject('inbox', 'tag', folderName);

            globals.emailData[folderName] = result;

            result = filterObject(folderName, 'subject', searchText, true);
            popEmailList({'inbox':result}, 'inbox')
        }

        // popEmailList({'inbox':result}, 'inbox')
        // defaultScreen(false,true)
    }
})
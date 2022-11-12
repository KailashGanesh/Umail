import getData from './js/getData';
import globals from './js/globals';
import {popEmailList, popEmailReader, highlightElement, updateNumber, defaultScreen, filterObject,openComposeBox, closeComposeBox} from './js/popluateEmailList';
import './styles/main.scss'


let url = 'https://raw.githubusercontent.com/KailashGanesh/Umail/master/emails.json';
// url = 'http://127.0.0.1:5500/emails.json'

const sideBar =  document.getElementById('sidebar');
const emailList =  document.getElementById('email-list');
const searchBar = document.getElementById('searchBar');
const inboxBtn = document.getElementById('inboxBtn');
const composeCloseBtn = document.getElementById('closeCompose');
const sendEmailBtn = document.getElementById('sendBtn');

getData(url).then( () => {
    inboxBtn.click();
    emailList.firstElementChild.click();
    updateNumber();
})

let data = globals.emailData;

sideBar.addEventListener('click', (e) => {
    let eventTarget = e.target.closest('button');

    if(eventTarget == null){
        return;
    }else if(eventTarget.dataset.type == 'folder'){
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
    }else if(eventTarget.id == 'settingsBtn'){
        let popup = document.getElementById('popup');
        let toggle = document.getElementById('setting_toggle');

        popup.classList.add('shown');

        toggle.addEventListener('change',() => {

            globals.settings.openNextEmailAfterDelete = (/true/i).test(toggle.value);
        })
    }else if(eventTarget.id == 'composeBtn'){
       openComposeBox();
    }else{return;}
})

composeCloseBtn.addEventListener('click', closeComposeBox);
sendEmailBtn.addEventListener('click', closeComposeBox);

emailList.addEventListener('click', (e) => {
    let eventTarget = e.target.closest('li');

    if(eventTarget == null) return;

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
        defaultScreen(false,true)
    }
})




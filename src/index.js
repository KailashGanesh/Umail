import getData from './js/getData';
import globals from './js/globals';
import {popEmailList, popEmailReader, highlightElement} from './js/popluateEmailList';
import './styles/main.scss'


let url = 'https://raw.githubusercontent.com/KailashGanesh/Umail/master/emails.json';
url = 'http://127.0.0.1:5500/emails.json'

const sideBar =  document.getElementById('sidebar');
const emailList =  document.getElementById('email-list');
const emailReader = document.getElementById('email-reader')
const inboxBtn = document.getElementById('inboxBtn');


getData(url).then( () => {
    highlightElement(inboxBtn,'sidebarMenu')
    popEmailList(globals.emailData,'inbox');
    // const firstEmail = document.getElementById('1');
    // highlightElement(firstEmail,'emailList')
    // popEmailReader(globals.emailData,firstEmail);
})

let data = globals.emailData;

sideBar.addEventListener('click', (e) => {
    let eventTarget = e.target.closest('button');

    if(eventTarget == null) return;
    console.log('sidebar',e.target.closest('button').id)

    switch(eventTarget.id){
        case 'inboxBtn':
            // eventTarget.classList.add('active');
            highlightElement(eventTarget,'sidebarMenu')
            popEmailList(data, 'inbox')
        break;
        case 'sentBtn':
            highlightElement(eventTarget,'sidebarMenu')
            popEmailList(data, 'sent')
        break;
        case 'starredBtn':
            highlightElement(eventTarget,'sidebarMenu')
            popEmailList(data, 'starred')
        break;
        case 'draftsBtn':
            highlightElement(eventTarget,'sidebarMenu')
            popEmailList(data, 'drafts')
        break;
        case 'trashBtn':
            highlightElement(eventTarget,'sidebarMenu')
            popEmailList(data, 'trash')
        break;
    }
})

emailList.addEventListener('click', (e) => {
    let eventTarget = e.target.closest('li');

    if(eventTarget == null) return;

    highlightElement(eventTarget, 'emailList')
    popEmailReader(globals.emailData,eventTarget);
})


// async () => {emailData =  await getData(url);}
// let emailData = async () => {return await getData(url)};






// import laughing from './assets/laughing.svg'

// const laughImg = document.getElementById('laughImg')
// laughImg.src = laughing

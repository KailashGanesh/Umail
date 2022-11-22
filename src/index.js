import getData from './js/getData';
import globals from './js/globals';
import {popEmailList, popEmailReader, highlightElement,defaultScreen, filterObject,openComposeBox, closeComposeBox, addEmailToSent, openPopup, saveFilesToLocalStorage,returnAttachments} from './js/domFunctions';
import './styles/main.scss'


let url = 'https://raw.githubusercontent.com/KailashGanesh/Umail/master/emails.json';
// url = 'http://127.0.0.1:5500/emails.json'

const sideBar =  document.getElementById('sidebar');

getData(url);

let data = globals.emailData;

document.getElementById('sidebar').addEventListener('click', (e) => {
    let eventTarget = e.target.closest('button');

    if(eventTarget == null){
        return; // if user clicked on empty space exit
    }

    switch (eventTarget.dataset.type) {
        case 'folder':
            let folderName = eventTarget.id.slice(0, -3);
            highlightElement(eventTarget,'sidebarMenu')
            defaultScreen(false,true)
            popEmailList(data, folderName)
        break;
        case 'tag':
            let search = eventTarget.id.slice(0, -3);
            let result = filterObject('inbox', 'tag', search);

            highlightElement(eventTarget,'sidebarMenu')
            defaultScreen(false,true)
            popEmailList({'inbox':result}, 'inbox')
        break;
        case 'settings':
            openPopup('settings')
            let popup = document.getElementById('popup');
            let toggle = document.getElementById('setting_toggle');

            popup.classList.add('shown');
            toggle.addEventListener('change', () => {
                globals.settings.openNextEmailAfterDelete = (/true/i).test(toggle.value); // converts string 'true' into bool true
            })
        break;
        case 'compose':
            openComposeBox();
        break;
    }
})

document.getElementById('email-list').addEventListener('click', (e) => {
    let eventTarget = e.target.closest('li');

    if(eventTarget == null) return;

    popEmailReader(globals.emailData,eventTarget);
})

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    let searchText = document.getElementById('searchBar').value;

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

        defaultScreen(false,true)
    }
})


// == compose Box eventlistener ==
document.getElementById('closeCompose').addEventListener('click', closeComposeBox);
document.getElementById('sendBtn').addEventListener('click', addEmailToSent);
// open file input on clicking attach button
document.getElementById('attachBtn').addEventListener("click", () => { document.getElementById('dropzoneInput').click(); });
// add delete to file attachments
document.getElementById('compose-attachments').addEventListener('click',(e) => {
    if(e.target.nodeName == 'BUTTON'){
        let triggerBtn = e.target;
        let attachmentFileName = triggerBtn.dataset.delete;
        // gets index in gobals array
        let index = globals.currentFileUploads.indexOf(attachmentFileName)

        // remove the attachment
        e.target.closest('.attachment').remove();
        // removes item from local storage
        localStorage.removeItem(attachmentFileName);
        // delete item from gobal array
        globals.currentFileUploads.splice(index, 1);
        console.log('current file uploads',globals.currentFileUploads)
    }
});
const composeBox = document.getElementById('composeBox');
const dropZoneInput = document.getElementById('dropzoneInput')
const composeAttachment = document.getElementById('compose-attachments');

dropZoneInput.addEventListener('change', (e) => {
    if (dropZoneInput.files.length) {


        for (let i = 0; i < dropZoneInput.files.length; i++) {
            saveFilesToLocalStorage(dropZoneInput.files[i])
            globals.currentFileUploads.push(dropZoneInput.files[i].name)
        }
    };
    composeAttachment.innerHTML = returnAttachments(globals.currentFileUploads);
});

composeBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    composeBox.classList.remove('compose--writing-mode');

    document.getElementById('messageInput').style.pointerEvents = "none";
    // dropZoneElement.classList.add("drop-zone--over");
});

["dragleave", "dragend"].forEach((type) => {
    composeBox.addEventListener(type, (e) => {
        // dropZoneElement.classList.remove("drop-zone--over");
        composeBox.classList.add("compose--writing-mode");
        setTimeout(() => {
            document.getElementById('messageInput').style.pointerEvents = "auto";
        }, 700)
    });
});

composeBox.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
        dropZoneInput.files = e.dataTransfer.files;

        for (let i = 0; i < dropZoneInput.files.length; i++) {
            saveFilesToLocalStorage(dropZoneInput.files[i])
            globals.currentFileUploads.push(dropZoneInput.files[i].name)
        }

    }
    composeAttachment.innerHTML = returnAttachments(globals.currentFileUploads);

    // dropZoneElement.classList.remove("drop-zone--over");
    composeBox.classList.add("compose--writing-mode");
});

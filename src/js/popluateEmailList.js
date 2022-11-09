import globals from './globals';

export const popEmailList = (data, folderName,openFirstEmail = false) => {


    const emailList = document.getElementById('email-list');
    const list = data[folderName]

    emailList.innerHTML = '';
    emailList.classList.remove('d-flex','ai-center','jc-center');


    if(list.length == 0){
        defaultScreen(true,false)
        // emailList.innerHTML = "No emails in this folder"
    }


    for (let i = 0; i < list.length; i++) {

        let attachment = list[i]['attachment'] ? `<svg class="va-middle fill-cool-gray" height="15" width="15"> <use xlink:href="sprite.svg#icon-paperclip-solid"></use> </svg>`: '';
        let reply = list[i]['reply'] ? `<svg class="va-middle fill-cool-gray" height="20" width="20"> <use xlink:href="sprite.svg#icon-arrow-back-outline"></use> </svg>`: '';
        let tag = '';

        if(list[i]['tag'].length > 1){
            tag =`<span class="tag--${list[i]['tag']} circle va-middle ml-1"></span>`
        }


        emailList.innerHTML += `
    <li class="email__item ${list[i]['unread']? 'unread':''}" id="${globals.emailData[folderName].indexOf(list[i])}" data-folder="${folderName}">
        <div class="email__details">
            <p class="heading-sm email__subject clr-gunmetal va-middle">${list[i]['subject']}</p>
            <span class="fs-sm clr-gunmetal">${list[i]['time']}</span>
        </div>
        <div class="email__details">
            <p class="fs-sm clr-cool-gray">${list[i]['name']}</p>
            <div>
                ${attachment}
                ${reply}
                ${tag}
            </div>
        </div> 
    </li>
    `;
    }
    if(openFirstEmail){
        // const firstEmail = document.getElementById('0');
        // highlightElement(firstEmail,'emailList')
        // popEmailReader(globals.emailData,firstEmail);
        emailList.firstElementChild.click()
    }
}

export const defaultScreen = (clearEmailList = false,clearEmailReader = false) => {

    if(clearEmailList){
        const emailList = document.getElementById('email-list');
        emailList.classList.add('d-flex','ai-center','jc-center');

        emailList.innerHTML = `<div> 
        <svg width="120" height="120" class="va-middle m-auto d-block fill-cool-gray"><use xlink:href="sprite.svg#icon-folder-open-solid"></use></svg>
        <p class="clr-cool-gray">No emails in this folder</p>
        </div>`;
    }

    if(clearEmailReader){
        const emailReader = document.getElementById('email-reader');
        emailReader.classList.add('d-flex','ai-center','jc-center');

        emailReader.innerHTML = `<div class="ta-c"> 
        <p class="clr-cool-gray m-auto mb-4">No email selected</p>
        <svg width="120" height="120" class="va-middle m-auto d-block fill-cool-gray" style="transform: translateX(-10px);"><use xlink:href="sprite.svg#icon-sparrow-solid"></use></svg>
        <p class="clr-cool-gray mt-3">Sparrow Email Client</p>
        </div>`;
    }

}

export const popEmailReader = (data,eventElement) => {
    
    const emailReader = document.getElementById('email-reader');
    const index = eventElement.id;
    const folder = eventElement.dataset.folder;
    let attachment = '';
    emailReader.classList.remove('d-flex','ai-center','jc-center');

    if(globals.emailData[folder][index]['attachment']){
        globals.emailData[folder][index]['files'].forEach(fileName => {
            let fileType = fileName.slice(fileName.length - 3)
            if(fileType == 'pdf'){
                attachment += `<div class="attachment"><svg width="20" height="20" class="va-middle fill-red"><use xlink:href="sprite.svg#icon-file-pdf-solid"></use></svg><span class="va-middle ml-2">${fileName}</span></div>`;
            }else if (fileType == 'doc'){
                attachment += `<div class="attachment"><svg width="20" height="20" class="va-middle fill-blue"><use xlink:href="sprite.svg#icon-file-word-solid"></use></svg><span class="va-middle ml-2">${fileName}</span></div>`;
            }else{
                attachment += `<div class="attachment"><svg width="20" height="20" class="va-middle"><use xlink:href="sprite.svg#icon-file-solid"></use></svg><span class="va-middle ml-2">${fileName}</span></div>`;
            }
        });
    }

    let picture = './img/avatar-512x512.jpg'
    if(data[folder][index]['picture'].length){
        picture = `./img/${data[folder][index]['picture']}`
    }

    let tag = '';
    if(data[folder][index]['tag'].length > 1){
        tag =`<span class="tag--${data[folder][index]['tag']} email__tag"></span>`
    }

    emailReader.innerHTML = `
<div class="email__header">
    <div class="d-flex ai-center jc-space-between flex-wrap">
        <div class="email__img">
            <img src="${picture}" alt="profile picture"
            style="border-radius: 50%;" width="54" height="54" class="fs-sm">
            ${tag}
        </div>
        <div class="ml-4">
            <p>${data[folder][index]['subject']}</p>
            <div>
                <span class="fs-md clr-cool-gray">${ folder == 'sent'|| folder == 'drafts' ?'To:':'From:'}</span>
                <div class="dropdown fs-sm">
                <span class="va-middle clr-cool-gray">${data[folder][index]['name']}</span>
                    <svg class="va-middle fill-cool-gray" width="10" height="10">
                        <use xlink:href="sprite.svg#icon-chevron-down-solid"></use>
                    </svg>
                    <div class="dropdown__content">
                        <p>From: ${data[folder][index]['from']}</p>
                        <p>To: ${data[folder][index]['to']}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="btn-group--round">
        <button class="btn">
            <svg class="btn__icon">
                <use xlink:href="sprite.svg#icon-star"></use>
            </svg>
        </button>
        <button class="btn">
            <svg class="btn__icon">
                <use xlink:href="sprite.svg#icon-document-text"></use>
            </svg>
        </button>
        <button class="btn btn-clicked" id="deleteBtn">
            <svg class="btn__icon">
                <use xlink:href="sprite.svg#icon-trash-can"></use>
            </svg>
        </button>
        <button class="btn">
            <svg class="btn__icon">
                <use xlink:href="sprite.svg#icon-arrow-back-outline"></use>
            </svg>
        </button>
    </div>
</div>

<div class="email__body"> 
    <p class="email__message">${data[folder][index]['message']}</p>
    
    <div class="email__attachments">${attachment}</div>
</div>`;

    if(eventElement.classList.contains('unread')){
        eventElement.classList.remove('unread')
        globals.emailData[folder][index]['unread'] = false;
        updateNumber();
    }

    let deleteBtn = document.getElementById('deleteBtn');

    deleteBtn.addEventListener('click', () =>{
       
        if(folder != 'trash'){
            globals.emailData['trash'].push(globals.emailData[folder][index]);
        }

        globals.emailData[folder].splice(index, 1);
        eventElement.remove();

        defaultScreen(false,true)
        updateNumber();
        globals['activeSidebarMenu'].click()

        // if(globals['activeSidebarMenu'].firstElementChild.classList[0].match('tag--')){
        //     return;
        // } 
            
        // popEmailList(data, folder)
    })
}

export function highlightElement(element, parentElement) {


    switch (parentElement) {
        case 'sidebarMenu':
            if (globals.activeSidebarMenu) {
                globals.activeSidebarMenu.classList.remove('active')
            }
            globals.activeSidebarMenu = element;
            element.classList.add('active')
            break;

        case 'emailList':
            if (globals.activeEmailList) {
                globals.activeEmailList.classList.remove('active--email')
            }
            globals.activeEmailList = element;
            element.classList.add('active--email')
            break;
    }

}

export const updateNumber = () => {
    let appHeading = document.getElementById('addHeading');
    let inboxBtnText = document.getElementById('inboxBtnText');
    let trashBtnText = document.getElementById('trashBtnText');

    let personalBtnText = document.getElementById('personalBtnText');
    let clientsBtnText = document.getElementById('clientsBtnText');
    let familyBtnText = document.getElementById('familyBtnText');
    let friendsBtnText = document.getElementById('friendsBtnText');
    let archivesBtnText = document.getElementById('archivesBtnText');

    
    let unreadEmailNumber = filterObject('inbox','unread',true).length;

    appHeading.innerHTML = `sparrow ${(unreadEmailNumber == '0')?'':'(' + unreadEmailNumber + ')'}`;
    inboxBtnText.innerHTML = `Inbox ${(unreadEmailNumber == '0')?'':'(' + unreadEmailNumber + ')'}`;
    trashBtnText.innerHTML = `Trash ${globals.emailData.trash.length == '0'? '':'(' + globals.emailData.trash.length+')'}`;

    // let tagList = ['personal','clients','family','friends','archives']
    // let tagListNumbers = {}

    // for(let i = 0; i < tagList.length; i++){
    //     tagListNumbers[tagList[i]] = filterObject('inbox','tag',tagList[i]).length
    // }

    let tagList = {'personal':personalBtnText,
                'clients':clientsBtnText,
                'family':familyBtnText,
                'friends':friendsBtnText,
                'archives':archivesBtnText,
            }

    for(let i in tagList){
       let number = filterObject('inbox','tag',i).length
        tagList[i].innerHTML = `${i} ${number == '0'?'':'(' + number + ')'}`;
    }


    // personalBtnText.innerHTML = `Personal ${tagListNumbers['personal'] == '0'?'':'(' + tagListNumbers['personal'] + ')'}`;
    // clientsBtnText.innerHTML = `Clients ${tagListNumbers['personal'] == '0'?'':'(' + tagListNumbers['personal'] + ')'}`;
    // familyBtnText.innerHTML = `Family ${tagListNumbers['personal'] == '0'?'':'(' + tagListNumbers['personal'] + ')'}`;
    // friendsBtnText.innerHTML = `Friends ${tagListNumbers['personal'] == '0'?'':'(' + tagListNumbers['personal'] + ')'}`;
    // archivesBtnText.innerHTML = `Archives  ${tagListNumbers['archives'] == '0'?'':'(' + tagListNumbers['archives'] + ')'}`;
}

export const filterObject = (folder, keyValue, search, isMatch = false) => {
    if(isMatch){
        return globals.emailData[folder].filter(obj => obj[keyValue].toLowerCase().match(search.toLowerCase()));
    }

    return globals.emailData[folder].filter(obj => obj[keyValue] == search);
}
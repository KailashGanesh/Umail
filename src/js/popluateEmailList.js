import globals from './globals';

export const popEmailList = (data, folderName) => {


    const emailList = document.getElementById('email-list');
    const list = data[folderName]

    emailList.innerHTML = '';

    if(list.length == 0){
        emailList.innerHTML = "No emails in this folder"
    }


    for (let i = 0; i < list.length; i++) {

        let attachment = list[i]['attachment'] ? `<svg class="va-middle fill-cool-gray" height="15" width="15"> <use xlink:href="sprite.svg#icon-paperclip-solid"></use> </svg>`: '';
        let reply = list[i]['reply'] ? `<svg class="va-middle fill-cool-gray" height="20" width="20"> <use xlink:href="sprite.svg#icon-arrow-back-outline"></use> </svg>`: '';
        let tag = '';

        if(list[i]['tag'].length > 1){
            tag =`<span class="tag--${list[i]['tag']} circle va-middle ml-1"></span>`
        }

        emailList.innerHTML += `
    <li class="email__item" id="${i}" data-folder="${folderName}">
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

    const firstEmail = document.getElementById('0');
    highlightElement(firstEmail,'emailList')
    popEmailReader(globals.emailData,firstEmail);
}

export const popEmailReader = (data,eventElement) => {
    

    const emailReader = document.getElementById('email-reader');
    const index = eventElement.id;
    const folder = eventElement.dataset.folder;
    let attachment = '';

    // console.log(data, index)
    if(data[folder][index]['attachment']){
        data[folder][index]['files'].forEach(element => {
            let fileType = element.slice(element.length - 3)
                console.log(fileType)
            if(fileType == 'pdf'){
                attachment += `<div class="attachment"><svg width="20" height="20" class="va-middle fill-red"><use xlink:href="sprite.svg#icon-file-pdf-solid"></use></svg><span class="va-middle ml-2">${element}</span></div>`;
            }else if (fileType == 'doc'){
                attachment += `<div class="attachment"><svg width="20" height="20" class="va-middle fill-blue"><use xlink:href="sprite.svg#icon-file-word-solid"></use></svg><span class="va-middle ml-2">${element}</span></div>`;
            }else{
                attachment += `<div class="attachment"><svg width="20" height="20" class="va-middle"><use xlink:href="sprite.svg#icon-file-solid"></use></svg><span class="va-middle ml-2">${element}</span></div>`;
            }
        });
    }

    let picture = './img/avatar-512x512.jpg'
    if(data[folder][index]['picture'].length){
        console.log('picture ++++++',data[folder][index]['picture'])
        picture = `./img/${data[folder][index]['picture']}`
    }

    let tag = '';
    console.log(data)
    if(data[folder][index]['tag'].length > 1){
        console.log('tagggggg')
        tag =`<span class="tag--${data[folder][index]['tag']} email__tag"></span>`
    }

    emailReader.innerHTML = `
<div class="email__header">
    <div class="d-flex ai-center jc-space-between">
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
        <button class="btn btn-clicked">
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

    // console.log('globals.activeSidebtn', globals.activeSidebarBtn)
}
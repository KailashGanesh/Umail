import globals from './globals';

export const popEmailList = (data, folderName) => {


    const emailList = document.getElementById('email-list');
    const list = data[folderName]

    emailList.innerHTML = '';

    for (let i = 0; i < list.length; i++) {
        emailList.innerHTML += `
    <li class="email__item" id="${i}" data-folder="${folderName}">
        <div class="email__details">
            <p class="heading-sm email__subject">${list[i]['subject']}</p>
            <span class="fs-sm">${list[i]['time']}</span>
        </div>
        <div class="email__details">
            <p class="fs-sm">${list[i]['from']}</p>
            <div>
                <svg class="btn__icon va-middle">
                    <use xlink:href="sprite.svg#icon-arrow-back-outline"></use>
                </svg>
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

    console.log(data, index)

    emailReader.innerHTML = `
<div class="email__header">
    <div class="d-flex ai-center jc-space-between">
        <img src="https://www.murrayglass.com/wp-content/uploads/2020/10/avatar-1536x1536.jpeg" alt=""
        style="border-radius: 50%;" width="54" height="54">
        <div class="ml-4">
            <p>${data[folder][index]['subject']}</p>
            <div>
                <span>From:</span>
                <span>${data[folder][index]['from']}</span>
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
    <div class="email__attachments">${data[folder][index]['files']}</div>
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

    console.log('globals.activeSidebtn', globals.activeSidebarBtn)
}
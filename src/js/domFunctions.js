import globals from './globals';

/**
 * loops through the emailData[folderName eg. 'inbox'] and populates email list element
 * @param  {object} data emailData object
 * @param  {string} folderName the folder the email belongs to eg. inbox, sent etc
 */
export const popEmailList = (data, folderName) => {
    const emailList = document.getElementById('email-list');
    const list = data[folderName]

    emailList.innerHTML = ''; // clear email list
    emailList.classList.remove('d-flex','ai-center','jc-center'); // remove classes that might be added in default screen

    if(list.length == 0){
        // if no emails are available in the current folder show the default screen
        defaultScreen(true,false)
    }

    // loop thought the array
    for (let i = 0; i < list.length; i++) {

        // if attachment is available/true, add attachment icon
        let attachment = list[i]['attachment'] ? `<svg class="va-middle fill-cool-gray" height="15" width="15"> <use xlink:href="dist/sprite.svg#icon-paperclip-solid"></use> </svg>`: '';

        // if reply is true, add reply icon
        let reply = list[i]['reply'] ? `<svg class="va-middle fill-cool-gray" height="20" width="20"> <use xlink:href="dist/sprite.svg#icon-arrow-back-outline"></use> </svg>`: '';

        let tag = ''; // default no tags

        if(list[i]['tag'].length > 1){
            // if tag is available add the tag class
            tag =`<span class="tag--${list[i]['tag']} circle va-middle ml-1"></span>`
        }


        emailList.innerHTML += `
    <li class="email__item d-flex flex-direction-col p-5 ${list[i]['unread']? 'unread':''}" id="${globals.emailData[folderName].indexOf(list[i])}" data-folder="${folderName}">
        <div class="d-flex ai-center jc-space-between">
            <p class="heading-sm email__subject clr-gunmetal va-middle">${list[i]['subject']}</p>
            <span class="fs-sm clr-gunmetal">${list[i]['time']}</span>
        </div>
        <div class="d-flex ai-center jc-space-between">
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
}

/**
 * clears child elements and shows a default or placeholder screen in emailList and emailReader
 * @param  {Boolean} clarEmailList if true it will change email list to default view
 * @param  {Boolean} clearEmailReader if true it will change email reader to default view
 */
export const defaultScreen = (clearEmailList = false,clearEmailReader = false) => {

    if(clearEmailList){
        const emailList = document.getElementById('email-list');
        emailList.classList.add('d-flex','ai-center','jc-center');

        emailList.innerHTML = `<div> 
        <svg width="120" height="120" class="va-middle m-auto d-block fill-cool-gray"><use xlink:href="dist/sprite.svg#icon-folder-open-solid"></use></svg>
        <p class="clr-cool-gray">No emails in this folder</p>
        </div>`;
    }

    if(clearEmailReader){
        const emailReader = document.getElementById('email-reader');
        emailReader.classList.add('d-flex','ai-center','jc-center');

        emailReader.innerHTML = `<div class="ta-c"> 
        <p class="clr-cool-gray m-auto mb-4">No email selected</p>
        <svg width="120" height="120" class="va-middle m-auto d-block fill-cool-gray" style="transform: translateX(-10px);"><use xlink:href="dist/sprite.svg#icon-sparrow-solid"></use></svg>
        <p class="clr-cool-gray mt-3">Sparrow Email Client</p>
        </div>`;
    }

}

/**
 * calls highlightElement on clicked item in email list
 * displays the message,subject, profile picture in email reader
 * @param  {Object} data the email data object
 * @param  {HTMLElement} eventElement the email item element that needs to be displayed (the item from the list the user clicked on)
 */
export const popEmailReader = (data,eventElement) => {
    // highlight the currently displaced email in email list
    highlightElement(eventElement, 'emailList')
    
    const emailReader = document.getElementById('email-reader');
    emailReader.classList.remove('d-flex','ai-center','jc-center');

    const index = eventElement.id;
    const folder = eventElement.dataset.folder;

    let attachment = '';
    if(globals.emailData[folder][index]['attachment']){
        globals.emailData[folder][index]['files'].forEach(fileName => {

            let fileType = fileName.slice(fileName.length - 3)

            if(fileType == 'pdf'){
                // if extension is pdf add pdf svg
                attachment += `<div class="attachment pt-2 pb-2 pl-4 pr-4"><svg width="20" height="20" class="va-middle fill-red"><use xlink:href="dist/sprite.svg#icon-file-pdf-solid"></use></svg><span class="va-middle ml-2">${fileName}</span></div>`;
            }else if (fileType == 'doc'){
                // if extension is doc add doc svg
                attachment += `<div class="attachment pt-2 pb-2 pl-4 pr-4"><svg width="20" height="20" class="va-middle fill-blue"><use xlink:href="dist/sprite.svg#icon-file-word-solid"></use></svg><span class="va-middle ml-2">${fileName}</span></div>`;
            }else{
                // if extension is other then those two, add normal file svg
                attachment += `<div class="attachment pt-2 pb-2 pl-4 pr-4"><svg width="20" height="20" class="va-middle"><use xlink:href="dist/sprite.svg#icon-file-solid"></use></svg><span class="va-middle ml-2">${fileName}</span></div>`;
            }
        });
    }

    let pictureJpg = 'dist/img/avatar-512x512.jpg' // by default it's unknown profile picture
    if(data[folder][index]['picture'].length){
        // if picture exists in json - change it to that picture
        pictureJpg = `dist/img/${data[folder][index]['picture']}`
    }
    let pictureWebp = pictureJpg.slice(0,-4) + '.webp'; // remove .jpg and add .webp

    let tag = ''; // default no tags
    if(data[folder][index]['tag'].length > 1){ 
        // if tag is available, add that tag class
        tag =`<span class="tag--${data[folder][index]['tag']} email__tag"></span>`
    }

    emailReader.innerHTML = `
<div class="email__header d-flex jc-space-between ai-center flex-wrap pt-10 pb-10 pl-7 pr-7">
    <div class="d-flex ai-center jc-space-between flex-wrap">
        <div class="email__imgContainer">

            <picture>
                <source srcset="${pictureWebp}" type="image/webp">
                <source srcset="${pictureJpg}" type="image/jpeg">

                <img src="${pictureJpg}" alt="profile picture" class="fs-sm email__picture">
            </picture>
            ${tag}
        </div>
        <div class="ml-4">
            <p>${data[folder][index]['subject']}</p>
            <div>
                <span class="fs-md clr-cool-gray">${ folder == 'sent'|| folder == 'drafts' ?'To:':'From:'}</span>

                <a tabindex="0" href="javascript:void(0);" class="dropdown fs-sm" id="dropdown">
                    <span class="va-middle clr-cool-gray">${data[folder][index]['name']}</span>
                    <svg class="va-middle fill-cool-gray" width="10" height="10">
                        <use xlink:href="dist/sprite.svg#icon-chevron-down-solid"></use>
                    </svg>
                    <div class="dropdown__content">
                        <p>From: ${data[folder][index]['from']}</p>
                        <p>To: ${data[folder][index]['to']}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>


    <div class="btn-group--round">
        <button class="btn">
            <svg class="btn__icon">
                <use xlink:href="dist/sprite.svg#icon-star"></use>
            </svg>
        </button>
        <button class="btn">
            <svg class="btn__icon">
                <use xlink:href="dist/sprite.svg#icon-document-text"></use>
            </svg>
        </button>
        <button class="btn btn-clicked" id="deleteBtn">
            <svg class="btn__icon">
                <use xlink:href="dist/sprite.svg#icon-trash-can"></use>
            </svg>
        </button>
        <button class="btn">
            <svg class="btn__icon">
                <use xlink:href="dist/sprite.svg#icon-arrow-back-outline"></use>
            </svg>
        </button>
    </div>
</div>

<div class="email__body p-7"> 
    <p class="email__message">${data[folder][index]['message']}</p>
    
    <div class="email__attachments d-flex flex-wrap">${attachment}</div>
</div>`;

    if(eventElement.classList.contains('unread')){
        eventElement.classList.remove('unread') // remove class unread on email that's opened
        globals.emailData[folder][index]['unread'] = false; // mark it read on global data
        updateNumber(); // update numbers to reflect the change
    }

    const deleteBtn = document.getElementById('deleteBtn'); // get delete button in email reader
    const dropdown = document.getElementById('dropdown');

    deleteBtn.addEventListener('click', () =>{
        deleteEmail(eventElement);
    })

    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    })

    dropdown.addEventListener('focusout', () => { 
        dropdown.classList.remove('active'); 
    })
}

/**
 * moves email object form gobals.emailData[folder] to gobals.emailData['trash'], clicks on active sidebar button to reload the email list
 * if the email is in trash folder, it deletes the object for trash folder
 * @param  {Element} eventElement the email item element that needs to be deleted
 */
export const deleteEmail = (eventElement) => {

    const index = eventElement.id;
    const folder = eventElement.dataset.folder;

    // if the folder we are in, is not trash - move the email to trash
    // if the folder is trash, the email will just be permanently deleted
    if(folder != 'trash'){
        globals.emailData['trash'].push(globals.emailData[folder][index]);
    }

    // eventElement.remove(); // remove the email from email list
    globals.emailData[folder].splice(index, 1); // removes the email from global array
    updateNumber(); // an email was deleted so update the numbers
    globals['activeSidebarMenu'].click() // click on the current active menu to reload email list


    if(globals.settings.openNextEmailAfterDelete){ // checking settings to see if this features is turned on
        let activeElement = document.getElementById(index);

        if(activeElement == null) return; // if no element after the current element exist, quit

        activeElement.click();
    }
}

export const addEmailToSent = () => {

    const currentEmail = {
            "picture":"",
            "name":"",
            "to":"",
            "from":"bob@umail.com",
            "subject":"",
            "time":"",
            "tag":"",
            "attachment":false,
            "files":[],
            "reply":false,
            "unread": false,
            "message":""
        }

    const emailInput = document.getElementById('emailInput');
    const subjectInput = document.getElementById('subjectInput');
    const messageInput = document.getElementById('messageInput');

    // check email address
        // check valid email
        // check if empty
        // 
    if(emailInput.value == ''){
        popup('emailError','Please specify at least one recipient.');
    }else if (emailInput.value){
        popup('emailError', `The address "${emailInput.value}" in the recipient field was not recognized. Please make sure that all addresses are properly formatted.`)
    }

    // check if subject and message is filled

    if(subjectInput.value == '' && messageInput.value ==''){
        console.log(confirm('Send this message without a subject or text in the body?')) ;
    }

    // if no subject change to (no subject)

    if(subjectInput.value == ''){
        currentEmail.subject = '(no subject)';
    }else{
        currentEmail.subject = subjectInput.value;
    }

    currentEmail.message = messageInput.value;


}

export const popup = (whichPopup,popupMessage) => {
    const popupElement = getElementById('popup');
    switch (whichPopup) {
        case 'settings':
            popupElement.innerHTML = ``
            popupElement.classList.add('shown') 
        break;
        case 'emailError':
            
        break;
        case 'fileUpload':
            
        break;
    
    }
}

/**
 * highlights the given element by adding css class
 * @param  {Element} element the element to make active or highlight
 * @param  {string} parentElement which parent element does the element belong to? (sidebarMenu or emailList)
 */
 export const highlightElement = (element, parentElement) => {


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

/**
 * updates the number of unread email in inboxBtn text and app title text - inbox (2), sparrow (2)
 * adds the number of emails in each tag from the inbox next to tag text- personal (1), friends (3)
 * adds the number of emails in trash folder next to trash text
 * if no email is available just the text is displayed, the brackets and number are not shown
 */
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
}

/**
 * adds class of 'shown' to element with id of composeBox
 */
 export const openComposeBox = () => {
    let composeBox = document.getElementById('composeBox')
    composeBox.classList.add('shown');
}

/**
 * removes class of 'shown' from element with id of composeBox
 */
export const closeComposeBox = () => {
    //hides compose box
    document.getElementById('composeBox').classList.remove('shown');

    // clears the values of inputs on close
    document.getElementById('emailInput').value = '';
    document.getElementById('subjectInput').value = '';
    document.getElementById('messageInput').value = '';

}

/**
 * 
 * @param  {HTMLElement} dropzoneElement
 * @param  {file} file 
 */
export const updateThumbnail = (dropzoneElement,file) => {
    console.log(dropzoneElement);
    console.log(file);

    const thumbnailElement = dropzoneElement.getElementById('')

    dropzoneElement.classList.add('drop-zone--thumbnail');

    thumbnailElement.dataset.label = file.name;

    console.log(file.name)

    // if(file.type.startWith('image/')){
    //     const reader = new FileReader();

    //     reader.readAsDataURL(file);
    //     reader.onload = () => {
    //         thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    //     };
    // }
}

/**
 * looks at gobals.emailData[folder]
 * returns a array of objects  if the key is equal to or matches depends on bool passed on isMatch
 * @param  {string} folder folder to look in gobals.emailData
 * @param  {string} key which key of the object to look for
 * @param  {string} search the value to check for equal/partial match
 * @param  {boolean} isMatch true - returns if it has a partial match false - returns only if search value is equal. | default false
 * @return {Array} returns a array with objects that have key that are equal to or match the search string
 */
export const filterObject = (folder, key, search, isMatch = false) => {
    if(isMatch){
        return globals.emailData[folder].filter(obj => obj[key].toLowerCase().match(search.toLowerCase()));
    }

    return globals.emailData[folder].filter(obj => obj[key] == search);
}
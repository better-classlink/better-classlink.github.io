function nthIndexOf(str, char, n) {
    let index = -1;
    while (n-- > 0) {
        index = str.indexOf(char, index + 1);
        if (index === -1) break;
    }
    return index;
}   function getCurrentTime(){
    now = new Date;
    hrs = now.getHours();
    mins = now.getMinutes()
    if(mins < 10){
        mins = '0' + mins
    }
    secs = now.getSeconds()
    amOrPm = 'AM'
    if(secs < 10){
        secs = '0' + secs
    }
    noon = 'Night!'
    if(hrs > 4.5){
        noon = 'Morning!'
        amOrPm = 'AM'   
    }
    if(hrs > 11){
        noon = 'Afternoon!'
        amOrPm = 'PM'
    }
    if(hrs > 18){
        noon = 'Evening!'
        amOrPm = 'PM'
    }
    if(hrs > 20){
        noon = 'Night!'
        amOrPm = 'PM'
    }
        if(hrs > 12){
        hrs = hrs - 12
        amOrPm = 'PM'
    }
    // console.log(`Noon status: ${noon}`)
    document.title = `BCC - ${hrs}:${mins}:${secs} ${amOrPm}`
    return `It's ${hrs}:${mins}:${secs} ${amOrPm}. Good ${noon}`
}
function getDayMonthYear(){
    now = new Date;
    day = now.getDate()
    if(day < 10){
        day = '0' + day
    }
    month = now.getMonth()
    month = month + 1
    if(month < 10){
        month = '0' + month
    }
    year = now.getFullYear()
    return `Today is ${month}/${day}/${year}.`
}
        function infinite() {
            // console.log(`Viewport width: ${window.innerWidth}, Viewport height: ${window.innerHeight}`)
            document.getElementById('bccstartup').textContent = 'Startup Speed: ' + localStorage.getItem('bccSliderSpeed')
            localStorage.setItem('bccSliderSpeed',document.getElementById('settingsRange').value)
            dude = document.getElementById('logo!')
            dynamicWidth = innerWidth * devicePixelRatio
            dynamicHeight = innerHeight * devicePixelRatio
            dynamicWidth = dynamicWidth * 0.8
            dynamicHeight = dynamicHeight * 0.8
            // dude.textContent = dynamicWidth + ', ' + dynamicHeight
            if(window.innerWidth = 1536){

            }
            else{
                    document.getElementById('html').style.zoom = window.innerWidth / 15.36 + 3 + '%'
            }
            // document.getElementById('bgRect').style.height = dynamicHeight + 'px'
            // document.getElementById('bgRect3').style.height = dynamicHeight + 'px'
            // document.getElementById('bgRect2').style.height = dynamicHeight + 'px'
            // document.getElementById('newBgRect').style.width = dynamicWidth + 'px'
            // console.log('we are going infinite!')
            // console.log(window.innerWidth)
            datetimeElement = document.getElementById('updateTime')
            datetimeElement.textContent = getCurrentTime()
            document.getElementById('wannacry').textContent = getDayMonthYear()
            
        }
        function defineBg(){
            document.body.style.backgroundImage = `url(${localStorage.getItem('bccImageBackground')})`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat"; 
            document.body.style.backgroundAttachment = "fixed"; 
        }


        // asdfasghd


        function wait(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
            }

            // you're welcome














    //////////////// ONLOAD PLEASE
        async function defineDefault(item, defaultType){
            if(localStorage.getItem(item) == null){
                localStorage.setItem(item, defaultType)
            document.getElementById(item).value = defaultType
            }
            else{
                document.getElementById(item).value = localStorage.getItem(item)
            }
            console.log(`Item type: ${document.getElementById(item).value}`)
            if(document.getElementById(item).type == 'color'){
            document.getElementById(item).addEventListener('input', function (){
            localStorage.setItem(this.id, this.value)
            })
        }
        if(document.getElementById(item).type == 'text'){
            console.log(`Setting css variable --${item}`)
            document.getElementById(item).value = localStorage.getItem(item)
            document.getElementById(item).addEventListener('input', function (){
                localStorage.setItem(this.id, this.value)
            })
        }
    document.documentElement.style.setProperty(`--${item}`, localStorage.getItem(item))
    }   
        async function runOnLoad(){
            if(localStorage.getItem('bccSliderSpeed') == `null`){
                localStorage.setItem('bccSliderSpeed', 50)
            }
            defineDefault('bccSliderSpeed', '100')
            defineDefault('bccPrimaryTopHeader', '#000000')
            defineDefault('bccHeaderBackgroundColor', '#FFFFFF')
            defineDefault('bccPrimaryHeader', '#000000')
            defineDefault('bccSecondaryHeader', '#000000')
            defineDefault('bccPrimaryRect', '#FFFFFF')
            defineDefault('bccImageBackground', 'Resources/defaultBg.png')
            defineDefault('bccSecondaryRect', '#FFFFFF')
            defineDefault('bccButtonPrimary', '#FFFFFF')
            defineDefault('bccButtonSecondary', '#000000')
            defineDefault('bccAmPmReadoutText', '#000000')
            defineDefault('bccAmPmReadoutBg', '#FFFFFF')
            defineDefault('bccDatetimeReadoutText', '#000000')
            defineDefault('bccDatetimeReadoutBg', '#FFFFFF')
            document.getElementById('settingsRange').value = localStorage.getItem('bccSliderSpeed')
            launch = false
            document.addEventListener('keydown', function(event){
                if(event.key.toLowerCase() === 'p'){
                    toggleModal()
                }
                if(event.key === 'Escape'){
                    console.error('Escape')
                    if(modalStatus = false){
                        toggleModal()
                    }
                }
            })
            modalStatus = true
            futureChild = document.getElementById('fake-modal')
            futureSettings = document.getElementById('settingsButton')
            // document.getElementById('fake-modal').remove()
            gurtYo = 0
            for(let i=1;i < 9; i++){
                if(localStorage.getItem('%customButtons' + i) != null){
                let buttonInUse = document.getElementById(i + 'Pdbutton')
                let indexThing = nthIndexOf(localStorage.getItem('%customButtons' + i), '$', 1)
                buttonInUse.textContent = localStorage.getItem('%customButtons' + i).substring(0, nthIndexOf(localStorage.getItem('%customButtons' + i), '$', 1))
                buttonInUse.addEventListener('click', () => openLink(localStorage.getItem('%customButtons' + i).substring(indexThing + 1, localStorage.getItem('%customButtons' + i).length)))
            }else{
                let buttonInUse = document.getElementById(i + 'Pdbutton')
                buttonInUse.textContent = 'CHANGE ME'
            }
        }
            let logo = "Welcome to Better Classlink!"
            let currentType = ""
            document.getElementById('bgRect').style.display = 'none'
            document.getElementById('dateTime').style.display = 'none'
            document.getElementById('bgRect2').style.display = 'none'
            document.getElementById('bgRect3').style.display = 'none'
            document.getElementById('giantButtonCont').style.display = 'none'
            document.getElementById('buttonzone').style.display = 'none'
            for(let i = 0; i < logo.length; i++){
                currentType = currentType.concat(logo.charAt(i))
                document.getElementById('headthing').textContent = currentType.concat('_')
                await wait(110 - localStorage.getItem('bccSliderSpeed'));
            }
            document.getElementById('headthing').textContent = logo
            defineBg()
            await wait(1100 - localStorage.getItem('bccSliderSpeed') * 10)
            launch = true
            document.getElementById('bgRect').style.display = 'block'
            document.getElementById('bgRect2').style.display = 'block'
            document.getElementById('dateTime').style.display = 'block'
            document.getElementById('giantButtonCont').style.display = 'block'
            document.getElementById('buttonzone').style.display = 'block'
            document.getElementById('buttonzone').style.display = 'block'
            document.getElementById('bgRect3').style.display = 'block'
            if (localStorage.getItem('%customButtons') !== null){
                let bigObj = localStorage.getItem('%customButtons')
                interationCt = bigObj.split('#').length - 1
                // console.log(interationCt)
                let impt = 0
                let impt2 = 0
            setInterval(infinite, 2)
                for(let i = 0; i < interationCt; i++){
            await wait(110 - localStorage.getItem('bccSliderSpeed'))
                    impt = nthIndexOf(bigObj, '$', i + 1) + 1
                    impt2 = nthIndexOf(bigObj, '#', i + 1)
                    name = bigObj.substring(impt, impt2)
                    // console.log('Name: ' + bigObj.substring(impt, impt2))
                    impt = impt2 + 1
                    impt2 = nthIndexOf(bigObj, '*', i + 1)
                    // console.log('Link: ' + bigObj.substring(impt, impt2))
                    let link = bigObj.substring(impt, impt2)
                    let newButton = document.createElement('button')
                    newButton.textContent = name
                    gurtYo = i + 1
                    if(gurtYo % 2 == 1){
                    newButton.classList.add('classButtonAlign')
                    }
                    else{
                    newButton.classList.add('classButtonAlign2')
                    }
                    newButton.style.paddingBlock = '5px'
                    newButton.addEventListener('click', () => openLink(link))
                    appendingDiv = document.getElementById('appendingDiv')
                    appendingDiv.appendChild(newButton)
                }
            }
            await wait(110 - localStorage.getItem('bccSliderSpeed'))
                gurtYo += 1
                finalButton = document.createElement('button')
                if(gurtYo % 2 == 1){
                    finalButton.classList.add('classButtonAlign')
                    }
                else{
                    finalButton.classList.add('classButtonAlign2')
                    }
                finalButton.addEventListener('click', () => window.open('class-changer.html'))
                finalButton.textContent = 'Change Buttons'
                finalButton.style.paddingBlock = '5px'
                appendingDiv.appendChild(finalButton)
                document.getElementById('newBgRect').appendChild(futureChild)
                // document.getElementById('container3').appendChild(futureSettings)
        }
        window.onload = runOnLoad;
        function toggleModal(){
            toggler = document.getElementById('fake-modal')
            // console.log(toggler)
            if(launch){
            if(modalStatus){
                toggler.style.display  = 'block'
                modalStatus = false
            }
            else{
                // console.log('off')
                toggler.style.display = 'none'
                modalStatus = true
            }
        }

    }



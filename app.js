const cancelplan = document.querySelector('.cancel')
const rus =document.querySelectorAll('.rus')
let body=document.querySelector('body')
const selectPlan = document.querySelector('.selectaplan')
const setupguide=document.querySelector('.setup-guide')
const moreoptions = document.querySelector('.dropdown-icon')
const DC =document.querySelector('.compdiv')
const ul =document.querySelector('.content')
const ifCompleted=document.querySelectorAll('.ifcompleted')
const circle =document.querySelectorAll('.takachi')
const svg =document.querySelectorAll('.deen')
const notification =document.querySelector('.notification')
const coordinate =document.querySelectorAll('.coordinate')
const lovely=document.querySelectorAll('.lovely')
const lovel=document.querySelector('.lovel')
const sungba =document.querySelector('.sungba')
const selectbtn =document.querySelector('.selectbtn')
const anone =document.querySelectorAll('.anone')
const duo =document.querySelectorAll('.duo')
const tuo =document.querySelectorAll('.tuo')
const uo =document.querySelector('.uo')
const meco =document.querySelector('.meco')
let headr =document.querySelectorAll('.headr')
let think =0
moreoptions.addEventListener('click', () => {
    let windowWidth=setupguide.getAttribute('data-width')
    if (window.innerWidth<=599) {
     setupguide.setAttribute('data-width','false')
    }else{
        setupguide.setAttribute('data-width','true')
    }
    if(moreoptions.getAttribute('data-value')=='false'){
        moreoptions.setAttribute('data-value','true')
       
    setupguide.style.height = '431px'
    moreoptions.style.backgroundImage=' url(https://crushingit.tech/hackathon-assets/icon-arrow-up.svg)'
ul.style.display ='block'
}
else if(moreoptions.getAttribute('data-value')=='true'){
    moreoptions.setAttribute('data-value','false')
    
    moreoptions.style.backgroundImage=' url(https://crushingit.tech/hackathon-assets/icon-arrow-down.svg)'
ul.style.display ='none'
if (windowWidth=='true') {
    setupguide.style.height = '106px'
}else if(windowWidth=='false'){
    setupguide.style.height = '124px'
}
}
})
cancelplan.addEventListener('click', () => {
    selectPlan.style.display ='none'
})
DC.addEventListener('click',()=>{
    if(DC.getAttribute('data-value') == 'true'){
        document.querySelector('.sec-nav').style.display ='block'
        DC.setAttribute('data-value','false')
    DC.style.background='#656266'
      }else{
        document.querySelector('.sec-nav').style.display ='none'
        DC.setAttribute('data-value','true')
        DC.style.background='#303030'
    }

})

    svg.forEach((cart)=> {
           cart.addEventListener('click',()=>{
           
            if(cart.getAttribute('data-value')=='false'){
                cart.setAttribute('data-value','true')
                body.style.setProperty('--durate','0.5')
                cart.innerHTML =`
                <path
                  d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
                  stroke="#303030"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              `
             
             
              setTimeout(()=>{
                cart.innerHTML =`
                
                <circle cx="12" cy="12" r="12" fill="#303030"></circle>
                <path
                  d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
                  fill="#fff"
                ></path>
              
              `
              body.style.setProperty('--durate','0')
              if(think==5) {
                think=5
              }
              else if(think<5){
                think++
                let numberofcom  =document.querySelector('.number-ofcom')
                numberofcom.innerText =think
                if(think==1){
                  body.style.setProperty('--progresslength',18)
                               } if(think==2){
  
                                 body.style.setProperty('--progresslength',18+13)
                               } if(think==3){
                                 body.style.setProperty('--progresslength',18+27)
                               } if(think==4){
                                 body.style.setProperty('--progresslength',18+40)
                               } if(think==5){
                                 body.style.setProperty('--progresslength',72)
                               }
              }
              
              
             
              },500)
      
            }
            else{
                cart.innerHTML =`
                <circle cx="16" cy="16" r="12" stroke="#303030" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
              `
                cart.setAttribute('data-value','false')
                
                if(think==0) {}
              else if(think<=5){
                think--
                let numberofcom  =document.querySelector('.number-ofcom')
                numberofcom.innerText =think
                if(think==0){
                    body.style.setProperty('--progresslength',0)
                                 }
                if(think==1){
                  body.style.setProperty('--progresslength',18)
                               } if(think==2){
  
                                 body.style.setProperty('--progresslength',18+13)
                               } if(think==3){
                                 body.style.setProperty('--progresslength',18+27)
                               } if(think==4){
                                 body.style.setProperty('--progresslength',18+40)
                               } if(think==5){
                                 body.style.setProperty('--progresslength',72)
                               }
              }
            }
            
           
          
           })
          
            
            cart.addEventListener('mouseover',()=>{
                if(cart.getAttribute('data-value')=='false'){
                        cart.innerHTML=` <circle class="takachi" cx="16" cy="16" r="14" stroke="#404040" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 1" />
     `
                }
            else{}
                   
             })
             cart.addEventListener('mouseout',()=>{
                if (cart.getAttribute('data-value')=='false') {
                     cart.innerHTML=` <circle class="takachi" cx="16" cy="16" r="14" stroke="#404040" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />`
                }
                
                    else{}  
             })
          
       
       
    })

notification.addEventListener('click',()=>{
    if(notification.getAttribute('data-value')=='false'){
        notification.setAttribute('data-value','true')
       notification.style.background='#656266'
        const notificationnav=document.querySelector('.notification-nav')
    notificationnav.style.display='grid'}
    else{
        const notificationnav=document.querySelector('.notification-nav')
        notification.setAttribute('data-value','false')
        notificationnav.style.display='none'
        notification.style.background='#303030'
    }
    
})
coordinate.forEach((toogle)=>{
  
toogle.addEventListener('click',()=>{
    if(toogle.getAttribute('data-value')=='true'){
        toogle.setAttribute('data-value','false')
        
    }
    else{
      coordinate.forEach((ug)=>{
       ug.setAttribute('data-value','false')
      })
        toogle.setAttribute('data-value','true')
      for (let i = 0; i < rus.length; i++) {
       if (coordinate[i].getAttribute('data-value')=='true') {
       if (i==0) {
        rus[i].setAttribute('data-value','true')
        lovel.setAttribute('data-value','true')
         headr[i].setAttribute('data-value','true')
       }
       else if (i==1) {
        rus[i].setAttribute('data-value','true')
        lovely[0].setAttribute('data-value','true')
        headr[i].setAttribute('data-value','true')
       }
       else if  (i==2) {
        rus[i].setAttribute('data-value','true')
        lovely[1].setAttribute('data-value','true')
        headr[i].setAttribute('data-value','true')
       }
       else if (i==3) {
        rus[i].setAttribute('data-value','true')
        lovely[2].setAttribute('data-value','true')
        headr[i].setAttribute('data-value','true')
       }
       else if (i==4) {
        rus[i].setAttribute('data-value','true')
        sungba.setAttribute('data-value','true')
        headr[i].setAttribute('data-value','true')
       }
       }
        else if(coordinate[i].getAttribute('data-value')=='false'){
       if (i==0) {
        rus[i].setAttribute('data-value','false')
        lovel.setAttribute('data-value','false')
        headr[i].setAttribute('data-value','false')
       }
       else if (i==1) {
        rus[i].setAttribute('data-value','false')
        lovely[0].setAttribute('data-value','false')
        headr[i].setAttribute('data-value','false')
       }
       else if  (i==2) {
        rus[i].setAttribute('data-value','false')
        lovely[i-1].setAttribute('data-value','false')
        headr[i].setAttribute('data-value','false')
       }
       else if (i==3) {
        rus[i].setAttribute('data-value','false')
        lovely[i-1].setAttribute('data-value','false')
        headr[i].setAttribute('data-value','false')
       }
       else if (i==4) {
        rus[i].setAttribute('data-value','false')
        sungba.setAttribute('data-value','false')
        headr[i].setAttribute('data-value','false')
       }
        }
      }
}
    
})
})
selectbtn.addEventListener('click',()=>{
  selectbtn.setAttribute('class','selectbtnclickd')
  setTimeout(()=>{
    selectbtn.setAttribute('class','selectbtn')
  },300)
})

anone.forEach((ry)=>{
ry.addEventListener('click',()=>{
  ry.setAttribute('class','anonepresd')
  setTimeout(()=>{
    ry.setAttribute('class','anone')
  },300)
})
})
duo.forEach((ry)=>{
  ry.addEventListener('click',()=>{
    ry.setAttribute('class','duopresd')
    setTimeout(()=>{
      ry.setAttribute('class','duo')
    },300)
  })
  })
  tuo.forEach((ry)=>{
    ry.addEventListener('click',()=>{
      ry.setAttribute('class','tuopresd')
      setTimeout(()=>{
        ry.setAttribute('class','tuo')
      },300)
    })
    })
   
      uo.addEventListener('click',()=>{
        uo.setAttribute('class','uopresd')
        setTimeout(()=>{
          uo.setAttribute('class','uo')
        },300)
      })
      meco.addEventListener('click',()=>{
        meco.setAttribute('class','mecopresd')
        setTimeout(()=>{
          meco.setAttribute('class','meco')
        },300)
      })
     
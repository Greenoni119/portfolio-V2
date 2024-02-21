
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}


if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   reset: true ,
})

sr.reveal(`.home__circle`, {scale: 1.5, delay: 300})
sr.reveal(`.home__subcircle`, {scale: 1.5, delay: 500})
sr.reveal(`.home__title`, {scale: 1, origin: 'bottom', delay: 1200})
sr.reveal(`.contact`, {scale: 1, origin: 'bottom', delay: 1200})
sr.reveal(`.text__fade`, {scale: 1, origin: 'bottom', delay: 1200})
sr.reveal('.hexagon',{scale: 1, origin: 'bottom', delay: 800} );

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
              removeBackSection();
              for(let j=0; j<totalNavList; j++)
              {
                  if(navList[j].querySelector("a").classList.contains("active"))
                  {
                      addBackSection(j);
                  }
                  navList[j].querySelector("a").classList.remove("active");
              }
              this.classList.add("active")
              showSection(this);
              if(window.innerWidth < 1200)
              {
                  asideSectionTogglerBtn();
              }
          })
      }
      function removeBackSection()
      {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }   
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }
      function showSection(element)
      {
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")
      }
      function updateNav(element)
      {
          for(let i=0; i<totalNavList; i++)
          {
              navList[i].querySelector("a").classList.remove("active");
              const target = element.getAttribute("href").split("#")[1];
              if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
              {
                navList[i].querySelector("a").classList.add("active");
              }
          }
      }
      document.querySelector(".hire-me").addEventListener("click", function()
      {
          const sectionIndex = this.getAttribute("data-section-index");
          showSection(this);
          updateNav(this);
          removeBackSection();
          addBackSection(sectionIndex);
      })

      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => 
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++ )
                {
                    allSection[i].classList.toggle("open");
                }
            }

         
            let items = document.querySelectorAll('.slider .list .item');
            let next = document.getElementById('next');
            let prev = document.getElementById('prev');
            let thumbnails = document.querySelectorAll('.thumbnail .item');
            
       
            let countItem = items.length;
            let itemActive = 0;
           
            next.onclick = function(){
                itemActive = itemActive + 1;
                if(itemActive >= countItem){
                    itemActive = 0;
                }
                showSlider();
            }
        
            prev.onclick = function(){
                itemActive = itemActive - 1;
                if(itemActive < 0){
                    itemActive = countItem - 1;
                }
                showSlider();
            }
            
            let refreshInterval = setInterval(() => {
                next.click();
            }, 5000)
            function showSlider(){
               
                let itemActiveOld = document.querySelector('.slider .list .item.active');
                let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
                itemActiveOld.classList.remove('active');
                thumbnailActiveOld.classList.remove('active');
            
               
                items[itemActive].classList.add('active');
                thumbnails[itemActive].classList.add('active');
            
               
                clearInterval(refreshInterval);
                refreshInterval = setInterval(() => {
                    next.click();
                }, 5000)
            }
            
            
            thumbnails.forEach((thumbnail, index) => {
                thumbnail.addEventListener('click', () => {
                    itemActive = index;
                    showSlider();
                })
            })

            
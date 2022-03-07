
        const menu=document.querySelector('.menu_btn');
        const slide=document.querySelector('.slide_wrapper')
        menu.addEventListener('click',()=>{
            slide.classList.toggle('active');
        });

        const topBar=document.querySelector('header');
        addEventListener('scroll',()=>{ 
        let top=document.querySelector('main h2');
        if(scrollY>top.offsetTop){
            topBar.classList.add('active');
        }else{
            topBar.classList.remove('active');
        }
        });

        const menuBar=document.querySelector('aside')
        addEventListener('scroll',()=>{ 
        let top=document.querySelector('main h2');
        if(scrollY>top.offsetTop){
            menuBar.classList.add('active');
        }else{
            menuBar.classList.remove('active');
        }
        });

        const toTop=document.querySelector('.toTop')

        addEventListener('scroll',()=>{
        if(window.pageYOffset>90){
            toTop.classList.add('show');
        }else{
            toTop.classList.remove('show');
        }
        });
        toTop.addEventListener('click',(e)=>{
            e.preventDefault();
            scrollTo({top:0,behavior:'smooth'});
        });
        
         AOS.init();
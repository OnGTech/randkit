function initZoomable(){
    document.querySelectorAll('.zoomable').forEach((e)=>{
        e.style.cursor = 'pointer';
        e.onclick = () =>{
            let holder = document.createElement('div');
            holder.style.position = 'fixed';
            holder.style.left = '0';
            holder.style.top = '0';
            // holder.style.top = window.scrollY + 'px';
            holder.style.width = '100vw';
            holder.style.height = '100%';
            holder.style.background = 'rgba(0, 0, 0, .90)';
            holder.style.zIndex = '900';
            document.body.style.overflow = 'hidden';
            let cls = document.createElement('div');
            cls.innerHTML = '<img src="https://ongtech.github.io/randkit/images/close-btn-rd.png" width="50" height="50">';
            cls.style.fontSize = '32px !important';
            cls.style.padding = '24px';
            cls.style.color = '#ffffff';
            cls.style.textAlign = 'right';
            cls.style.cursor = 'pointer';
            holder.append(cls);
    
            let vwr = document.createElement('div');
            vwr.style.position = 'absolute';
            vwr.style.left = '50%';
            vwr.style.top = '50%';
            vwr.style.transform = 'translate(-50%, -50%)';
            vwr.style.width = '90%';
            vwr.style.height = '80%';
            vwr.style.background = `url('${e.getAttribute('src')}')`;
            
            vwr.style.backgroundSize = 'contain';
            vwr.style.backgroundPosition = 'center';
            vwr.style.backgroundRepeat = 'no-repeat';
            holder.append(vwr);
            document.body.append(holder);

            let act_wrp = document.createElement('div');

            act_wrp.style.position = 'absolute';
            act_wrp.style.gap = '24px';

            act_wrp.style.left = '50%';
            act_wrp.style.bottom = '2%';

            act_wrp.style.transform = 'translateX(-50%)';

            act_wrp.style.display = 'flex';

            act_wrp.innerHTML = `
            <a href="javascript:void(0)" id="z_p_btn"><img src="https://ongtech.github.io/randkit/images/back-btn-rd.png" width="50" height="50"></a> <a href="javascript:void(0)" id="z_n_btn"><img src="https://ongtech.github.io/randkit/images/next-btn-rd.png" width="50" height="50"></a>
            `;

            

            holder.append(act_wrp);

            

            let znodes = document.querySelectorAll('.zoomable');
            let znodesarr = [...znodes];

            sessionStorage.setItem('zind', znodesarr.indexOf(e));

            document.querySelector('#z_p_btn').onclick = () =>{
            //    alert(znodesarr.indexOf(e))
            if(sessionStorage.getItem('zind') > 0 && sessionStorage.getItem('zind') < znodesarr.length){

                sessionStorage.setItem('zind', (sessionStorage.getItem('zind') - 1));

                vwr.style.background = `url('${document.querySelectorAll('.zoomable')[sessionStorage.getItem('zind')].getAttribute('src')}')`;
                vwr.style.backgroundSize = 'contain';
            vwr.style.backgroundPosition = 'center';
            vwr.style.backgroundRepeat = 'no-repeat';
            }
            }

            document.querySelector('#z_n_btn').onclick = () =>{
                if(sessionStorage.getItem('zind') >= 0 && sessionStorage.getItem('zind') < znodesarr.length -1){

                sessionStorage.setItem('zind', (parseInt(sessionStorage.getItem('zind')) + 1));

                vwr.style.background = `url('${document.querySelectorAll('.zoomable')[sessionStorage.getItem('zind')].getAttribute('src')}')`;
                vwr.style.backgroundSize = 'contain';
            vwr.style.backgroundPosition = 'center';
            vwr.style.backgroundRepeat = 'no-repeat';
            }
            }
    
            cls.onclick = () =>{
                holder.remove();
                document.body.style.overflow = 'auto';
            }
            /* holder.onclick = () =>{
                holder.remove();
                document.body.style.overflow = 'auto';
            } */
        }
    });
}
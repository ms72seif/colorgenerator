let gen = document.getElementById('btn');
        let cop = document.getElementById('CpBtn');
        let _cp = document.querySelector('#box>h3');
        let past = document.getElementById('pastt');


        gen.addEventListener('click', function () {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let sum = 'rgb(' + r + ',' + g + ',' + b + ')';
            document.getElementById('box').style.backgroundColor = sum
            _cp.innerHTML = sum;
            document.getElementById('pst').value='';
            document.getElementById('nav').style.display='none'
            console.log(sum);
        })
        cop.addEventListener('click', function () {
            navigator.clipboard.writeText(_cp.innerHTML);
            alert('Color was copied!');
            document.getElementById('nav').style.display='flex'
        })
        past.addEventListener('click',function(){
            document.getElementById('pst').value=_cp.innerHTML;
            alert('paste was done!')
        })
        document.getElementById('pst').addEventListener('paste',function(){
            alert('paste was done again!')
        })
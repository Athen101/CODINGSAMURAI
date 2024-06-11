var Inputbox=document.querySelector('#Inputbox');
        var btn=document.querySelectorAll('.btn');
        var Inputbox=document.getElementById('Inputbox');

        for(item of btn)
        {
           item.addEventListener('click',(e)=>
           {
            btntext=e.target.innerText;
            if (btntext=='x')
            {
                btntext='*';
            }
            if(btntext=='/')
            {
                btntext='/';
            }

            Inputbox.value+=btntext;
           });
        }

        function sqrt()
        {
          Inputbox.value=Math.sqrt(Inputbox.value,2);
        }
        function backspace()
        {
            Inputbox.value=Inputbox.value.substr(0,Inputbox.value.length-1);
        }
        function toggleSign()
        {
            CurrentValue=parseFloat(Inputbox.value);
            Inputbox.value=-CurrentValue;
        }

function CalcTax() {
                const x= parseFloat(document.querySelector('#billamount').value)
                const x1= parseFloat(document.querySelector('#tiprate').value)
                const y= x*(x1/100)
                const z= x*0.055
                const total = x+y+z
                document.querySelector('#tipamount').innerHTML = y
            document.querySelector('#taxamount').innerHTML = z
            document.querySelector('#totalamount').innerHTML = total
            }
            document.querySelector('#calculate').addEventListener('click', CalcTax)
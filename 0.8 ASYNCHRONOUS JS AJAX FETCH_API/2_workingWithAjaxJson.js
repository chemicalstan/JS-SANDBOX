// Listen for a click on the customer button
document.getElementById('button1').addEventListener('click', loadCustomer);
function loadCustomer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        // This converts the json string to an object literal
        const customer = JSON.parse(this.responseText);
        document.getElementById('customer').innerHTML = `
        <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Company</td>
                <td>Phone</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.company}</td>
                <td>${customer.phone}</td>
            </tr>
        </tbody>
    </table>
        `;
        // console.log(customer.name);
    }

    xhr.send();
}


// Listen for a click on the custormers button
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e){

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);

    xhr.onload = function (){
        const customers = JSON.parse(this.responseText);
        const uiCustomers = document.getElementById('customers');
        let output = ''; 
        customers.forEach(customer => {
            output += 
               `<ul>
                    <li>ID: ${customer.id}</li>
                    <li>NAME: ${customer.name}</li>
                    <li>COMPANY: ${customer.company}</li>
                    <li>PHONE: ${customer.phone}</li>
                </ul>`
            });


        if(this.status === 200){
            uiCustomers.innerHTML = output;
        }
    }
    
    xhr.send();
}



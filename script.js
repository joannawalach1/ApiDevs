async function fetchApi() {
            await fetch("https://jsonplaceholder.typicode.com/users/")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                let wrapper = document.querySelector(".wrapper");
                for (let i = 0; i < data.length; i++) {
                    console.log(data[i]);

                    let newDiv = document.createElement("div");
                    wrapper.appendChild(newDiv);
                    newDiv.className = "card";

                    let name = document.createElement("p");
                    newDiv.appendChild(name);
                    name.textContent = data[i].name;
                    name.className = "card__name";

                    let username = document.createElement("p");
                    newDiv.appendChild(username);
                    username.textContent = data[i].username ;
                    username.className = "card__username";

                    let email = document.createElement("p");
                    newDiv.appendChild(email);
                    email.textContent = data[i].email;
                    email.className = "email";

                    let address = document.createElement("p");
                    address.textContent = data[i].address.zipcode+" "+data[i].address.city;
                    newDiv.appendChild(address);
                    
                    let phone = document.createElement("p");
                    phone.textContent = data[i].phone;
                    newDiv.appendChild(phone);
                    phone.className = "card__phone";
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }

fetchApi();

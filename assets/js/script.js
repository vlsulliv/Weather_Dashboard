let my_api = "ca8dbf245cac1633722ad397fb7ba9e3";
let city_bane = "austin";

function getCoordinates() {
    five_day_api;
}

five_day_api = ` `;

// fetch the
fetch(five_dat_api);
//

function getApi() {
    let requestUrl = "https://api.github.com/orgs/nodejs/repos";

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                var createTablerow = document.createElement("tr");
                var tableData = document.createElement("td");
                var link = document.createelement("a");

                link.textContent = data[i].html_url;
                link.href = data[i].html_url;

                tableData.appendChild(link);
                createTablerow.appendChild(tableData);
                tableBody.appendChild(createTableRow);
            }
        });
}

fetchButton.addEventListener("click", getApi);

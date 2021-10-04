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

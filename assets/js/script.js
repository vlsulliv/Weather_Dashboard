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

<!-- bootstrap Practice -->
<div id="one">
        <div id="two-a" class="container">
            <div id="three-a" class="card border-success mb-3" style="max-width: 30rem;">
                <div class="card-header bg-transparent border-success">Header</div>
                <div class="card-body text-success">
                    <h5 class="card-title">Success card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                </div>
                <div class="card-footer bg-transparent border-success">Footer</div>
            </div>
        </div>
        <div id="two-b" class="container d-flex justify-content-center">
            <div id="three-b">
                <div id="four-a" class="card border-success mb-3" style="max-width: 14rem;">
                    <div class="card-header bg-transparent border-success">Header</div>
                    <div class="card-body text-success">
                        <h5 class="card-title">Success card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's
                            content.</p>
                    </div>
                    <div class="card-footer bg-transparent border-success">Footer</div>
                </div>
                <div id="four-b" class="card border-success mb-3" style="max-width: 14rem;">
                    <div class="card-header bg-transparent border-success">Header</div>
                    <div class="card-body text-success">
                        <h5 class="card-title">Success card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's
                            content.</p>
                    </div>
                    <div class="card-footer bg-transparent border-success">Footer</div>
                </div>
            </div>
            <div id="three-c">
                <div id="four-c" class="card border-success mb-3" style="max-width: 14rem;">
                    <div class="card-header bg-transparent border-success">Header</div>
                    <div class="card-body text-success">
                        <h5 class="card-title">Success card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's
                            content.</p>
                    </div>
                    <div class="card-footer bg-transparent border-success">Footer</div>
                </div>
                <div id="four-d" class="card border-success mb-3" style="max-width: 14rem;">
                    <div class="card-header bg-transparent border-success">Header</div>
                    <div class="card-body text-success">
                        <h5 class="card-title">Success card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's
                            content.</p>
                    </div>
                    <div class="card-footer bg-transparent border-success">Footer</div>
                </div>
            </div>
        </div>
        <div class="container d-flex justify-content-center" id="two-c">
            <div id="three-d" class="card border-success mb-3" style="max-width: 14rem;">
                <div class="card-header bg-transparent border-success">Header</div>
                <div class="card-body text-success">
                    <h5 class="card-title">Success card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                        the
                        card's
                        content.</p>
                </div>
                <div class="card-footer bg-transparent border-success">Footer</div>
            </div>
        </div>
    </div>

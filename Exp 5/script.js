let productList = [];
let categoryList = new Set();

function addProduct(){
    let productId = document.getElementById("productId").value;
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;
    let productCategory = document.getElementById("productCategory").value;

    let product = {
        productId,
        productName,
        productPrice,
        productCategory
    }

    if (productId === "" || productName === "" || productPrice === "" || productCategory === "") {
        alert("All fields are required.");
        return;
    }

    productList.push(product);
    if(!categoryList.has(productCategory)) {
        categoryList.add(productCategory);
        let option = document.createElement("option");
        option.value = productCategory;
        option.text = productCategory;
        document.getElementById("prod-filter").appendChild(option);
    }

    document.getElementById("productId").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCategory").value = "";

    displayProducts(productList);
}

function displayProducts(products) {
    let table = document.getElementById("prod-table");
    // Keep the header row and clear only data rows
    let rows = table.rows.length;
    for (let i = rows - 1; i > 1; i--) {
        table.deleteRow(i);
    }

    products.forEach(product => {
        let row = table.insertRow();
        row.insertCell(0).innerText = product.productId;
        row.insertCell(1).innerText = product.productName;
        row.insertCell(2).innerText = "N/A"; // Placeholder for quantity
        row.insertCell(3).innerText = product.productPrice;
        row.insertCell(4).innerText = product.productCategory;
    });
}

function filterbycategory() {
    let selectedCategory = document.getElementById("prod-filter").value;
    
    if (selectedCategory === "all") {
        displayProducts(productList);
    } else {
        let filteredProducts = productList.filter(product => 
            product.productCategory === selectedCategory
        );
        displayProducts(filteredProducts);
    }
}

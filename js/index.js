$(document).ready(
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 5,
            }
        }
    })
);







const currencies = [
    { imageSrc: './assets/images/united-states.png', code: 'USD' },
    { imageSrc: './assets/images/canada.png', code: 'CAD' },
    { imageSrc: './assets/images/german.png', code: 'EUR' }
];


let selectedFromCurrency = { imageSrc: './assets/images/united-states.png', code: 'USD' };
let selectedToCurrency = { imageSrc: './assets/images/canada.png', code: 'CAD' };


const currencyImage = document.getElementById("currencyImage");
const currencyImageTo = document.getElementById("currencyImageTo");

const currencyCode = document.getElementById("currencyCode");
const currencyCodeTo = document.getElementById("currencyCodeTo");

const dropdown = document.getElementById("FromCurrencydropdown");
const Todropdown = document.getElementById("ToCurrencydropdown");


currencyImage.src = selectedFromCurrency.imageSrc;
currencyCode.textContent = selectedFromCurrency.code;

currencyImageTo.src = selectedToCurrency.imageSrc;
currencyCodeTo.textContent = selectedToCurrency.code;


// For from
function updateSelectedCurrency(code) {
    selectedFromCurrency = currencies.filter(curr => curr.code === code)[0];
    // Populate initial button content with the first currency
    currencyImage.src = selectedFromCurrency.imageSrc;
    currencyCode.textContent = selectedFromCurrency.code;
    // Update button content or perform other actions if needed
}

// For TO
function updateSelectedCurrencyTo(code) {
    selectedToCurrency = currencies.filter(curr => curr.code === code)[0];
    // Populate initial button content with the first currency
    currencyImageTo.src = selectedToCurrency.imageSrc;
    currencyCodeTo.textContent = selectedToCurrency.code;
    // Update button content or perform other actions if needed
}


// For from currency
currencies.forEach((currency, index) => {
    const li = document.createElement('li');
    li.classList.add('relative', 'cursor-default', 'select-none', 'py-2', 'pl-3', 'pr-9', 'text-gray-900');
    li.id = `listbox-option-${index}`;
    li.role = 'option';

    let html = `<div class="flex items-center">
                        <img src="${currency.imageSrc}" alt="Currency" class="h-5 w-5 flex-shrink-0 rounded-full">
                        <span class="ml-3 block truncate font-normal">${currency.code}</span>
                    </div>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"></span>`;
    li.innerHTML = html;

    li.addEventListener("click", () => {
        updateSelectedCurrency(li.innerText);

        // Hide all SVGs and then show the corresponding one
        dropdown.querySelectorAll("svg").forEach((svg) => {
            svg.classList.add("hidden");
        });

        const svgToShow = li.querySelector("svg");
        if (svgToShow) {
            svgToShow.classList.remove("hidden");
        }

        dropdown.classList.add("hidden"); // Hide dropdown after selection
    });


    dropdown.appendChild(li);
});

// For to currency
currencies.forEach((currency, index) => {
    const li = document.createElement('li');
    li.classList.add('relative', 'cursor-default', 'select-none', 'py-2', 'pl-3', 'pr-9', 'text-gray-900');
    li.id = `listbox-option-${index}`;
    li.role = 'option';

    let html = `<div class="flex items-center">
                        <img src="${currency.imageSrc}" alt="Currency" class="h-5 w-5 flex-shrink-0 rounded-full">
                        <span class="ml-3 block truncate font-normal">${currency.code}</span>
                    </div>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"></span>`;
    li.innerHTML = html;

    li.addEventListener("click", () => {
        updateSelectedCurrencyTo(li.innerText);

        // Hide all SVGs and then show the corresponding one
        Todropdown.querySelectorAll("svg").forEach((svg) => {
            svg.classList.add("hidden");
        });

        const svgToShow = li.querySelector("svg");
        if (svgToShow) {
            svgToShow.classList.remove("hidden");
        }

        Todropdown.classList.add("hidden"); // Hide Todropdown after selection
    });


    Todropdown.appendChild(li);
});




dropdown.classList.add("hidden");
function toggleCurrencyFrom() {
    dropdown.classList.toggle("hidden");
}
Todropdown.classList.add("hidden");
function toggleCurrencyTo() {
    Todropdown.classList.toggle("hidden");
}



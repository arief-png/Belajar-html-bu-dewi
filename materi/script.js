document.addEventListener("DOMContentLoaded", function () {
    const changeBgButton = document.getElementById("changeBg");
    const toggleTextButton = document.getElementById("toggleText");
    const body = document.body;

    changeBgButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });

    toggleTextButton.addEventListener("click", function () {
        if (body.style.fontFamily === "Arial, sans-serif") {
            body.style.fontFamily = "'Bebas Neue', cursive";
        } else {
            body.style.fontFamily = "Arial, sans-serif";
        }
    });
});

function tryIt(section) {
    let outputElement = document.getElementById(`output-${section}`);
    let code;

    switch (section) {
        case 'kode':
            code = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Judul Halaman</title>
                </head>
                <body>
                    <h1>Halo Dunia!</h1>
                </body>
                </html>
            `;
            break;
        case 'elemen':
            code = `<p>Ini adalah paragraf</p>`;
            break;
        default:
            code = 'Tidak ada output untuk bagian ini.';
    }

    outputElement.innerHTML = code;
    outputElement.style.border = "1px solid #ccc";
    outputElement.style.padding = "10px";
    outputElement.style.marginTop = "10px";
    outputElement.style.backgroundColor = "#f9f9f9";
}

document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const feedbackMessage = document.getElementById('feedbackMessage').value;
    if (feedbackMessage.trim() !== '') {
        alert('Terima kasih atas kritik dan saran Anda!');
        document.getElementById('feedbackMessage').value = ''; 
    } else {
        alert('Silakan masukkan kritik dan saran Anda.');
    }
});

document.querySelectorAll('.show-output').forEach(button => {
    button.addEventListener('click', function () {
        const outputContainer = this.nextElementSibling;
        const outputFrame = outputContainer.querySelector('.output-frame');
        const code = this.previousElementSibling.querySelector('code').innerText;

        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                </style>
            </head>
            <body>
                ${code}
            </body>
            </html>
        `;

        outputFrame.srcdoc = htmlContent;

        if (outputContainer.style.display === 'none') {
            outputContainer.style.display = 'block';
            this.textContent = 'Sembunyikan Output';
        } else {
            outputContainer.style.display = 'none';
            this.textContent = 'Output';
        }
    });
});

function toggleMenu() {
    var nav = document.getElementById("nav-links");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}

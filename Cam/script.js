const pages = [
    { image: "img/1.jpg", text: "Si te animas a visitar las playas de Cartagena, Colombia, te encontrarás con un cangrejo entrañable que te sacará una sonrisa con su simpática presencia." },
    { image: "img/2.jpg", text: "Bienvenido al hogar del cangrejo Pipo, un lugar donde las sombras acogen sus secretos más dulces. Aquí, rodeado de amigos de alma gemela como la tortuga Mara, la estrella Foxi y el pulpo Wuxi, se tejen historias que perduran en el tiempo, alimentando la magia de la amistad. ¡Prepárate para sumergirte en un mar de ensueño y navegar en nuevas aventuras con este equipo de amigos!" },
    { image: "img/3.jpg", text: "Unidos en su viaje, surcaron las aguas del mar y ¡a qué no saben!, se toparon con una tormenta inmensa, olas muy altas, en la noche fría y oscura el barco se hundió los amigos se separaron." },
    { image: "img/1.jpg", text: "¿Qué debería hacer el cangrejo?",
      choice1: "Seguir en el agua",
      choice2: "Subir a tierra firme"
    },
    { 
        image: "img/4 (1).jpg", 
        text: "En la furiosa tormenta, perdido y desorientado comienza a nadar en las profundidades del océano y se encuentra con una enorme ballena.",
        choice1: "Hablar con la ballena",
        choice2: "Seguir nadando"
    },
    
    { image: "img/4(1.2).jpg", text: "La ballena sabia aconsejó con prudencia: 'En las profundidades del océano, la natación requiere cautela. Infortunadamente, nuestro reino acuático está plagado de artefactos y desechos no orgánicos que flotan a nuestro alrededor.'" },
    { image: "img/4(1.3).jpg", text: "En el transcurso de su travesía, Pipo se topó con una tortuga milenaria. Con curiosidad en su mirada, le cuestionó sobre una bolsa que portaba en su semblante. La anciana tortuga respondió con pesar: 'Nunca pude liberarme de ella. ¿Serías tan amable de ayudarme? No forma parte de mi cuerpo.' Y el cangrejo ayudó con gusto a la tortuga." },
    { image: "img/5.jpg", text: "Al primer resplandor, el cangrejo vagaba desorientado, sin amigos ni hogar a la vista. De repente, una criatura alada de majestuoso porte emergió de entre los rayos del sol. ¡Era un águila gigante! Con un poderoso impulso, el águila se abalanzó velozmente y, con un rápido movimiento, capturó al cangrejo en su garra.",
      choice1: "Escapar del ave",
      choice2: "Dejarse llevar por el ave"
    },
    { image: "img/6(1).jpg", text: "El artrópodo astuto burló al ave veloz, solo para caer sobre el puente, perdido y desorientado una vez más. El cangrejo buscaba con anhelo su hogar, ansiando el abrazo de su morada." },
    { image: "img/6(2).jpg", text: "ya había oscurecido, y el cangrejo pasó una bella noche bajo la luna la Ciudad  estaba tranquila y el sonido de la ciudad  era relajante. El cangrejo se sintió agradecido por la oportunidad de disfrutar de la belleza de la naturaleza mezclado con la ciudad.A medida que la noche avanzaba, el cangrejo comenzó a sentirse cansado y decidió ir a descansar en algún lugar. Mientras caminaba por las callecitas de Colombia, se detuvo para observar las estrellas brillantes en el cielo nocturno. Se sintió humilde ante la vastedad del universo y se dio cuenta de lo pequeño que era en comparación. Con una sensación de paz y gratitud en su corazón, el cangrejo finalmente encontró un lugar para poder descansar." },
    { image: "img/6(2.1).jpg", text: "El ave dejó al cangrejo en la entrada de un jardín infantil. Mientras tanto, el curioso cangrejo se aventuró adentro y se encontró rodeado de niños felices jugando. Con entusiasmo, decidió quedarse allí, e hizo de aquel lugar un bello hogar." }
];

let currentPage = 0;
let decisionMade = false;

function showPage() {
    const page = pages[currentPage];
    document.getElementById('story-image').src = page.image;
    document.getElementById('story-text').innerText = page.text;

    // Mostrar u ocultar botones de navegación y elección
    if (currentPage === 0) {
        document.getElementById('btn-prev').style.display = 'none';
        document.getElementById('btn-next').style.display = 'inline-block';
    } else if (currentPage === 3) {
        document.getElementById('btn-prev').style.display = 'none';
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('btn-choice1').style.display = 'inline-block';
        document.getElementById('btn-choice2').style.display = 'inline-block';
        document.getElementById('btn-hablar').style.display = 'none';
        document.getElementById('btn-nadar').style.display = 'none';
        document.getElementById('btn-restart').style.display = 'none';
    } else if (currentPage === 4) {
        document.getElementById('btn-prev').style.display = 'none';
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('btn-hablar').style.display = 'inline-block';
        document.getElementById('btn-nadar').style.display = 'inline-block';
        document.getElementById('btn-restart').style.display = 'none';
        document.getElementById('btn-choice1').style.display = 'none';
        document.getElementById('btn-choice2').style.display = 'none';
    } else if (currentPage === 5) {
        document.getElementById('btn-prev').style.display = 'none';
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('btn-choice1').style.display = 'none';
        document.getElementById('btn-choice2').style.display = 'none';
        document.getElementById('btn-hablar').style.display = 'none';
        document.getElementById('btn-nadar').style.display = 'none';
        document.getElementById('btn-restart').style.display = 'inline-block';
    } else if (currentPage === 6) {
        document.getElementById('btn-prev').style.display = 'none';
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('btn-hablar').style.display = 'none';
        document.getElementById('btn-nadar').style.display = 'none';
        document.getElementById('btn-restart').style.display = 'inline-block';
    } else if (currentPage === 7) {
        // Nueva lógica para la página 7
        document.getElementById('btn-escapar-ave').style.display = 'inline-block';
        document.getElementById('btn-llevar-ave').style.display = 'inline-block';
        document.getElementById('page-7-options').style.display = 'inline-block';
        document.getElementById('btn-prev').style.display = 'none';
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('btn-choice1').style.display = 'none';
        document.getElementById('btn-choice2').style.display = 'none';
        document.getElementById('btn-hablar').style.display = 'none';
        document.getElementById('btn-nadar').style.display = 'none';
        document.getElementById('btn-restart').style.display = 'none';

        // Mostrar opciones específicas para la página 7
        document.getElementById('page-7-options').style.display = 'block';
    } else if (currentPage === 8) {
        // Nueva lógica para la página 8
        document.getElementById('btn-escapar-ave').style.display = 'none';
        document.getElementById('btn-llevar-ave').style.display = 'none';
        document.getElementById('page-7-options').style.display = 'none';
        document.getElementById('btn-prev').style.display = 'inline-block';
        document.getElementById('btn-next').style.display = 'inline-block';
        document.getElementById('btn-choice1').style.display = 'none';
        document.getElementById('btn-choice2').style.display = 'none';
        document.getElementById('btn-hablar').style.display = 'none';
        document.getElementById('btn-nadar').style.display = 'none';
        document.getElementById('btn-restart').style.display = 'none';
        // Otras lógicas específicas para la página 8
    } else if (currentPage === 9) {
        // Nueva lógica para la página 9
        document.getElementById('btn-escapar-ave').style.display = 'none';
        document.getElementById('btn-llevar-ave').style.display = 'none';
        document.getElementById('page-7-options').style.display = 'none';
        document.getElementById('btn-prev').style.display = 'inline-block';
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('btn-choice1').style.display = 'none';
        document.getElementById('btn-choice2').style.display = 'none';
        document.getElementById('btn-hablar').style.display = 'none';
        document.getElementById('btn-nadar').style.display = 'none';
        document.getElementById('btn-restart').style.display = 'inline-block';
        // Otras lógicas específicas para la página 9
    } else if (currentPage === 10) {
        // Nueva lógica para la página 10
        document.getElementById('btn-escapar-ave').style.display = 'none';
        document.getElementById('btn-llevar-ave').style.display = 'none';
        document.getElementById('page-7-options').style.display = 'none';
        document.getElementById('btn-prev').style.display = 'none';
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('btn-choice1').style.display = 'none';
        document.getElementById('btn-choice2').style.display = 'none';
        document.getElementById('btn-hablar').style.display = 'none';
        document.getElementById('btn-nadar').style.display = 'none';
        document.getElementById('btn-restart').style.display = 'inline-block';
        // Otras lógicas específicas para la página 10
    } else {
        document.getElementById('btn-prev').style.display = 'inline-block';
        document.getElementById('btn-next').style.display = 'inline-block';
        document.getElementById('btn-choice1').style.display = (currentPage === 3 && page.choice1) ? 'inline-block' : 'none';
        document.getElementById('btn-choice2').style.display = (currentPage === 3 && page.choice2) ? 'inline-block' : 'none';
        document.getElementById('btn-hablar').style.display = 'none';
        document.getElementById('btn-nadar').style.display = 'none';
        document.getElementById('btn-restart').style.display = 'none';

        // Ocultar opciones específicas para la página 7
        document.getElementById('page-7-options').style.display = 'none';
    }

    // Configurar texto de botones de elección
    if (currentPage === 3 && page.choice1 && page.choice2) {
        document.getElementById('btn-choice1').innerText = page.choice1;
        document.getElementById('btn-choice2').innerText = page.choice2;
        decisionMade = false; // Reinicia la decisión al llegar a la página 4
    }
}

function seguirEnElAgua() {
    currentPage = 4;
    decisionMade = false;
    showPage();
}

function irATierraFirme() {
    currentPage = 5;
    decisionMade = false;
    showPage();
}

function hablarConLaBallena() {
    currentPage = 5;
    decisionMade = false;
    showPage();
}

function seguirNadando() {
    currentPage = 6;
    decisionMade = false;
    showPage();
}

function volverAJugar() {
    currentPage = 0;
    decisionMade = false;

    // Reiniciar elementos específicos al volver a jugar
    document.getElementById('btn-prev').style.display = 'none';
    document.getElementById('btn-next').style.display = 'inline-block';
    document.getElementById('btn-choice1').style.display = 'none';
    document.getElementById('btn-choice2').style.display = 'none';
    document.getElementById('btn-hablar').style.display = 'none';
    document.getElementById('btn-nadar').style.display = 'none';
    document.getElementById('btn-restart').style.display = 'none';

    // Ocultar opciones específicas para la página 7 al volver a jugar
    document.getElementById('page-7-options').style.display = 'none';

    showPage();
}

function escaparDelAve() {
    currentPage = 8;  // Página después de "Escapar del ave"
    decisionMade = false;
    showPage();
}

function dejarseLlevarPorElAve() {
    currentPage = 10;  // Página después de "Dejarse llevar por el ave"
    decisionMade = false;
    showPage();
}

function makeChoice(choice) {
    if (!decisionMade) {
        decisionMade = true;
        if (currentPage === 3) {
            if (choice === 1) {
                currentPage = 4;  // Si elige "Seguir en el agua"
            } else if (choice === 2) {
                currentPage = 7;  // Si elige "Subir a tierra firme"
            }
        } else if (currentPage === 7) {
            if (choice === 1) {
                currentPage = 8;  // Página después de "Escapar del ave"
            } else if (choice === 2) {
                currentPage = 9;  // Página después de "Dejarse llevar por el ave"
            }
            // No llamar a showPage() aquí para evitar la sobreescritura de la página
            return;  // Evitar que la función continúe y muestre el resto de la página 7
        }
        showPage();
    }
}

function prevPage() {
    if (currentPage > 0 && currentPage !== 3) {
        currentPage--;
        decisionMade = false;
        showPage();
    }
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        decisionMade = false;
        showPage();
    }
}

// Mostrar la primera página al cargar la página
showPage();

// Agregar evento al botón "Volver a Jugar"
document.getElementById('btn-restart').addEventListener('click', volverAJugar);

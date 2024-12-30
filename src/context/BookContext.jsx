import  { createContext, useState } from 'react';
import cincuentaImage from '../assets/cincuenta.png';
import cienAnosImage from '../assets/cienAños.png';
import orgulloPrejuicioImage from '../assets/OYP.png';
import principitoImage from '../assets/Principito.png';
import senorAnillosImage from '../assets/SA.png';
import quijoteImage from '../assets/Quijote.png';
import harryPotterImage from '../assets/Harry.png';

export const BooksContext = createContext();

// eslint-disable-next-line react/prop-types
export const BooksProvider = ({ children }) => {
    const [booksData] = useState([
        {
            imageSent: cincuentaImage,
            titleSent: "Cincuenta sombras de Grey",
            format: "ebook",
            author: "E.L. James",
            year: "2011",
            language: "English",
            edition: "1st",
            textSent: "Cincuenta sombras de Grey es una novela que explora la compleja relación entre Anastasia Steele, una joven estudiante universitaria, y Christian Grey, un empresario multimillonario con un oscuro pasado. La historia comienza cuando Anastasia, por casualidad, entrevista a Christian y se siente atraída por su atractivo y carismático pero enigmático carácter.\n" +
                "\n" +
                "La novela se adentra rápidamente en un romance que combina elementos de atracción, pasión y una dinámica de poder poco convencional. Christian introduce a Anastasia en un contrato que describe su relación basada en prácticas BDSM, lo que desafía las expectativas románticas y emocionales de ambos personajes.\n" +
                "\n" +
                "A través de los capítulos, E.L. James explora temas como el consentimiento, el control, los traumas del pasado y la evolución emocional de los protagonistas. Aunque el libro generó una enorme popularidad, también ha recibido críticas mixtas. Por un lado, se alaba su capacidad para generar discusiones sobre sexualidad y relaciones no convencionales, pero por otro, se critica su calidad literaria, los clichés románticos y las representaciones de las dinámicas de poder como poco saludables.\n" +
                "\n" +
                "En términos de estilo, el libro es accesible y fácil de leer, aunque su prosa ha sido descrita como repetitiva. No obstante, logró captar la atención del público global, convirtiéndose en un fenómeno cultural que generó una trilogía y adaptaciones cinematográficas.\n" +
                "\n" +
                "Ideal para lectores interesados en historias de romance intenso y exploraciones de dinámicas emocionales complejas, Cincuenta sombras de Grey es un libro que polariza opiniones pero no deja indiferente.",
            genre: "Romance",
            shortDescription: "Cincuenta sombras de Grey es una novela que explora la compleja relación entre Anastasia Steele, una joven estudiante universitaria, y Christian Grey, un empresario multimillonario con un oscuro pasado.",
            price: 10.99

        },
        {
            imageSent: cienAnosImage,
            titleSent: "Cien años de soledad",
            format: "hardcover",
            author: "Gabriel García Márquez",
            year: "1967",
            language: "Spanish",
            edition: "1st",
            textSent: "Es una de las obras más emblemáticas del realismo mágico y un hito de la literatura latinoamericana. La novela relata la fundación, auge y caída del pueblo ficticio de Macondo a través de la historia de la familia Buendía, cuyos miembros se ven atrapados en ciclos repetitivos de amor, tragedia y soledad. Gabriel García Márquez teje una narrativa llena de simbolismo, que mezcla lo mágico con lo cotidiano: desde lluvias que duran años hasta personajes que ascienden al cielo. El libro explora temas como la soledad, el destino, el poder y la memoria colectiva. Es una obra que exige atención, ya que la complejidad de los personajes y las generaciones requiere seguir el árbol genealógico con cuidado. Una joya literaria que trasciende fronteras.",
            genre: "Magical Realism",
            shortDescription: "Cien años de soledad narra la historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo.",
            price: 15.99
        },
        {
            imageSent: orgulloPrejuicioImage,
            titleSent: "Orgullo y prejuicio",
            format: "paperback",
            author: "Jane Austen",
            year: "1813",
            language: "English",
            edition: "1st",
            textSent: "Este clásico de la literatura inglesa combina romance, humor y una aguda crítica social. La historia sigue a Elizabeth Bennet, una joven independiente y de fuerte carácter, que vive en un entorno donde las mujeres están presionadas a casarse por conveniencia. La llegada del rico y reservado señor Darcy cambia su vida y la de su familia. A lo largo de la trama, ambos personajes enfrentan sus prejuicios y su orgullo mientras descubren su verdadero carácter y sentimientos. Austen retrata con maestría las dinámicas familiares, las normas sociales y las diferencias de clase en la Inglaterra del siglo XIX. Más que una simple novela romántica, es un comentario atemporal sobre las relaciones humanas y las expectativas sociales.",
            genre: "Classic",
            shortDescription: "Orgullo y prejuicio explora las complejidades del amor, la familia y la sociedad en la Inglaterra del siglo XIX.",
            price: 12.99
        },
        {
            imageSent: principitoImage,
            titleSent: "El Principito",
            format: "hardcover",
            author: "Antoine de Saint-Exupéry",
            year: "1943",
            language: "French",
            edition: "1st",
            textSent: "Aunque parece una historia infantil, El Principito es una obra filosófica y poética que invita a reflexionar sobre la vida, el amor y la amistad. La trama comienza cuando un piloto, tras un aterrizaje forzoso en el desierto del Sahara, encuentra a un niño peculiar que dice ser un príncipe venido de otro planeta. El principito narra sus viajes por diferentes mundos, cada uno habitado por personajes que representan aspectos de la naturaleza humana, como el egoísmo, la ambición o la obsesión por la riqueza. A través de un lenguaje sencillo pero profundo, el autor explora verdades universales y emocionales que resuenan en lectores de todas las edades. Es una obra que invita a redescubrir lo esencial, recordándonos que \"lo esencial es invisible a los ojos\".",
            genre: "Children's Literature",
            shortDescription: "El Principito narra la historia de un joven príncipe que viaja de planeta en planeta, aprendiendo valiosas lecciones sobre la vida.",
            price: 9.99
        },
        {
            imageSent: senorAnillosImage,
            titleSent: "El señor de los anillos",
            format: "hardcover",
            author: "J.R.R. Tolkien",
            year: "1954",
            language: "English",
            edition: "1st",
            textSent: "Esta monumental saga de fantasía sigue a Frodo Bolsón, un hobbit humilde, en su misión para destruir el Anillo Único, un artefacto de inmenso poder creado por Sauron, el Señor Oscuro. Acompañado por un grupo diverso de aliados, incluidos el mago Gandalf, el guerrero Aragorn y su fiel amigo Sam, Frodo debe enfrentar peligros mortales y tentaciones para cumplir con su destino. Tolkien crea un mundo vasto y detallado, lleno de mitología, lenguajes inventados y paisajes mágicos. La narrativa abarca temas como la lucha entre el bien y el mal, el sacrificio, la amistad y el poder destructivo de la ambición. Más que una simple novela, es un universo entero que ha definido el género de fantasía moderna y sigue siendo una obra de referencia.",
            genre: "Fantasy",
            shortDescription: "El señor de los anillos sigue la aventura de Frodo Bolsón y sus amigos mientras intentan destruir el Anillo Único y salvar la Tierra Media.",
            price: 25.99
        },
        {
            imageSent: quijoteImage,
            titleSent: "Don Quijote de la Mancha",
            format: "paperback",
            author: "Miguel de Cervantes",
            year: "1605",
            language: "Spanish",
            edition: "1st",
            textSent: "Considerada una de las mayores obras de la literatura universal, esta novela cuenta las aventuras de Don Quijote, un hidalgo obsesionado con los libros de caballerías, que decide convertirse en caballero andante para revivir una época de gloria que ya no existe. Acompañado por su fiel escudero, Sancho Panza, Quijote confunde la realidad con sus fantasías, enfrentándose a molinos de viento que cree gigantes y viendo doncellas en simples campesinas. La obra es a la vez una parodia de los libros de caballerías y una reflexión profunda sobre el idealismo, la locura y la naturaleza humana. Con su rica mezcla de humor, melancolía y sabiduría, Cervantes nos invita a cuestionar nuestras percepciones de la realidad.",
            genre: "Classic",
            shortDescription: "Don Quijote de la Mancha narra las aventuras y desventuras de un hidalgo manchego que decide convertirse en caballero andante.",
            price: 14.99
        },
        {
            imageSent: harryPotterImage,
            titleSent: "Harry Potter",
            format: "hardcover",
            author: "J.K. Rowling",
            year: "1997",
            language: "English",
            edition: "1st",
            textSent: "La serie de Harry Potter sigue el viaje de un joven mago que descubre su destino como el \"niño que vivió\", destinado a enfrentarse al oscuro mago Lord Voldemort. Desde su vida como un huérfano maltratado por sus tíos hasta su ingreso al Colegio Hogwarts de Magia y Hechicería, la historia combina la magia con temas universales como la amistad, la valentía, y el amor. Cada libro de la serie se vuelve más oscuro y maduro, reflejando el crecimiento de Harry y los desafíos que enfrenta mientras lucha contra fuerzas malignas. Rowling crea un mundo mágico vibrante y lleno de detalles, donde criaturas fantásticas, hechizos y misterios cautivan a los lectores. Es una saga que no solo entretiene, sino que también aborda cuestiones como la pérdida, la identidad y la lucha por hacer el bien.",
            genre: "Fantasy",
            shortDescription: "Harry Potter sigue las aventuras de un joven mago y sus amigos en la escuela de magia y hechicería Hogwarts.",
            price: 29.99
        }


    ]);

    return (
        <BooksContext.Provider value={booksData}>
            {children}
        </BooksContext.Provider>
    );
};
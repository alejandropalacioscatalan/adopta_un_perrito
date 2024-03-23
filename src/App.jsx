import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Perritos from "./components/Grilla/Grilla";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const header = "Adopta un perrito";
  const footer =
    "Explora nuestra galería de adopción de perros para encotrar a tu compañero. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su escencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre";
  const perrito = "";
  const perritos = [
    {
      id: 1,
      name: "Toko",
      description:
        "Lleno de energía y listo para juagar. Conoce a este cachorro y dale a Toko el hogar amoroso qe se merece!",
      race: "Dalmata",
      color: "btn btn-success",
      image:
        "https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_1280.jpg",
    },
    {
      id: 2,
      name: "Laura",
      description:
        "Es juguetona, amigable, se lleva bien con los niños y con otros animales. Haz de Laura parte de tu familia hoy mismo!",
      race: "Labrador",
      color: "btn btn-primary",
      image:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
    },
    {
      id: 3,
      name: "Teodoro",
      description:
        "Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Teodoro y experimenta un amor incondicional",
      race: "Pastor Alemán",
      color: "btn btn-danger",
      image:
        "https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_960_720.jpg",
    },
    {
      id: 4,
      name: "Cooky",
      description:
        "Es una compañera ideal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Cooky a encontrar su final feliz!",
      race: "Cooker spaniel",
      color: "btn btn-secondary",
      image:
        "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg",
    },
  ];
  return (
    <>
      <Header text={header} />
      <Perritos perritos={perritos} />
      <Footer text={footer} />
    </>
  );
}

export default App;

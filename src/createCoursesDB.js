export function createDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* 10 Courses
      ============================================ */
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Curso profesional de PHP",
      description:
        "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
      languages: ["PHP"],
      score: "90",
      autor: "Marines Méndez",
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Curso profesional de Base de datos",
      description:
        "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
      languages: ["SQL"],
      score: "95",
      autor: "Eduardo Ismael García Pérez",
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Curso profesional de Desarrollo Web",
      description:
        "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
      languages: ["HTML", "CSS", "JS"],
      score: "93",
      autor: "Uriel Hernandez",
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Curso profesional de Android",
      description:
        "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
      languages: ["JAVA", "KOTLIN"],
      score: "85",
      autor: "Marines Méndez",
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Curso profesional de Python",
      description:
        "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
      languages: ["PYTHON"],
      score: "92",
      autor: "Eduardo Ismael García Pérez",
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Curso profesional de Javascript",
      description:
        "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
      languages: ["JS"],
      score: "91",
      autor: "Uriel Hernandez",
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Curso de introducción a la programación",
      description:
        "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
      languages: ["C++"],
      score: "88",
      autor: "Petriz Celaya",
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Curso profesional de Backend",
      description:
        "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
      languages: ["JS", "SQL"],
      score: "91",
      autor: "Uriel Hernandez",
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Curso profesional de Java",
      description:
        "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
      languages: ["JAVA"],
      score: "91",
      autor: "Eduardo Ismael García Pérez",
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Curso profesional de Angular",
      description:
        "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
      languages: ["JS"],
      score: "92",
      autor: "Uriel Hernandez",
    });
}

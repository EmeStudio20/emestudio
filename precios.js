// 💅 ARCHIVO DE PRECIOS DE EME STUDIO
// Para cambiar precios, SOLO toca los textos "precio" y "nombre" si lo necesitas.
// No borres las comillas ni las llaves { } ni las comas ,
//
// Ejemplo:
// { nombre: "Manicura básica", precio: "7 €", nota: "" },

const CATEGORIAS = [
  {
    nombre: "Manicuras básicas",
    servicios: [
      { nombre: "Manicura básica", precio: "7 €", nota: "" },
      { nombre: "Manicura + esmalte tradicional", precio: "10 €", nota: "" },
    ],
  },

  {
    nombre: "Semipermanente",
    servicios: [
      { nombre: "Semipermanente básico liso", precio: "18 €", nota: "" },
      { nombre: "Semipermanente + refuerzo liso", precio: "20 €", nota: "" },
      { nombre: "Semipermanente + francesa", precio: "20 €", nota: "" },
      {
        nombre: "Semipermanente + refuerzo + francesa",
        precio: "22 €",
        nota: "",
      },
      {
        nombre: "Semipermanente + poner uña acrílica",
        precio: "2 € c/u",
        nota: "",
      },
    ],
  },

  {
    nombre: "Acrílico y rellenos",
    servicios: [
      { nombre: "Acrílico básico liso", precio: "32 €", nota: "" },
      { nombre: "Acrílico + francesa", precio: "34 €", nota: "" },
      {
        nombre: "Acrílicas XL",
        precio: "anterior + 3 €",
        nota: "Se suma al precio del servicio acrílico elegido.",
      },
      { nombre: "Relleno acrílico liso", precio: "27 €", nota: "" },
      { nombre: "Relleno acrílico + francesa", precio: "29 €", nota: "" },
      {
        nombre: "Relleno acrílico (anterior) + poner uña",
        precio: "1 € c/u",
        nota: "",
      },
    ],
  },

  {
    nombre: "Diseños",
    servicios: [
      {
        nombre: "Semipermanente / acrílico con diseño",
        precio: "1,50 € c/u",
        nota: "El diseño se cobra aparte por uña.",
      },
      {
        nombre: "Diseño en todas (o algunas) uñas",
        precio: "Preguntar presupuesto",
        nota: "",
      },
      {
        nombre: "Diseños + piedras",
        precio: "Preguntar presupuesto",
        nota: "",
      },
    ],
  },

  {
    nombre: "Retiradas y cambios",
    servicios: [
      {
        nombre: "Retirar semipermanente + manicura básica",
        precio: "8 €",
        nota: "",
      },
      {
        nombre: "Retirar semipermanente + manicura + esmalte tradicional",
        precio: "10 €",
        nota: "",
      },
      {
        nombre: "Retirar acrílico + manicura",
        precio: "12 €",
        nota: "",
      },
      {
        nombre: "Retirar acrílico + manicura + esmalte tradicional",
        precio: "15 €",
        nota: "",
      },
      {
        nombre: "Retirar acrílico + semipermanente (incluye refuerzo)",
        precio: "30 €",
        nota: "Francesa y/o diseños se cobran aparte.",
      },
      {
        nombre: "Retirar acrílico y volver a hacer",
        precio: "40 €",
        nota: "Francesa y/o diseños se cobran aparte.",
      },
    ],
  },

  {
    nombre: "Depilación",
    servicios: [
      { nombre: "Depilar cejas", precio: "5 €", nota: "" },
      { nombre: "Depilar labio", precio: "3 €", nota: "" },
    ],
  },

  {
    nombre: "Pedicura",
    servicios: [
      { nombre: "Pedicura completa sin pintar", precio: "22 €", nota: "" },
      {
        nombre: "Pedicura completa + semipermanente",
        precio: "30 €",
        nota: "",
      },
      {
        nombre: "Pedicura completa + esmalte tradicional",
        precio: "25 €",
        nota: "",
      },
    ],
  },
];

// No toques esta parte 🙂
// Esto hace que el archivo funcione en la página.
if (typeof window !== "undefined") {
  window.CATEGORIAS = CATEGORIAS;
}

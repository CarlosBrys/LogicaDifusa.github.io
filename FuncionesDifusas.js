
///////////////////////////////////////////////////////
// Funciones difusas para las etiquetas linguisticas //
///////////////////////////////////////////////////////

// Temperatura
//------------
// Etiquetas:
// Ux=[-90,55]
//
  function EtiquetaTemperatura(temperatura) {
    txt = '';
    if (temperatura >0 && temperatura <20){ txt = 'Frio';}
    if (temperatura >=20 && temperatura <40){ txt = 'Calor';}
    return(txt);
  }

// Humedad
//------------
  function EtiquetaHumedad(humedad) {
    txt = '';
        return(txt);
  }

// Presion
//------------
  function EtiquetaPresion(presion) {
    txt = '';
        return(txt);
  }

// Velocidad del Viento
//---------------------
// Escala de Beaufort
// Km/h	    Denominacion
// 0 a 1	    Calma
// 2 a 5	    Ventolina
// 6 a 11	  Brisa muy débil
// 12 a 19	  Brisa Ligera
// 20 a 28	  Brisa moderada
// 29 a 38	  Brisa fresca
// 39 a 49	  Brisa fuerte
// 50 a 61	  Viento fuerte
// 62 a 74	  Viento duro
// 75 a 88	  Viento muy duro
// 89 a 102	Temporal
// 103 a 117	Borrasca
// + 118	    Huracán
//
  function EtiquetaViento(velocidadViento) {
        txt = '';
        return(txt);
  }



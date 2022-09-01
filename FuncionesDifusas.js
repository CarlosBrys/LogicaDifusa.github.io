
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
    if (temperatura <0){ txt = 'Muy Frío';}
    if (temperatura >=0 && temperatura <=10){ txt = 'Frío';}
    if (temperatura >=10 && temperatura <=20){ txt = 'Templado';}
    if (temperatura >=20 && temperatura <=25){ txt = 'Cálido';}
    if (temperatura >25){ txt = 'Muy Cálido';}
    return(txt);
  }

// Humedad
//------------
  function EtiquetaHumedad(humedad) {
    txt = '';
    if (humedad >=0 && humedad <=25){ txt = 'Muy Seco';}
    if (humedad >=20 && humedad <=50){ txt = 'Seco';}
    if (humedad >=30 && humedad <=75){ txt = 'Húmedo';}
    if (humedad >=60 && humedad <=100){ txt = 'Saturado';}
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


// Predicción
// Reglas:
// Después de un período de buen tiempo, si la temperatura y la humedad relativa del aire van en aumento, mientras el barómetro sigue estacionario, pueden esperarse tormentas de calor, sobre todo en los meses con más horas de sol, de mayo a septiembre.
// Si la presión atmosférica es alta y permanece así, sin cambios, con la temperatura y humedad bajas, el tiempo debe seguir estable. Seguramente, estemos bajo el dominio de un anticiclón persistente invernal.
// Cuando la presión atmosférica permanece baja, después de varios días en esos valores, en un ambiente inestable, con temperatura templada o baja más una humedad relativa baja, no hay que esperar que las lluvias o las nevadas cesen a corto plazo.
// En el caso de observar una presión atmosférica al alza, pese a que el tiempo esté inestable en ese momento, es de esperar una mejoría del tiempo, al menos transitoria: podría acercarse alguna cuña anticiclónica que dominara la zona de manera temporal entre frente y frente o borrasca y borrasca, o bien el asentamiento durante un plazo más largo de un anticiclón.
// Si tras muchos días de tiempo estable y presión alta, se inician varias jornadas de presión en descenso, es bastante probable que la inestabilidad aparezca en breve.

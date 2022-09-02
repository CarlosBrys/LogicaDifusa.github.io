
///////////////////////////////////////////////////////
// Funciones difusas para las etiquetas linguisticas //
///////////////////////////////////////////////////////

// Temperatura
//------------
// Etiquetas: Muy frío(<0), frío(0-10), templado(10-20), cálido(20-25), muy cálido(>25)
// Ux=[-90,55]
//
  function EtiquetaTemperatura(temperatura) {
    txt = '';
    if (temperatura >-90 && temperatura <=-30){ txt = 'Gélido';}
    if (temperatura >-40 && temperatura <=00){ txt = 'Muy Frío';}
    if (temperatura >-10 && temperatura <=10){ txt = 'Frío';}
    if (temperatura >0 && temperatura <=20){ txt = 'Templado';}
    if (temperatura >10 && temperatura <=30){ txt = 'Caluroso';}
    if (temperatura >20 && temperatura <=40){ txt = 'Muy Caluroso';}
    if (temperatura >30 && temperatura <=60){ txt = 'Calor Extremo';}
    return(txt);
  }


// Humedad
// Etiquetas: (Muy seco (0-25), seco (20-50), húmedo(30-75), saturado (60-100)
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
// Etiquetas: (Baja (850-1016) Media((1016-1182) Alta (1182-1100)
//------------
  function EtiquetaPresion(presion) {
    txt = '';
    if (presion >=850 && presion <=1016){ txt = 'Baja';}
    if (presion >=1016 && presion <=1082){ txt = 'Media';}
    if (presion >=1082 && presion <=1100){ txt = 'Alta';}
    return(txt);
  }

// Velocidad del Viento
//---------------------
// Escala de Beaufort
// Km/h	    Denominacion
// 00-01		Calmo
// 0.5-5		Ventolina 
// 4.5-11		Brisa suave 
// 10.5-19		Brisa débil 
// 17.5-28		Brisa moderada 
// 25-38		Brisa regular 
// 36-49		Viento fuerte
// 45-61		Viento muy fuerte
// 58-74		Temporal
// 70-88		Temporal fuerte
// 86-102		Temporal muy fuerte
// 100-118	Tempestad
// +115 a más	Vientos Huracanados
//
  function EtiquetaViento(VelocidadViento) {
    txt = '';
    if (VelocidadViento >=0 && VelocidadViento <2){ txt = 'Calma';}
    if (VelocidadViento >=2 && VelocidadViento <6){ txt = 'Ventolina';}
    if (VelocidadViento >=6 && VelocidadViento <12){ txt = 'Brisa muy débil';}
    if (VelocidadViento >=12 && VelocidadViento <20){ txt = 'Brisa ligera';}
    if (VelocidadViento >=20 && VelocidadViento <29){ txt = 'Brisa moderada';}
    if (VelocidadViento >=29 && VelocidadViento <39){ txt = 'Brisa fresca';}
    if (VelocidadViento >=39 && VelocidadViento <50){ txt = 'Brisa fuerte';}
    if (VelocidadViento >=50 && VelocidadViento <62){ txt = 'Viento fuerte';}
    if (VelocidadViento >=62 && VelocidadViento <75){ txt = 'Viento duro';}
    if (VelocidadViento >=75 && VelocidadViento <89){ txt = 'Viento muy duro';}
    if (VelocidadViento >=89 && VelocidadViento <103){ txt = 'Temporal';}
    if (VelocidadViento >=103 && VelocidadViento <118){ txt = 'Borrasca';}
    if (VelocidadViento >118){ txt = 'Huracán';}
    return(txt);
  }



// Direccion del Viento: 0 - 360º
// Etiquetas: Rosa de los vientos
//------------
  function EtiquetaDir(direccionViento) {
    txt = '';
if (direccionViento > 348.75 &&  direccionViento <= 11.25) {
        txt =  "N";
    } else if (direccionViento > 11.25 &&  direccionViento <= 33.75) {
        txt =  "NNE";
    } else if (direccionViento > 33.75 &&  direccionViento <= 56.25) {
        txt =  "NE";
    } else if (direccionViento > 56.25 &&  direccionViento <= 78.75) {
        txt =  "ENE";
    } else if (direccionViento > 78.75 &&  direccionViento <= 101.25) {
        txt =  "E";
    } else if (direccionViento > 101.25 &&  direccionViento <= 123.75) {
        txt =  "ESE";
    } else if (direccionViento > 123.75 &&  direccionViento <= 146.25) {
        txt =  "SE";
    } else if (direccionViento > 146.25 &&  direccionViento <= 168.75) {
        txt =  "SSE";
    } else if (direccionViento > 168.75 &&  direccionViento <= 191.25) {
        txt =  "S";
    } else if (direccionViento > 191.25 &&  direccionViento <= 213.75) {
        txt =  "SSO";
    } else if (direccionViento > 213.75 &&  direccionViento <= 236.25) {
        txt =  "SO";
    } else if (direccionViento > 236.25 &&  direccionViento <= 258.75) {
        txt =  "OSO";
    } else if (direccionViento > 258.75 &&  direccionViento <= 281.25) {
        txt =  "O";
    } else if (direccionViento > 281.25 &&  direccionViento <= 303.75) {
        txt =  "ONO";
    } else if (direccionViento > 303.75 &&  direccionViento <= 326.25) {
        txt =  "NO";
    } else if (direccionViento > 326.25 &&  direccionViento <= 348.75) {
        txt =  "NNO";
    } else {
        txt =  " - no hay datos - ";
    }
    
      return(txt);
 }


// Nubosidad 0 a 100 %
// Etiquetas: Despejado, Nubes dispersas, Cubierto
//------------
  function EtiquetaNubes(nubosidad) {
    txt = '';
    if (nubosidad <30 ){ txt = 'Despejado';}
    if (nubosidad >=20 && nubosidad <=70){ txt = 'Nubes dispersas';}
    if (nubosidad >60 ){ txt = 'Cubierto';}
    return(txt);
  }



// Predicción
// Reglas:
// Después de un período de buen tiempo, si la temperatura y la humedad relativa del aire van en aumento, mientras el barómetro sigue estacionario, pueden esperarse tormentas de calor, sobre todo en los meses con más horas de sol, de mayo a septiembre.
// Si la presión atmosférica es alta y permanece así, sin cambios, con la temperatura y humedad bajas, el tiempo debe seguir estable. Seguramente, estemos bajo el dominio de un anticiclón persistente invernal.
// Cuando la presión atmosférica permanece baja, después de varios días en esos valores, en un ambiente inestable, con temperatura templada o baja más una humedad relativa baja, no hay que esperar que las lluvias o las nevadas cesen a corto plazo.
// En el caso de observar una presión atmosférica al alza, pese a que el tiempo esté inestable en ese momento, es de esperar una mejoría del tiempo, al menos transitoria: podría acercarse alguna cuña anticiclónica que dominara la zona de manera temporal entre frente y frente o borrasca y borrasca, o bien el asentamiento durante un plazo más largo de un anticiclón.
// Si tras muchos días de tiempo estable y presión alta, se inician varias jornadas de presión en descenso, es bastante probable que la inestabilidad aparezca en breve.

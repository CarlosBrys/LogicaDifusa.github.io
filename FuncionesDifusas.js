
  ///////////////////////////////////////////////////////
  // Funciones difusas para las etiquetas linguisticas //
  ///////////////////////////////////////////////////////

  function EtiquetaTemperatura(temperatura) {
    console.log('temp',temperatura);

    txt = '';
    if (temperatura >0 && temperatura <20){ txt = 'Frio';}
    if (temperatura >=20 && temperatura <40){ txt = 'Calor';}
    console.log('txt',txt);
    return(txt);
  }

/* ============================================================
   HISTORIAS ADICIONALES — Héroes de Colombia
   Bolívar · Nariño · Beltrán · Santander
   ============================================================ */

Object.assign(Story.notasHistoricas, {

  cruce_andes: {
    id: 'cruce_andes', year: 'Junio–Julio 1819',
    title: 'El Cruce de los Andes',
    body: 'Bolívar cruzó la cordillera Oriental por el páramo de Pisba en pleno invierno con 2.400 soldados. Cientos murieron de frío y agotamiento. El propio Bolívar describió el paso del páramo como "lo más espantoso que puede imaginarse". Los llaneros venezolanos, acostumbrados al calor extremo, sufrieron especialmente. Pero el elemento sorpresa fue total: los realistas nunca creyeron posible un ataque en invierno.',
  },
  pantano_vargas: {
    id: 'pantano_vargas', year: '25 de julio de 1819',
    title: 'El Pantano de Vargas',
    body: 'La batalla del Pantano de Vargas casi terminó en desastre para los patriotas. El terreno pantanoso frenó el avance y el ejército realista del coronel Barreiro tenía ventaja. En el momento crítico, el Mayor Juan José Rondón se acercó a Bolívar y le dijo: "Mi general, si usted no va a terminar la batalla, yo lo voy a intentar." Bolívar respondió: "Salve usted la patria." La carga de los 14 llaneros de Rondón cambió el curso de la batalla.',
  },
  batalla_boyaca: {
    id: 'batalla_boyaca', year: '7 de agosto de 1819',
    title: 'La Batalla del Puente de Boyacá',
    body: 'La batalla decisiva duró apenas dos horas. El ejército patriota interceptó a las tropas realistas en el puente sobre el río Teatinos. Bolívar atacó por el frente mientras Santander cortó la retirada. El coronel Barreiro y 1.600 soldados fueron capturados. Las bajas patriotas fueron mínimas. Tres días después, el Virrey Sámano huyó de Bogotá sin su sombrero. Nueva Granada quedó libre.',
  },
  derechos_hombre: {
    id: 'derechos_hombre', year: 'París, 1789 — Bogotá, 1794',
    title: 'La Declaración de los Derechos del Hombre',
    body: 'La "Déclaration des droits de l\'homme et du citoyen" fue adoptada en Francia en 1789. Antonio Nariño la tradujo al español en 1793 e imprimió 100 ejemplares clandestinamente en Bogotá en 1794. Su texto proclamaba que "los hombres nacen y permanecen libres e iguales en derechos". Distribuirlo en una colonia española era un acto de alta traición. Nariño fue condenado a 10 años de presidio en África.',
  },
  narino_juicio: {
    id: 'narino_juicio', year: 'Bogotá, 1795',
    title: 'El Juicio de Nariño',
    body: 'En su juicio, Nariño realizó una brillante defensa legal argumentando que los derechos que traducía ya existían en la legislación española. El fiscal pidió la pena máxima. Fue condenado, sus bienes confiscados y su familia arruinada. Logró escapar desde Cádiz antes de ser embarcado a África, y vagó por Europa y el norte de África durante años. Regresó a Colombia en 1797 y fue encarcelado nuevamente.',
  },
  comuneros_1781: {
    id: 'comuneros_1781', year: 'El Socorro, 1781',
    title: 'La Revolución de los Comuneros',
    body: 'El 16 de marzo de 1781, Manuela Beltrán arrancó el edicto real que anunciaba nuevos impuestos en la plaza de El Socorro. Su grito de "¡Viva el rey y muera el mal gobierno!" encendió una rebelión que reunió a más de 20.000 comuneros marchando sobre Bogotá. Fue la primera rebelión masiva en Nueva Granada. Las Capitulaciones de Zipaquirá prometieron rebajar los impuestos, pero fueron desconocidas por las autoridades coloniales.',
  },
  galan_comunero: {
    id: 'galan_comunero', year: 'Nueva Granada, 1781',
    title: 'José Antonio Galán',
    body: 'José Antonio Galán fue el principal líder militar de la Revolución Comunera. Mientras los caudillos firmaban las capitulaciones, Galán continuó la lucha armada y proclamó la liberación de los esclavos. Fue capturado por traición, descuartizado públicamente en Bogotá en febrero de 1782. Sus restos fueron distribuidos por las provincias como advertencia. Bolívar lo llamó "el precursor de los precursores".',
  },
  santander_estadista: {
    id: 'santander_estadista', year: 'Bogotá, 1819–1826',
    title: 'Santander y la República',
    body: 'Francisco de Paula Santander fue vicepresidente de la Gran Colombia bajo Bolívar. Mientras Bolívar guerreaba en el sur, Santander gobernó desde Bogotá construyendo instituciones: creó escuelas públicas, organizó la hacienda, codificó leyes. Su lema era "Las armas os dieron la independencia, las leyes os darán la libertad." El conflicto con Bolívar sobre si gobernar por decreto o por constitución definiría la política colombiana por siglos.',
  },
  tension_bolivar_santander: {
    id: 'tension_bolivar_santander', year: 'Bogotá, 1826–1828',
    title: 'Bolívar contra Santander',
    body: 'El enfrentamiento entre Bolívar y Santander fue el primer gran debate político de Colombia independiente: ¿república liberal o gobierno fuerte? Bolívar creía que América Latina necesitaba un gobierno centralizado para sobrevivir. Santander defendía la constitución, el congreso y las leyes. En 1828, Bolívar asumió poderes dictatoriales. Santander fue acusado de conspirar contra su vida, condenado a muerte, luego exiliado. Regresó en 1832 como presidente.',
  },
});

Object.assign(Story.nodes, {

/* ══════════════════════════════════════════════════════════════
   SIMÓN BOLÍVAR — La Campaña Libertadora — 1819
   "La gloria, como dicen los americanos, no es solo vencer
    sino hacer la guerra imposible."
══════════════════════════════════════════════════════════════ */

  bolivar_intro: {
    id: 'bolivar_intro',
    actIntro: {
      number: 'Capítulo I',
      title: 'El Cruce Imposible',
      historical: 'Casanare, junio de 1819. El Ejército Libertador agoniza en los llanos. Hambre, enfermedad, traiciones. Simón Bolívar tiene un plan que todos consideran suicida: cruzar los Andes en pleno invierno para atacar a los realistas por donde nunca esperan ser atacados.',
    },
    lines: [],
    next: 'bolivar_a1_01',
  },

  bolivar_a1_01: {
    id: 'bolivar_a1_01',
    lines: [
      { speaker: 'narrador', text: 'Casanare, 27 de junio de 1819. El calor de los llanos es una bestia. Dos mil cuatrocientos hombres — venezolanos, granadinos, irlandeses, ingleses — duermen en el barro con hambre y fiebre.', bg: 'exterior', bgImg: 'images/bg_llanos.svg', char: 'images/bolivar_lider.svg' },
      { speaker: 'narrador', text: 'Soy el General Simón Bolívar. Me llaman "El Loco" a mis espaldas. Mañana anuncio algo que confirmará ese apodo.' },
      { speaker: 'bolivar_sp', text: 'Coronel Soublette. Reúna a todos los oficiales. Tenemos que hablar.' },
      { speaker: 'soublette', text: 'General... los hombres están al límite. Cuarenta han muerto de fiebre esta semana. Si marchamos ahora—' },
      { speaker: 'bolivar_sp', text: 'Si esperamos, Morillo termina de aplastarnos. El invierno cierra el páramo para los realistas. Para nosotros, lo abre.' },
      { speaker: 'pensar', text: 'Cada uno de mis generales tiene razones para decirme que es imposible. Yo tengo una sola razón para decirles que es necesario.' },
    ],
    note: { id: 'cruce_andes', title: 'Nota: El Cruce de los Andes' },
    next: 'bolivar_a1_02',
  },

  bolivar_a1_02: {
    id: 'bolivar_a1_02',
    lines: [
      { speaker: 'narrador', text: 'La reunión de oficiales. Cuarenta hombres, el silencio tenso de quien no quiere ser el primero en hablar.' },
      { speaker: 'paez', text: 'General, mis llaneros pueden cruzar cualquier río. Pero un páramo a cuatro mil metros... muchos van a morir solo de frío.' },
      { speaker: 'bolivar_sp', text: 'Sí. Van a morir algunos. ¿Cuántos morirán si nos quedamos aquí esperando a que Morillo traiga diez mil soldados más?' },
      { speaker: 'rondon', text: 'Yo voy donde usted vaya, General. Pero que conste: va a necesitar a la Virgen de su lado en ese páramo.' },
      { speaker: 'bolivar_sp', text: 'La Virgen estará ocupada. Tendremos que arreglarnos solos. Partimos en tres días.' },
      { speaker: 'narrador', text: 'Nadie aplaude. Nadie protesta. Se miran entre ellos con esa mezcla de admiración y terror que solo produce un líder verdaderamente loco o verdaderamente genial.' },
    ],
    choiceQuestion: '¿Cómo preparas la marcha?',
    choiceContext: 'Tienes tres días antes de partir. Los recursos son escasos.',
    choices: [
      {
        id: 'bol_c1a', text: 'Marchas mañana mismo — el factor sorpresa lo es todo',
        hint: 'Fidelidad táctica +10, bajas altas',
        fidelity: 10, suspicion: 0,
        setFlag: 'marcha_urgente',
        reaction: 'La orden llega como un trueno. Los hombres recogen sus escasos pertrechos esa misma noche. Algunos ni siquiera tienen botas. Partimos al amanecer.',
        next: 'bolivar_a1_03',
      },
      {
        id: 'bol_c1b', text: 'Tres días de preparación — recoge comida, equipos, refuerzos',
        hint: 'Fidelidad +5, tropas mejor equipadas',
        fidelity: 5,
        setFlag: 'marcha_preparada',
        reaction: 'Tres días de frenesí. Consigo mantas, carne seca, lo que los pueblos cercanos pueden dar. No es suficiente. Nunca es suficiente. Pero es algo.',
        next: 'bolivar_a1_03',
      },
      {
        id: 'bol_c1c', text: 'Envía exploradores primero — necesitas información exacta del páramo',
        hint: 'Fidelidad -5, mejor inteligencia',
        fidelity: -5,
        setFlag: 'marcha_explorada',
        reaction: 'Los exploradores regresan con noticias terribles: el camino es peor de lo que pensaba. Pero ahora sé exactamente dónde van a morir mis hombres. Eso es algo.',
        next: 'bolivar_a1_03',
      },
    ],
  },

  bolivar_a1_03: {
    id: 'bolivar_a1_03',
    lines: [
      { speaker: 'narrador', text: 'El páramo de Pisba. Día dos de la subida. El frío ya no duele — es peor que eso, es un entumecimiento total.', bg: 'celda', bgImg: 'images/bg_paramo.svg', char: 'images/bolivar_batalla.svg' },
      { speaker: 'narrador', text: 'Los llaneros venezolanos, que nunca han visto nieve, caen como moscas. Sus cuerpos acostumbrados al calor extremo colapsan ante los cuatro mil metros de altura.' },
      { speaker: 'bolivar_sp', text: 'Coronel Rondón. ¿Cómo están sus hombres?' },
      { speaker: 'rondon', text: 'Veinte caídos esta mañana, General. Otros treinta no pueden caminar. Los caballos están peor.' },
      { speaker: 'bolivar_sp', text: 'Los que puedan caminar, caminan. Cargamos a los que no pueden. A nadie se abandona en este páramo.' },
      { speaker: 'pensar', text: 'Miento. Hemos abandonado a tres que ya no respiraban. Pero mientras yo diga que no abandonamos a nadie, los que sigan vivos seguirán creyendo que vale la pena seguir.' },
    ],
    next: 'bolivar_a1_04',
  },

  bolivar_a1_04: {
    id: 'bolivar_a1_04',
    lines: [
      { speaker: 'narrador', text: 'Día cuatro. Un soldado granadino de dieciséis años cae al borde del camino. No se levanta.' },
      { speaker: 'soldado', text: 'General... no puedo más. Déjeme aquí.' },
      { speaker: 'bolivar_sp', text: '¿Cómo te llamas?' },
      { speaker: 'soldado', text: 'Pedro, mi General. Pedro Infante, de Mompox.' },
    ],
    choiceQuestion: '¿Qué haces?',
    choiceContext: 'Pedro tiene hipotermia. Cargarlo ralentiza al pelotón. Quedan dos días de páramo.',
    choices: [
      {
        id: 'bol_c2a', text: 'Lo cargas tú mismo — el General no abandona a sus hombres',
        hint: 'Fidelidad +15, moral de tropa máxima',
        fidelity: 15, trust: 20,
        setFlag: 'cargó_soldado',
        reaction: 'Me quito la capa y la envuelvo alrededor de Pedro. Ordeno que dos hombres lo carguen en turnos. En tres horas, Pedro camina solo. La noticia se riega por toda la columna como fuego. El General cargo a un soldado. Nadie se rinde esa noche.',
        next: 'bolivar_a2_intro',
      },
      {
        id: 'bol_c2b', text: 'Le dejas tu capa y ordenás que un pelotón se quede con él',
        hint: 'Fidelidad +5, compromiso razonable',
        fidelity: 5,
        reaction: 'Le doy mi capa y dejo cinco hombres para que lo cuiden. Es lo más que puedo hacer sin detener la columna. Pedro sobrevive. Lo sé cuando lo veo en Tunja una semana después, de pie, con mi capa todavía puesta.',
        next: 'bolivar_a2_intro',
      },
      {
        id: 'bol_c2c', text: 'Le dices que la patria necesita que continúes — el tiempo no espera',
        hint: 'Fidelidad -10, decisión militar dura',
        fidelity: -10,
        setFlag: 'abandonó_herido',
        reaction: 'Le aprieto el hombro. "La patria te recuerda, Pedro." Y sigo caminando. Es la decisión más difícil que tomo en este páramo, y en este páramo tomo cien decisiones difíciles.',
        next: 'bolivar_a2_intro',
      },
    ],
  },

  bolivar_a2_intro: {
    id: 'bolivar_a2_intro',
    actIntro: {
      number: 'Capítulo II',
      title: 'El Fuego de Vargas',
      historical: 'Tunja, julio de 1819. El ejército llegó diezmado pero vivo. Ahora deben enfrentar al experimentado ejército realista del Coronel Barreiro. La batalla del Pantano de Vargas será el primer gran choque — y casi el último.',
    },
    lines: [],
    next: 'bolivar_a2_01',
  },

  bolivar_a2_01: {
    id: 'bolivar_a2_01',
    lines: [
      { speaker: 'narrador', text: 'Tunja, 24 de julio de 1819. Hemos cruzado. Los pueblos granadinos nos reciben con lágrimas y lo poco que tienen. Mujeres que tejen ruanas para nuestros llaneros congelados.', bg: 'mercado', bgImg: 'images/bg_boyaca_campo.svg', char: 'images/bolivar_lider.svg' },
      { speaker: 'bolivar_sp', text: 'Santander, ¿cuántos hombres disponibles?' },
      { speaker: 'santander_sp', text: 'Mil ochocientos efectivos, General. Más unos cuatrocientos que se recuperan. Barreiro tiene dos mil cuatrocientos bien armados y descansados.' },
      { speaker: 'bolivar_sp', text: 'Entonces tenemos ventaja.' },
      { speaker: 'santander_sp', text: 'General... ellos son más.' },
      { speaker: 'bolivar_sp', text: 'Ellos no esperaban que estuviéramos aquí. Esa es nuestra ventaja. El miedo vale más que un batallón.' },
    ],
    next: 'bolivar_a2_02',
  },

  bolivar_a2_02: {
    id: 'bolivar_a2_02',
    lines: [
      { speaker: 'narrador', text: 'El Pantano de Vargas. 25 de julio. El terreno es una trampa: tierra húmeda, cañadas, colinas que favorecen a Barreiro.' },
      { speaker: 'narrador', text: 'La batalla lleva tres horas. El centro patriota ha cedido. El flanco izquierdo está roto. Los realistas avanzan.' },
      { speaker: 'rondon', text: 'General. Si usted no va a terminar esta batalla, yo lo voy a intentar.' },
      { speaker: 'bolivar_sp', text: '¿Con qué, Rondón? Tiene catorce hombres y caballos exhaustos.' },
      { speaker: 'rondon', text: 'Con estos catorce y con lo que Dios me dé. Deme la orden, General.' },
      { speaker: 'pensar', text: 'Catorce hombres contra un ejército. Es una locura. Es exactamente la clase de locura que a veces cambia el mundo.' },
    ],
    note: { id: 'pantano_vargas', title: 'Nota: El Pantano de Vargas' },
    choiceQuestion: '¿Das la orden a Rondón?',
    choiceContext: 'La batalla se pierde si no actúas. Pero catorce jinetes contra cientos es un sacrificio casi seguro.',
    choices: [
      {
        id: 'bol_c3a', text: '¡"Salve usted la patria, coronel!" — La orden histórica',
        hint: 'Fidelidad +20 — el momento épico',
        fidelity: 20,
        setFlag: 'envio_rondon',
        reaction: '"¡Salve usted la patria, Coronel!" Rondón espuela su caballo. Los catorce jinetes cargan como truenos. El grito de los llaneros paraliza por un instante a los realistas — ese instante es suficiente. La línea enemiga se rompe.',
        next: 'bolivar_a2_03',
      },
      {
        id: 'bol_c3b', text: 'Reorganiza el centro y atacas con toda la caballería disponible',
        hint: 'Fidelidad +10, victoria táctica',
        fidelity: 10,
        setFlag: 'ataque_organizado',
        reaction: 'Tres grupos de caballería, coordinados. No es el heroísmo de catorce hombres, pero es sólido. La presión en tres puntos simultáneos desconcierta a Barreiro. Retrocede. Ganamos terreno, lentamente, dolorosamente.',
        next: 'bolivar_a2_03',
      },
      {
        id: 'bol_c3c', text: 'Ordenas retirada táctica — reagrupar para mañana',
        hint: 'Fidelidad -15, se pierde el momento',
        fidelity: -15,
        setFlag: 'retirada_vargas',
        reaction: 'La retirada organizada es un arte. La ejecutamos bien. Pero el costo en moral es enorme. Esta noche, tres oficiales me piden que negociemos con Barreiro. Les respondo que mañana no habrá con quién negociar.',
        next: 'bolivar_a2_03',
      },
    ],
  },

  bolivar_a2_03: {
    id: 'bolivar_a2_03',
    lines: [
      { speaker: 'narrador', text: 'Vargas termina sin vencedor claro. Pero Barreiro ha perdido el impulso. Nosotros, sorprendentemente, no.' },
      { speaker: 'santander_sp', text: 'General, inteligencia confirma que Barreiro marcha hacia Bogotá por el camino del puente de Boyacá. Si lo cortamos ahí—' },
      { speaker: 'bolivar_sp', text: '¿Cuánto tiempo tenemos?' },
      { speaker: 'santander_sp', text: 'Si marchamos esta noche, llegamos antes que él.' },
      { speaker: 'bolivar_sp', text: 'Entonces marchamos esta noche. Despierta a todos los que puedan caminar.' },
      { speaker: 'pensar', text: 'Este es el momento. Toda la locura del páramo, toda la sangre del pantano — todo ha sido para llegar aquí. Al puente de Boyacá.' },
    ],
    next: 'bolivar_mg_boyaca',
  },

  bolivar_mg_boyaca: {
    id: 'bolivar_mg_boyaca',
    lines: [
      { speaker: 'narrador', text: '7 de agosto de 1819. El puente sobre el río Teatinos. Barreiro y sus dos mil cuatrocientos hombres intentan cruzar. Esto es ahora o nunca.', bg: 'batalla', bgImg: 'images/bg_boyaca_campo.svg', char: 'images/bolivar_batalla.svg' },
      { speaker: 'bolivar_sp', text: '¡Santander, corta su retirada por el sur! ¡Anzoátegui, ataca el frente! ¡El puente es nuestro!' },
      { speaker: 'rondon', text: '¡Por la patria, General! ¡Hoy nos acordaremos de este día toda la vida!' },
      { speaker: 'bolivar_sp', text: '¡Fuego! ¡FUEGO TODA LA LÍNEA!' },
    ],
    minigame: {
      id: 'boyaca_puente',
      title: '⚔ El Puente de Boyacá',
      instructions: 'El ejército realista tiene tres flancos. Cada ronda, refuerzan dos — detecta el punto débil y ataca antes de que lo cubran.',
      onSuccess: { next: 'bolivar_a3_victoria', fidelity: 25, setFlag: 'ganó_boyacá' },
      onFail:    { next: 'bolivar_a3_victoria', fidelity: 5 },
    },
  },

  bolivar_a3_victoria: {
    id: 'bolivar_a3_victoria',
    lines: [
      { speaker: 'narrador', text: 'Dos horas. La batalla más importante de la historia de América del Sur duró exactamente dos horas.', bgImg: 'images/bg_boyaca_campo.svg', char: 'images/bolivar_lider.svg' },
      { speaker: 'narrador', text: 'El coronel Barreiro, 1.600 soldados realistas, capturados. Las bajas patriotas: trece muertos.' },
      { speaker: 'santander_sp', text: 'General... lo logramos. Nueva Granada es libre.' },
      { speaker: 'bolivar_sp', text: 'Nueva Granada es libre. Ahora tenemos que aprender a serlo.' },
      { speaker: 'pensar', text: 'Ganar una guerra es sencillo comparado con construir una república. Pero eso es problema de mañana. Hoy, simplemente, respiramos.' },
    ],
    note: { id: 'batalla_boyaca', title: 'Nota: La Batalla de Boyacá' },
    next: 'bolivar_a3_bogota',
  },

  bolivar_a3_bogota: {
    id: 'bolivar_a3_bogota',
    lines: [
      { speaker: 'narrador', text: 'Bogotá, 10 de agosto de 1819. El Virrey Sámano huyó tres días antes. Dicen que salió corriendo tan rápido que perdió el sombrero.', bg: 'plaza', bgImg: 'images/bg_plaza_ejecucion.svg', char: 'images/bolivar_lider.svg' },
      { speaker: 'narrador', text: 'Las calles están llenas de gente que llora, que grita, que no puede creer que lo que lleva doscientos años oprimiéndolos de repente ya no existe.' },
      { speaker: 'bolivar_sp', text: 'Esto no es el fin. Es el principio de lo más difícil.' },
    ],
    choiceQuestion: '¿Qué haces con el Coronel Barreiro, prisionero?',
    choiceContext: 'Barreiro ordenó ejecuciones de patriotas. Sus soldados esperan tu decisión. El mundo observa.',
    choices: [
      {
        id: 'bol_c4a', text: 'Lo tratas con honores militares — la guerra terminó',
        hint: 'Fidelidad histórica +15',
        fidelity: 15, setFlag: 'clemencia_barreiro',
        reaction: 'Barreiro come en mi mesa. Le devuelvo su espada. "La guerra terminó, coronel." Dos semanas después, sus propios hombres lo matan por la vergüenza de la derrota. No fue mi decisión ni mi responsabilidad.',
        next: 'bolivar_a4_final',
      },
      {
        id: 'bol_c4b', text: 'Lo juzgas por crímenes de guerra',
        hint: 'Fidelidad +10, justicia formal',
        fidelity: 10,
        reaction: 'Tribunal militar. Barreiro se defiende con dignidad. El veredicto: culpable. La sentencia: muerte. No soy yo quien lo ejecuta. Es la ley. Pero soy yo quien permite que la ley actúe.',
        next: 'bolivar_a4_final',
      },
      {
        id: 'bol_c4c', text: 'Lo ejecutas sumariamente — mensaje claro para futuros resistentes',
        hint: 'Fidelidad -20, poder absoluto',
        fidelity: -20, setFlag: 'ejecutó_barreiro',
        reaction: 'La orden se cumple al amanecer. En Europa lo llaman "el Atila del sur". En América algunos me llaman libertador, otros tirano. Quizás las dos palabras significan lo mismo en tiempos de revolución.',
        next: 'bolivar_a4_final',
      },
    ],
  },

  bolivar_a4_final: {
    id: 'bolivar_a4_final',
    lines: [
      { speaker: 'narrador', text: 'El congreso de Angostura te proclama presidente de la Gran Colombia. Venezuela, Nueva Granada y Ecuador, unidas.' },
      { speaker: 'bolivar_sp', text: 'La Gran Colombia. El sueño. Si dura veinte años, será un milagro.' },
      { speaker: 'santander_sp', text: 'Durará si construimos instituciones, General. Leyes, no solo victorias.' },
      { speaker: 'bolivar_sp', text: 'Tiene razón, Santander. Pero primero hay que ganar en el sur. Ecuador, Perú, Bolivia. El trabajo no ha terminado.' },
      { speaker: 'pensar', text: 'Mientras yo peleo guerras, Santander construye una república. Quizás uno de los dos está haciendo lo correcto. Quizás los dos.' },
    ],
    next: (s) => {
      if (s.flags.has('ganó_boyacá') && s.fidelity >= 75) return 'bolivar_ending_libertador';
      if (s.flags.has('clemencia_barreiro') && s.fidelity >= 60) return 'bolivar_ending_canon';
      if (s.flags.has('ejecutó_barreiro') && s.fidelity < 40) return 'bolivar_ending_tirano';
      if (s.flags.has('retirada_vargas') || s.flags.has('abandonó_herido')) return 'bolivar_ending_sombra';
      return 'bolivar_ending_canon';
    },
  },

  bolivar_ending_libertador: {
    id: 'bolivar_ending_libertador',
    ending: {
      type: '★ FINAL ÉPICO',
      title: 'El Libertador',
      body: 'Bolívar liberó Venezuela, Nueva Granada, Ecuador, Perú y Bolivia. Creó cinco naciones. Ningún ser humano antes o después liberó tantos pueblos con sus propias manos. Murió en Santa Marta en 1830, enfermo y exiliado de su propia creación, convencido de que "América es ingobernable". Tenía razón y estaba equivocado al mismo tiempo.',
      quote: '"He arado en el mar." — Simón Bolívar, 1830',
    },
  },
  bolivar_ending_canon: {
    id: 'bolivar_ending_canon',
    ending: {
      type: '⚔ FINAL HISTÓRICO',
      title: 'La Victoria de Boyacá',
      body: 'La batalla del puente de Boyacá selló la independencia de Nueva Granada. Tres días después, Bogotá era libre. El Ejército Libertador, que cruzó los Andes con hambre y frío, cambió la historia del continente. Bolívar fue aclamado como padre de la patria en media América del Sur.',
      quote: '"Los valientes para quienes la muerte no es peligro sino gloria." — Bolívar a sus tropas',
    },
  },
  bolivar_ending_tirano: {
    id: 'bolivar_ending_tirano',
    ending: {
      type: '⚠ FINAL OSCURO',
      title: 'El Precio del Poder',
      body: 'La victoria en Boyacá fue real. Pero el camino elegido sembró desconfianza. Los pueblos liberados empezaron a preguntarse si el nuevo poder era diferente del viejo. La Gran Colombia se fragmentó más rápido de lo esperado. La libertad sin justicia es solo otro nombre para el poder.',
      quote: '"No basta ser bueno, hay que parecerlo." — proverbio',
    },
  },
  bolivar_ending_sombra: {
    id: 'bolivar_ending_sombra',
    ending: {
      type: '🌑 FINAL ALTERNATIVO',
      title: 'La Sombra del Héroe',
      body: 'La victoria llegó, pero las decisiones del camino pesaron sobre la conciencia. Los hombres dejados atrás, las batallas evitadas. La independencia se logró, pero en el alma quedó la pregunta: ¿valió la pena cada costo? Bolívar fue grande. Pero la grandeza tiene un precio.',
      quote: '"La gloria está en ser grande y en haber servido." — Bolívar',
    },
  },
  bolivar_ending_diplomatico: {
    id: 'bolivar_ending_diplomatico',
    ending: {
      type: '🕊 FINAL DE PAZ',
      title: 'La Paz Negociada',
      body: 'Ante la posibilidad de más sangre, se buscó negociación. Los realistas aceptaron términos. La independencia llegó sin la batalla definitiva. Algunos lo llamaron cobardía. Otros, sabiduría. La historia recuerda las batallas, pero los pueblos agradecen la paz.',
      quote: '"La guerra es la madre de todos los males." — proverbio granadino',
    },
  },

/* ══════════════════════════════════════════════════════════════
   ANTONIO NARIÑO — El Precursor — 1794
   "Los hombres nacen y permanecen libres e iguales en derechos"
══════════════════════════════════════════════════════════════ */

  narino_intro: {
    id: 'narino_intro',
    actIntro: {
      number: 'Capítulo I',
      title: 'Los Derechos del Hombre',
      historical: 'Bogotá, 1793. Antonio Nariño, criollo ilustrado, tiene en sus manos un libro prohibido: la Declaración de los Derechos del Hombre y del Ciudadano de la Revolución Francesa. Traducirlo e imprimirlo es traición. No hacerlo es cobardía.',
    },
    lines: [],
    next: 'narino_a1_01',
  },

  narino_a1_01: {
    id: 'narino_a1_01',
    lines: [
      { speaker: 'narrador', text: 'Bogotá, diciembre de 1793. La biblioteca de Antonio Nariño es el lugar más peligroso de Nueva Granada. Libros franceses, ingleses, ideas que la Inquisición quemare si supiera que están aquí.', bg: 'mercado', bgImg: 'images/bg_imprenta_salon.svg', char: 'images/narino_leyendo.svg' },
      { speaker: 'narrador', text: 'Soy Antonio Nariño. Teniente de la Guardia Nacional, hombre de letras, ciudadano furioso con un Imperio que trata a los americanos como colonos permanentes.' },
      { speaker: 'narino_sp', text: 'Artículo primero: "Los hombres nacen y permanecen libres e iguales en derechos." Dios mío.' },
      { speaker: 'amigo_narino', text: 'Antonio, ese libro viene de París. Si la Inquisición sabe que lo tienes—' },
      { speaker: 'narino_sp', text: 'Si la Inquisición supiera la mitad de lo que tengo en esta biblioteca, ya estaría en Cartagena encadenado. Pero escucha esto.' },
      { speaker: 'pensar', text: 'Leo el texto en voz alta y cada palabra es como encender un fósforo en un cuarto lleno de pólvora. No puedo simplemente guardarlo.' },
    ],
    note: { id: 'derechos_hombre', title: 'Nota: La Declaración de los Derechos del Hombre' },
    next: 'narino_a1_02',
  },

  narino_a1_02: {
    id: 'narino_a1_02',
    lines: [
      { speaker: 'narrador', text: 'Noche. La imprenta clandestina en el sótano de la casa. Los tipos de plomo, la palanca, el rodillo de tinta.' },
      { speaker: 'amigo_narino', text: 'Si imprimes esto, Antonio, todo se acaba. Tu cargo, tu fortuna, tu familia.' },
      { speaker: 'narino_sp', text: 'Si no lo imprimo, todo sigue igual. Doscientos años más de esto. ¿Vale la pena tu comodidad a ese precio?' },
      { speaker: 'amigo_narino', text: 'No es mi comodidad lo que me preocupa. Es tu vida.' },
      { speaker: 'narino_sp', text: 'Mi vida es exactamente lo que estoy poniendo al servicio de esta idea. Que así sea.' },
    ],
    choiceQuestion: '¿Cuántas copias imprimes?',
    choiceContext: 'Cada copia adicional es más impacto... y más riesgo de ser descubierto.',
    choices: [
      {
        id: 'nar_c1a', text: 'Imprimes 100 ejemplares — máximo impacto',
        hint: 'Fidelidad +20, riesgo máximo',
        fidelity: 20, suspicion: 20,
        setFlag: 'imprimió_cien',
        reaction: 'Cien hojas. La imprenta trabaja toda la noche. Con cada palancazo siento que imprimo la historia. También siento que imprimo mi condena. Las dos cosas son verdad.',
        next: 'narino_a1_03',
      },
      {
        id: 'nar_c1b', text: 'Imprimes 20 ejemplares — suficiente para los círculos intelectuales',
        hint: 'Fidelidad +10, riesgo moderado',
        fidelity: 10, suspicion: 8,
        setFlag: 'imprimió_veinte',
        reaction: 'Veinte copias. Suficientes para que las ideas circulen, pocas para que sea fácil rastrearlas hasta esta imprenta. Un compromiso calculado.',
        next: 'narino_a1_03',
      },
      {
        id: 'nar_c1c', text: 'Imprimes solo 5 — para los hombres más confiables',
        hint: 'Fidelidad -5, seguro pero limitado',
        fidelity: -5,
        reaction: 'Cinco copias. Las suficientes para mantener la conciencia tranquila sin arriesgar demasiado. O eso me digo. La cobardía siempre encuentra una justificación razonable.',
        next: 'narino_a1_03',
      },
    ],
  },

  narino_a1_03: {
    id: 'narino_a1_03',
    lines: [
      { speaker: 'narrador', text: 'Las hojas están impresas. Ahora hay que distribuirlas. Cada entrega es una decisión irreversible.', bgImg: 'images/bg_imprenta_salon.svg', char: 'images/narino_imprenta.svg' },
      { speaker: 'amigo_narino', text: 'Tengo miedo, Antonio. El Virrey tiene informantes en todas partes.' },
      { speaker: 'narino_sp', text: 'Entonces seamos más rápidos que sus informantes. ¿Conoces al abogado Camacho?' },
      { speaker: 'amigo_narino', text: 'De confianza. Pero hay otros que no lo son tanto.' },
      { speaker: 'narino_sp', text: 'Las ideas no solo llegan a los que son de confianza. Las ideas llegan a quien las necesita.' },
    ],
    next: 'narino_mg_imprenta',
  },

  narino_mg_imprenta: {
    id: 'narino_mg_imprenta',
    lines: [
      { speaker: 'narrador', text: 'La imprenta vuelve a funcionar. Esta vez hay que componer los tipos correctamente — el orden de los artículos importa. Los soldados se acercan.', bgImg: 'images/bg_imprenta_salon.svg', char: 'images/narino_imprenta.svg' },
      { speaker: 'narino_sp', text: 'Rápido. Los derechos en orden. Si me detienen con el texto equivocado, no sirve de nada.' },
    ],
    minigame: {
      id: 'la_imprenta',
      title: '📜 La Imprenta Clandestina',
      instructions: 'Ordena los cinco derechos del hombre antes de que lleguen los soldados. Toca dos cartas para intercambiarlas.',
      onSuccess: { next: 'narino_a2_01', fidelity: 20, setFlag: 'imprimió_perfecto' },
      onFail:    { next: 'narino_a2_01', fidelity: -5 },
    },
  },

  narino_a2_01: {
    id: 'narino_a2_01',
    lines: [
      { speaker: 'narrador', text: 'Las copias circulan. Bogotá susurra. En las tertulias, en las sacristías, en los cuarteles patriotas, los artículos se leen en voz baja.', bg: 'mercado', bgImg: 'images/bg_socorro.svg', char: 'images/narino_leyendo.svg' },
      { speaker: 'narrador', text: 'Pero alguien habló. Un criado, un vecino envidioso, un "amigo" asustado. El Virrey Ezpeleta tiene el nombre de Nariño.' },
      { speaker: 'fiscal_narino', text: 'Antonio Nariño, queda detenido por orden del Virrey. Acusado de sedición y distribución de material subversivo.' },
      { speaker: 'narino_sp', text: 'Señor fiscal, ¿cuál es exactamente el crimen? ¿Traducir un texto filosófico francés?' },
      { speaker: 'fiscal_narino', text: 'El crimen es traición a la Corona, señor Nariño. Esto le costará todo lo que tiene.' },
      { speaker: 'narino_sp', text: 'Entonces era todo lo que podía dar.' },
    ],
    next: 'narino_a2_02',
  },

  narino_a2_02: {
    id: 'narino_a2_02',
    lines: [
      { speaker: 'narrador', text: 'El juicio es una farsa y también un escenario. Nariño lo convierte en tribuna.', bg: 'tribunal', bgImg: 'images/bg_tribunal.svg', char: 'images/narino_leyendo.svg' },
      { speaker: 'fiscal_narino', text: 'El acusado ha distribuido textos que incitan a la rebelión contra la Corona. Solicitamos la pena máxima: diez años de presidio en África.' },
      { speaker: 'narino_sp', text: 'Señor fiscal, ¿afirma que traducir del francés es traición? Entonces el Virrey debería arrestar también a los jesuitas, que llevan dos siglos traduciendo textos en latín.' },
      { speaker: 'narrador', text: 'Risas en la sala. El fiscal enrojece. El Virrey, sentado al fondo, no ríe.' },
    ],
    choiceQuestion: '¿Cuál es tu estrategia en el juicio?',
    choiceContext: 'El veredicto está predeterminado. Pero lo que dices aquí puede resonar por siglos.',
    choices: [
      {
        id: 'nar_c2a', text: 'Defensa filosófica total — conviertes el juicio en lección de derechos',
        hint: 'Fidelidad +20, legado histórico máximo',
        fidelity: 20,
        setFlag: 'defensa_brillante',
        reaction: 'Hablo durante cuatro horas. Sobre Locke, sobre Rousseau, sobre el derecho natural que antecede a cualquier rey. El público en la sala no entiende todo, pero siente que algo enorme está ocurriendo. El fiscal pide receso tres veces.',
        next: 'narino_a3_escape',
      },
      {
        id: 'nar_c2b', text: 'Negocias en privado — reducción de condena a cambio de silencio',
        hint: 'Fidelidad -10, sobrevivir es prioritario',
        fidelity: -10,
        setFlag: 'negoció_condena',
        reaction: 'Tres años en lugar de diez. Sin derecho a publicar. Sin actividad política. Mi abogado lo llama victoria. Yo lo llamo la primera derrota.',
        next: 'narino_a3_escape',
      },
      {
        id: 'nar_c2c', text: 'Te declaras culpable — pero exiges que lean los artículos en voz alta como prueba',
        hint: 'Fidelidad +15, golpe maestro',
        fidelity: 15,
        setFlag: 'golpe_maestro',
        reaction: '"Me declaro culpable de haber traducido estos artículos. Para el expediente, solicito que el señor secretario los lea íntegramente en voz alta." El fiscal no puede negarse. Los Derechos del Hombre suenan por primera vez en una corte colonial neogranadina.',
        next: 'narino_a3_escape',
      },
    ],
  },

  narino_a3_escape: {
    id: 'narino_a3_escape',
    lines: [
      { speaker: 'narrador', text: 'La condena: diez años en África. Confiscación de bienes. Su familia, en la ruina.', bg: 'celda', bgImg: 'images/bg_celda_oscura.svg', char: 'images/narino_leyendo.svg' },
      { speaker: 'narrador', text: 'El barco zarpa desde Cádiz, España. Nariño, encadenado, mira el Atlántico. Y decide que ese océano no será su tumba.' },
      { speaker: 'narino_sp', text: 'Si llego a África, muero lentamente. Si escapo en Europa, quizás puedo seguir siendo útil.' },
      { speaker: 'narrador', text: 'Una noche, en el puerto de Cádiz, aprovecha un descuido. El guardia duerme. La cadena tiene una aldaba floja.' },
    ],
    choiceQuestion: '¿Intentas escapar?',
    choiceContext: 'Si te atrapan, la condena se duplica. Si lo logras, eres un fugitivo en suelo extranjero.',
    choices: [
      {
        id: 'nar_c3a', text: 'Escapas esa noche — la libertad no se pide, se toma',
        hint: 'Fidelidad +15, el escape legendario',
        fidelity: 15, setFlag: 'escapó_cadiz',
        reaction: 'La aldaba cede. El guardia no despierta. Camino hacia las sombras de Cádiz con lo que llevo puesto y una idea clara: volver a América y terminar lo que empecé.',
        next: 'narino_a4_final',
      },
      {
        id: 'nar_c3b', text: 'Aceptas la condena — desde prisión también se pueden sembrar ideas',
        hint: 'Fidelidad +5, el martirio construye',
        fidelity: 5, setFlag: 'aceptó_prisión',
        reaction: 'Las ideas que sembré no necesitan que yo esté libre para crecer. Escribo cartas que salen con visitantes. Cada página mía que circula vale más que mi libertad física.',
        next: 'narino_a4_final',
      },
    ],
  },

  narino_a4_final: {
    id: 'narino_a4_final',
    lines: [
      { speaker: 'narrador', text: 'Años después. Las ideas que Nariño imprimió en ese sótano en 1794 circulan por toda América. Sus palabras están en bocas que nunca lo conocieron.' },
      { speaker: 'narino_sp', text: 'No fui yo quien cambió las cosas. Fueron las palabras. Yo solo les di una forma que pudieran viajar.' },
      { speaker: 'pensar', text: 'El hombre que imprimió los Derechos del Hombre pasó más años en prisión que en libertad. Tal vez así son los precursores: pagan por adelantado lo que otros disfrutarán.' },
    ],
    next: (s) => {
      if (s.flags.has('imprimió_cien') && s.flags.has('defensa_brillante') && s.fidelity >= 70) return 'narino_ending_revolucion';
      if (s.flags.has('escapó_cadiz') && s.fidelity >= 55) return 'narino_ending_canon';
      if (s.flags.has('aceptó_prisión')) return 'narino_ending_martir';
      if (s.flags.has('negoció_condena')) return 'narino_ending_silencio';
      return 'narino_ending_canon';
    },
  },

  narino_ending_canon: {
    id: 'narino_ending_canon',
    ending: {
      type: '📜 FINAL HISTÓRICO',
      title: 'El Precursor',
      body: 'Antonio Nariño fue condenado, encarcelado, escapó, regresó, fue encarcelado de nuevo. Pero las ideas que imprimió en 1794 nunca murieron. Vivió para ver la independencia, fue presidente del Congreso de Cúcuta en 1821. Sus Derechos del Hombre sembraron la semilla que otros cosecharon.',
      quote: '"Las armas os dieron la independencia, las leyes os darán la libertad." — Santander, inspirado en Nariño',
    },
  },
  narino_ending_revolucion: {
    id: 'narino_ending_revolucion',
    ending: {
      type: '🔥 FINAL ÉPICO',
      title: 'La Revolución de las Ideas',
      body: 'Cien copias. Un juicio que fue tribuna. Un escape legendario. La historia de Nariño se convirtió en leyenda viva antes de que terminara su propia vida. Sus ideas llegaron a todos los rincones del Virreinato. El Imperio español podía encarcelar a un hombre. No podía encarcelar una idea ya impresa.',
      quote: '"Los hombres nacen y permanecen libres e iguales en derechos." — Declaración de los Derechos del Hombre, 1789',
    },
  },
  narino_ending_martir: {
    id: 'narino_ending_martir',
    ending: {
      type: '⛓ FINAL DEL MÁRTIR',
      title: 'El Precio de las Ideas',
      body: 'Nariño eligió la prisión sobre la huida. Pasó más de una década en cárceles de España y América. Pero su martirio fue su mayor sermón: un hombre dispuesto a sufrir por una idea le da a esa idea un valor que ningún texto impreso puede igualar.',
      quote: '"Lo que no mata a las ideas, las fortalece." — adaptado de Nietzsche',
    },
  },
  narino_ending_silencio: {
    id: 'narino_ending_silencio',
    ending: {
      type: '🤐 FINAL DEL SILENCIO',
      title: 'La Prudencia',
      body: 'Negociar fue sobrevivir. Nariño vivió, pero el silencio impuesto tuvo un costo. Las ideas que no se dicen en voz alta se dicen en susurros, y los susurros tardan más en cambiar el mundo. La libertad llegó igualmente, pero sin su voz.',
      quote: '"El que calla, otorga." — proverbio',
    },
  },
  narino_ending_exilio: {
    id: 'narino_ending_exilio',
    ending: {
      type: '🌊 FINAL DEL EXILIO',
      title: 'La Semilla en el Viento',
      body: 'Desde el exilio europeo, Nariño escribió, publicó, conspiró. Sus textos llegaban a América de contrabando. Un hombre que no puede volver a casa puede convertir el mundo entero en su tribuna. La independencia llegó. Él la vio desde lejos.',
      quote: '"El destierro es la prueba de que las ideas asustan más que los ejércitos." — Nariño, desde el exilio',
    },
  },

/* ══════════════════════════════════════════════════════════════
   MANUELA BELTRÁN — La Chispa — 1781
   "¡Viva el rey y muera el mal gobierno!"
══════════════════════════════════════════════════════════════ */

  beltran_intro: {
    id: 'beltran_intro',
    actIntro: {
      number: 'Capítulo I',
      title: 'La Chispa del Socorro',
      historical: 'El Socorro, 16 de marzo de 1781. La Corona española anuncia nuevos impuestos: la armada de barlovento, el papel sellado, el aguardiente gravado. En el mercado de El Socorro, Manuela Beltrán hace algo que nadie esperaba: arranca el edicto real de la pared. Todo lo que viene después comenzó con ese gesto.',
    },
    lines: [],
    next: 'beltran_a1_01',
  },

  beltran_a1_01: {
    id: 'beltran_a1_01',
    lines: [
      { speaker: 'narrador', text: 'El Socorro, Santander. Mercado del 16 de marzo de 1781. El olor a panela y tabaco en el aire frío de la mañana. La plaza llena de campesinos, artesanos, vendedoras de chicha.', bg: 'mercado', bgImg: 'images/bg_socorro.svg', char: 'images/beltran_desafiante.svg' },
      { speaker: 'narrador', text: 'Soy Manuela Beltrán. Vendedora, mujer del pueblo, vecina de El Socorro. No soy nadie importante. Que conste.' },
      { speaker: 'comunero_sp', text: '¡Manuela, viene el alcalde! Trae soldados. Dice que van a poner un edicto.' },
      { speaker: 'beltran_sp', text: 'Otro impuesto, seguro. ¿Cuánto más pueden sacarnos? Ya no tenemos nada.' },
      { speaker: 'corregidor_sp', text: '¡Atención, pueblo del Socorro! Por orden de Su Majestad el Rey Carlos III, se anuncia la nueva contribución a la armada de barlovento. Todo comercio pagará el dos por ciento adicional sobre sus ganancias.' },
      { speaker: 'pensar', text: 'El dos por ciento. Sobre ganancias que ya casi no existen. Miro las caras a mi alrededor. Nadie dice nada. Nadie protesta. Están acostumbrados a callar.' },
    ],
    next: 'beltran_a1_02',
  },

  beltran_a1_02: {
    id: 'beltran_a1_02',
    lines: [
      { speaker: 'narrador', text: 'El alcalde clava el edicto en la pared del cabildo con dos golpes de martillo. El papel queda colgado como una sentencia.' },
      { speaker: 'comunero_sp', text: 'Manuela... no te metas. Tienen soldados.' },
      { speaker: 'beltran_sp', text: '¿Y nosotros qué tenemos? ¿Silencio? ¿Eso es todo lo que tenemos?' },
      { speaker: 'corregidor_sp', text: 'El edicto es ley. Quien lo ignore será arrestado.' },
      { speaker: 'pensar', text: 'El papel está ahí. A tres pasos. No pesa nada. Un papel no puede pesar más que el hambre de un pueblo entero.' },
    ],
    choiceQuestion: '¿Qué haces?',
    choiceContext: 'El alcalde acaba de clavar el edicto. Hay soldados, pero también hay cincuenta vecinos mirando.',
    choices: [
      {
        id: 'bel_c1a', text: '¡Arrancas el edicto de la pared frente a todos!',
        hint: 'Fidelidad +25 — el gesto histórico',
        fidelity: 25, suspicion: 30,
        setFlag: 'arrancó_edicto',
        reaction: 'Me acerco. El papel está caliente de sol. Lo agarro con las dos manos y jalo. Se rompe con un sonido seco que silencia toda la plaza. El alcalde abre la boca pero no sale nada. Cincuenta pares de ojos me miran. Y entonces alguien grita: "¡Viva el rey y muera el mal gobierno!"',
        next: 'beltran_mg_convoca',
      },
      {
        id: 'bel_c1b', text: 'Gritas en voz alta contra el impuesto sin tocar el edicto',
        hint: 'Fidelidad +10, protestar sin acción directa',
        fidelity: 10, suspicion: 10,
        reaction: '"¡Este impuesto es una injusticia! ¡No tenemos con qué pagar!" La plaza murmura. El alcalde me señala con el dedo. Pero el edicto sigue en la pared, y mientras esté ahí, todo sigue igual.',
        next: 'beltran_mg_convoca',
      },
      {
        id: 'bel_c1c', text: 'Propones reunir a los vecinos en secreto esa noche',
        hint: 'Fidelidad +5, organización cuidadosa',
        fidelity: 5,
        setFlag: 'organización_secreta',
        reaction: 'No es el momento para un gesto individual. Esta noche, en casa de don Berbeo, hablaremos. Hay que pensar antes de actuar. Aunque algo en mí grita que ya llevamos demasiado tiempo pensando.',
        next: 'beltran_mg_convoca',
      },
    ],
  },

  beltran_mg_convoca: {
    id: 'beltran_mg_convoca',
    lines: [
      { speaker: 'narrador', text: 'El mercado hierve. La gente mira, espera. Este es el momento: o el fuego se apaga solo, o alguien lo alimenta.', bgImg: 'images/bg_socorro.svg', char: 'images/beltran_desafiante.svg' },
      { speaker: 'beltran_sp', text: '¡Vecinos! ¿Van a callar mientras nos roban lo poco que tenemos? ¡Háblales, convéncelos! ¡El pueblo unido no se rinde!' },
      { speaker: 'comunero_sp', text: 'Tienes razón, Manuela. Pero necesitamos que todos estén con nosotros.' },
    ],
    minigame: {
      id: 'convoca_al_pueblo',
      title: '🔥 Convoca al Pueblo',
      instructions: 'Toca a los vecinos para convencerlos. Cada convencido influye en los que están cerca. ¡Necesitas 16 de 20 antes de que lleguen más soldados!',
      onSuccess: { next: 'beltran_a2_marcha', fidelity: 20, setFlag: 'pueblo_unido' },
      onFail:    { next: 'beltran_a2_marcha', fidelity: -5 },
    },
  },

  beltran_a2_marcha: {
    id: 'beltran_a2_marcha',
    actIntro: {
      number: 'Capítulo II',
      title: 'Los Veinte Mil',
      historical: 'La chispa se convirtió en incendio. En semanas, más de 20.000 comuneros marcharon desde El Socorro hacia Bogotá. Era la mayor movilización popular en la historia de la colonia. Nadie en la ciudad había visto algo así.',
    },
    lines: [
      { speaker: 'narrador', text: 'Tres semanas después. Los caminos del Socorro llenan de gente. Campesinos con machetes, artesanos con herramientas, mujeres con piedras. Veinte mil almas marchando.', bg: 'exterior', bgImg: 'images/bg_llanos.svg', char: 'images/beltran_marchando.svg' },
      { speaker: 'galan_sp', text: 'Manuela. Lo que hiciste en el mercado encendió todo esto. ¿Lo sabes?' },
      { speaker: 'beltran_sp', text: 'No fui yo. Fue el hambre. Yo solo le di voz.' },
      { speaker: 'galan_sp', text: 'El hambre tiene voz cuando alguien se atreve a gritar primero. Esta gente no estaría aquí si no fuera por ti.' },
      { speaker: 'pensar', text: 'Veinte mil personas. El número me asusta más que los soldados del alcalde. ¿Qué hacemos con veinte mil personas? ¿Adónde van veinte mil personas?' },
    ],
    note: { id: 'comuneros_1781', title: 'Nota: La Revolución de los Comuneros' },
    next: 'beltran_a2_02',
  },

  beltran_a2_02: {
    id: 'beltran_a2_02',
    lines: [
      { speaker: 'narrador', text: 'El ejército comunero avanza. Derrota a los realistas en Puente Real. El arzobispo, aterrorizado, propone negociar.' },
      { speaker: 'galan_sp', text: 'El Virrey quiere negociar en Zipaquirá. Sus representantes nos ofrecen ceder en los impuestos si paramos la marcha.' },
      { speaker: 'beltran_sp', text: '¿Confías en ellos, Galán?' },
      { speaker: 'galan_sp', text: 'No. Pero los caudillos mayores —Berbeo, Monsalve— quieren firmar. Tienen tierras que perder.' },
      { speaker: 'beltran_sp', text: 'Nosotros no tenemos tierras. Nosotros no tenemos nada que perder.' },
      { speaker: 'galan_sp', text: 'Exacto. Por eso ellos negocian y nosotros marchamos.' },
    ],
    choiceQuestion: '¿Qué posición tomas en Zipaquirá?',
    choiceContext: 'Los caudillos van a firmar. Galán quiere continuar. Tú tienes influencia sobre el pueblo llano.',
    choices: [
      {
        id: 'bel_c2a', text: 'Apoyas a Galán — el pueblo no debe firmar nada hasta que haya garantías reales',
        hint: 'Fidelidad +20, consecuente con el inicio',
        fidelity: 20,
        setFlag: 'apoyó_galán',
        reaction: 'Me pongo junto a Galán frente a la muchedumbre. "¡Las capitulaciones son una trampa! ¡No firmamos mientras no bajen los impuestos de verdad!" La mitad de la gente me escucha. La otra mitad sigue a Berbeo hacia las mesas de negociación.',
        next: 'beltran_a3_final',
      },
      {
        id: 'bel_c2b', text: 'Aceptas las capitulaciones — algo es mejor que nada',
        hint: 'Fidelidad -15, la traición histórica',
        fidelity: -15,
        setFlag: 'aceptó_capitulaciones',
        reaction: 'Firman. Los caudillos firman. Yo no firmo, pero tampoco me opongo. El silencio también es una firma. Cuando regresamos a El Socorro, los impuestos vuelven en dos meses. Y la Corona ya tiene la lista de todos los líderes.',
        next: 'beltran_a3_final',
      },
      {
        id: 'bel_c2c', text: 'Propones negociar pero sin disolver el ejército — presión permanente',
        hint: 'Fidelidad +10, táctica equilibrada',
        fidelity: 10,
        setFlag: 'negoció_con_fuerza',
        reaction: '"Hablamos, pero los veinte mil se quedan donde están hasta que la tinta esté seca y los hechos sean reales." Los negociadores se incomodan. Eso es exactamente lo que quiero.',
        next: 'beltran_a3_final',
      },
    ],
  },

  beltran_a3_final: {
    id: 'beltran_a3_final',
    lines: [
      { speaker: 'narrador', text: 'Las capitulaciones se firman. La Corona promete bajar impuestos. La gente regresa a sus casas.', bg: 'celda', bgImg: 'images/bg_celda_oscura.svg', char: 'images/beltran_desafiante.svg' },
      { speaker: 'narrador', text: 'Dos meses después, el Virrey declara las capitulaciones nulas. "Firmadas bajo coacción." Los impuestos vuelven. Los líderes son arrestados.' },
      { speaker: 'galan_sp', text: 'Manuela... me atraparon. Me van a matar.' },
      { speaker: 'beltran_sp', text: 'Galán. Lo siento. Debimos haber seguido marchando.' },
      { speaker: 'galan_sp', text: 'No. Lo que tú hiciste en el mercado fue real. Nadie puede deshacer ese momento. Ni ellos.' },
      { speaker: 'pensar', text: 'Galán fue descuartizado en la Plaza Mayor de Bogotá. Sus cuartos enviados a cuatro provincias como advertencia. Y sin embargo, cuarenta años después, la independencia llegó. Él no la vio. Yo apenas la vi. Pero alguien la vivió.' },
    ],
    note: { id: 'galan_comunero', title: 'Nota: José Antonio Galán' },
    next: (s) => {
      if (s.flags.has('arrancó_edicto') && s.flags.has('pueblo_unido') && s.flags.has('apoyó_galán')) return 'beltran_ending_llama';
      if (s.flags.has('arrancó_edicto') && s.fidelity >= 60) return 'beltran_ending_canon';
      if (s.flags.has('aceptó_capitulaciones')) return 'beltran_ending_traicion';
      if (s.flags.has('organización_secreta')) return 'beltran_ending_prudencia';
      return 'beltran_ending_canon';
    },
  },

  beltran_ending_canon: {
    id: 'beltran_ending_canon',
    ending: {
      type: '🔥 FINAL HISTÓRICO',
      title: 'La Chispa',
      body: 'Manuela Beltrán arrancó un papel de una pared y encendió la primera gran rebelión de la América colonial. Veinte mil personas marcharon. La rebelión fue traicionada en las capitulaciones, pero la semilla quedó sembrada. Cuarenta años después, Colombia fue libre. La chispa de El Socorro viajó décadas hasta convertirse en llama.',
      quote: '"¡Viva el rey y muera el mal gobierno!" — Manuela Beltrán, 16 de marzo de 1781',
    },
  },
  beltran_ending_llama: {
    id: 'beltran_ending_llama',
    ending: {
      type: '⚡ FINAL ÉPICO',
      title: 'El Fuego Incontenible',
      body: 'El gesto de Manuela fue seguido por veinte mil, luego rechazado por los caudillos, pero el fuego ya no se podía apagar. Galán murió. Ella sobrevivió. Y en cada pueblo donde había llegado la noticia de lo que pasó en El Socorro, una rabia nueva había nacido. Ese fuego tardó cuarenta años en consumir el Imperio.',
      quote: '"No basta arrancar el papel. Hay que cambiar lo que el papel decía." — Manuela Beltrán',
    },
  },
  beltran_ending_traicion: {
    id: 'beltran_ending_traicion',
    ending: {
      type: '😔 FINAL AMARGO',
      title: 'Las Capitulaciones',
      body: 'La firma de Zipaquirá fue una traición anunciada. Los que tenían tierras negociaron. Los que no tenían nada siguieron sin tener nada. Galán fue ejecutado. Los impuestos volvieron. Pero incluso esta derrota fue una lección que la siguiente generación de patriotas aprendió bien.',
      quote: '"Los que firman la paz cuando el enemigo sigue armado, firman su propia rendición." — proverbio comunero',
    },
  },
  beltran_ending_prudencia: {
    id: 'beltran_ending_prudencia',
    ending: {
      type: '🕊 FINAL CAUTELOSO',
      title: 'La Organización',
      body: 'Optar por la organización secreta antes que el gesto público salvó muchas vidas. La red comunera creció silenciosa durante años. Cuando finalmente actuó, lo hizo con más coordinación. Pero la historia recuerda el gesto espontáneo, no la reunión planeada. Algunos fuegos necesitan encenderse solos.',
      quote: '"El coraje sin organización es heroísmo. La organización sin coraje es burocracia." — anónimo',
    },
  },
  beltran_ending_negociacion: {
    id: 'beltran_ending_negociacion',
    ending: {
      type: '🤝 FINAL DIPLOMÁTICO',
      title: 'La Presión Permanente',
      body: 'Negociar sin disolver el ejército fue una táctica inteligente. Los realistas cedieron más de lo esperado bajo presión. No fue la victoria total, pero tampoco fue la derrota de Zipaquirá. A veces la revolución avanza paso a paso, impuesto por impuesto.',
      quote: '"La política es el arte de lo posible." — Bismarck',
    },
  },

/* ══════════════════════════════════════════════════════════════
   FRANCISCO DE PAULA SANTANDER — El Hombre de las Leyes — 1821
   "Las armas os dieron la independencia,
    las leyes os darán la libertad."
══════════════════════════════════════════════════════════════ */

  santander_intro: {
    id: 'santander_intro',
    actIntro: {
      number: 'Capítulo I',
      title: 'El Hombre de las Leyes',
      historical: 'Bogotá, 1821. La Gran Colombia es libre, pero ¿qué significa la libertad sin ley? Francisco de Paula Santander, vicepresidente, cree que la revolución no termina en la batalla sino en la constitución. Bolívar cree lo contrario. Esta diferencia definirá la historia de Colombia.',
    },
    lines: [],
    next: 'santander_a1_01',
  },

  santander_a1_01: {
    id: 'santander_a1_01',
    lines: [
      { speaker: 'narrador', text: 'Bogotá, agosto de 1821. El Palacio de San Carlos. Por primera vez en doscientos años, un americano gobierna este ciudad. Ese americano soy yo.', bg: 'tribunal', bgImg: 'images/bg_congreso.svg', char: 'images/santander_estadista.svg' },
      { speaker: 'narrador', text: 'Soy el General Francisco de Paula Santander, vicepresidente de la Gran Colombia. Bolívar hace la guerra en el sur. Yo hago algo más difícil: hago un país.' },
      { speaker: 'santander_sp', text: 'Secretario Restrepo, ¿cuántos niños asisten a escuelas en Nueva Granada?' },
      { speaker: 'restrepo', text: 'Menos de tres mil, General. Y la mitad son de familias adineradas.' },
      { speaker: 'santander_sp', text: 'Para el año que viene quiero diez mil. Sin educación no hay república. Sin república no hay nada por lo que valiera la pena pelear.' },
      { speaker: 'pensar', text: 'Bolívar me escribe desde Lima con órdenes militares. Yo le respondo con decretos de educación. Creo que los dos tenemos razón sobre cosas distintas.' },
    ],
    note: { id: 'santander_estadista', title: 'Nota: Santander y la República' },
    next: 'santander_a1_02',
  },

  santander_a1_02: {
    id: 'santander_a1_02',
    lines: [
      { speaker: 'narrador', text: 'El reto de gobernar: los realistas vencidos no han desaparecido. Viven en Bogotá, tienen propiedades, tienen conexiones.' },
      { speaker: 'congresista', text: 'General Santander, el sector comercial pide que se respeten las propiedades de los españoles que se queden. Temen represalias.' },
      { speaker: 'santander_sp', text: 'La Constitución de Cúcuta garantiza derechos a todos los ciudadanos, incluidos los españoles que juren lealtad a la República.' },
      { speaker: 'congresista', text: 'Hay quienes piden confiscar sus bienes. Dicen que financiaron la guerra contra nosotros.' },
      { speaker: 'santander_sp', text: 'La ley es la ley para todos o no es ley para nadie. ¿Ganamos la independencia para ser otra tiranía o para ser un Estado de derecho?' },
    ],
    choiceQuestion: '¿Cómo tratas a los españoles leales que permanecen en Colombia?',
    choiceContext: 'Muchos financiaron la guerra realista. Pero la constitución los protege si juran lealtad.',
    choices: [
      {
        id: 'san_c1a', text: 'Aplicas la constitución estrictamente — igualdad ante la ley',
        hint: 'Fidelidad +20, el camino legal',
        fidelity: 20, setFlag: 'ley_para_todos',
        reaction: '"Confiscar bienes sin juicio previo es exactamente lo que hacía el régimen que derrocamos." Mi decreto protege a los españoles que juren lealtad. Algunos me llaman blando. Yo me llamo consecuente.',
        next: 'santander_a1_03',
      },
      {
        id: 'san_c1b', text: 'Permites confiscaciones selectivas — los más implicados pierden sus bienes',
        hint: 'Fidelidad +5, pragmatismo político',
        fidelity: 5, suspicion: 10,
        reaction: 'Un tribunal especial decide caso por caso. Lento, imperfecto, pero más justo que una confiscación masiva. Los más ricos del bando realista pierden algo. Los que solo obedecían órdenes, nada.',
        next: 'santander_a1_03',
      },
      {
        id: 'san_c1c', text: 'Cedes a la presión popular — confiscación general',
        hint: 'Fidelidad -20, el precedente peligroso',
        fidelity: -20, setFlag: 'confiscó_bienes',
        reaction: 'El decreto sale. La gente aplaude. Los bienes se redistribuyen. Y dos meses después, llega un decreto de Bolívar criticando mi "política de venganza". Tiene razón y me molesta que la tenga.',
        next: 'santander_a1_03',
      },
    ],
  },

  santander_a1_03: {
    id: 'santander_a1_03',
    lines: [
      { speaker: 'narrador', text: 'Carta de Bolívar desde Lima. La letra urgente, la tinta manchada — dicta mientras su ejército descansa.', bgImg: 'images/bg_congreso.svg', char: 'images/santander_estadista.svg' },
      { speaker: 'bolivar_sp', text: '"Santander, necesito tres mil soldados más. Perú necesita ser liberado. Sin soldados, todo lo ganado en Boyacá sirve de nada. Recluta. —Bolívar."' },
      { speaker: 'santander_sp', text: 'Tres mil hombres. Con qué dinero los equipamos, con qué alimento los mandamos, con qué ley los reclutamos si el congreso no aprueba la leva.' },
      { speaker: 'restrepo', text: 'El congreso tardará meses en debatirlo, General. El General Bolívar los necesita en semanas.' },
      { speaker: 'santander_sp', text: 'El congreso existe exactamente para estos momentos. Si lo saltamos cuando es inconveniente, ¿para qué lo creamos?' },
    ],
    choiceQuestion: '¿Cómo respondes a Bolívar?',
    choiceContext: 'Bolívar necesita tropas urgente. El congreso tiene autoridad legal pero es lento.',
    choices: [
      {
        id: 'san_c2a', text: 'Convocas sesión urgente del congreso — la ley primero',
        hint: 'Fidelidad +20, principios sobre conveniencia',
        fidelity: 20, setFlag: 'respetó_congreso',
        reaction: 'Sesión urgente a las cinco de la mañana. El debate dura doce horas. Aprueba la leva con condiciones. Lento, sí. Pero cuando los soldados partan, parten con la autoridad de la ley, no de un decreto unilateral.',
        next: 'santander_a2_01',
      },
      {
        id: 'san_c2b', text: 'Decretas la leva por emergencia nacional — luego pides ratificación',
        hint: 'Fidelidad +5, pragmatismo',
        fidelity: 5, setFlag: 'decreto_emergencia',
        reaction: 'El decreto sale primero, el debate después. Los soldados marchan en diez días. El congreso ratifica a regañadientes. Bolívar me escribe: "Gracias." Esa palabra de Bolívar pesa más de lo que debería.',
        next: 'santander_a2_01',
      },
      {
        id: 'san_c2c', text: 'Rechazas enviar más tropas — Colombia también necesita soldados',
        hint: 'Fidelidad +10, defender lo propio',
        fidelity: 10, setFlag: 'rechazó_tropas',
        reaction: '"Colombia necesita sus soldados para consolidar lo que ganamos, no para guerras en otros países." Bolívar no me escribe por un mes. Cuando lo hace, el tono ha cambiado.',
        next: 'santander_a2_01',
      },
    ],
  },

  santander_a2_01: {
    id: 'santander_a2_01',
    actIntro: {
      number: 'Capítulo II',
      title: 'La República o la Espada',
      historical: '1826. Bolívar regresa victorioso del Perú. Pero regresa con ideas distintas: cree que América Latina necesita un gobierno fuerte, quizás un presidente vitalicio. Santander cree en la constitución. El choque es inevitable.',
    },
    lines: [
      { speaker: 'narrador', text: 'Bogotá, 1826. Bolívar regresa. Las calles celebran. Yo celebro también — pero con una pregunta que no me abandona.', bgImg: 'images/bg_congreso.svg', char: 'images/santander_estadista.svg' },
      { speaker: 'bolivar_sp', text: 'Santander. Colombia necesita un gobierno más fuerte. Las constituciones liberales son buenas para pueblos con educación, con tradición. Nosotros somos pueblos nuevos.' },
      { speaker: 'santander_sp', text: 'La constitución es exactamente el instrumento para educar al pueblo en la ley, General. Si la saltamos, nunca aprenderán a respetarla.' },
      { speaker: 'bolivar_sp', text: 'Mientras el pueblo aprende, los caudillos se fragmentan y Venezuela se separa. ¿Qué vale más, la forma o la unión?' },
      { speaker: 'santander_sp', text: 'Si la forma no importa, entonces ¿qué nos diferencia del rey que derrocamos?' },
      { speaker: 'pensar', text: 'Nos miramos como dos hombres que pelearon juntos la misma guerra y llegaron a conclusiones completamente distintas sobre por qué la pelearon.' },
    ],
    note: { id: 'tension_bolivar_santander', title: 'Nota: Bolívar vs Santander' },
    next: 'santander_a2_02',
  },

  santander_a2_02: {
    id: 'santander_a2_02',
    lines: [
      { speaker: 'narrador', text: '1828. Bolívar asume poderes dictatoriales. El congreso, suspendido. La constitución, ignorada. Muchos aplauden. Yo no.' },
      { speaker: 'bolivar_sp', text: 'Santander, necesito que apoyes públicamente el decreto orgánico. Tu voz tiene peso en el congreso.' },
      { speaker: 'santander_sp', text: 'No puedo apoyar lo que considero inconstitucional, General. No puedo.' },
      { speaker: 'bolivar_sp', text: 'Entonces eres parte del problema. Los que se oponen a la unidad en este momento le dan armas a los separatistas.' },
      { speaker: 'santander_sp', text: 'Los que suspenden constituciones para "salvar la unidad" le dan armas a los tiranos futuros. Y yo no puedo saber que ese tirano futuro no será usted mismo.' },
      { speaker: 'narrador', text: 'El silencio que sigue a esas palabras es el más largo que he vivido.' },
    ],
    choiceQuestion: '¿Cuál es tu posición final frente a Bolívar?',
    choiceContext: 'Esta decisión definirá tu legado y posiblemente tu vida.',
    choices: [
      {
        id: 'san_c3a', text: 'Mantienes tu oposición pública — la constitución sobre todo',
        hint: 'Fidelidad +25, el legado histórico',
        fidelity: 25, setFlag: 'defendió_constitución',
        reaction: 'Escribo y publico un manifiesto. "La ley por encima de las personas. La constitución por encima de los caudillos. Si me exilian por esto, al menos iré con la conciencia clara." Me exilian. Con la conciencia clara.',
        next: 'santander_a3_final',
      },
      {
        id: 'san_c3b', text: 'Callas públicamente pero saboteas el decreto en los detalles',
        hint: 'Fidelidad +5, resistencia discreta',
        fidelity: 5, setFlag: 'resistencia_silenciosa',
        reaction: 'No digo nada en público. Pero cada decreto que implemento lo hago con tantos requisitos legales que resulta casi inoperable. La burocracia como arma. No es heroico. Pero funciona.',
        next: 'santander_a3_final',
      },
      {
        id: 'san_c3c', text: 'Apoyas a Bolívar — el país necesita estabilidad ahora',
        hint: 'Fidelidad -25, la rendición',
        fidelity: -25, setFlag: 'apoyó_dictadura',
        reaction: 'Firmo el apoyo. Bolívar me da las gracias. El congreso me mira con decepción. Me miro en el espejo esa noche y me pregunto cuándo exactamente dejé de ser el hombre que creí ser.',
        next: 'santander_a3_final',
      },
    ],
  },

  santander_a3_final: {
    id: 'santander_a3_final',
    lines: [
      { speaker: 'narrador', text: '1830. Bolívar muere en Santa Marta, enfermo, convencido de que América es ingobernable. La Gran Colombia se fragmenta en Venezuela, Ecuador y Nueva Granada.' },
      { speaker: 'narrador', text: '1832. Santander regresa del exilio. Es elegido presidente de la Nueva Granada.' },
      { speaker: 'santander_sp', text: 'Treinta y siete escuelas nuevas. Código civil. Presupuesto público auditado. Estas son mis batallas. Son más lentas que las de Boyacá. Duran más.' },
      { speaker: 'pensar', text: 'Bolívar liberó el continente con espadas. Yo lo estoy construyendo con leyes. Uno de los dos tenía razón. Quizás los dos.' },
    ],
    next: (s) => {
      if (s.flags.has('defendió_constitución') && s.flags.has('ley_para_todos') && s.fidelity >= 75) return 'santander_ending_republica';
      if (s.flags.has('defendió_constitución') && s.fidelity >= 55) return 'santander_ending_canon';
      if (s.flags.has('apoyó_dictadura')) return 'santander_ending_lealtad';
      if (s.flags.has('confiscó_bienes')) return 'santander_ending_pragmatico';
      return 'santander_ending_canon';
    },
  },

  santander_ending_canon: {
    id: 'santander_ending_canon',
    ending: {
      type: '⚖ FINAL HISTÓRICO',
      title: 'El Hombre de las Leyes',
      body: 'Santander gobernó como presidente de Nueva Granada de 1832 a 1836. Fundó escuelas, promulgó leyes, auditó presupuestos. Su lema fue su vida. Las armas de Bolívar dieron la independencia. Las leyes de Santander hicieron el país. Colombia lo recuerda como el padre de la administración pública.',
      quote: '"Las armas os dieron la independencia, las leyes os darán la libertad." — Francisco de Paula Santander',
    },
  },
  santander_ending_republica: {
    id: 'santander_ending_republica',
    ending: {
      type: '🏛 FINAL ÉPICO',
      title: 'La República Perfecta',
      body: 'Defend la constitución, educó al pueblo, construyó instituciones. Su Colombia no fue perfecta — ninguna lo es — pero fue un intento genuino de gobernar por ley y no por capricho. Su legado: la tradición constitucional más larga de América Latina del siglo XIX.',
      quote: '"La república no es el gobierno de los mejores. Es el gobierno de las leyes." — Santander',
    },
  },
  santander_ending_lealtad: {
    id: 'santander_ending_lealtad',
    ending: {
      type: '🛡 FINAL DE LA LEALTAD',
      title: 'La Lealtad al Libertador',
      body: 'Apoyar a Bolívar fue la decisión más fácil y la más costosa. La estabilidad que prometía duró poco. La Gran Colombia se rompió de todas formas. Santander sobrevivió políticamente y eventualmente gobernó. Pero siempre con la pregunta de qué hubiera pasado si hubiera dicho no.',
      quote: '"La lealtad sin principio es servilismo." — anónimo',
    },
  },
  santander_ending_pragmatico: {
    id: 'santander_ending_pragmatico',
    ending: {
      type: '⚔ FINAL DEL PRAGMATISMO',
      title: 'El Costo de lo Posible',
      body: 'Algunas decisiones fueron impopulares, otras contradictorias. Pero Santander gobernó en tiempos imposibles con herramientas imperfectas. El pragmatismo tiene sus costos. También tiene sus logros. La república sobrevivió. Eso cuenta.',
      quote: '"En política, el peor pecado no es equivocarse. Es no decidir." — proverbio republicano',
    },
  },
  santander_ending_exilio: {
    id: 'santander_ending_exilio',
    ending: {
      type: '🌊 FINAL DEL EXILIO',
      title: 'El Exilio Honorable',
      body: 'El exilio fue su medalla. Que Bolívar lo expulsara por defender la constitución fue la prueba de que tenía razón. Regresó cuando el caudillismo cayó con el caudillo. Colombia lo eligió presidente. La historia le dio razón. Tardó, pero llegó.',
      quote: '"El exilio es la universidad de los que piensan diferente." — Santander, desde Europa',
    },
  },

}); // fin Object.assign(Story.nodes)

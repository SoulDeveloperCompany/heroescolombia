/* ============================================================
   HISTORIA COMPLETA — Héroes de Colombia
   Policarpa Salavarrieta — Bogotá, 1817

   ~60 nodos, 15 elecciones, 5 finales
   ============================================================ */

const Story = {

  /* ── Notas históricas ─────────────────────────────────────── */
  notasHistoricas: {
    reconquista: {
      id: 'reconquista', year: 'Bogotá, 1816–1819',
      title: 'La Reconquista Española',
      body: 'En 1816, el General Pablo Morillo llegó a Nueva Granada con 10.000 soldados para restaurar el poder de la Corona española. El período conocido como "La Reconquista" o "El Régimen del Terror" duró hasta 1819. Morillo instauró el Consejo de Purificación y el Tribunal de Secuestros, instrumentos de terror que ejecutaron a cientos de patriotas y confiscaron sus bienes.',
    },
    lapola_historia: {
      id: 'lapola_historia', year: 'Bogotá, 1795–1817',
      title: 'Policarpa Salavarrieta',
      body: 'María Policarpa Salavarrieta nació alrededor de 1795. Trabajó como costurera, oficio que le permitía entrar a hogares aristocráticos y obtener información valiosa para la resistencia. Fue una de las espías más efectivas del movimiento independentista. Su habilidad para moverse entre distintas clases sociales la hizo invaluable para la causa patriota.',
    },
    red_espias: {
      id: 'red_espias', year: 'Bogotá, 1816–1817',
      title: 'La Red de Espionaje Patriota',
      body: 'La resistencia patriota contaba con una sofisticada red de espionaje en Bogotá. Mensajes eran ocultados en dobladillos de ropa, en vasijas de barro, e incluso bordados en patrones de tejido. Las mujeres jugaron un papel crucial en esta red: sus actividades domésticas les daban cobertura perfecta para transmitir información.',
    },
    alejo_sabara: {
      id: 'alejo_sabara', year: 'Bogotá, 1817',
      title: 'Alejo Sabaraín',
      body: 'Alejo Sabaraín fue el compañero sentimental de La Pola. También participó activamente en el movimiento independentista. Fue arrestado junto a Policarpa y ejecutado el mismo día que ella, el 14 de noviembre de 1817. Su amor y lealtad a la causa patriota los unió hasta el final.',
    },
    samano_virrey: {
      id: 'samano_virrey', year: 'Bogotá, 1816–1819',
      title: 'El Virrey Juan Sámano',
      body: 'Juan Sámano fue uno de los gobernantes coloniales más temidos. Conocido por su crueldad, firmó cientos de órdenes de ejecución contra patriotas. Los bogotanos le temían profundamente. Paradójicamente, huyó despavorido de Bogotá en agosto de 1819, cuando Simón Bolívar ganó la Batalla de Boyacá, perdiendo incluso su sombrero en la huida.',
    },
    ejecucion: {
      id: 'ejecucion', year: 'Bogotá, 14 de noviembre de 1817',
      title: 'El 14 de Noviembre de 1817',
      body: 'Ese día fueron ejecutados nueve patriotas en la Plaza Mayor de Bogotá. Policarpa fue la única mujer entre los condenados. Se negó a arrodillarse ante el pelotón de fusilamiento. Según testimonios históricos, sus últimas palabras fueron: "¡Pueblo indolente! ¡Cuán diversa sería vuestra suerte si conocieseis el precio de la libertad! ¡Pero no es tarde. Mirad cómo muere una mujer!"',
    },
    costuras_mensaje: {
      id: 'costuras_mensaje', year: 'Bogotá, 1817',
      title: 'Mensajes en el Tejido',
      body: 'Una de las técnicas más ingeniosas de la resistencia era ocultar mensajes dentro de la ropa. Los dobladillos, los botones y los bordados podían contener información codificada. La Pola utilizó su oficio de costurera para transportar mensajes sin levantar sospechas entre los soldados realistas.',
    },
    plaza_mayor: {
      id: 'plaza_mayor', year: 'Bogotá, 1817',
      title: 'La Plaza Mayor de Bogotá',
      body: 'La Plaza Mayor (hoy Plaza de Bolívar) era el corazón de Bogotá colonial. Allí se celebraban mercados, proclamas reales y, lamentablemente, ejecuciones públicas. Los realistas usaban estas ejecuciones como método de terror para disuadir a la población de unirse a la causa independentista. La muerte de La Pola tuvo el efecto contrario: la convirtió en mártir.',
    },
    boyaca: {
      id: 'boyaca', year: '7 de agosto de 1819',
      title: 'La Batalla de Boyacá',
      body: 'Dos años después de la muerte de La Pola, el ejército libertador de Simón Bolívar derrotó decisivamente a las fuerzas españolas en el Puente de Boyacá. Esta victoria selló la independencia de Colombia. Muchos historiadores argumentan que el sacrificio de espías como La Pola fue fundamental para esta victoria, pues la información que transmitieron debilitó el aparato militar español.',
    },
  },

  /* ── NODOS DE LA HISTORIA ─────────────────────────────────── */
  nodes: {

    /* ══════════════════════════════════════════════════════════
       ACTO I — LA COSTURERA DE BOGOTÁ
       Septiembre de 1817
    ══════════════════════════════════════════════════════════ */

    act1_intro: {
      id: 'act1_intro',
      actIntro: {
        number: 'Acto I',
        title:  'La Costurera de Bogotá',
        historical: 'Bogotá, septiembre de 1817. La Reconquista española oprime el Virreinato de Nueva Granada. Bajo el Virrey Sámano, delatar a un patriota puede significar la salvación o la condena.',
      },
      lines: [],
      next: 'a1_01',
    },

    a1_01: {
      id: 'a1_01',
      lines: [
        { speaker: 'narrador', text: 'Bogotá. Septiembre de 1817. Seis de la mañana.', bg: 'mercado', bgImg: 'images/bg_bogota_amanecer.png', char: '' },
        { speaker: 'pola',     text: 'El hilo índigo se enreda en la aguja. Mis manos no tiemblan. Aprendí hace tiempo a no permitírselo.' },
        { speaker: 'narrador', text: 'Soy Policarpa Salavarrieta. Costurera para los vecinos. Para quienes importan... algo diferente.' },
        { speaker: 'pola',     text: 'Hoy tengo tres encargos: una falda, un chaleco... y un mensaje que nadie debe ver.' },
        { speaker: 'pensar',   text: 'Tres meses desde que fusilaron al doctor Rodríguez. Lo vi morir. El miedo nunca se fue.' },
      ],
      note: { id: 'lapola_historia', title: 'Nota histórica desbloqueada: La Pola' },
      next: 'a1_02',
    },

    a1_02: {
      id: 'a1_02',
      lines: [
        { speaker: 'narrador', text: 'Plaza Mayor. Olor a tamales. A pólvora. A miedo.', bgImg: 'images/bg_plaza_mercado.svg', char: 'images/pola_caminando.svg' },
        { speaker: 'soldado',  text: '¡Documentos! Todo el que pase por aquí debe mostrar documentos de residencia.' },
        { speaker: 'narrador', text: 'Cuatro soldados. Cestas revisadas. Una mujer llora en silencio.' },
        { speaker: 'pola',     text: 'Buenos días, señor.' },
        { speaker: 'soldado',  text: 'Usted. ¿A dónde va? ¿Qué lleva en esa bolsa?' },
        { speaker: 'pola',     text: 'Telas, señor. Soy costurera. Trabajo para el capitán Valdés, puede preguntarle.' },
        { speaker: 'soldado',  text: 'El capitán Valdés... Bien. Siga. Pero no se aleje del barrio.' },
        { speaker: 'pensar',   text: 'El corazón me golpea el pecho. Pero mi cara no dice nada. Nunca dice nada.' },
      ],
      note: { id: 'reconquista', title: 'Nota histórica: La Reconquista' },
      next: 'a1_03',
    },

    a1_03: {
      id: 'a1_03',
      lines: [
        { speaker: 'narrador', text: 'Casa del capitán Valdés. Mansión de piedra. Silencio de poder.', bg: 'mercado', bgImg: 'images/bg_mansion_colonial.svg', char: 'images/pola_neutral.svg' },
        { speaker: 'narrador', text: 'Papeles olvidados sobre el escritorio. Mapas. Fechas. Números de tropas.' },
        { speaker: 'pensar',   text: 'Soldados a Tunja. Cuándo. Por qué ruta. Todo está ahí, a tres pasos de mi aguja.' },
        { speaker: 'pola',     text: 'Si leo esos papeles y me descubren, soy una mujer muerta. Pero si no los leo...' },
        { speaker: 'pensar',   text: 'Cuántos patriotas podrían morir por lo que no supe ver.' },
      ],
      choiceQuestion: '¿Qué hace La Pola?',
      choiceContext:  'La criada está en la cocina. El capitán tardará media hora en regresar.',
      choices: [
        {
          id: 'c1a', text: 'Leo los documentos y memorizo todo lo que pueda',
          hint: 'Fidelidad patriota +10',
          fidelity: 10, suspicion: 8,
          setFlag: 'leyo_documentos',
          reaction: 'Mis ojos recorren las líneas con rapidez. Doscientos soldados hacia Tunja el 3 de octubre. Ruta por Chía. Memorizo cada número como si fueran versículos bíblicos.',
          next: 'a1_04',
        },
        {
          id: 'c1b', text: 'Copio rápidamente los datos más importantes en un papel',
          hint: 'Fidelidad +15, sospecha +15',
          fidelity: 15, suspicion: 15,
          setFlag: 'copio_documentos',
          reaction: 'Arranco un pequeño trozo de tela de un retazo y trazo números con la punta de una aguja mojada en tinta china. Mis manos tiemblan pero la letra sale firme.',
          next: 'a1_04',
        },
        {
          id: 'c1c', text: 'No toco nada. Es demasiado peligroso hoy',
          hint: 'Fidelidad -5, sospecha -5',
          fidelity: -5, suspicion: -5,
          reaction: 'Aparto la mirada. Hay días en que la prudencia es la mayor valentía. Termino el chaleco en silencio y me voy sin haber tocado nada.',
          next: 'a1_04b',
        },
      ],
    },

    a1_04: {
      id: 'a1_04',
      lines: [
        { speaker: 'narrador', text: 'Esa noche. Pasos en la escalera. Alejo.', bgImg: 'images/bg_cuarto_noche.svg', char: 'images/pola_angustiada.svg' },
        { speaker: 'alejo',    text: 'Policarpa. ¿Estás sola? Tengo que contarte algo.' },
        { speaker: 'pola',     text: 'Alejo, ¿qué haces aquí? Sabes que los vecinos hablan.' },
        { speaker: 'alejo',    text: 'Dejé de preocuparme por los vecinos hace tres meses. Escucha. Me unió a la resistencia. Llevamos mensajes para el general Santander.' },
        { speaker: 'pola',     text: '¿Qué? Alejo...' },
        { speaker: 'alejo',    text: 'No tienes que hacer nada. Solo quería que lo supieras. Somos una red pequeña pero real, Policarpa. Estamos cambiando las cosas.' },
        { speaker: 'pensar',   text: 'Quiero pedirle que pare. Que se cuide. Pero lo que obtuve hoy en casa del capitán Valdés me quema en la memoria.' },
      ],
      note: { id: 'alejo_sabara', title: 'Nota histórica: Alejo Sabaraín' },
      choiceQuestion: '¿Le cuento a Alejo lo que descubrí?',
      choiceContext:  'Él ya es parte de la resistencia. La información puede ser crucial.',
      choices: [
        {
          id: 'c2a', text: 'Le cuento todo lo que vi en casa del capitán Valdés',
          hint: 'Genera confianza patriota +15',
          fidelity: 10, trust: 15,
          setFlag: 'confio_en_alejo',
          reaction: 'Sus ojos se agrandan. Agarra mi mano. "Policarpa, ¿sabes lo que esto significa? Con esto podemos alertar a los compañeros en Tunja." Por primera vez en meses, veo esperanza en alguien.',
          next: 'a1_05',
        },
        {
          id: 'c2b', text: 'Guardo silencio. Aún no confío en nadie completamente',
          hint: 'Sospecha -10, fidelidad -5',
          fidelity: -5, suspicion: -10,
          reaction: 'Sonrío y cambio el tema. La información que tengo es valiosa. Demasiado valiosa para compartir sin estar completamente segura de los canales.',
          next: 'a1_05',
        },
        {
          id: 'c2c', text: 'Le digo que quiero unirme activamente a la resistencia',
          hint: 'Fidelidad +20, sospecha +10',
          fidelity: 20, trust: 10, suspicion: 10,
          setFlag: 'se_unio_resistencia',
          reaction: '"Quiero ayudar. No solo pasar mensajes. Quiero ser parte de esto, Alejo." Él me mira largo tiempo antes de responder: "Lo sabía. Sabía que llegaría este momento."',
          next: 'a1_05',
        },
      ],
    },

    a1_04b: {
      id: 'a1_04b',
      lines: [
        { speaker: 'narrador', text: 'Esa noche, Alejo llega a mi puerta. Su cara dice que algo ha cambiado.' },
        { speaker: 'alejo',    text: 'Policarpa. Necesito hablar contigo. Me uní a la resistencia. Llevamos mensajes.' },
        { speaker: 'pola',     text: 'Alejo... ¿sabes lo que arriesgas?' },
        { speaker: 'alejo',    text: 'Sé exactamente lo que arriesgo. Y lo que ganamos si tenemos éxito.' },
        { speaker: 'pensar',   text: 'Hoy fui cobarde. Quizás mañana pueda ser algo diferente.' },
      ],
      choices: [
        {
          id: 'c2d', text: 'Acepto unirme a la resistencia con Alejo',
          hint: 'Fidelidad +15',
          fidelity: 15, trust: 10,
          setFlag: ['se_unio_resistencia', 'confio_en_alejo'],
          next: 'a1_05',
        },
        {
          id: 'c2e', text: 'Le pido tiempo para pensarlo',
          fidelity: -5,
          next: 'a1_05',
        },
      ],
    },

    a1_05: {
      id: 'a1_05',
      lines: [
        { speaker: 'narrador', text: 'Tres días después. Trastienda de la botica. Olor a albahaca y a secreto.', bg: 'mercado' },
        { speaker: 'narrador', text: 'Cuatro personas. Dominga la lavandera. El Padre Marcos. Doña Inés. Un joven sin nombre.' },
        { speaker: 'dominga',  text: 'Bienvenida, muchacha. Alejo nos habló de ti. Dicen que tienes manos de seda y ojos de halcón.' },
        { speaker: 'padreM',   text: 'Lo que se habla aquí, muere aquí. ¿Lo entiende, señorita Salavarrieta?' },
        { speaker: 'pola',     text: 'Lo entiendo, padre.' },
        { speaker: 'dona',     text: 'Necesitamos a alguien que pueda entrar a las casas realistas. Tú, como costurera, tienes acceso que ninguno de nosotros tiene. Los militares confían en las mujeres que les cosen los uniformes.' },
        { speaker: 'pensar',   text: 'Siento el peso de lo que me están pidiendo. No es solo pasar mensajes. Es convertir mi vida en una mentira permanente.' },
      ],
      next: 'a1_06',
    },

    a1_06: {
      id: 'a1_06',
      lines: [
        { speaker: 'narrador', text: 'El Padre Marcos despliega un mapa. Círculos en las calles de Bogotá.', bg: 'mercado' },
        { speaker: 'padreM',   text: 'La primera misión es simple. Llevar este mensaje al señor Rincón, en la calle del Príncipe. Está cosido en el dobladillo de esta falda.' },
        { speaker: 'dominga',  text: 'Si la paran, dice que es un encargo de costura. Si insisten, dice que viene de casa de la señora Francisca. Ella ya está prevenida.' },
        { speaker: 'pola',     text: '¿Y si revisan la falda?' },
        { speaker: 'dona',     text: 'Entonces rezamos.' },
        { speaker: 'narrador', text: 'El mensaje pesa menos que una pluma. Más que una piedra.' },
      ],
      note: { id: 'costuras_mensaje', title: 'Nota histórica: Mensajes en el Tejido' },
      next: 'a1_07',
    },

    a1_07: {
      id: 'a1_07',
      lines: [
        { speaker: 'narrador', text: 'Calle del Arenal. A mitad de camino. Un soldado.', bg: 'exterior' },
        { speaker: 'soldado',  text: '¡Alto! Documentos y propósito de viaje.' },
        { speaker: 'pola',     text: 'Buenos días. Soy costurera. Llevo un encargo a la señora del señor Rincón.' },
        { speaker: 'soldado',  text: '¿Qué lleva en ese bulto?' },
        { speaker: 'pensar',   text: 'Él no sabe nada. Solo está aburrido y tiene poder. La combinación más peligrosa del mundo.' },
      ],
      choiceQuestion: '¿Cómo distrae al soldado?',
      choiceContext:  'Lleva la falda con el mensaje oculto en el dobladillo. Un registro podría ser fatal.',
      choices: [
        {
          id: 'c3a', text: 'Le pregunto amablemente si conoce a una buena costurera para sus calzones',
          hint: 'Encanto social',
          fidelity: 5, suspicion: -5,
          setFlag: 'primer_paso_exitoso',
          reaction: 'El soldado se ruboriza. Sus compañeros sueltan una carcajada. En la confusión paso sin que revisen nada. El calor me sube a las mejillas pero sonrío hasta doblar la esquina.',
          next: 'a1_08',
        },
        {
          id: 'c3b', text: 'Muestro el paquete de telas superficialmente y hablo rápido de los precios',
          hint: 'Confianza directa',
          fidelity: 3,
          setFlag: 'primer_paso_exitoso',
          reaction: 'Abro el paquete lo justo para mostrar las telas de la superficie. El soldado se aburre antes de llegar al dobladillo. "Siga", dice. Camino sin correr. Un paso. Otro. A la vuelta de la esquina, exhalo.',
          next: 'a1_08',
        },
        {
          id: 'c3c', text: 'Menciono el nombre del capitán Valdés como referencia',
          hint: 'Usa contactos',
          fidelity: 2, suspicion: 5,
          setFlag: 'primer_paso_exitoso',
          reaction: 'El nombre del capitán funciona como llave. El soldado me mira distinto — con respeto o desconfianza, no estoy segura — y me deja pasar. Pero ahora hay alguien que recuerda mi nombre.',
          next: 'a1_08',
        },
      ],
    },

    a1_08: {
      id: 'a1_08',
      lines: [
        { speaker: 'narrador', text: 'El señor Rincón. Sin palabras. Monedas. Puerta cerrada.', bg: 'mercado' },
        { speaker: 'pola',     text: 'Y así empieza todo. No con un discurso. Con una falda y un soldado aburrido.' },
        { speaker: 'pensar',   text: 'Esa noche dormí mejor. No por hacer algo heroico. Sino por hacer algo.' },
        { speaker: 'narrador', text: 'Semanas después. Aprendo los ritmos. Mensajes. Señales. Silencios. Cada dobladillo, una victoria.' },
        { speaker: 'dominga',  text: 'Eres buena en esto, muchacha. Mejor de lo que pensábamos. Quizás demasiado buena.' },
        { speaker: 'pola',     text: '¿Por qué demasiado buena?' },
        { speaker: 'dominga',  text: 'Porque a la gente demasiado buena la buscan los dos lados.' },
      ],
      note: { id: 'red_espias', title: 'Nota histórica: La Red de Espionaje' },
      next: 'act2_intro',
    },

    /* ══════════════════════════════════════════════════════════
       ACTO II — EL TEJIDO DE SECRETOS
       Octubre de 1817
    ══════════════════════════════════════════════════════════ */

    act2_intro: {
      id: 'act2_intro',
      actIntro: {
        number: 'Acto II',
        title:  'El Tejido de Secretos',
        historical: 'Octubre de 1817. La red patriota en Bogotá opera en las sombras. Cada mensaje que viaja en el dobladillo de una falda es una pequeña victoria contra el terror del Virrey Sámano.',
      },
      lines: [],
      next: 'a2_01',
    },

    a2_01: {
      id: 'a2_01',
      lines: [
        { speaker: 'narrador', text: 'Un mes después. Doce personas en la red. Nadie sabe el nombre real de nadie.', bg: 'mercado' },
        { speaker: 'pola',     text: 'Hoy tengo que convencer a Miguel Vargas. Campesino. Vende papas. Los realistas lo usan de guía por los caminos de montaña.' },
        { speaker: 'narrador', text: 'Si Miguel trabaja para nosotros, podemos desviar columnas enteras de soldados.' },
        { speaker: 'pensar',   text: 'Pero Miguel tiene miedo. Un miedo tan viejo y tan raíz como las papas que vende. ¿Cómo convences a alguien de arriesgar lo poco que tiene?' },
      ],
      choiceQuestion: '¿Cómo convence a Miguel?',
      choiceContext:  'Miguel tiene esposa e hijos. Ha visto morir a sus vecinos. El miedo es su compañero de toda la vida.',
      choices: [
        {
          id: 'c4a', text: '"Miguel, tus hijos van a crecer en una tierra libre o en una colonia. Esa es la única elección real."',
          hint: 'Apela al futuro de sus hijos',
          fidelity: 8, trust: 12,
          setFlag: 'miguel_unido',
          reaction: 'Miguel no responde de inmediato. Mira sus manos callosas. Cuando levanta la vista, hay algo distinto en sus ojos. "¿Y si me descubren?" "Nadie sabrá tu nombre", le digo. "Nadie."',
          next: 'a2_02',
        },
        {
          id: 'c4b', text: '"Los patriotas te pagarán el doble de lo que pagan los realistas por cada guía."',
          hint: 'Apela al interés práctico',
          fidelity: -3, trust: 5,
          setFlag: 'miguel_unido',
          reaction: 'No es el argumento que habría preferido usar. Pero funciona. Miguel asiente despacio. "El doble." "El doble", confirmo. A veces la libertad tiene que venderse en monedas antes de venderse en ideales.',
          next: 'a2_02',
        },
        {
          id: 'c4c', text: '"¿Recuerdas al doctor Rodríguez? Lo fusilaron en la plaza. Él también tuvo miedo antes de actuar."',
          hint: 'Apela a los mártires',
          fidelity: 10, trust: 8,
          setFlag: 'miguel_unido',
          reaction: 'Es un argumento duro. Quizás demasiado. Pero el recuerdo del doctor Rodríguez mueve algo en Miguel que el dinero nunca podría. "Está bien", dice en voz tan baja que casi no lo escucho.',
          next: 'a2_02',
        },
      ],
    },

    a2_02: {
      id: 'a2_02',
      lines: [
        { speaker: 'narrador', text: 'Una semana después. La información de Miguel es exacta. Cien soldados por el camino equivocado. Los patriotas de Zipaquirá se retiran.', bg: 'mercado' },
        { speaker: 'dominga',  text: 'La Pola, hay un problema. Arrestaron a Joaquín Caicedo. Lo llevan al cuartel de San Agustín.' },
        { speaker: 'pola',     text: '¿Joaquín? Dios mío. ¿Sabe algo comprometedor?' },
        { speaker: 'dominga',  text: 'Sabe dónde guardamos los mensajes que vienen del norte. Si habla, caemos doce personas.' },
        { speaker: 'alejo',    text: 'Policarpa, podríamos intentar hacer llegar un mensaje a alguien de dentro del cuartel. Hay un soldado... creo que simpatiza con nosotros.' },
        { speaker: 'padreM',   text: 'O podemos desactivar ese depósito. Mover todo antes de que Joaquín hable.' },
        { speaker: 'pensar',   text: 'Joaquín es mi amigo. Pero doce vidas pesan más que una amistad. Dios me perdone.' },
      ],
      choiceQuestion: '¿Qué decide La Pola?',
      choiceContext:  'Cada minuto cuenta. Joaquín puede hablar bajo tortura en cualquier momento.',
      choices: [
        {
          id: 'c5a', text: 'Intentamos enviar un mensaje a Joaquín para que resista',
          hint: 'Lealtad al compañero',
          fidelity: 12, trust: 8, suspicion: 10,
          setFlag: 'ayudo_joaquin',
          reaction: 'Es un riesgo enorme. Pero no puedo abandonarlo. Dominga tiene contacto con una lavandera que entra al cuartel. Enviamos el mensaje cosido en la camisa de un recluso: "Resiste. Ya saben que eres inocente."',
          next: 'a2_03',
        },
        {
          id: 'c5b', text: 'Movemos todo el depósito esta misma noche. Protejamos la red',
          hint: 'Protege la misión',
          fidelity: 5, trust: -5,
          setFlag: 'protegió_red',
          reaction: 'Es la decisión más fría que he tomado. Esa noche vaciamos el depósito hasta el último papel. Al día siguiente, Joaquín habla. Los soldados encuentran un cuarto vacío. La red sobrevive. Joaquín no.',
          next: 'a2_03',
        },
        {
          id: 'c5c', text: 'Hago ambas cosas: mensaje a Joaquín y mover el depósito',
          hint: 'Intenta todo',
          fidelity: 10, trust: 5, suspicion: 8,
          setFlag: ['ayudo_joaquin', 'protegió_red'],
          reaction: 'Dividimos las tareas. Alejo y Dominga mueven el depósito mientras yo busco la manera de alertar a Joaquín. No sé si ambas cosas van a funcionar. Pero al menos lo intenté.',
          next: 'a2_03',
        },
      ],
    },

    a2_03: {
      id: 'a2_03',
      lines: [
        { speaker: 'narrador', text: 'El caso Joaquín pasa. Pero deja cicatriz. En mí. En la red.', bg: 'mercado' },
        { speaker: 'padreM',   text: 'Hay otra cosa que deben saber. Creo que alguien de nuestra red podría estar informando a los realistas.' },
        { speaker: 'pola',     text: '¿Qué? ¿Tiene pruebas?' },
        { speaker: 'padreM',   text: 'Nada concreto. Pero tres veces nuestros mensajes han llegado tarde. Como si alguien supiera cuándo los mandamos.' },
        { speaker: 'alejo',    text: 'Podría ser coincidencia, padre.' },
        { speaker: 'padreM',   text: 'En nuestro trabajo no existen las coincidencias, hijo.' },
        { speaker: 'pensar',   text: 'Miro a cada persona en esa sala. Alejo. Dominga. Doña Inés. ¿Uno de ellos? No quiero creerlo. Pero el Padre tiene razón.' },
      ],
      next: 'a2_04',
    },

    a2_04: {
      id: 'a2_04',
      lines: [
        { speaker: 'narrador', text: 'Observo en silencio. Una semana. Cada movimiento. Cada mirada.', bg: 'mercado' },
        { speaker: 'pola',     text: 'Y entonces lo veo. El hombre sin nombre. Hablando con un alguacil realista. Carrera octava.' },
        { speaker: 'pensar',   text: 'Puede ser un pariente. Una deuda. O puede ser que estemos todos muertos.' },
        { speaker: 'narrador', text: 'Antes de actuar, Dominga llega con una noticia peor.' },
        { speaker: 'dominga',  text: 'Policarpa, alguien habló. Los generales en Honda van a caer en una emboscada si no les avisamos antes del amanecer.' },
        { speaker: 'pensar',   text: 'Una noche. Tengo una noche para decidir cómo hacer llegar la advertencia sin exponer la red entera.' },
      ],
      choiceQuestion: '¿Cómo hace llegar la advertencia urgente?',
      choiceContext:  'Hay un infiltrado en la red. Cada persona que incluyes es un riesgo.',
      choices: [
        {
          id: 'c6a', text: 'Voy yo misma a pie, de noche, hacia el camino del norte',
          hint: 'Valentía máxima. Riesgo máximo',
          fidelity: 18, suspicion: 15,
          setFlag: 'fue_ella_misma',
          reaction: 'Salgo a las once de la noche. La ciudad está bajo toque de queda. Cada sombra puede ser un soldado. Caminé cuatro horas por callejones que ni los perros conocen. Al amanecer, el convoy cambió de ruta.',
          next: 'a2_05',
        },
        {
          id: 'c6b', text: 'Envío el mensaje con Miguel, el campesino. Él conoce los caminos',
          hint: 'Confía en Miguel',
          fidelity: 10, trust: 8,
          setFlag: 'uso_a_miguel',
          reaction: 'Miguel parte antes de medianoche. Sus pies conocen cada piedra del camino real. El mensaje llega. El convoy se desvía. Miguel regresa al amanecer con tierra hasta las rodillas y una sonrisa de diez años menos.',
          next: 'a2_05',
        },
        {
          id: 'c6c', text: 'Uso al Padre Marcos. Un sacerdote puede circular de noche sin levantar sospechas',
          hint: 'Usa la cobertura del cura',
          fidelity: 8, suspicion: -5,
          setFlag: 'uso_padre_marcos',
          reaction: 'El Padre sale con una vela y sus rosarios. Nadie detiene a un cura de noche — presuponen que va a una extremaunción. El mensaje llega. El convoy vive. Dios y los patriotas trabajan juntos esta noche.',
          next: 'a2_05',
        },
      ],
    },

    a2_05: {
      id: 'a2_05',
      lines: [
        { speaker: 'narrador', text: 'El convoy se salva. Pero el infiltrado sospecha que lo vimos.', bg: 'mercado' },
        { speaker: 'dominga',  text: 'Policarpa. El muchacho desapareció. No volvió a la reunión.' },
        { speaker: 'pola',     text: 'Entonces sabe que lo vimos.' },
        { speaker: 'alejo',    text: 'O fue él quien nos delató de nuevo. Y ahora tiene miedo de que tomemos represalias.' },
        { speaker: 'pola',     text: 'En cualquier caso, la red quedó expuesta. Tenemos que reorganizarnos.' },
        { speaker: 'padreM',   text: 'Más que eso, hija. Tenemos que asumir que el Coronel González ya tiene algunos de nuestros nombres.' },
        { speaker: 'pensar',   text: 'El Coronel González. Solo su nombre hace que la gente baje la voz. Fue él quien arrestó al doctor Rodríguez. Él quien firmó la orden de ejecución.' },
      ],
      next: 'act3_intro',
    },

    /* ══════════════════════════════════════════════════════════
       ACTO III — LAS SOMBRAS SE CIERRAN
       Noviembre de 1817
    ══════════════════════════════════════════════════════════ */

    act3_intro: {
      id: 'act3_intro',
      actIntro: {
        number: 'Acto III',
        title:  'Las Sombras se Cierran',
        historical: 'Noviembre de 1817. El Coronel González intensifica la búsqueda de conspiradores. En Bogotá, el silencio se ha vuelto el idioma oficial.',
      },
      lines: [],
      next: 'a3_01',
    },

    a3_01: {
      id: 'a3_01',
      lines: [
        { speaker: 'narrador', text: 'Noviembre. Lluvia. Noticias malas. Dos patriotas arrestados en Zipaquirá. Uno en Fontibón.', bg: 'celda' },
        { speaker: 'pola',     text: 'El cerco se aprieta. Lo siento en el mercado, en las miradas de los soldados que antes me dejaban pasar sin preguntar.' },
        { speaker: 'alejo',    text: 'Policarpa, tenemos que hablar. El Padre Marcos dice que hay información de que alguien de tu descripción fue vista en casa del señor Rincón.' },
        { speaker: 'pola',     text: '¿Mi descripción? Hay cien mujeres en Bogotá de mi descripción.' },
        { speaker: 'alejo',    text: 'Sí. Pero solo una de ellas tiene tu nombre. Y alguien lo mencionó.' },
        { speaker: 'pensar',   text: 'El frío no viene de la lluvia. Viene de dentro.' },
      ],
      next: 'a3_02',
    },

    a3_02: {
      id: 'a3_02',
      lines: [
        { speaker: 'narrador', text: 'Esa noche, Alejo me propone algo que cambia el peso de todo.', bg: 'celda' },
        { speaker: 'alejo',    text: 'Podemos salir de Bogotá. Tenemos una ruta hacia Honda y de allí al norte, donde operan libremente los ejércitos del general Santander.' },
        { speaker: 'pola',     text: '¿Abandonar la red? ¿Ahora?' },
        { speaker: 'alejo',    text: 'No es abandonar. Es sobrevivir para seguir luchando. La Pola viva en Honda vale más que La Pola muerta en Bogotá.' },
        { speaker: 'pensar',   text: 'Y sin embargo. Hay información que solo yo puedo obtener aquí. Hay personas en esta red que dependen de que alguien las coordine.' },
        { speaker: 'alejo',    text: 'Policarpa. Te lo pido yo. Por nosotros.' },
      ],
      choiceQuestion: '¿Huye con Alejo o se queda?',
      choiceContext:  'La información que posee puede salvar vidas. Pero quedarse puede costarle la suya.',
      choices: [
        {
          id: 'c7a', text: 'Me quedo. La resistencia me necesita aquí más que en ningún otro lado',
          hint: 'Canon histórico. Fidelidad +20',
          fidelity: 20,
          setFlag: 'se_quedó',
          reaction: '"No puedo, Alejo. No todavía." Él me mira un largo momento. "Entonces me quedo contigo." "No." "Policarpa—" "Si me quedo, tú te vas. Uno de los dos tiene que sobrevivir para contarlo."',
          next: 'a3_03',
        },
        {
          id: 'c7b', text: 'Nos vamos juntos. La vida vale más que cualquier misión',
          hint: 'Fidelidad -15. Ending de fuga posible',
          fidelity: -15,
          setFlag: 'intentó_huir',
          reaction: 'Empaco lo poco que tengo en silencio. Alejo me toma de la mano. Caminamos hacia el norte bajo la lluvia de noviembre. Pero en la puerta de la ciudad, algo me detiene.',
          next: 'a3_03b',
        },
        {
          id: 'c7c', text: 'Pido tres días más. Hay una última misión que debo completar',
          hint: 'Fidelidad +12',
          fidelity: 12, suspicion: 10,
          setFlag: ['se_quedó', 'ultima_mision'],
          reaction: '"Tres días, Alejo. Dame tres días para terminar algo y luego nos vamos juntos." Él acepta, aunque en sus ojos veo que no cree que esos tres días lleguen.',
          next: 'a3_03',
        },
      ],
    },

    a3_03b: {
      id: 'a3_03b',
      lines: [
        { speaker: 'narrador', text: 'En la puerta norte de la ciudad, un control realista. Tres soldados. Una linterna en nuestra cara.', bg: 'exterior' },
        { speaker: 'soldado',  text: '¡Alto! Nadie sale de Bogotá después de las ocho. Documentos.' },
        { speaker: 'alejo',    text: '¡Corre!' },
        { speaker: 'narrador', text: 'Corremos. Disparos. Alejo me jala del brazo por un callejón. La oscuridad nos protege. Pero cuando llegamos al otro lado... estamos más adentro de la ciudad, no fuera.' },
        { speaker: 'pola',     text: 'No podemos salir esta noche.' },
        { speaker: 'alejo',    text: 'Mañana. Intentamos mañana.' },
        { speaker: 'pensar',   text: 'Pero mañana ya es tarde.' },
      ],
      next: 'a3_03',
    },

    a3_03: {
      id: 'a3_03',
      lines: [
        { speaker: 'narrador', text: 'Tres días antes de que todo cambie, obtengo la información más importante de mi vida.', bg: 'mercado' },
        { speaker: 'dona',     text: 'Policarpa. Mi cuñado trabaja en el Palacio. Me dijo que el Coronel González tiene una lista.' },
        { speaker: 'pola',     text: '¿Una lista de qué?' },
        { speaker: 'dona',     text: 'De nombres. Nombres de personas sospechosas de actividades patriotas. Y el tuyo está en ella.' },
        { speaker: 'pola',     text: '¿Mi nombre?' },
        { speaker: 'dona',     text: 'Policarpa Salavarrieta. Costurera. Calle de las Nieves.' },
        { speaker: 'pensar',   text: 'Ya saben quién soy. Ya tienen mi dirección. El tiempo se acabó.' },
      ],
      next: 'a3_04',
    },

    a3_04: {
      id: 'a3_04',
      lines: [
        { speaker: 'narrador', text: 'Tengo horas, quizás. Y aún hay algo que puedo hacer: la información sobre el movimiento de tropas hacia la sabana.', bg: 'mercado' },
        { speaker: 'pola',     text: 'Sé exactamente cuándo y por dónde va a pasar la columna del Coronel Torres. Si esa información llega a los patriotas del norte, pueden preparar una emboscada.' },
        { speaker: 'alejo',    text: 'Policarpa, si sales ahora, te van a arrestar.' },
        { speaker: 'pola',     text: 'Si no salgo, van a morir patriotas que no tienen por qué morir.' },
        { speaker: 'alejo',    text: 'Manda a alguien más. Manda a Miguel, al Padre Marcos—' },
        { speaker: 'pola',     text: 'Esta información solo la tengo yo. Solo yo sé cómo codificarla para que llegue sin que la intercepten.' },
      ],
      choiceQuestion: '¿Sale La Pola a cumplir la última misión?',
      choiceContext:  'La columna del Coronel Torres partirá en 48 horas. Decenas de patriotas en su camino.',
      choices: [
        {
          id: 'c8a', text: 'Salgo. La misión importa más que mi seguridad',
          hint: 'Fidelidad +15. Riesgo máximo',
          fidelity: 15, suspicion: 20,
          setFlag: ['salio_ultima_mision', 'misión_completada'],
          reaction: 'Me pongo la capa más anodina que tengo. Me trenzo el cabello de manera distinta. Y salgo a la calle como si fuera cualquier mañana de cualquier año sin guerra.',
          next: 'a3_05',
        },
        {
          id: 'c8b', text: 'Enseño el código a Alejo y lo mando a él',
          hint: 'Protección mutua',
          fidelity: 8, suspicion: 5,
          setFlag: 'mando_a_alejo',
          reaction: 'Dos horas de enseñanza intensiva. Alejo memoriza el código. Cuando sale, lo veo desde la ventana y rezo en silencio todas las oraciones que recuerdo.',
          next: 'a3_05',
        },
        {
          id: 'c8c', text: 'No salgo. Guardo la información. Escaparemos esta noche',
          hint: 'Fidelidad -10',
          fidelity: -10,
          setFlag: 'no_salio',
          reaction: 'Es la primera vez que elijo mi vida sobre la misión. No sé si es cobardía o sabiduría. La distinción importa menos de lo que pensaba.',
          next: 'a3_05',
        },
      ],
    },

    a3_05: {
      id: 'a3_05',
      lines: [
        { speaker: 'narrador', text: 'El 9 de noviembre de 1817. Estoy en casa de la familia Monsalve en la calle de las Nieves cuando escucho el golpe en la puerta.', bg: 'celda' },
        { speaker: 'soldado',  text: '¡Abran en nombre del Rey! ¡Orden del Coronel González!' },
        { speaker: 'pensar',   text: 'Podría saltar por la ventana trasera. Podría esconderme en el hueco bajo las tablas del piso que conoce el señor Monsalve.' },
        { speaker: 'pola',     text: 'No. Si me escondo y ellos lo descubren, toda la familia Monsalve muere.' },
        { speaker: 'narrador', text: 'Me paro en el centro de la sala. Respiro. Por última vez en libertad, respiro el olor a madera mojada de esta ciudad.' },
        { speaker: 'coronel',  text: 'Policarpa Salavarrieta. Queda usted arrestada por actividades contrarias a la Corona de España.' },
        { speaker: 'pola',     text: 'Soy costurera. No sé de qué me hablan.' },
        { speaker: 'coronel',  text: 'Lo sabrá muy pronto, señorita.' },
      ],
      next: 'act4_intro',
    },

    /* ══════════════════════════════════════════════════════════
       ACTO IV — EL TRIBUNAL
       14 de noviembre de 1817
    ══════════════════════════════════════════════════════════ */

    act4_intro: {
      id: 'act4_intro',
      actIntro: {
        number: 'Acto IV',
        title:  'El Tribunal',
        historical: '14 de noviembre de 1817. El Virrey Sámano ha ordenado el juicio expedito. En el Bogotá colonial, "expedito" significa una sola cosa.',
      },
      lines: [],
      next: 'a4_01',
    },

    a4_01: {
      id: 'a4_01',
      lines: [
        { speaker: 'narrador', text: 'La celda del cuartel de San Agustín tiene las paredes húmedas y una pequeña ventana por donde entra el gris de Bogotá.', bg: 'celda', bgImg: 'images/bg_celda_oscura.svg', char: 'images/pola_prisionera.svg' },
        { speaker: 'coronel',  text: 'Señorita Salavarrieta. Seré directo. Tenemos testimonios que la ubican llevando mensajes entre casas de reconocidos conspiradores.' },
        { speaker: 'pola',     text: 'Soy costurera. Visito casas para entregar encargos.' },
        { speaker: 'coronel',  text: 'También tenemos evidencia de comunicaciones codificadas encontradas en ropa que usted confeccionó.' },
        { speaker: 'pensar',   text: 'No muestres nada. No muestres nada. Tu cara es tu única armadura.' },
        { speaker: 'coronel',  text: 'Si colabora, si nos da los nombres de sus cómplices, puede haber... consideraciones en su sentencia.' },
      ],
      choiceQuestion: '¿Cómo responde al interrogatorio?',
      choiceContext:  'El Coronel tiene evidencia parcial. No sabe cuánto sabe realmente.',
      choices: [
        {
          id: 'c9a', text: 'Niego todo con calma y sin vacilar',
          hint: 'Protege la red',
          fidelity: 15,
          setFlag: 'negó_todo',
          reaction: '"No sé de qué me habla, Coronel. Soy una mujer humilde que cose ropa para ganar el sustento." Lo miro directamente a los ojos. Los suyos parpadean primero.',
          next: 'a4_02',
        },
        {
          id: 'c9b', text: 'Doy información falsa para proteger a los verdaderos compañeros',
          hint: 'Engaño estratégico',
          fidelity: 10, suspicion: -10,
          setFlag: ['negó_todo', 'info_falsa'],
          reaction: 'Le doy tres nombres falsos: el señor Acosta de Zipaquirá, una monja de clausura, un boticario que murió el año pasado. Que el Coronel pierda tiempo buscándolos.',
          next: 'a4_02',
        },
        {
          id: 'c9c', text: 'Guardo silencio absoluto',
          hint: 'Silencio como escudo',
          fidelity: 12,
          setFlag: 'silencio_absoluto',
          reaction: 'No digo nada. Ni cuando el Coronel golpea la mesa, ni cuando eleva la voz, ni cuando me amenaza con lo que le pasó a otros. El silencio también puede ser una respuesta.',
          next: 'a4_02',
        },
      ],
    },

    a4_02: {
      id: 'a4_02',
      lines: [
        { speaker: 'narrador', text: 'Esa noche, en la celda, escucho pasos conocidos. Una guardia con acento diferente. Y luego su voz.', bg: 'celda' },
        { speaker: 'alejo',    text: 'Policarpa. ¿Estás bien?' },
        { speaker: 'pola',     text: 'Alejo. Te dije que te fueras.' },
        { speaker: 'alejo',    text: 'Me arrestaron también. Esta mañana. Creo que alguien habló.' },
        { speaker: 'pensar',   text: 'Lo que más temía. Alejo en la misma celda que yo. El mismo destino.' },
        { speaker: 'alejo',    text: 'No te preocupes por mí. ¿La misión? ¿Llegó la información?' },
        { speaker: 'pola',     text: '...' },
      ],
      choiceQuestion: '¿Qué le dices a Alejo en la celda?',
      choiceContext:  'Puede ser la última vez que hablen.',
      choices: [
        {
          id: 'c10a', text: '"La misión llegó. No fue en vano." (aunque no estés segura)',
          hint: 'Amor y esperanza',
          fidelity: 5, trust: 10,
          reaction: '"La misión llegó, Alejo. Todo lo que hicimos valió la pena." Si es mentira, que sea una mentira gentil. Él cierra los ojos y respira profundo. "Entonces está bien. Entonces está bien."',
          next: 'a4_03',
        },
        {
          id: 'c10b', text: '"No lo sé. Pero luchamos. Eso nadie nos lo quita."',
          hint: 'Verdad honesta',
          fidelity: 8,
          reaction: '"No sé si llegó, Alejo. Pero lo intentamos. Y eso es más de lo que hizo la mayoría." Él asiente. No necesitamos más palabras.',
          next: 'a4_03',
        },
        {
          id: 'c10c', text: '"Ojalá algún día alguien recuerde que existimos."',
          hint: 'Legado',
          fidelity: 10,
          setFlag: 'piensa_en_legado',
          reaction: '"Alejo. Ojalá alguien, algún día, recuerde que estuvimos aquí. Que no fuimos indiferentes." Él me toma la mano a través de los barrotes. "Te van a recordar, Policarpa. Te lo prometo."',
          next: 'a4_03',
        },
      ],
    },

    a4_03: {
      id: 'a4_03',
      lines: [
        { speaker: 'narrador', text: 'El juicio dura tres horas. El Virrey Sámano no aparece. Lo representa un oidor que lee la sentencia con la misma expresión con que leería una lista de compras.', bg: 'tribunal', bgImg: 'images/bg_tribunal.svg', char: 'images/pola_decidida.svg' },
        { speaker: 'samano',   text: 'Habiéndose comprobado la participación de la acusada en actividades sediciosas y contrarias a la Corona de España... se condena a la pena de muerte.' },
        { speaker: 'narrador', text: 'Nueve personas. Nueve sentencias de muerte. Soy la única mujer.' },
        { speaker: 'pensar',   text: '¿Qué se siente saber la fecha de tu propia muerte? Curiosamente, se siente como libertad.' },
      ],
      note: { id: 'samano_virrey', title: 'Nota histórica: El Virrey Sámano' },
      choiceQuestion: '¿Cómo enfrenta La Pola el tribunal?',
      choices: [
        {
          id: 'c11a', text: 'Con dignidad silenciosa — no les da el placer de verla sufrir',
          fidelity: 10,
          setFlag: 'dignidad_silenciosa',
          reaction: 'No lloro. No imploro. Escucho la sentencia como quien escucha lluvia caer. Mi silencio dice más que cualquier discurso.',
          next: 'act5_intro',
        },
        {
          id: 'c11b', text: 'Declara en voz alta que la historia recordará este crimen',
          fidelity: 15,
          setFlag: 'habló_en_tribunal',
          reaction: '"¡Este tribunal no tiene autoridad sobre una tierra que no es suya! ¡La historia los juzgará!" El oidor golpea el estrado. Dos soldados me toman de los brazos. Pero ya lo dije. Ya quedó dicho.',
          next: 'act5_intro',
        },
        {
          id: 'c11c', text: 'Pide clemencia para que Alejo pueda vivir',
          fidelity: -5, trust: 15,
          setFlag: 'pidió_clemencia',
          reaction: '"Señor oidor. Si debo morir, muero. Pero ese hombre no hizo nada. Les ruego clemencia para él." El oidor no levanta la vista del papel. La respuesta está en ese gesto.',
          next: 'act5_intro',
        },
      ],
    },

    /* ══════════════════════════════════════════════════════════
       ACTO V — EL ÚLTIMO AMANECER
       14 de noviembre de 1817, amanecer
    ══════════════════════════════════════════════════════════ */

    act5_intro: {
      id: 'act5_intro',
      actIntro: {
        number: 'Acto V',
        title:  'El Último Amanecer',
        historical: 'Bogotá, 14 de noviembre de 1817. El sol sale sobre la Plaza Mayor. Nueve patriotas aguardan la ejecución.',
      },
      lines: [],
      next: 'a5_final',
    },

    a5_final: {
      id: 'a5_final',
      lines: [
        { speaker: 'narrador', text: 'La Plaza Mayor amanece gris y fría. La gente se ha congregado — no por voluntad, sino porque los soldados los empujaron hasta aquí.', bg: 'plaza', bgImg: 'images/bg_plaza_ejecucion.svg', char: 'images/pola_valiente.svg' },
        { speaker: 'narrador', text: 'Camino hacia el lugar de ejecución sin que mis pies arrastren. El Padre Marcos me dijo ayer que rezara. Recé toda la noche. Y llegué a la paz.' },
        { speaker: 'pola',     text: 'Este es el momento en que una debería tener miedo. Y sin embargo.' },
        { speaker: 'pensar',   text: 'Sin embargo pienso en Miguel. En el convoy que se salvó. En los mensajes que llegaron. En cada pequeña cosa que hicimos.' },
        { speaker: 'coronel',  text: '¡Arrodíllese!' },
      ],
      next: (s) => {
        // Determinar ending según fidelidad y flags
        const f = s.fidelity;
        const flags = s.flags;

        if (flags.has('intentó_huir') && !flags.has('se_quedó') && !flags.has('salio_ultima_mision')) return 'ending_fuga';
        if (flags.has('pidió_clemencia') && f < 40) return 'ending_sacrificio';
        if (flags.has('info_falsa') && f < 50 && !flags.has('se_quedó')) return 'ending_doble';
        if (flags.has('misión_completada') && f >= 70) return 'ending_victoria';
        return 'ending_canon';
      },
    },

    /* ══════════════════════════════════════════════════════════
       FINALES
    ══════════════════════════════════════════════════════════ */

    ending_canon: {
      id: 'ending_canon',
      lines: [
        { speaker: 'coronel',  text: '¡Arrodíllese ante la Corona!' },
        { speaker: 'pola',     text: 'Tengo valor para morir, y sobra vergüenza para quien así nos trata. No me arrodillo.' },
        { speaker: 'narrador', text: 'La Plaza Mayor entera escucha. Un murmullo recorre la multitud. Un soldado levanta el rifle.' },
        { speaker: 'pola',     text: '¡Pueblo indolente! ¡Cuán diversa sería vuestra suerte si conocieseis el precio de la libertad! ¡Pero no es tarde. Mirad cómo muere una mujer por ser valiente y generosa!' },
        { speaker: 'narrador', text: 'Sus palabras quedan flotando sobre la plaza mucho después de que el sonido se apaga.' },
      ],
      ending: {
        type: 'Final I — El Canon Histórico',
        title: 'La Inmortal',
        body: 'Policarpa Salavarrieta fue fusilada el 14 de noviembre de 1817. Tenía aproximadamente 22 años. Se negó a arrodillarse. Sus últimas palabras encendieron en la plaza bogotana una llama que los realistas no pudieron apagar. Dos años después, en agosto de 1819, Simón Bolívar derrotó a los españoles en Boyacá y el Virrey Sámano huyó de Bogotá olvidando incluso su sombrero. En 1967, el rostro de La Pola fue elegido para el billete de diez pesos colombianos. Su nombre vive en barrios, escuelas, y en la memoria de una nación.',
        quote: '"¡Mirad cómo muere una mujer por ser valiente y generosa!" — Policarpa Salavarrieta, 14 de noviembre de 1817',
      },
    },

    ending_victoria: {
      id: 'ending_victoria',
      lines: [
        { speaker: 'coronel',  text: '¡Arrodíllese!' },
        { speaker: 'pola',     text: 'No.' },
        { speaker: 'narrador', text: 'No sabe todavía que la información que envió llegó a tiempo. Que la columna del Coronel Torres cayó en una emboscada. Que cincuenta patriotas viven por lo que hizo.' },
        { speaker: 'pensar',   text: 'Hay cosas que no necesitamos saber para haberlas hecho. Basta con haberlas hecho.' },
      ],
      ending: {
        type: 'Final II — La Victoria Silenciosa',
        title: 'El Precio de una Victoria',
        body: 'La información que Policarpa envió llegó a tiempo. La columna del Coronel Torres fue emboscada en los caminos de la sabana. Cincuenta y tres soldados realistas capturados. Las rutas hacia el norte quedaron abiertas para los ejércitos de Santander. La Pola no supo que su última misión había tenido éxito. Murió sin saberlo. Pero el resultado de su valentía aceleró la independencia de Colombia. A veces las victorias más importantes son las que nunca presenciamos.',
        quote: '"Hay cosas que no necesitamos ver para haberlas cambiado." — Para todos los que actuaron en silencio.',
      },
    },

    ending_fuga: {
      id: 'ending_fuga',
      lines: [
        { speaker: 'narrador', text: 'Aquella noche, Alejo y yo llegamos al camino que sale de Bogotá hacia el norte.', bg: 'exterior' },
        { speaker: 'narrador', text: 'Caminamos durante tres días. Al cuarto, llegamos a un campamento patriota en los llanos de Casanare.' },
        { speaker: 'alejo',    text: 'Lo logramos, Policarpa. Estamos afuera.' },
        { speaker: 'pola',     text: 'Sí. Afuera.' },
        { speaker: 'pensar',   text: 'Pero Bogotá queda atrás. Y la red que dejé, y los compañeros que no pude avisar, y todas las cosas que quedaron sin hacer.' },
      ],
      ending: {
        type: 'Final III — La Fuga',
        title: 'La que Eligió Vivir',
        body: 'Policarpa y Alejo escaparon de Bogotá y se unieron a las fuerzas del general Santander en el norte. Vivieron. La historia no los recuerda como mártires sino como sobrevivientes. Sin el sacrificio que los hizo inmortales, sus nombres se perdieron en los registros administrativos de la nueva república. Pero ellos estuvieron ahí, en los llanos, cuando Bolívar cruzó los Andes y venció en Boyacá. Eligieron vivir para ver la victoria. Eso, quizás, tiene su propio valor.',
        quote: '"Eligió vivir. Y en esa elección también hay valentía." — Historia alternativa.',
      },
    },

    ending_sacrificio: {
      id: 'ending_sacrificio',
      lines: [
        { speaker: 'narrador', text: 'En el tribunal, La Pola suplicó por Alejo. El oidor guardó silencio.', bg: 'tribunal' },
        { speaker: 'narrador', text: 'Al día siguiente, la sentencia llegó modificada: Alejo Sabaraín sería deportado a las Islas Canarias. No ejecutado.' },
        { speaker: 'pensar',   text: 'Al menos uno de nosotros verá el final de esta historia.' },
        { speaker: 'pola',     text: 'Murió callada. Sin discurso. Sin últimas palabras heroicas. Murió sabiendo que Alejo vivía.' },
      ],
      ending: {
        type: 'Final IV — El Sacrificio Silencioso',
        title: 'Amor sobre la Gloria',
        body: 'La Pola murió sin el discurso que la hubiera inmortalizado. Sus últimas palabras nunca fueron registradas. Alejo Sabaraín fue deportado a España, donde murió años después sin ver la independencia. Sin embargo, algunas versiones históricas sugieren que regresó clandestinamente a Colombia en 1820 y participó en la campaña final. La historia que nunca fue famosa puede haber sido igualmente valiente.',
        quote: '"El amor también es una forma de patria." — Para quienes eligieron a sus personas sobre su legado.',
      },
    },

    ending_doble: {
      id: 'ending_doble',
      lines: [
        { speaker: 'narrador', text: 'Los nombres falsos que dio confundieron al Coronel González durante semanas enteras.', bg: 'celda' },
        { speaker: 'narrador', text: 'Pero en el proceso, La Pola tuvo que alejarse de la red. Los compañeros no confiaban en alguien que había hablado, aunque fuera con información falsa.' },
        { speaker: 'pensar',   text: 'Sobreviví. Pero ya no pertenezco a ningún lado.' },
      ],
      ending: {
        type: 'Final V — Entre Dos Mundos',
        title: 'La Precio de la Astucia',
        body: 'La información falsa que dio La Pola confundió al aparato realista y salvó temporalmente a la red. Pero el rumor de que había hablado la aisló de los patriotas. Vivió el resto de la Reconquista en una zona gris, sin pertenecer a ningún bando, sobreviviendo. Cuando la independencia llegó en 1819, su nombre no estaba en ninguna lista de héroes. Solo ella sabía lo que había hecho y lo que había sacrificado para hacerlo. Algunas historias solo las conoce quien las vivió.',
        quote: '"No todas las victorias se pueden celebrar en voz alta." — Para los que actuaron en las sombras.',
      },
    },

  }, // fin nodes
}; // fin Story

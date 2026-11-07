(() => {
  "use strict";

  // Configura aquí la fecha oficial en formato ISO 8601 con zona horaria.
  // Ejemplo: const LAUNCH_DATE_ISO = "2027-05-15T09:00:00-07:00";
  // Se deja en null para no inventar una fecha de lanzamiento.
  const LAUNCH_DATE_ISO = null;

  const text = {
    en: {
      navMission:"Mission",navHistory:"Story",navPhysics:"Physics",navEngineering:"Engineering",navMetrics:"Metrics",navCrew:"Crew",menuLabel:"SECTIONS",
      heroTag:"MISSION LOG · CHALLENGE F1025B",heroTitle:"From legend to method.<br><em>The next mission</em><br>starts here.",heroDescription:"WAN HU 67 is an aerospace project by Rocket Tec combining experimentation, physical modeling and flight analysis. A mission to turn questions into data and data into engineering decisions.",heroCta1:"Explore the engineering",heroCta2:"Discover the story",statusLabel:"MISSION STATUS",statusValue:"IN DEVELOPMENT",editionLabel:"EDITION",artCaption:"OFFICIAL MISSION IDENTITY",
      countTag:"T-MINUS · COUNTDOWN",countTitle:"Next launch window",countStatus:"DATE TO BE CONFIRMED",days:"DAYS",hours:"HOURS",minutes:"MINUTES",seconds:"SECONDS",countNote:"The official date will appear once the team confirms the launch window.",scroll:"SCROLL TO EXPLORE ↓",
      purposeIndex:"PURPOSE",introTitle:"A mission built<br>on <em>real questions.</em>",introCopy:"The challenge is to design, observe and understand the behavior of an aerospace system. Each test provides evidence; each model helps interpret what happens during flight.",physicsLink:"Understand the physics",
      storyIndex:"NAME ORIGIN",storyTitle:"A legend that<br><em>looked upward.</em>",storyAside:"INSPIRATION · CHINA, MING DYNASTY",hanziText:"A name associated with an old Chinese legend about the dream of flying into the sky.",whoWan:"WHO WAS WAN HU?",storyP1:"Wan Hu is the central figure in a popular legend often placed in China during the Ming dynasty. The story says he imagined a flying chair powered by rockets and accompanied by kites.",storyP2:"The story is not confirmed as a historical event. NASA presents it as a legend. For WAN HU 67, its value lies in the symbol: humanity's curiosity to explore, experiment and look beyond what is known.",storyQuote:"We do not inherit a verified feat; we take up a powerful idea: imagining how to go farther.",nasaStory:"Read NASA's educator guide ↗",
      physicsIndex:"PHYSICAL PHENOMENA",physicsTitle:"The physics behind<br><em>flight.</em>",physicsAside:"FORCES · MOTION · AERODYNAMICS",physicsLede:"Flight results from forces that change over time. Understanding them helps interpret the trajectory, estimate apogee and evaluate vehicle behavior.",thrustTitle:"Thrust",thrustText:"The force that propels the rocket by expelling mass in the opposite direction. It relates to Newton's third law: action and reaction.",gravityTitle:"Gravity and weight",gravityText:"Gravity attracts the vehicle toward Earth. Its effect competes with thrust during ascent.",dragTitle:"Aerodynamic drag",dragText:"Air opposes motion. Shape, frontal area, speed and air density influence its magnitude.",stabilityTitle:"Lift and stability",stabilityText:"Side aerodynamic forces and vehicle orientation affect the trajectory. Stability helps maintain a controlled flight attitude.",stabilityEquation:"FORCES → TRAJECTORY",apogeeTitle:"Apogee and descent",apogeeText:"Apogee is the highest point of flight. During descent, the recovery system increases air resistance and reduces vertical speed.",technicalRef:"TECHNICAL REFERENCE",
      engineeringIndex:"APPLIED ENGINEERING",engineeringTitle:"From evidence<br>to <em>prediction.</em>",engineeringAside:"METHOD · SIMULATION · VALIDATION",empiricalTag:"EXPERIMENTATION",empiricalLabel:"EMPIRICAL ENGINEERING",empiricalTitle:"Design to<br><em>discover.</em>",empiricalText:"The first phase begins with observation and experimentation: parachute tests, recording results and evidence-based adjustments.",empiricalOne:"Parachute tests",empiricalTwo:"Observation and trial",empiricalThree:"Iteration and learning",focus:"FOCUS",empiricalFooter:"EXPERIMENTAL VALIDATION",predictiveTag:"MODELING",predictiveLabel:"PREDICTIVE ENGINEERING",predictiveTitle:"Design to<br><em>predict.</em>",predictiveText:"The second phase combines physical models and simulation tools to estimate performance and compare predictions with observations.",predictiveOne:"Physical models in MATLAB",predictiveTwo:"SolidWorks Flow Simulation",predictiveThree:"Apogee prediction",predictiveFooter:"ANALYSIS AND PREDICTION",matlabTitle:"Mathematical modeling",matlabText:"Represent motion and analyze scenarios with physical variables.",solidTitle:"Flow simulation",solidText:"Visualize air behavior around the designed geometry.",systemsTitle:"Mission integration",systemsText:"Connect design, testing, recovery, logging and evaluation.",
      metricsIndex:"LAUNCH METRICS",metricsTitle:"Every flight leaves<br><em>a data trail.</em>",metricsAside:"INDICATORS · RESULTS TO BE RECORDED",metricsLede:"These indicators form the mission evaluation sheet. Values will be updated when verified test or launch measurements are available.",altitude:"Maximum altitude",velocity:"Maximum velocity",acceleration:"Maximum acceleration",ascentTime:"Ascent time",flightTime:"Total flight duration",recovery:"Recovery distance",toMeasure:"TO BE MEASURED",metricWarning:"No estimated figures are presented as real measurements. Model-to-flight comparisons will be added when project data becomes available.",
      outcomesIndex:"EXPECTED OUTCOMES",outcomesTitle:"One mission.<br><em>Measurable learning.</em>",outcomesIntro:"Academic success also means documenting the process, understanding differences and explaining with evidence what we learned.",outcome1Title:"Flight characterization",outcome1Text:"Build a record of the trajectory's most relevant indicators.",outcome2Title:"Testable model",outcome2Text:"Compare physical predictions with the available observations.",outcome3Title:"Recovery assessment",outcome3Text:"Analyze descent behavior and vehicle recovery.",outcome4Title:"Reproducible documentation",outcome4Text:"Preserve decisions, assumptions, results and opportunities to improve.",
      identityIndex:"VISUAL IDENTITY",identityTitle:"The visual code<br>of <em>WAN HU 67.</em>",identityText:"The official emblem and wordmark are preserved as provided: the rocket, moon and dragon are the mission's visual seal.",crewIndex:"CREW",crewTitle:"Five people.<br><em>One shared horizon.</em>",crewIntro:"Initial proposal for distributing responsibilities. Roles can be adjusted to reflect the team's actual tasks and agreements.",proposedRole:"PROPOSED ROLE",roleAdrian:"CAD design and simulation",detailAdrian:"Development of the 3D design and analysis of aerodynamic behavior using simulation tools.",roleJuan:"Mathematical modeling",detailJuan:"Development and analysis of physical models and motion scenarios in MATLAB.",roleSantiago:"Mission integration and testing",detailSantiago:"Coordination of subsystem integration, test follow-up and progress verification.",roleLuis:"Data logging and metrics",detailLuis:"Organization of measurements, test log and analysis of flight indicators.",roleKarely:"Documentation and communications",detailKarely:"Technical documentation, results presentation and visual communications.",crewNote:"These roles are an editable proposal, not a confirmed official assignment.",finalTag:"END OF LOG · MISSION 2026",finalTitle:"Curiosity is our<br><em>starting point.</em>",backTop:"Back to top",schoolFooter:"Tecnológico de Monterrey<br>Campus Sinaloa · Challenge F1025B",motto:"DESIGN · TEST · UNDERSTAND",footerLog:"MISSION LOG",footerTop:"BACK TO TOP ↑"
    },
    es: {}
  };

  const langButton = document.getElementById("lang-button");
  const langLabel = document.getElementById("lang-label");
  let currentLanguage = "es";

  function setLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;
      if (language === "en" && text.en[key] !== undefined) element.textContent = text.en[key];
      else if (language === "es") {
        // Spanish is the authored default in the HTML; restore it from this immutable snapshot.
        if (element.dataset.originalText !== undefined) element.textContent = element.dataset.originalText;
      }
    });
    document.querySelectorAll("[data-i18n-html]").forEach(element => {
      const key = element.dataset.i18nHtml;
      if (language === "en" && text.en[key] !== undefined) element.innerHTML = text.en[key];
      else if (language === "es" && element.dataset.originalHtml !== undefined) element.innerHTML = element.dataset.originalHtml;
    });
    langLabel.textContent = language === "es" ? "EN" : "ES";
    langButton.setAttribute("aria-label", language === "es" ? "Cambiar idioma a inglés" : "Switch language to Spanish");
    const menuButtonForLanguage = document.querySelector(".menu-button");
    if (menuButtonForLanguage) menuButtonForLanguage.setAttribute("aria-label", language === "es" ? "Abrir menú de secciones" : "Open sections menu");
    updateCountdownLabels();
  }

  // Preserve the original Spanish copy to make language switching reversible.
  document.querySelectorAll("[data-i18n]").forEach(element => { element.dataset.originalText = element.textContent; });
  document.querySelectorAll("[data-i18n-html]").forEach(element => { element.dataset.originalHtml = element.innerHTML; });
  langButton.addEventListener("click", () => setLanguage(currentLanguage === "es" ? "en" : "es"));

  // Dropdown navigation on desktop and mobile, with keyboard and outside-click support.
  const menuButton = document.querySelector(".menu-button");
  const navLinks = [...document.querySelectorAll(".nav-links a")];
  const nav = document.querySelector(".nav-links");

  function setMenuOpen(open) {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", currentLanguage === "es"
      ? (open ? "Cerrar menú de secciones" : "Abrir menú de secciones")
      : (open ? "Close sections menu" : "Open sections menu"));
    nav.classList.toggle("open", open);
  }

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navLinks.forEach(link => link.addEventListener("click", () => setMenuOpen(false)));
  document.addEventListener("click", event => {
    if (!event.target.closest(".nav")) setMenuOpen(false);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  // Highlight the current section in the sticky navigation.
  const observedSections = navLinks.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-28% 0px -62% 0px", threshold: 0 });
  observedSections.forEach(section => observer.observe(section));

  function updateCountdownLabels() {
    const labels = currentLanguage === "es"
      ? { status: "FECHA POR CONFIRMAR", note: "La fecha oficial aparecerá cuando el equipo confirme la ventana de lanzamiento." }
      : { status: "DATE TO BE CONFIRMED", note: "The official date will appear once the team confirms the launch window." };
    const status = document.getElementById("countdown-status");
    const note = document.getElementById("countdown-note");
    if (!LAUNCH_DATE_ISO) {
      status.textContent = labels.status;
      note.textContent = labels.note;
      ["days", "hours", "minutes", "seconds"].forEach(id => document.getElementById(id).textContent = "--");
    }
  }

  function tickCountdown() {
    if (!LAUNCH_DATE_ISO) return;
    const target = new Date(LAUNCH_DATE_ISO).getTime();
    const now = Date.now();
    const remaining = target - now;
    if (!Number.isFinite(target)) {
      document.getElementById("countdown-status").textContent = "FECHA NO VÁLIDA";
      return;
    }
    if (remaining <= 0) {
      document.getElementById("countdown-status").textContent = currentLanguage === "es" ? "VENTANA INICIADA" : "LAUNCH WINDOW OPENED";
      ["days", "hours", "minutes", "seconds"].forEach(id => document.getElementById(id).textContent = "00");
      return;
    }
    const values = { days: Math.floor(remaining / 86400000), hours: Math.floor((remaining % 86400000) / 3600000), minutes: Math.floor((remaining % 3600000) / 60000), seconds: Math.floor((remaining % 60000) / 1000) };
    Object.entries(values).forEach(([id, value]) => document.getElementById(id).textContent = String(value).padStart(2, "0"));
    document.getElementById("countdown-status").textContent = currentLanguage === "es" ? "CUENTA REGRESIVA ACTIVA" : "COUNTDOWN ACTIVE";
  }
  updateCountdownLabels();
  tickCountdown();
  window.setInterval(tickCountdown, 1000);

  // Respect reduced-motion preferences; decorative stars remain CSS-only.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".hero-logo,.art-star").forEach(el => el.style.animation = "none");
  }
})();

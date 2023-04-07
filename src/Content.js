// import images
import {
  css,
  express,
  figma,
  git,
  html,
  js,
  node,
  ps,
  python,
  react,
  saas,
  sc,
  tailwind,
  vite,
  csharp,
  dotnet,
  php,
  wordpress,
  nextjs,
  typescript,
  sanity
} from './assets/technologies'

import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
} from './assets/testimonials'

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    // {
    //   link: "/",
    //   icon: '',
    //   text: "Home",
    // },
    {
      link: "#aboutus",
      icon: '',
      text: "About Us",
      sr: "O nama",
    },
    {
      link: "#offer",
      icon: '',
      text: "Offer",
      sr: "Ponuda",
    },
    {
      link: "#services",
      icon: '',
      text: "Services",
      sr: "Usluge",
    },
    {
      link: "#projects",
      icon: '',
      text: "Projects",
      sr: "Projekti",
    },
    {
      link: "#contact",
      icon: '',
      text: "Contact",
      sr: "Kontakt",
    },
  ],

  solutions: [
    {
      icon: '',
      title: 'UX and UI design',
      desc: 'We start designing a web app with the analysis of target audience and planning convenient, quick and frictionless user journeys. Along the way, our UI designers join in to wrap the interface into a stylish cover.',
      titleSr: 'UI/UX Dizajn',
      sr: 'Mi započinjemo dizajniranje analizom ciljne publike i planiranjem praktičnih i brzih, neometanih rešenja za savršeni korisnički doživljaj!',
    },
    {
      icon: '',
      title: 'Architecture',
      desc: 'Our solution architects will plan all functional components and select optimal techs for them to ensure that the business logic to be implemented is feasible and full. They will also map all API connections within the web solution and with outside systems.',
      titleSr: 'Arhitektura',
      sr: 'Naše arhitekte su tu da planiraju sve funkcionalne komponente i da odaberu optimalne tehnologije za njih kako bi osigurali da je logika koja se implementira bila izvodljiva i potpuna!'
    },
    {
      icon: '',
      title: 'Front-end development',
      desc: 'Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all most-used JavaScript frameworks, such as Angular, React, Meteor, Vue, Next, Ember.',
      titleSr: 'Front-End Programiranje',
      sr: 'Naši front-end Programeri će svaku ideju dizajna pretvoriti u realnost i osigurati da svi elementi interfejsa rade ispravno!'
    },
    {
      icon: '',
      title: 'Back-end development',
      desc: 'Our developers accurately implement the business logic of your web app on the back end. We rely on proven frameworks and ensure fast and quality coding in .Net, Java, Python, Node.js, PHP, Go.',
      titleSr: 'Back-End Programiranje',
      sr: 'Naši back-end Programeri su tu da precizno implementiraju poslovnu logiku vaše web aplikacije na serveru!'
    },
    {
      icon: '',
      title: 'Testing and QA',
      desc: 'We guarantee that your web solution will function flawlessly, work fast, be user-friendly and secure. We have a team of skilled testing engineers to make promises like that.',
      titleSr: 'Testiranje i Garancija Kvaliteta',
      sr: 'Garantujemo da će vaše WEB rešenje funkcionisati besprekorno, raditi brzo, biti bezbedno i maksimalno prilagodjeno korisniku. Imamo tim veštih inženjera za testiranje koji mogu dati to obećanje!',
    },
    {
      icon: '',
      title: 'Help desk',
      desc: 'We deliver hot-fixes within 24 hours to prevent or resolve any issues in usage, technology and code that may arise. We help you provide high availability and trouble-free functionality of your web app.',
      titleSr: 'Pomoć',
      sr: 'Isporučujemo hitne ispravke u roku od 24h kako bismo sprečili ili rešili probleme u korišćenju, tehnologiji i kodu koji se mogu pojaviti. Pomažemo vam da obezbedite visoku dostupnost i funkcionalnost vaše veb aplikacije bez problema!',
    },
    {
      icon: '',
      title: 'Continuous support and evolution',
      desc: 'We advance your web-based software to keep it efficient, competitive on the market, and compliant with all your evolving business needs. Our well-established DevOps processes let us roll out urgent updates within 1-2 days and release new, planned functional modules every 2-6 weeks.',
      titleSr: 'Stalna Podrška i Razvoj',
      sr: 'Mi unapredjujemo vaš softver zasnovan na web-u kako bismo ga održali efikasnim i konkurentnim na tržištu, kao i uskladjenim sa svim vašim poslovnim potrebama koje se razvijaju. Naši dobro uspostavljeni DEVOPS procesi nam omogucavaju da uvedemo hitna ažuriranja u roku od 1-2 dana i objavimo nove, planirane i funkcionalne module svakih 2-6 nedelja.',
    },
  ],

  services: [
    {
      icon: '',
      title: 'WEB APPLICATION DEVELOPMENT SERVICES',
      desc: 'From design to integration to maintenance, we offer full-cycle web application development services. We build apps that are secure, scalable, fast, and work well across all devices and platforms.',
      titleSr: 'USLUGE RAZVOJA WEB APLIKACIJA',
      sr: 'Od dizajna, integracije pa sve do održavanja, nudimo usluge razvoja WEB Aplikacija. Pravimo Aplikacije koje su bezbedne, skalabilne, i funkcionalne na svim uredjajima i platformama.',
    },
    {
      icon: '',
      title: 'ECOMMERCE WEB DEVELOPMENT SERVICES',
      desc: 'Build an online store with seamless and user-friendly experience, the right extensions, and reliable integration with your other processes. Our ecommerce web development services include building full-scale ecommerce platforms.',
      titleSr: 'USLUGE WEB RAZVOJA E-TRGOVINE',
      sr: 'Napravićemo za vas online prodavnicu sa besprekornim korisničkim iskustvom, pravim dodacima i pouzdanom integracijom sa vašim drugim procesima. Naše usluge razvoja WEB-a za E-Trgovinu uključuju izgradnju platformi za e-trgovinu u potpunosti!',
    },
    // {
    //   icon: '',
    //   title: 'JAVA WEB DEVELOPMENT SERVICES',
    //   desc: 'With over a decade in providing reliable Java web development services, you can trust us to build a comprehensive web solution on Java for your business.',
    //   sr: '',
    // },
    // {
    //   icon: '',
    //   title: 'MAGENTO WEB DEVELOPMENT SERVICES',
    //   desc: 'Use our expertise to create and expand your online store on the Magento platform. Our Magento web development services can also help you transfer your existing store to the platform or add new extensions.',
    //   sr: '',
    // },
    // {
    //   icon: '',
    //   title: 'DRUPAL WEB DEVELOPMENT SERVICES',
    //   desc: 'From comprehensive module management to building a web solution from scratch, our Drupal web development services will cover your every business need.',
    //   sr: '',
    // },
    {
      icon: '',
      title: 'CUSTOM WEB DEVELOPMENT SERVICES FOR THE ENTERPRISE',
      desc: 'Build a custom solution for your business from the ground-up. Our wide-ranging custom web development services allow you to create cross-platform solutions for any industry regardless of scale or complexity.',
      titleSr: 'USLUGE WEB RAZVOJA ZA VAŠE PREDUZEĆE',
      sr: 'Izradićemo za vas prilagodjeno rešenje za vaše poslovanje od samog početka. Naše usluge širokog spektra prilagodjenih WEB razvojnih usluga omogućavaju nam da kreiramo rešenja za više platformi i za bilo koju industriju bez obzira na obim ili složenost!',
    },
  ],

  technologies: [
    {
      icon: html,
      title: 'HTML',
      desc: '',
    },
    {
      icon: css,
      title: 'CSS',
      desc: '',
    },
    {
      icon: saas,
      title: 'SaaS',
      desc: '',
    },
    {
      icon: tailwind,
      title: 'Tailwind CSS',
      desc: '',
    },
    {
      icon: js,
      title: 'JavaScript',
      desc: '',
    },
    {
      icon: react,
      title: 'React.js',
      desc: '',
    },
    {
      icon: nextjs,
      title: 'Next.js',
      desc: '',
    },
    {
      icon: vite,
      title: 'Vite',
      desc: '',
    },
    {
      icon: typescript,
      title: 'TypeScript',
      desc: '',
    },
    {
      icon: node,
      title: 'Node.js',
      desc: '',
    },
    {
      icon: express,
      title: 'Express',
      desc: '',
    },
    {
      icon: php,
      title: 'PHP',
      desc: '',
    },
    {
      icon: python,
      title: 'Python',
      desc: '',
    },
    {
      icon: csharp,
      title: 'C#',
      desc: '',
    },
    {
      icon: dotnet,
      title: '.NET',
      desc: '',
    },
    {
      icon: wordpress,
      title: 'WordPress',
      desc: '',
    },
    {
      icon: git,
      title: 'Git',
      desc: '',
    },
    {
      icon: sanity,
      title: 'Sanity',
      desc: '',
    },
    {
      icon: figma,
      title: 'Figma',
      desc: '',
    },
    {
      icon: ps,
      title: 'PhotoShop',
      desc: '',
    },
    {
      icon: sc,
      title: 'Styled Components',
      desc: '',
    },
  ],

  testimonials: [
    {
      img: avatar1,
      name: 'Jacob Jones',
      comment: 'If you havent tried out App yet, I would definitely recommend it for both designers and developers',
    },
    {
      img: avatar2,
      name: 'Jacob Jones',
      comment: 'If you havent tried out Flaro App yet, I would definitely recommend it for both designers and developers',
    },
    {
      img: avatar3,
      name: 'Jacob Jones',
      comment: 'If you havent tried out Flaro App yet, I would definitely recommend it for both designers and developers',
    },
    {
      img: avatar4,
      name: 'Jacob Jones',
      comment: 'If you havent tried out Flaro App yet, I would definitely recommend it for both designers and developers',
    },
    {
      img: avatar5,
      name: 'Jacob Jones',
      comment: 'If you havent tried out Flaro App yet, I would definitely recommend it for both designers and developers',
    },
    {
      img: avatar6,
      name: 'Jacob Jones',
      comment: 'If you havent tried out Flaro App yet, I would definitely recommend it for both designers and developers',
    },
  ],
  aboutUs:
    {
      title: "Providing your business with a quality IT service is our passion.",
      desc: `At Devolix, we are passionate about building websites that deliver results. We understand that your website is often the first point of contact with your customers, so it needs to make a great first impression. That's why we specialize in creating beautiful, user-friendly websites that engage visitors and encourage them to take action. 
            We believe that the success of your website is our success, and we look forward to partnering with you to achieve your online goals. Contact us today to learn more about our web development services and how we can help you take your online presence to the next level.`,
      
      titleSr: 'Naša Strast je Pružanje Kvalitetne IT Usluge Vašem Poslovanju.',
      descSr: 'Mi smo strastveni u izgradnji WEB Sajtova koji daju rezultate. Razumemo da je vaša WEB stranica često prva tačka kontakta sa vašim klijentima, tako da mora da ostavi odličan prvi utisak. Zbog toga smo specijalizovani za izradu prelepih WEB sajtova prilagodjenih korisniku koji angažuju posetioce i podstiču ih na akciju. Verujemo da je uspeh vaše WEB stranice i naš uspeh i radujemo se partnerstvu sa vama kako bismo postigli vaše online ciljeve. Kontaktirajte nas da biste saznali više o našim uslugama WEB razvoja i kako vam možemo pomoći da svoje prisustvo na mreži podignete na viši nivo!',
    },
  whyUs:
    {
      title: "Achieve digital transformation for your retail business services.",
      desc: `Our team of experienced web developers and designers works closely with you to understand your business goals and create a website that reflects your brand and meets your specific needs. Whether you need a simple brochure website or a complex e-commerce platform, we have the expertise to deliver a high-quality solution that exceeds your expectations.
            We are committed to delivering exceptional customer service and support, and we strive to build long-term relationships with our clients. We are dedicated to staying up-to-date with the latest web development technologies and best practices, so you can be confident that your website is built to the highest standards.`,
    
      titleSr: 'Ostvarite Digitalnu Transformaciju Za Vaše Poslovne Usluge!',
      descSr: 'Naš tim iskusnih WEB Programera i Dizajnera blisko saradjuje sa vama kako bi razumeli vaše poslovne ciljeve i kreirali WEB Sajt koji odražava vaš Brend i ispunjava vaše specifične potrebe. Bilo da vam je potrebna jednostavna WEB stranica ili Složena Platforma za E-Trgovinu, Mi imamo stručnost da isporučimo visokokvalitetno rešenje koje prevazilazi vaša očekivanja. Posvećeni smo pružanju izuzetne korisničke usluge i podrške, i nastojimo da izgradimo dugoročne odnose sa našim klijentima. Posvećeni smo i tome da budemo u toku sa najnovijim tehnologijama za razvoj WEB-a i najboljim praksama, tako da možete biti sigurni da je vaša WEB Stranica napravljena po najvišim standardima!',
    },
    contact: {
      title: "Contact Us",
      titleSr: "Kontaktirajte Nas",
      subtitle: "GET IN TOUCH",
      subtitleSr: "STUPITE U KONTAKT",
      social_media: [
        {
          text: "info@devolux.tech",
          icon: GrMail,
          link: "mailto:rajko.fed@gmail.com",
        },
        {
          text: "+381 61 628 7766",
          icon: MdCall,
          link: "https://wa.me/+381603120009",
        },
        {
          text: "Devolux",
          icon: BsLinkedin,
          link: "",
        },
        {
          text: "DEVOLUX",
          icon: BsGithub,
          link: "",
        },
      ],
    },
  footer: {
    text: "All © CopyRight Reserved 2022",
  },



};

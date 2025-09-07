export interface PDPData {
  id: string | null;
  displayImages: (string | null)[];
  page1: {
    area: (string | null)[];
    title: string | null;
    shortDescription: string | null;
    projectLink: string | null;
    image: string | null;
    imageMobile?: string | null;
  };
  page2: {
    pageTitle: string | null;
    industry: string | null;
    team: string | null;
    role: string | null;
    clientBackground: string | null;
    image: string | null;
    imageMobile?: string | null;
  };
  page3: {
    media: string | null;
    mediaMobile?: string | null;
  };
  page4: {
    pageTitle: string | null;
    brandPositioning?: string | null;
    stakeholderInterviews?: string | null;
    marketAnalysis?: string | null;
    targetAudience?: string | null;
    theReality?: string | null;
    theChallenge?: string | null;
    image: string | null;
    imageMobile?: string | null;
  };
  page5: {
    image: string | null;
    imageMobile?: string | null;
  };
  page6: {
    pageTitle: string | null;
    uxPlanning?: string | null;
    styleGuide?: string | null;
    visualDirection?: string | null;
    techPerformance?: string | null;
    theSolution?: string | null;
    theVisualNarrative?: string | null;
    image: string | null;
    imageMobile?: string | null;
  };
  page7: {
    pageTitle?: string;
    finalDirection?: string | null;
    image?: string | null;
    imageMobile?: string | null;
  };
  page8: {
    media: string | null;
    mediaMobile?: string | null;
  };
  page9: {
    moreProjects: string | null;
  };
}

export const pdpData: Record<string, PDPData> = {
  pdp1: {
    id: "pdp1",
    displayImages: [
      "/images/pdp1/main.jpg",
      "/images/pdp1/overview.jpg",
      "/images/pdp1/gallery1.jpg",
      "/images/pdp1/gallery2.jpg",
      "/images/pdp1/gallery3.jpg",
    ],
    page1: {
      area: ["Web Design", "UI/UX Redesign", "Email Marketing"],
      title: "Typsy Beauty",
      shortDescription:
        "A conceptual beauty brand with a narrative of its own, one that extends beyond the product. From email marketing to website experience, every touchpoint was shaped with fastidious intent to reflect a cohesive brand narrative.",
      projectLink: null,
      image: "/images/pdp/pdp1/main.png",
      imageMobile: "/images/pdp/pdp1/main.jpg",
    },
    page2: {
      pageTitle:
        "Painting a New Identity – A Makeover of Typsy Beauty's Digital Aisle",
      industry: "B2C, Beauty & Cosmetics",
      team: "Ocularity Analytics",
      role: "Senior Visual Designer",
      clientBackground:
        "Typsy Beauty partnered with Ocularity Analytics to establish a full-funnel digital ecosystem including end-to-end e-commerce setup, Shopify website design, deployment, management, and email marketing. My team led all design-led initiatives, spanning digital identity, style guides, and user interface design.",
      image: "/images/pdp/pdp1/main2.png",
      imageMobile: "/images/pdp/pdp1/main2.jpg",
    },
    page3: {
      media: "/images/pdp/pdp1/cover3.png",
      mediaMobile: "/images/pdp/pdp1/cover3.jpg",
    },
    page4: {
      pageTitle: "Brand, Audience And Market Foundations",
      brandPositioning:
        "As a homegrown, conceptual beauty brand, Typsy Beauty sets out to make a mark on the world, one 'dramatic' makeup look at a time. They demystify dramatic looks by bridging the gap between high-concept makeup and everyday glam. Every creative touchpoint reflects this core ethos: boundlessly dreamy, yet dramatic.",
      stakeholderInterviews:
        "While Typsy Beauty has seen steady revenue growth, early conversations surfaced potential to strengthen its online presence by addressing bounce rates and improving conversion flows. Subsequent deep-dive sessions helped identify critical features, functional priorities, and aspirational benchmarks.",
      marketAnalysis:
        "We conducted an audit of both direct and aspirational competitors like Glossier, Fenty Beauty, ILIA, Gush, and Makeup by Mario to identify opportunity gaps. Narrative-led content architecture and intuitive shade-matching journeys emerged as key differentiators.",
      targetAudience:
        "Typsy Beauty speaks to a new wave of consumers who view makeup as a form of storytelling. Their core audience? Gen Z dreamers with a sharp eye for design, and a desire to stand out. Typsy's multifunctional, high-quality product line answers that call. Our digital transformation aimed to showcase Typsy's passionate community.",
      image: "/images/pdp/pdp1/main4.png",
      imageMobile: "/images/pdp/pdp1/main4.jpg",
    },
    page5: {
      image: "/images/pdp/pdp1/cover5.png",
      imageMobile: "/images/pdp/pdp1/cover5.jpg",
    },
    page6: {
      pageTitle: "Design And Experience Strategy",
      uxPlanning:
        "While Typsy's digital ecosystem sought a transformation that was soft and ethereal, the attitude was anything but. We approached the digital transformation through a modular design lens—emphasising scannability, visual storytelling, and seamless navigation across screens and sessions. A mobile-first approach took precedence throughout highlighting key flows like skin tone–based discovery, editorial-led storytelling, and highlighted sections for new product drops and campaigns. At the core of the UX strategy was a refreshed PDP flow, introduced to improve ingredient education, swatch visibility, and cross-selling opportunities with integrated video and quantifiable metrics for transparency.",
      styleGuide:
        "At the heart of Typsy Beauty's digital expression was a comprehensive guide, an invisible thread stitching every interface into a seamless narrative. Marrying typographic systems, spatial hierarchy, responsive scaling, colour theory, and grid structure, their style guide ensured coherence across touch-points.",
      visualDirection:
        "Great design is not just visual, it is visceral. Typsy's digital transformation was shaped by the principles of neuroaesthetics and experience design. By prioritising human response over aesthetics, we crafted experiences that leave a mark, spark memory, and ripple far beyond a single scroll or click. This ethos informed every layer of the interface, from soft gradients and fluid forms to pastel overlays that channelled Typsy's signature aesthetic: boundlessly dreamy, with an edge of drama. ",
      techPerformance:
        "Collaborating closely with the dev team, layout behaviour and navigation logistics were mapped meticulously across breakpoints to ensure stability across devices. Front-end assets were optimised for performance: lazy-loading was used where applicable, media was compressed without loss in quality, and animations were kept lightweight to maintain smooth transitions.",
      image: "/images/pdp/pdp1/main6.png",
      imageMobile: "/images/pdp/pdp1/main6.jpg",
    },
    page7: {
      pageTitle: "Website As The Canvas",
      finalDirection:
        "Typsy Beauty's digital transformation demystifies dramatic makeup looks by making them approachable and wearable, bridging the gap between high-concept makeup and everyday glam. The result? Dwell time soared. Bounce rate plummeted. The sleek new website wooed with its user-friendly design.",
      image: "/images/pdp/pdp1/cover7.png",
      imageMobile: "/images/pdp/pdp1/cover7.jpg",
    },
    page8: {
      media: "/images/pdp1/final1.jpg",
      mediaMobile: "/images/pdp1/final1.jpg",
    },
    page9: {
      moreProjects:
        "Explore more projects that showcase our approach to brand identity and digital design. Explore more projects that showcase our approach to packaging design and sustainability. Lorem Ipsum is simply dummy text of the printing and typesetti industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1950s. About the project in short. Lorem Ipsum is simply dummy text of the printing and typesetti industry.",
    },
  },
  pdp2: {
    id: "pdp2",
    displayImages: [
      "/images/pdp2/main.jpg",
      "/images/pdp2/overview.jpg",
      "/images/pdp2/gallery1.jpg",
      "/images/pdp2/gallery2.jpg",
      "/images/pdp2/gallery3.jpg",
    ],
    page1: {
      area: ["Authorship", "Book Design", "Mental Health"],
      title: "NIMHANS",
      shortDescription:
        "Written and designed for the National Institute of Mental Health and Neurosciences (NIMHANS), Numbing Exhilaration discloses mysteries of a bipolar experience through a fictional narrative, highlighting the healing potential of adaptable lifestyle alternatives.",
      projectLink: null,
      image: "/images/pdp/pdp2/main.png",
      imageMobile: "/images/pdp/pdp2/main.jpg",
    },
    page2: {
      pageTitle:
        "Beyond Awareness: Tracing Bipolar Experiences with NIMHANS, Bangalore",
      industry: "Public Sector, Healthcare, Education & Neuroscience Research",
      team: null,
      role: "Author & Designer",
      clientBackground:
        "In collaboration with the Psychosis Department at NIMHANS and guided by patients’ lived experiences, I wrote Numbing Exhilaration, a graphic novel that uses experimental typography and fiction to reimagine how Bipolar Disorder is understood and spoken of in India. Displayed in the waiting room of Dr. Murali Dhawan, it offers pragmatic coping strategies, making clinical knowledge accessible. ",
      image: "/images/pdp/pdp2/main2.png",
      imageMobile: "/images/pdp/pdp2/main2.jpg",
    },
    page3: {
      media: "/images/pdp/pdp2/cover3.png",
      mediaMobile: "/images/pdp/pdp2/cover3.jpg",
    },
    page4: {
      pageTitle: null,
      theReality:
        "In our everyday lives, everyone experiences ups and downs every now and then. Transient periods of moodiness, unrelated to any psychiatric diagnosis, are common in most people.  But bipolar disorder is an amplification of these ordinary shifts. It is a chronic mood disorder that affects 0.4% to 0.6% of India’s population. Studies indicate that nearly 1 in 3 diagnosed have attempted suicide at least once. Yet, it remains shrouded in stigma.",
      theChallenge:
        "Bipolar disorder in India is not just under-diagnosed; it is perilously overlooked. Many still assume that medication alone can manage the condition, disregarding the effectiveness of therapies. This lack of awareness leaves patients and caregivers ill-equipped to navigate the disorder, and such persistent barriers underscore the urgent need to address stigma and interventions that translate clinical knowledge into accessible, practical guidance.",
      image: "/images/pdp/pdp2/main4.png",
      imageMobile: "/images/pdp/pdp2/main4.jpg",
    },
    page5: {
      image: "/images/pdp/pdp2/cover5.png",
      imageMobile: "/images/pdp/pdp2/cover5.jpg",
    },
    page6: {
      pageTitle: null,
      theSolution:
        "Numbing Exhilaration seeks to counter that stigma. More than a guide, it is a bridge- equipping patients and caregivers with pragmatic coping mechanisms that can be adapted alongside therapy and medication. Displayed in the waiting room of Dr. Murali Dhawan at the Psychosis Department of NIMHANS, the book directly engages those for whom this knowledge is most urgent: patients, caregivers, and individuals seeking early recognition of symptoms.",
      theVisualNarrative:
        "Numbing Exhilaration unfolds through layered storytelling, bringing awareness to how symptoms manifest and episodes cycle, exploring both their terrors and their cruel allure alongside everyday struggles. The design incorporates experimental typography as voice and emotion, shifting through manipulated structures and hand-drawn compositions to mirror the disorder’s dualities.",
      image: "/images/pdp/pdp2/main6.png",
      imageMobile: "/images/pdp/pdp2/main6.jpg",
    },
    page7: {
      finalDirection: null,
      image: "/images/pdp/pdp2/cover7.png",
      imageMobile: "/images/pdp/pdp2/cover7.jpg",
    },
    page8: {
      media: "/videos/pdp2/final.mp4",
      mediaMobile: "/videos/pdp2/final.mp4",
    },
    page9: {
      moreProjects:
        "Explore more projects that showcase our approach to packaging design and sustainability. Lorem Ipsum is simply dummy text of the printing and typesetti industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1950s. About the project in short. Lorem Ipsum is simply dummy text of the printing and typesetti industry.",
    },
  },
  pdp3: {
    id: "pdp3",
    displayImages: [
      "/images/pdp/pdp3/main.png",
      "/images/pdp/pdp3/main2.png",
      "/images/pdp/pdp3/cover3.png",
      "/images/pdp/pdp3/main4.png",
      "/images/pdp/pdp3/cover5.png",
    ],
    page1: {
      area: ["Brand Identity", "Web Design", "UI/UX Redesign"],
      title: "FA Home",
      shortDescription:
        "As a lifestyle brand that honours meticulous craftsmanship in home décor, FA Home sought to amplify its digital presence to complement the brand experience at its retail store in DLF Camellias.",
      projectLink: "https://shopfahome.com/",
      image: "/images/pdp/pdp3/main.png",
      imageMobile: "/images/pdp3/main.jpg",
    },
    page2: {
      pageTitle:
        "Weaving FA Home's Identity – A House of Design, Rebuilt Digitally.",
      industry: "B2C, Lifestyle & Home Décor",
      team: "Ocularity Analytics",
      role: "Head of Design",
      clientBackground:
        "FA Home approached Ocularity Analytics to re-envision its digital ecosystem: from designing a flagship e-commerce store to crafting a uniquely positioned sub-brand, FA Home Junior. The result was a dual-site experience where both brands retained distinct identities, unified by a synergised design DNA.",
      image: "/images/pdp/pdp3/main2.png",
      imageMobile: "/images/pdp3/overview.jpg",
    },
    page3: {
      media: "/images/pdp/pdp3/cover3.png",
      mediaMobile: "/images/pdp3/gallery1.jpg",
    },
    page4: {
      pageTitle: "Brand, Audience And Market Foundations",
      brandPositioning:
        "A house is nothing if not personal. Rooted in artisanal heritage yet attuned to the cadence of contemporary living, each touchpoint at FA Home embodies the belief that a home should stand as the most unfeigned expression of self.",
      stakeholderInterviews:
        "The discovery phase uncovered an untapped opportunity: rising sales of the children's line called for a standalone identity. This meant reinvigorating FA Home's e-commerce presence while defining the visual cues that would anchor both brands' shared design DNA, with the goal of boosting dwell time and conversions.",
      marketAnalysis:
        "In a fragmented home décor market led by global names like H&M Home, West Elm, and Zara Home, FA Home stands apart by blending craftsmanship with storytelling, where others prioritise scale. Its dual-brand architecture extends this vision into the growing niche of design-conscious families and personalised gifting.",
      targetAudience:
        "FA Home speaks to a community of aesthetes who see their living spaces as a true reflection of self, cherishing artisanal mastery. FA Home Junior carries this ethos to modern parents and thoughtful gift-givers, offering curated pieces for baby showers and children's spaces.",
      image: "/images/pdp/pdp3/main4.png",
      imageMobile: "/images/pdp3/foundations.jpg",
    },
    page5: {
      image: "/images/pdp/pdp3/cover5.png",
      imageMobile: "/images/pdp3/process1.jpg",
    },
    page6: {
      pageTitle: "Design And Experience Strategy",
      uxPlanning:
        "A fastidiously structured UI/UX framework, anchored by symmetrical, category-specific banners, ensured intuitive navigation. Strategically positioned service touchpoints, such as 'Schedule a Consultation' which reinforced the brand's role as a personalised lifestyle consultant and 'See In Person' which catalysed foot traffic, strengthened FA Home's hybrid retail paradigm. For FA Home Juniors, transparency and trust were paramount. Messaging around VOCs and rigorous chemical screening projected a veneer of sophistication while affirming the brand’s steadfast commitment to safety and instilling confidence at every digital touchpoint.",
      styleGuide:
        "FA Home's website embodies a veneer of sophistication and accessibility. The colour palette combines neutral tone with subtle accents. Curated imagery within lifestyle contexts humanises the brand and enables online buyers to envision products organically integrated into their own thoughtfully styled homes. FA Home Junior builds on the same structural backbone while introducing playful watercolour illustrations, softened pastels, and child-friendly variations of type to resonate with a younger demographic.",
      visualDirection:
        "The visual narrative of FA Home translates its structured UX into a rich, curation-centric experience. Collection showcases employ a collage-style design, featuring high-fidelity shoots to facilitate product discovery. FA Home Juniors builds on the same structural backbone while introducing playful watercolour animations and nuanced visual cues that resonate with a younger audience. Together, the dual-branding strategy leverages shared UX rigour while tailoring the design voice: FA Home appeals to the discerning, design-conscious connoisseur, and Juniors emphasises trust, safety, and everyday comfort.",
      techPerformance:
        "Collaborating with the dev team, we maintained a responsive 12-column layout with margin-safe zones. Each feature was calibrated to optimise browsing speed, retention and conversion. The interface was structured to prioritise intuitive navigation and a streamlined checkout flow, enhancing user engagement and conversion rates while maintaining FA Home's premium brand experience.",
      image: "/images/pdp/pdp3/main6.png",
      imageMobile: "/images/pdp3/strategy.jpg",
    },
    page7: {
      pageTitle: "Digital Experience Architecture",
      finalDirection:
        "FA Home now boasts a robust digital ecosystem with a seamlessly integrated Shopify and Salesforce framework. Our approach not only met predetermined objectives but also positioned FA Home & FA Home Junior as a formidable contender in the lifestyle & home décor sector, demonstrating that strategic design and operational rigour can drive both performance and brand resonance.",
    },
    page8: {
      media: "/images/pdp/pdp3/final1.jpg",
      mediaMobile: "/images/pdp3/final1.jpg",
    },
    page9: {
      moreProjects:
        "Explore more projects that showcase our approach to web design and user experience.",
    },
  },
  pdp4: {
    id: "pdp4",
    displayImages: [
      "/images/pdp4/main.jpg",
      "/images/pdp4/overview.jpg",
      "/images/pdp4/gallery1.jpg",
      "/images/pdp4/gallery2.jpg",
      "/images/pdp4/gallery3.jpg",
    ],
    page1: {
      area: ["Print Design", "Layout Design"],
      title: "Print Design",
      shortDescription: "Creative print materials for a cultural event",
      projectLink: "/projects/print-design",
      image: "/images/pdp4/main.jpg",
      imageMobile: "/images/pdp4/main.jpg",
    },
    page2: {
      pageTitle: "Project Overview",
      industry: "Cultural Event",
      team: "X",
      role: "Y",
      clientBackground:
        "A cultural event looking to enhance their event's visual appeal and communication.",
      image: "/images/pdp4/overview.jpg",
      imageMobile: "/images/pdp4/overview.jpg",
    },
    page3: {
      media: "/images/pdp4/gallery1.jpg",
      mediaMobile: "/images/pdp4/gallery1.jpg",
    },
    page4: {
      pageTitle: "Brand, Audience And Market Foundations",
      brandPositioning:
        "Positioning the brand as a leader in traditional print design and modern aesthetics.",
      stakeholderInterviews:
        "Conducted interviews with key stakeholders to understand brand vision and market needs.",
      marketAnalysis:
        "Comprehensive analysis of market trends, competitor positioning, and industry opportunities.",
      targetAudience:
        "Defined primary and secondary audience segments, their needs, behaviors, and pain points.",
      image: "/images/pdp4/foundations.jpg",
      imageMobile: "/images/pdp4/foundations.jpg",
    },
    page5: {
      image: "/images/pdp4/process1.jpg",
      imageMobile: "/images/pdp4/process1.jpg",
    },
    page6: {
      pageTitle: "Design And Experience Strategy",
      uxPlanning:
        "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
      styleGuide:
        "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
      visualDirection:
        "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
      techPerformance:
        "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
      image: "/images/pdp4/strategy.jpg",
      imageMobile: "/images/pdp4/strategy.jpg",
    },
    page7: {
      finalDirection:
        "The final design combines traditional print techniques with modern aesthetics, creating a distinctive and memorable print experience.",
    },
    page8: {
      media: "/images/pdp4/final1.jpg",
      mediaMobile: "/images/pdp4/final1.jpg",
    },
    page9: {
      moreProjects:
        "Explore more projects that showcase our approach to print design and modern aesthetics.",
    },
  },
  pdp5: {
    id: "pdp5",
    displayImages: [
      "/images/pdp5/main.jpg",
      "/images/pdp5/overview.jpg",
      "/images/pdp5/gallery1.jpg",
      "/images/pdp5/gallery2.jpg",
      "/images/pdp5/gallery3.jpg",
    ],
    page1: {
      area: ["Mobile App Design", "UI/UX Design"],
      title: "Mobile App Design",
      shortDescription:
        "User-centered mobile app design for a fitness platform",
      projectLink: "/projects/mobile-app-design",
      image: "/images/pdp5/main.jpg",
      imageMobile: "/images/pdp5/main.jpg",
    },
    page2: {
      pageTitle: "Project Overview",
      industry: "Fitness Platform",
      team: "X",
      role: "Y",
      clientBackground:
        "A fitness platform looking to enhance their mobile app's user experience and engagement.",
      image: "/images/pdp5/overview.jpg",
      imageMobile: "/images/pdp5/overview.jpg",
    },
    page3: {
      media: "/images/pdp5/gallery1.jpg",
      mediaMobile: "/images/pdp5/gallery1.jpg",
    },
    page4: {
      pageTitle: "Brand, Audience And Market Foundations",
      brandPositioning:
        "Positioning the brand as a leader in mobile app design and user experience.",
      stakeholderInterviews:
        "Conducted interviews with key stakeholders to understand brand vision and market needs.",
      marketAnalysis:
        "Comprehensive analysis of market trends, competitor positioning, and industry opportunities.",
      targetAudience:
        "Defined primary and secondary audience segments, their needs, behaviors, and pain points.",
      image: "/images/pdp5/foundations.jpg",
      imageMobile: "/images/pdp5/foundations.jpg",
    },
    page5: {
      image: "/images/pdp5/process1.jpg",
      imageMobile: "/images/pdp5/process1.jpg",
    },
    page6: {
      pageTitle: "Design And Experience Strategy",
      uxPlanning:
        "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
      styleGuide:
        "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
      visualDirection:
        "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
      techPerformance:
        "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
      image: "/images/pdp5/strategy.jpg",
      imageMobile: "/images/pdp5/strategy.jpg",
    },
    page7: {
      finalDirection:
        "The final design combines modern UI patterns with smooth interactions, creating a distinctive and memorable mobile app experience.",
    },
    page8: {
      media: "/images/pdp5/final1.jpg",
      mediaMobile: "/images/pdp5/final1.jpg",
    },
    page9: {
      moreProjects:
        "Explore more projects that showcase our approach to mobile app design and user experience.",
    },
  },
};

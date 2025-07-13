export interface PDPData {
    id: string;
    displayImages: string[];
    page1: {
        area: string[];
        title: string;
        shortDescription: string;
        projectLink: string;
        image: string;
    };
    page2: {
        pageTitle: string;
        industry: string;
        team: string;
        role: string;
        clientBackground: string;
        image: string;
    };
    page3: {
        media: string[];
    };
    page4: {
        pageTitle: string;
        brandPositioning: string;
        stakeholderInterviews: string;
        marketAnalysis: string;
        targetAudience: string;
        image: string;
    };
    page5: {
        image: string;
    };
    page6: {
        pageTitle: string;
        uxPlanning: string;
        styleGuide: string;
        visualDirection: string;
        techPerformance: string;
        image: string;
    };
    page7: {
        finalDirection: string;
    };
    page8: {
        media: string;
    };
    page9: {
        moreProjects: string;
    }
}

export const pdpData: Record<string, PDPData> = {
    pdp1: {
        id: "pdp1",
        displayImages: [
            "/images/pdp1/main.jpg",
            "/images/pdp1/overview.jpg",
            "/images/pdp1/gallery1.jpg",
            "/images/pdp1/gallery2.jpg",
            "/images/pdp1/gallery3.jpg"
        ],
        page1: {
            area: ["Web Design", "UI/UX Redesign", "Strategy"],
            title: "Typsy Beauty",
            shortDescription: "About the project in short. Lorem Ipsum is simply dummy text of the printed and typesetti industry. Lorem Ipsum has been the industry's standard arent dummy text ever since the 1950s.",
            projectLink: "https://typsybeauty.com/",
            image: "/images/pdp1/main.jpg"
        },
        page2: {
            pageTitle: "Project Overview",
            industry: "b2c, beauty & cosmetics",
            team: "Ocularity analytics",
            role: "senior visual designer",
            clientBackground: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. ",
            image: "/images/pdp1/overview.jpg"
        },
        page3: {
            media: [
                "/images/pdp1/gallery1.jpg",
                "/images/pdp1/gallery2.jpg",
                "/images/pdp1/gallery3.jpg"
            ]
        },
        page4: {
            pageTitle: "Brand, Audience And Market Foundations",
            brandPositioning: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s.  client background- About the project brief in short. Lorem Ipsum is..",
            stakeholderInterviews: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s.  client background- About the project brief in short. Lorem Ipsum is.",
            marketAnalysis: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s.  client background- About the project brief in short. Lorem Ipsum is.",
            targetAudience: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s.  client background- About the project brief in short. Lorem Ipsum is.",
            image: "/images/pdp1/foundations.jpg"
        },
        page5: {
            image: "/images/pdp1/process1.jpg"
        },
        page6: {
            pageTitle: "Design And Experience Strategy",
            uxPlanning: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            styleGuide: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            visualDirection: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            techPerformance: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            image: "/images/pdp1/strategy.jpg"
        },
        page7: {
            finalDirection: "The final creative direction combines modern aesthetics with functional design, creating a distinctive and memorable brand experience. client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s.  client background- About the project brief in short. Lorem Ipsum is. client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since 1950s."
        },
        page8: {
            media: "/images/pdp1/final1.jpg",
        },
        page9: {
            moreProjects: "Explore more projects that showcase our approach to brand identity and digital design. Explore more projects that showcase our approach to packaging design and sustainability. Lorem Ipsum is simply dummy text of the printing and typesetti industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1950s. About the project in short. Lorem Ipsum is simply dummy text of the printing and typesetti industry."
        }
    },
    pdp2: {
        id: "pdp2",
        displayImages: [
            "/images/pdp2/main.jpg",
            "/images/pdp2/overview.jpg",
            "/images/pdp2/gallery1.jpg",
            "/images/pdp2/gallery2.jpg",
            "/images/pdp2/gallery3.jpg"
        ],
        page1: {
            area: ["Packaging", "Design"],
            title: "Packaging Design",
            shortDescription: "Innovative packaging solutions for a premium skincare brand",
            projectLink: "/projects/packaging-design",
            image: "/images/pdp2/main.jpg"
        },
        page2: {
            pageTitle: "Project Overview",
            industry: "Skincare",
            team: "X",
            role: "Y",
            clientBackground: "A premium skincare brand looking to enhance their product's appeal and sustainability.",
            image: "/images/pdp2/overview.jpg"
        },
        page3: {
            media: [
                "/images/pdp2/gallery1.jpg",
                "/images/pdp2/gallery2.jpg",
                "/images/pdp2/gallery3.jpg"
            ]
        },
        page4: {
            pageTitle: "Brand, Audience And Market Foundations",
            brandPositioning: "Positioning the brand as a luxury and sustainable skincare leader.",
            stakeholderInterviews: "Conducted interviews with key stakeholders to understand brand vision and market needs.",
            marketAnalysis: "Comprehensive analysis of market trends, competitor positioning, and industry opportunities.",
            targetAudience: "Defined primary and secondary audience segments, their needs, behaviors, and pain points.",
            image: "/images/pdp2/foundations.jpg"
        },
        page5: {
            image: "/images/pdp2/process1.jpg"
        },
        page6: {
            pageTitle: "Design And Experience Strategy",
            uxPlanning: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            styleGuide: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            visualDirection: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            techPerformance: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            image: "/images/pdp2/strategy.jpg"
        },
        page7: {
            finalDirection: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s.  client background- About the project brief in short. Lorem Ipsum is. client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since 1950s."
        },
        page8: {
            media: "/videos/pdp2/final.mp4",
        },
        page9: {
            moreProjects: "Explore more projects that showcase our approach to packaging design and sustainability. Lorem Ipsum is simply dummy text of the printing and typesetti industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1950s. About the project in short. Lorem Ipsum is simply dummy text of the printing and typesetti industry.",
        }
    },
    pdp3: {
        id: "pdp3",
        displayImages: [
            "/images/pdp3/main.jpg",
            "/images/pdp3/overview.jpg",
            "/images/pdp3/gallery1.jpg",
            "/images/pdp3/gallery2.jpg",
            "/images/pdp3/gallery3.jpg"
        ],
        page1: {
            area: ["Web Design", "UX/UI Design"],
            title: "Website Design",
            shortDescription: "Modern and responsive website design for a creative agency",
            projectLink: "/projects/website-design",
            image: "/images/pdp3/main.jpg"
        },
        page2: {
            pageTitle: "Project Overview",
            industry: "Creative Agency",
            team: "X",
            role: "Y",
            clientBackground: "A creative agency looking to enhance their online presence and user experience.",
            image: "/images/pdp3/overview.jpg"
        },
        page3: {
            media: [
                "/images/pdp3/gallery1.jpg",
                "/images/pdp3/gallery2.jpg",
                "/images/pdp3/gallery3.jpg"
            ]
        },
        page4: {
            pageTitle: "Brand, Audience And Market Foundations",
            brandPositioning: "Positioning the brand as a leader in modern web design and user experience.",
            stakeholderInterviews: "Conducted interviews with key stakeholders to understand brand vision and market needs.",
            marketAnalysis: "Comprehensive analysis of market trends, competitor positioning, and industry opportunities.",
            targetAudience: "Defined primary and secondary audience segments, their needs, behaviors, and pain points.",
            image: "/images/pdp3/foundations.jpg"
        },
        page5: {
            image: "/images/pdp3/process1.jpg"
        },
        page6: {
            pageTitle: "Design And Experience Strategy",
            uxPlanning: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            styleGuide: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            visualDirection: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            techPerformance: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            image: "/images/pdp3/strategy.jpg"
        },
        page7: {
            finalDirection: "The final design combines modern aesthetics with smooth animations, creating a distinctive and memorable website experience."
        },
        page8: {
            media: "/images/pdp3/final1.jpg",
        },
        page9: {
            moreProjects: "Explore more projects that showcase our approach to web design and user experience."
        }
    },
    pdp4: {
        id: "pdp4",
        displayImages: [
            "/images/pdp4/main.jpg",
            "/images/pdp4/overview.jpg",
            "/images/pdp4/gallery1.jpg",
            "/images/pdp4/gallery2.jpg",
            "/images/pdp4/gallery3.jpg"
        ],
        page1: {
            area: ["Print Design", "Layout Design"],
            title: "Print Design",
            shortDescription: "Creative print materials for a cultural event",
            projectLink: "/projects/print-design",
            image: "/images/pdp4/main.jpg"
        },
        page2: {
            pageTitle: "Project Overview",
            industry: "Cultural Event",
            team: "X",
            role: "Y",
            clientBackground: "A cultural event looking to enhance their event's visual appeal and communication.",
            image: "/images/pdp4/overview.jpg"
        },
        page3: {
            media: [
                "/images/pdp4/gallery1.jpg",
                "/images/pdp4/gallery2.jpg",
                "/images/pdp4/gallery3.jpg"
            ]
        },
        page4: {
            pageTitle: "Brand, Audience And Market Foundations",
            brandPositioning: "Positioning the brand as a leader in traditional print design and modern aesthetics.",
            stakeholderInterviews: "Conducted interviews with key stakeholders to understand brand vision and market needs.",
            marketAnalysis: "Comprehensive analysis of market trends, competitor positioning, and industry opportunities.",
            targetAudience: "Defined primary and secondary audience segments, their needs, behaviors, and pain points.",
            image: "/images/pdp4/foundations.jpg"
        },
        page5: {
            image: "/images/pdp4/process1.jpg"
        },
        page6: {
            pageTitle: "Design And Experience Strategy",
            uxPlanning: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            styleGuide: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            visualDirection: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            techPerformance: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            image: "/images/pdp4/strategy.jpg"
        },
        page7: {
            finalDirection: "The final design combines traditional print techniques with modern aesthetics, creating a distinctive and memorable print experience."
        },
        page8: {
            media: "/images/pdp4/final1.jpg",
        },
        page9: {
            moreProjects: "Explore more projects that showcase our approach to print design and modern aesthetics."
        }
    },
    pdp5: {
        id: "pdp5",
        displayImages: [
            "/images/pdp5/main.jpg",
            "/images/pdp5/overview.jpg",
            "/images/pdp5/gallery1.jpg",
            "/images/pdp5/gallery2.jpg",
            "/images/pdp5/gallery3.jpg"
        ],
        page1: {
            area: ["Mobile App Design", "UI/UX Design"],
            title: "Mobile App Design",
            shortDescription: "User-centered mobile app design for a fitness platform",
            projectLink: "/projects/mobile-app-design",
            image: "/images/pdp5/main.jpg"
        },
        page2: {
            pageTitle: "Project Overview",
            industry: "Fitness Platform",
            team: "X",
            role: "Y",
            clientBackground: "A fitness platform looking to enhance their mobile app's user experience and engagement.",
            image: "/images/pdp5/overview.jpg"
        },
        page3: {
            media: [
                "/images/pdp5/gallery1.jpg",
                "/images/pdp5/gallery2.jpg",
                "/images/pdp5/gallery3.jpg"
            ]
        },
        page4: {
            pageTitle: "Brand, Audience And Market Foundations",
            brandPositioning: "Positioning the brand as a leader in mobile app design and user experience.",
            stakeholderInterviews: "Conducted interviews with key stakeholders to understand brand vision and market needs.",
            marketAnalysis: "Comprehensive analysis of market trends, competitor positioning, and industry opportunities.",
            targetAudience: "Defined primary and secondary audience segments, their needs, behaviors, and pain points.",
            image: "/images/pdp5/foundations.jpg"
        },
        page5: {
            image: "/images/pdp5/process1.jpg"
        },
        page6: {
            pageTitle: "Design And Experience Strategy",
            uxPlanning: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            styleGuide: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            visualDirection: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            techPerformance: "client background- About the project brief in short. Lorem Ipsum is simply dummy text of the print and typesetti industry. Lorem Ipsum has been the industry's since the 1950s. client background- About the project brief in short. Lorem Ipsum is.",
            image: "/images/pdp5/strategy.jpg"
        },
        page7: {
            finalDirection: "The final design combines modern UI patterns with smooth interactions, creating a distinctive and memorable mobile app experience."
        },
        page8: {
            media: "/images/pdp5/final1.jpg",
        },
        page9: {
            moreProjects: "Explore more projects that showcase our approach to mobile app design and user experience."
        }
    }
}; 
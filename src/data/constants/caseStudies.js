export const CASE_STUDIES = [
  {
    id: 1,
    slug: "healthcare-legacy-migration",
    title: "Seamless Legacy System Migration for a Healthcare Enterprise",
    shortDescription: "The client's outdated system was causing inefficiencies, data loss, and scalability issues.",
    category: "Healthcare",
    image: "/logos/f1.svg",
    heroImage: "/logos/l1.jpg",
    client: "HealthCorp Enterprise",
    timeline: "8 months",
    teamSize: "12 specialists",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    challenge: {
      title: "The Challenge",
      description: "The client's outdated system was causing inefficiencies, data loss, and scalability issues. Their legacy infrastructure couldn't handle the growing patient data load and was becoming a bottleneck for operations.",
      keyPoints: [
        "Legacy system built on outdated technology stack",
        "Data loss during peak hours affecting patient care",
        "Inability to scale with growing healthcare demands",
        "Security vulnerabilities in patient data handling",
        "Integration issues with modern healthcare tools"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "T3 developed a custom migration strategy, ensuring seamless data transfers, modernizing infrastructure, and integrating the system with advanced analytics tools.",
      approach: [
        "Comprehensive system audit and data mapping",
        "Phased migration approach to minimize downtime",
        "Modern cloud-native architecture implementation",
        "Advanced security measures for HIPAA compliance",
        "Real-time analytics dashboard for insights"
      ]
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { label: "System Uptime", value: "99.9%", description: "Improved from 94%" },
        { label: "Data Processing Speed", value: "75%", description: "Faster than previous system" },
        { label: "Cost Reduction", value: "40%", description: "In operational expenses" },
        { label: "User Satisfaction", value: "95%", description: "Healthcare staff approval" }
      ],
      outcomes: [
        "Zero data loss during migration process",
        "Seamless integration with existing workflows",
        "Enhanced security and compliance features",
        "Scalable infrastructure for future growth",
        "Real-time insights improving patient care"
      ]
    },
    testimonial: {
      quote: "T3's expertise transformed our outdated system into a modern, efficient platform. The migration was seamless, and our team now has the tools they need to provide better patient care.",
      author: "Dr. Sarah Johnson",
      position: "CTO, HealthCorp Enterprise"
    }
  },
  {
    id: 2,
    slug: "fintech-mvp-development",
    title: "Accelerating MVP Development for a FinTech Startup",
    shortDescription: "The startup needed a stable MVP within a tight window to secure investor funding.",
    category: "FinTech",
    image: "/logos/f2.svg",
    heroImage: "/logos/l11.png",
    client: "PayFlow Solutions",
    timeline: "6 weeks",
    teamSize: "8 developers",
    technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "Stripe API", "AWS"],
    challenge: {
      title: "The Challenge",
      description: "The startup needed a stable MVP within a tight window to secure investor funding. They had limited resources and needed to prove their concept quickly in a competitive market.",
      keyPoints: [
        "Tight deadline for investor presentation",
        "Limited budget for development",
        "Need for robust financial transaction handling",
        "Compliance with financial regulations",
        "Scalable architecture for future growth"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "Our team delivered a bug-free MVP in just 6 weeks, using agile development practices to suit the client's requirements.",
      approach: [
        "Agile development with weekly sprints",
        "Focus on core features for MVP validation",
        "Integration with secure payment processing",
        "Responsive design for multi-device access",
        "Comprehensive testing and quality assurance"
      ]
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { label: "Development Time", value: "6 weeks", description: "Delivered on schedule" },
        { label: "Bug Rate", value: "0.1%", description: "Exceptional quality" },
        { label: "Funding Secured", value: "$2M", description: "Series A round" },
        { label: "User Adoption", value: "89%", description: "Early user retention" }
      ],
      outcomes: [
        "Successfully secured Series A funding",
        "Product launched to market in record time",
        "Positive investor and user feedback",
        "Scalable foundation for future features",
        "Compliance with financial regulations achieved"
      ]
    },
    testimonial: {
      quote: "T3 delivered beyond our expectations. Their agile approach and technical expertise helped us secure funding and launch our product successfully.",
      author: "Michael Chen",
      position: "CEO, PayFlow Solutions"
    }
  },
  {
    id: 3,
    slug: "retail-erp-implementation",
    title: "Scalable ERP Implementation for a Retail Chain",
    shortDescription: "The retail client struggled with fragmented operations across multiple locations, affecting efficiency and reporting accuracy.",
    category: "Retail",
    image: "/logos/f3.svg",
    heroImage: "/logos/crm.jpeg",
    client: "RetailMax Chain",
    timeline: "12 months",
    teamSize: "15 specialists",
    technologies: ["Angular", "Java", "Spring Boot", "Oracle DB", "Redis", "Apache Kafka"],
    challenge: {
      title: "The Challenge",
      description: "The retail client struggled with fragmented operations across multiple locations, affecting efficiency and reporting accuracy. Their disconnected systems made it impossible to get real-time insights.",
      keyPoints: [
        "Fragmented systems across 50+ locations",
        "Inconsistent inventory management",
        "Poor visibility into sales performance",
        "Manual reporting processes causing delays",
        "Inability to track customer behavior across stores"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "T3 implemented a customized ERP system, integrating inventory, sales, and finance operations into a single streamlined platform.",
      approach: [
        "Centralized ERP system with multi-location support",
        "Real-time inventory synchronization",
        "Integrated point-of-sale systems",
        "Advanced analytics and reporting dashboard",
        "Customer relationship management integration"
      ]
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { label: "Inventory Accuracy", value: "98%", description: "Improved from 76%" },
        { label: "Reporting Time", value: "80%", description: "Reduction in manual work" },
        { label: "Sales Visibility", value: "Real-time", description: "Across all locations" },
        { label: "ROI", value: "180%", description: "Within first year" }
      ],
      outcomes: [
        "Unified operations across all locations",
        "Real-time inventory and sales tracking",
        "Automated financial reporting",
        "Enhanced customer experience",
        "Data-driven decision making enabled"
      ]
    },
    testimonial: {
      quote: "The ERP implementation transformed our operations completely. We now have real-time visibility into our business and can make informed decisions quickly.",
      author: "Jennifer Martinez",
      position: "Operations Director, RetailMax Chain"
    }
  }
];
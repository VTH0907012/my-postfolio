export const projects = [
  {
    id: 1,
    title: "FOOD STORE MANAGEMENT SYSTEM",
    subtitle: "Graduation Project - Individual",
    period: "Aug 2023 - Dec 2023",
    role: "Full Stack Developer",
    members: 1,
    description: "The project builds a store management system that integrates an online table booking website, helping store owners optimize the entire operating process such as ordering, managing menus, orders, customers, staff and revenue. Customers can easily access the website to view the menu, book tables in advance and experience convenient services.",
    technologies: ["PHP (Laravel)", "Pusher", "Bootstrap", "Ajax", "jQuery", "MySQL", "Datatables"],
    features: [
      "Clear authorization mechanism between administrators, staff and customers",
      "Efficient, professional and scalable operations"
    ],
    image: `${import.meta.env.BASE_URL}images/rms.png`,
    github: "https://github.com/VTH0907012/Restaurant_Management_System",
    demo: null
  },
  {
    id: 2,
    title: "E-COMMERCE WEBSITE",
    subtitle: "Electronics Store",
    period: "Apr 2025 - May 2025",
    role: "Full Stack Developer",
    members: 1,
    description: "An e-commerce website that allows users to search for products, add to cart and make purchases. Supports both customer and administrator roles with comprehensive management features.",
    technologies: [
      "Frontend: Next.js (TypeScript), Tailwind CSS, Redux Toolkit",
      "Backend: Node.js, Express.js, MongoDB, JWT"
    ],
    features: [
      "Customer registration and purchase flow",
      "Admin dashboard for product, order, and user management",
      "Revenue statistics and reporting"
    ],
    image: `${import.meta.env.BASE_URL}images/e-commerce.png`,
    github: "https://github.com/VTH0907012/Ecommerce-electronics",
    demo: "https://ecommerce-electronics-vth-thanh-hieus-projects.vercel.app"
  }
];

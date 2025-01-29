import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "Mohit helped us refinance our home loan and saved us a significant amount in interest. He explained everything clearly and found a lender that suited our needs perfectly.",
      name: "Kevin G",
      designation: "Homeowner",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "We were nervous about buying our first home, but Mohit guided us through every step with patience and professionalism. He found us the best loan deal and made the whole process stress-free. Highly recommended!",
      name: "Samuel and Eva Daniel",
      designation: "First-time Homebuyers",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Mohit went above and beyond to help us secure our home loan. He was always available to answer our questions and made sure we got the best rate possible.",
      name: "Rhonda and Sunny G",
      designation: "Satisfied Clients",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Thanks to Mohit, we secured financing for our investment property at a fantastic rate. He made the process smooth and hassle-free.",
      name: "Chang and Olivia L",
      designation: "Real Estate Investors",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "We were struggling with high interest rates, but Mohit found us a better deal, reducing our monthly repayments significantly. He made the transition smooth and easy.",
      name: "Laura & James W.",
      designation: "Happy Refinancers",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

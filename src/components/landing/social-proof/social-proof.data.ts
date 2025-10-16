export interface StatItem {
  number: string;
  label: string;
}

export interface TestimonialItem {
  text: string;
  author: string;
}

export const statsData: StatItem[] = [
  {
    number: "500+",
    label: "Companies"
  },
  {
    number: "10K+",
    label: "Employees"
  },
  {
    number: "99.9%",
    label: "Uptime"
  },
  {
    number: "4.8★",
    label: "Rating"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    text: "This platform completely transformed our HR operations. We save 15 hours per week!",
    author: "— Sarah Chen, HR Director at TechCorp"
  },
  {
    text: "Best workforce management tool we've ever used. Highly recommend!",
    author: "— Michael Rodriguez, Operations Manager"
  }
];

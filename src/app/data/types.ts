// app/data/types.ts

// A generic type for simple objects with a 'text' property
interface TextObject {
  text: string;
}

// A generic type for objects with text and a highlight
interface HighlightedText {
  text: string;
  highlighted: string;
}

// ----- Hero Section -----
interface SpecialOffer extends HighlightedText {
  duration: string;
}

interface HeroHeader {
  productName: string;
  orderButton: string;
}

interface Gallery {
  instruction: string;
  thumbnailAlt: string;
  ariaLabel: string;
}

interface Rating {
  stars: number;
  score: string;
  maxScore: string;
  reviews: string;
  text: string;
}

interface Price {
  current: string;
  original: string;
  currency: string;
}

interface TrustBadge {
  text: string;
  icon: string;
}

interface UrgencyNote {
  text: string;
  time: string;
}

interface ProductInfo {
  title: string;
  rating: Rating;
  price: Price;
  delivery: TextObject;
  features: string[];
  trustBadges: TrustBadge[];
  ctaButton: string;
  urgencyNote: UrgencyNote;
}

interface HeroSection {
  specialOffer: SpecialOffer;
  header: HeroHeader;
  gallery: Gallery;
  productInfo: ProductInfo;
}

// ----- Carousel Images -----
interface CarouselImages {
  src: string[];
  alt: string[];
}

// ----- Features Section -----
interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesSection {
  title: string;
  features: Feature[];
}

// ----- Specifications Section -----
interface Specification {
  label: string;
  value: string;
}

interface SpecsSection {
  title: string;
  specifications: Specification[][];
}

// ----- Call Form Section -----
interface FormField {
  label: string;
  placeholder: string;
}

interface FormFields {
  name: FormField;
  phone: FormField;
  address: FormField;
  quantity: {
    label: string;
    options: number[];
  };
}

interface FormSubmit {
  default: string;
  submitting: string;
}

interface CallForm {
  badge: TextObject;
  title: HighlightedText;
  description: string;
  success: {
    title: string;
    message: string;
  };
  form: {
    fields: FormFields;
    submit: FormSubmit;
    privacy: string;
  };
}

// ----- Testimonials Section -----
interface Testimonial {
  name: string;
  city: string;
  text: string;
  rating: number;
}

interface TestimonialsSection {
  badge: TextObject;
  title: HighlightedText;
  testimonials: Testimonial[];
}

// ----- CTA Section -----
interface CtaSection {
  badge: TextObject;
  title: string;
  description: {
    text: string;
    highlighted: string;
    additional: string;
  };
  button: TextObject;
  urgency: UrgencyNote;
}

// ----- Main Data Structure -----
export interface ContentData {
  heroSection: HeroSection;
  carouselImages: CarouselImages;
  featuresSection: FeaturesSection;
  specsSection: SpecsSection;
  callForm: CallForm;
  testimonials: TestimonialsSection;
  ctaSection: CtaSection;
  // We can add the comments if we want to display them
  _comment1?: string;
  _comment2?: string;
  _comment3?: string;
  _comment4?: string;
  _comment5?: string;
  _comment6?: string;
  _comment7?: string;
}

// This key type is more robust, derived from the main interface
export type SectionKey = 
  | 'heroSection' 
  | 'carouselImages' 
  | 'featuresSection' 
  | 'specsSection' 
  | 'callForm' 
  | 'testimonials' 
  | 'ctaSection';
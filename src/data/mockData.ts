export const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '29',
    features: ['Access to gym floor', 'Basic workout plan', '1 Group class/month', 'Locker access'],
    recommended: false,
  },
  {
    id: 'pro',
    name: 'Pro Performance',
    price: '59',
    features: ['Unlimited gym access', 'Customized nutrition plan', 'Unlimited group classes', 'Personal trainer (1 session)', 'Sauna & Recovery access'],
    recommended: true,
  },
  {
    id: 'elite',
    name: 'Elite Athlete',
    price: '99',
    features: ['24/7 Priority access', 'Weekly PT sessions', 'Full body screening', 'Performance gear kit', 'Guest passes (unlimited)'],
    recommended: false,
  },
];

export const trainers = [
  {
    id: 1,
    name: 'Marcus Thorne',
    role: 'Strength & Conditioning',
    image: 'https://picsum.photos/seed/trainer1/600/800',
    bio: 'Former pro athlete with 10+ years of high-performance coaching experience.',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Yoga & Flexibility',
    image: 'https://picsum.photos/seed/trainer2/600/800',
    bio: 'Specializes in holistic movement and mind-body connection.',
  },
  {
    id: 3,
    name: 'Jaxson Reed',
    role: 'Bodybuilding Specialist',
    image: 'https://picsum.photos/seed/trainer3/600/800',
    bio: 'Award-winning bodybuilder focused on hypertrophy and metabolic conditioning.',
  },
];

export const classes = [
  {
    id: 1,
    title: 'Power Lifting',
    time: 'Mon, Wed, Fri | 06:00 AM',
    instructor: 'Marcus Thorne',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800',
    tag: 'Strength',
  },
  {
    id: 2,
    title: 'Zen Flow Yoga',
    time: 'Tue, Thu | 08:30 AM',
    instructor: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800',
    tag: 'Yoga',
  },
  {
    id: 3,
    title: 'HIIT Blitz',
    time: 'Daily | 05:00 PM',
    instructor: 'Jaxson Reed',
    image: 'https://images.unsplash.com/photo-1549576490-b0b4831da60a?q=80&w=800',
    tag: 'Cardio',
  },
  {
    id: 4,
    title: 'Boxing Basics',
    time: 'Sat | 10:00 AM',
    instructor: 'Mike Tyson',
    image: 'https://images.unsplash.com/photo-1508215885820-4585e56135c8?q=80&w=800',
    tag: 'Cardio',
  },
  {
    id: 5,
    title: 'Deadlift Workshop',
    time: 'Wed | 07:00 PM',
    instructor: 'Marcus Thorne',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800',
    tag: 'Strength',
  },
  {
    id: 6,
    title: 'Vinyasa Movement',
    time: 'Fri | 09:00 AM',
    instructor: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800',
    tag: 'Yoga',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Alex Rivera',
    text: "Joined IronPulse 6 months ago and I've never felt stronger. The atmosphere is electric and the trainers actually care about your progress.",
    role: 'Member since 2023',
  },
  {
    id: 2,
    name: 'Elena Vance',
    text: 'Best HIIT classes in the city. Every session is a challenge and the results speak for themselves. Highly recommended!',
    role: 'Elite Member',
  },
];

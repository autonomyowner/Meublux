import { Furniture } from '@/types'

export const furniture: Furniture[] = [
  {
    id: '1',
    name: 'مجموعة غرفة المعيشة الحديثة',
    category: 'Living Room',
    style: 'Modern',
    material: 'خشب البلوط الطبيعي',
    color: 'بني فاتح',
    dimensions: {
      length: 240,
      width: 80,
      height: 45
    },
    price: 2500,
    images: [
      '/pics/1.jpg',
      '/pics/2.jpg',
      '/pics/3.jpg'
    ],
    description: 'مجموعة أثاث غرفة المعيشة الحديثة المصممة بتقنية عالية الجودة، تجمع بين الأناقة والراحة',
    features: [
      'تصميم عصري أنيق',
      'مواد عالية الجودة',
      'سهولة التركيب',
      'ضمان 3 سنوات',
      'خدمة التوصيل المجاني',
      'إمكانية التخصيص'
    ],
    status: 'Available',
    location: 'الجزائر',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'مطبخ عصري مفتوح',
    category: 'Kitchen',
    style: 'Contemporary',
    material: 'خشب MDF مع طلاء مقاوم للحرارة',
    color: 'أبيض لامع',
    dimensions: {
      length: 300,
      width: 60,
      height: 85
    },
    price: 4500,
    images: [
      '/pics/4.jpg',
      '/pics/5.jpg',
      '/pics/6.jpg'
    ],
    description: 'مطبخ عصري مفتوح مع أحدث التقنيات والأجهزة المدمجة، مثالي للعائلات العصرية',
    features: [
      'تصميم مفتوح',
      'أجهزة مدمجة حديثة',
      'إضاءة LED',
      'خزائن ذكية',
      'سطح عمل مقاوم للخدوش',
      'نظام تهوية متطور'
    ],
    status: 'Custom Order',
    location: 'الجزائر',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: '3',
    name: 'غرفة نوم رئيسية فاخرة',
    category: 'Bedroom',
    style: 'Luxury',
    material: 'خشب الماهوجني مع أقمشة فاخرة',
    color: 'بني داكن',
    dimensions: {
      length: 200,
      width: 180,
      height: 60
    },
    price: 3500,
    images: [
      '/pics/7.jpg',
      '/pics/8.jpg',
      '/pics/1.jpg'
    ],
    description: 'غرفة نوم رئيسية فاخرة مع سرير ملكي وخزائن أنيقة، تجمع بين الفخامة والراحة',
    features: [
      'سرير ملكي فاخر',
      'خزائن مدمجة',
      'طاولة تجميل',
      'إضاءة محيطية',
      'أقمشة فاخرة',
      'تصميم مخصص'
    ],
    status: 'Available',
    location: 'الجزائر',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '4',
    name: 'طاولة طعام عائلية',
    category: 'Dining Room',
    style: 'Classic',
    material: 'خشب البلوط الصلب',
    color: 'بني طبيعي',
    dimensions: {
      length: 180,
      width: 90,
      height: 75
    },
    price: 1800,
    images: [
      '/pics/2.jpg',
      '/pics/3.jpg',
      '/pics/4.jpg'
    ],
    description: 'طاولة طعام عائلية كلاسيكية مع كراسي مريحة، مثالية للوجبات العائلية',
    features: [
      'تصميم كلاسيكي أنيق',
      'مقاعد مريحة',
      'سطح مقاوم للخدوش',
      'سهولة التنظيف',
      'قابل للتوسيع',
      'ضمان 5 سنوات'
    ],
    status: 'Available',
    location: 'الجزائر',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: '5',
    name: 'مكتب عمل عصري',
    category: 'Office',
    style: 'Minimalist',
    material: 'خشب الصنوبر مع معدن',
    color: 'أبيض وأسود',
    dimensions: {
      length: 140,
      width: 70,
      height: 75
    },
    price: 950,
    images: [
      '/pics/5.jpg',
      '/pics/6.jpg',
      '/pics/7.jpg'
    ],
    description: 'مكتب عمل عصري بتصميم بسيط وأنيق، مثالي للمساحات الصغيرة',
    features: [
      'تصميم بسيط',
      'خزائن مدمجة',
      'فتحات للكابلات',
      'سطح مقاوم للخدوش',
      'سهولة التركيب',
      'مناسب للمساحات الصغيرة'
    ],
    status: 'Available',
    location: 'الجزائر',
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12')
  }
] 
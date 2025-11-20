export interface Product {
  id: string
  title: string
  description: string
  category: string
  supplier: string
  serialNumber: string
  price: number
  originalPrice?: number
  image: string
  addedBy: string
  date: string
  type?: "product" | "accessory" | "spare-part"
}

export interface Supplier {
  id: string
  name: string
  contact: string
  phone: string
  email: string
  address: string
  rating: number
  image: string
  category: string
  country: string
  industry: string
  serialNumber: string
  description: string
  status: "enable" | "disable"
  addedBy: string
}

export interface Client {
  id: string
  name: string
  contact: string
  phone: string
  email: string
  address: string
  type: string
  image: string
  country: string
  industry: string
  serialNumber: string
  description: string
  status: "enable" | "disable"
  addedBy: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  points: number
}

export interface Request {
  id: string
  title: string
  applicant: string
  executor: string
  status: "pending" | "in-progress" | "completed"
}

// Initial Data
export const productsData: Product[] = [
  {
    id: "1",
    title: "ساعة ذكية متطورة",
    description: "ساعة ذكية بميزات متقدمة لتتبع اللياقة البدنية واتصالات ذكية مع هاتفك الذكي",
    category: "إلكترونيات",
    supplier: "شركة التقنية الحديثة",
    serialNumber: "SN: 001",
    price: 199,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    addedBy: "admin",
    date: "2024-01-15",
    type: "product",
  },
  {
    id: "2",
    title: "هاتف ذكي عالي الجودة",
    description: "هاتف ذكي بكاميرا عالية الدقة وبطارية طويلة المدى مع معالج قوي للألعاب والتطبيقات",
    category: "إلكترونيات",
    supplier: "مجموعة الهواتف الذكية",
    serialNumber: "SN: 002",
    price: 599,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    addedBy: "ahmed",
    date: "2024-01-18",
    type: "product",
  },
  {
    id: "3",
    title: "سماعات لاسلكية",
    description: "سماعات بلوتوث عالية الجودة مع إلغاء الضوضاء وعمر بطارية يصل إلى 30 ساعة",
    category: "إلكترونيات",
    supplier: "شركة الصوتيات المتقدمة",
    serialNumber: "SN: 003",
    price: 149,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    addedBy: "sadeq",
    date: "2024-01-20",
    type: "product",
  },
  {
    id: "oa1",
    title: "مجموعة مفكات كهربائية",
    description: "مجموعة مفكات كهربائية متعددة الاستخدامات مع بطارية قابلة للشحن وعمر طويل",
    category: "أدوات يدوية",
    supplier: "شركة الأدوات المتكاملة",
    serialNumber: "SN: OA001",
    price: 89,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1581093458791-8a0a1edb6c9f?w=400",
    addedBy: "admin",
    date: "2024-01-21",
    type: "accessory",
  },
  {
    id: "oa2",
    title: "زيت تشحيم صناعي",
    description: "زيت تشحيم عالي الجودة للمعدات الصناعية، مقاوم للحرارة والضغط العالي",
    category: "مواد تشحيم",
    supplier: "شركة زيوت التشحيم",
    serialNumber: "SN: OA002",
    price: 45,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400",
    addedBy: "ahmed",
    date: "2024-01-22",
    type: "accessory",
  },
  {
    id: "oa3",
    title: "خوذة أمان صناعية",
    description: "خوذة أمان صناعية مقاومة للصدمات مع حزام قابل للتعديل وفتحات تهوية",
    category: "مواد سلامة",
    supplier: "شركة معدات السلامة",
    serialNumber: "SN: OA003",
    price: 32,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1581093458791-8a0a1edb6c9f?w=400",
    addedBy: "sadeq",
    date: "2024-01-23",
    type: "accessory",
  },
  {
    id: "sp1",
    title: "مجموعة مكابس محرك",
    description: "مجموعة مكابس محرك عالية الجودة مصنوعة من الفولاذ المقاوم للحرارة والضغط",
    category: "قطع المحركات",
    supplier: "شركة قطع المحركات العالمية",
    serialNumber: "SN: SP001",
    price: 120,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=400",
    addedBy: "admin",
    date: "2024-01-24",
    type: "spare-part",
  },
  {
    id: "sp2",
    title: "مجموعة أسلاك وكابلات",
    description: "مجموعة أسلاك وكابلات كهربائية عالية الجودة مع عزل حراري وكهربائي ممتاز",
    category: "قطع كهربائية",
    supplier: "شركة الكهرباء المتكاملة",
    serialNumber: "SN: SP002",
    price: 75,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1633158829875-531cb622f0a8?w=400",
    addedBy: "ahmed",
    date: "2024-01-25",
    type: "spare-part",
  },
  {
    id: "sp3",
    title: "أسطوانة هيدروليكية",
    description: "أسطوانة هيدروليكية صناعية قوية، مقاومة للضغط العالي مع كفاءة تشغيل ممتازة",
    category: "قطع هيدروليكية",
    supplier: "شركة الأنظمة الهيدروليكية",
    serialNumber: "SN: SP003",
    price: 210,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1633158829875-531cb622f0a8?w=400",
    addedBy: "sadeq",
    date: "2024-01-26",
    type: "spare-part",
  },
]

export const suppliersData: Supplier[] = [
  {
    id: "1",
    name: "شركة غوانغجو للإلكترونيات",
    contact: "مدير المبيعات",
    phone: "+86 138 0013 8000",
    email: "info@guangzhou-electronics.com",
    address: "غوانغجو، الصين",
    rating: 120,
    image: "img/company-1.jpg",
    category: "الإلكترونيات",
    country: "الصين",
    industry: "الإلكترونيات",
    serialNumber: "1",
    description: "متخصصون في تصنيع الهواتف المحمولة والأجهزة الإلكترونية",
    status: "enable",
    addedBy: "admin",
  },
  {
    id: "2",
    name: "مصانع إسطنبول للمنسوجات",
    contact: "مدير التصدير",
    phone: "+90 212 555 0123",
    email: "exports@istanbul-textiles.com",
    address: "إسطنبول، تركيا",
    rating: 115,
    image: "img/company-2.jpg",
    category: "المنسوجات",
    country: "تركيا",
    industry: "المنسوجات",
    serialNumber: "2",
    description: "تصنيع الملابس والأقمشة عالية الجودة",
    status: "disable",
    addedBy: "admin",
  },
  {
    id: "3",
    name: "شركة دبي للتجارة العامة",
    contact: "المدير العام",
    phone: "+971 4 123 4567",
    email: "info@dubai-trading.com",
    address: "دبي، الإمارات",
    rating: 100,
    image: "img/company-3.jpg",
    category: "التجارة العامة",
    country: "الإمارات",
    industry: "التجارة العامة",
    serialNumber: "3",
    description: "استيراد وتصدير البضائع العامة ومواد البناء",
    status: "enable",
    addedBy: "admin",
  },
]

export const clientsData: Client[] = [
  {
    id: "1",
    name: "شركة التقنية المتقدمة",
    contact: "سالم الدوسري",
    phone: "0566677788",
    email: "info@albina-contracting.com",
    address: "الرياض، حي الملز",
    type: "شركات",
    image: "img/company-1.jpg",
    country: "السعودية",
    industry: "التجزئة",
    serialNumber: "1",
    description: "أحد أكبر عملائنا في قطاع التجزئة الإلكترونية",
    status: "enable",
    addedBy: "admin",
  },
  {
    id: "2",
    name: "مجموعة الأعمال المتحدة",
    contact: "نور الدين",
    phone: "0533344455",
    email: "sales@alnoor-trading.com",
    address: "جدة، شارع التحلية",
    type: "مؤسسات",
    image: "img/company-2.jpg",
    country: "الإمارات",
    industry: "الجملة",
    serialNumber: "2",
    description: "عملاء موثوقون في مجال تجارة الجملة منذ 5 سنوات",
    status: "disable",
    addedBy: "admin",
  },
  {
    id: "3",
    name: "مؤسسة النهضة التجارية",
    contact: "علي حسن",
    phone: "0599900011",
    email: "ali.hassan@email.com",
    address: "الدمام، حي الشاطئ",
    type: "أفراد",
    image: "img/company-3.jpg",
    country: "قطر",
    industry: "التصنيع",
    serialNumber: "3",
    description: "عملاء في قطاع التصنيع بعلاقة تجارية مستمرة منذ 3 سنوات",
    status: "enable",
    addedBy: "admin",
  },
]

export const teamMembers: TeamMember[] = [
  { id: "1", name: "صادق الداعري", role: "مدير النظام", image: "/img/tg.png", points: 150 },
  { id: "2", name: "محمد علي", role: "مشرف مبيعات", image: "/img/tg.png", points: 120 },
  { id: "3", name: "أحمد سالم", role: "مسؤول مخزون", image: "/img/tg.png", points: 95 },
  { id: "4", name: "سارة خالد", role: "دعم فني", image: "/img/tg.png", points: 110 },
  { id: "5", name: "عمر يوسف", role: "محاسب", image: "/img/tg.png", points: 85 },
]

export const requestsData: Request[] = [
  {
    id: "1",
    title: "إدراج أسعار المورد (WZ-102)",
    applicant: "محمد",
    executor: "",
    status: "pending",
  },
  {
    id: "2",
    title: "مراجعة مواصفات منتج (PX-55)",
    applicant: "محمد",
    executor: "",
    status: "pending",
  },
  {
    id: "3",
    title: "تحديث بيانات مورد (ACME)",
    applicant: "محمد",
    executor: "محمد",
    status: "in-progress",
  },
]

// Helper functions to simulate database operations
export const getProducts = () => productsData
export const getSuppliers = () => suppliersData
export const getClients = () => clientsData
export const getTeamMembers = () => teamMembers
export const getRequests = () => requestsData

export const addProduct = (product: Product) => {
  productsData.push(product)
}

export const addSupplier = (supplier: Supplier) => {
  suppliersData.push(supplier)
}

export const addClient = (client: Client) => {
  clientsData.push(client)
}

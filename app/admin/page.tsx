"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function AdminPage() {
  const [activeChatTab, setActiveChatTab] = useState("group")

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <ThemeToggle />

      <main className="container mx-auto px-4 py-8 pt-32">
        {/* Admin Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-heading">🔧 لوحة الإدارة</h1>
          <p className="text-xl text-muted-foreground font-medium">إدارة شاملة لجميع اقسام الارشيف</p>
        </div>

        {/* Admin Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
          <div className="bg-card border-2 border-dashed border-border rounded-lg p-4 text-center hover:-translate-y-1 transition-transform">
            <div className="text-muted-foreground font-bold text-lg mb-2">الموردين</div>
            <div className="text-3xl font-bold text-foreground font-heading">6</div>
          </div>
          <div className="bg-card border-2 border-dashed border-border rounded-lg p-4 text-center hover:-translate-y-1 transition-transform">
            <div className="text-muted-foreground font-bold text-lg mb-2">المنتجات</div>
            <div className="text-3xl font-bold text-foreground font-heading">6</div>
          </div>
          <div className="bg-card border-2 border-dashed border-border rounded-lg p-4 text-center hover:-translate-y-1 transition-transform">
            <div className="text-muted-foreground font-bold text-lg mb-2">الاعضاء</div>
            <div className="text-3xl font-bold text-foreground font-heading">3</div>
          </div>
          <div className="bg-card border-2 border-dashed border-border rounded-lg p-4 text-center hover:-translate-y-1 transition-transform">
            <div className="text-muted-foreground font-bold text-lg mb-2">الفئات</div>
            <div className="text-3xl font-bold text-foreground font-heading">20</div>
          </div>
        </div>

        {/* Admin Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Categories Management */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-sm">
            <h3 className="text-xl font-extrabold text-primary mb-6 text-center border-b-0 sticky top-0 bg-card/50 z-10 pb-2">
              📂 إدارة الفئات
            </h3>
            <div className="flex justify-center gap-2 mb-4">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                <i className="fas fa-plus"></i> إضافة فئة
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {/* Example Category */}
              <li className="bg-muted/50 border border-border rounded-xl p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold flex items-center gap-2">
                    <i className="fas fa-folder text-primary"></i> إلكترونيات
                  </span>
                  <div className="flex gap-2">
                    <button className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs hover:opacity-90">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs hover:opacity-90">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-background p-2 rounded-md flex justify-between items-center border border-border">
                    <span className="text-sm font-medium">هواتف ذكية</span>
                    <div className="flex gap-1">
                      <button className="text-destructive hover:bg-destructive/10 p-1 rounded">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div className="bg-background p-2 rounded-md flex justify-between items-center border border-border">
                    <span className="text-sm font-medium">حواسيب</span>
                    <div className="flex gap-1">
                      <button className="text-destructive hover:bg-destructive/10 p-1 rounded">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Suppliers Management */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-sm">
            <div className="flex justify-between items-center mb-6 pb-2 border-b border-border/50">
              <h3 className="text-xl font-extrabold text-primary m-0 flex items-center gap-2">
                <i className="fas fa-users"></i> ادارة الموردين
              </h3>
              <Link
                href="/suppliers/add"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <i className="fas fa-user-plus"></i> اضافة مورد جديد
              </Link>
            </div>
            <ul className="space-y-3">
              <li className="bg-muted/30 border border-border rounded-lg p-3 flex justify-between items-center hover:bg-muted/50 transition-colors">
                <span className="font-bold flex items-center gap-2">
                  <i className="fas fa-building text-muted-foreground"></i> شركة الأمل للتجارة
                </span>
                <div className="flex gap-2">
                  <button className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-xs hover:opacity-90">
                    تفاصيل
                  </button>
                  <button className="bg-destructive text-destructive-foreground px-3 py-1 rounded text-xs hover:opacity-90">
                    حذف
                  </button>
                </div>
              </li>
              <li className="bg-muted/30 border border-border rounded-lg p-3 flex justify-between items-center hover:bg-muted/50 transition-colors">
                <span className="font-bold flex items-center gap-2">
                  <i className="fas fa-building text-muted-foreground"></i> مؤسسة النور
                </span>
                <div className="flex gap-2">
                  <button className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-xs hover:opacity-90">
                    تفاصيل
                  </button>
                  <button className="bg-destructive text-destructive-foreground px-3 py-1 rounded text-xs hover:opacity-90">
                    حذف
                  </button>
                </div>
              </li>
            </ul>
          </div>

          {/* Users Management */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-sm">
            <div className="flex justify-between items-center mb-6 pb-2 border-b border-border/50">
              <h3 className="text-xl font-extrabold text-primary m-0 flex items-center gap-2">
                <i className="fas fa-users"></i> إدارة المستخدمين
              </h3>
              <Link
                href="/users/add"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <i className="fas fa-user-plus"></i> إضافة مستخدم جديد
              </Link>
            </div>
            <ul className="grid grid-cols-1 gap-4">
              <li className="bg-muted/30 border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <p className="font-bold flex items-center gap-2 text-lg">
                      <i className="fa-solid fa-user text-primary"></i> admin 🏆
                    </p>
                    <small className="text-muted-foreground flex items-center gap-1">
                      <i className="fa-solid fa-clock"></i> آخر نشاط: 2023-10-01
                    </small>
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <small>
                      <i className="fa-solid fa-box"></i> عدد المنتجات: 2
                    </small>
                    <small>
                      <i className="fa-solid fa-star"></i> عدد النقاط: 150
                    </small>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Link
                      href="/users/1"
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-xs hover:opacity-90 flex items-center gap-1"
                    >
                      <i className="fa-solid fa-info-circle"></i> تفاصيل
                    </Link>
                    <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:opacity-90 flex items-center gap-1">
                      <i className="fa-solid fa-award"></i> تكريم
                    </button>
                    <button className="bg-destructive text-destructive-foreground px-3 py-1 rounded text-xs hover:opacity-90 flex items-center gap-1">
                      <i className="fa-solid fa-trash"></i> حذف
                    </button>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-border/50">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <i className="fa-solid fa-user-check text-primary"></i> طلبات العضوية
              </h3>
              <ul className="space-y-2">
                <li className="text-center text-muted-foreground py-4 bg-muted/20 rounded-lg border border-dashed border-border">
                  لا توجد طلبات عضوية جديدة
                </li>
              </ul>
            </div>
          </div>

          {/* Products Management */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-sm">
            <div className="flex justify-between items-center mb-6 pb-2 border-b border-border/50">
              <h3 className="text-xl font-extrabold text-primary m-0 flex items-center gap-2">
                <i className="fas fa-box"></i> إدارة المنتجات
              </h3>
              <Link
                href="/products/add"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <i className="fa-solid fa-cart-plus"></i> اضافة منتج جديد
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <select className="bg-background border border-border rounded px-3 py-2 text-sm flex-1 min-w-[140px]">
                <option value="">جميع الفئات</option>
                <optgroup label="البريكاست">
                  <option value="بريكاست إنشائي">بريكاست إنشائي</option>
                </optgroup>
              </select>
              <select className="bg-background border border-border rounded px-3 py-2 text-sm flex-1 min-w-[140px]">
                <option value="">جميع الموردين</option>
              </select>
            </div>

            <div className="space-y-3">
              <div className="bg-muted/30 border border-border rounded-lg p-3 flex justify-between items-center hover:bg-muted/50 transition-colors">
                <div>
                  <div className="font-bold flex items-center gap-2">
                    <span>هاتف ذكي متقدم</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">#SP001</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">إلكترونيات | admin</div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-xs hover:opacity-90 flex items-center gap-1">
                    <i className="fas fa-eye"></i> عرض
                  </button>
                  <button className="bg-destructive text-destructive-foreground px-3 py-1 rounded text-xs hover:opacity-90 flex items-center gap-1">
                    <i className="fas fa-trash"></i> حذف
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Management */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-sm lg:col-span-2">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <h3 className="text-xl font-extrabold text-primary m-0 flex items-center gap-2">
                <i className="fas fa-comments"></i> إدارة الدردشات
              </h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="ابحث في المحادثات"
                  className="bg-background border border-border rounded px-3 py-1.5 text-sm min-w-[200px]"
                />
                <button className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded text-sm hover:opacity-90 flex items-center gap-2">
                  <i className="fas fa-paper-plane"></i> رسالة خاصة
                </button>
              </div>
            </div>

            <div className="flex gap-2 mb-4 border-b border-border/50 pb-2">
              <button
                onClick={() => setActiveChatTab("group")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeChatTab === "group"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                دردشات الفريق
              </button>
              <button
                onClick={() => setActiveChatTab("direct")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeChatTab === "direct"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                الرسائل الخاصة
              </button>
              <button
                onClick={() => setActiveChatTab("ai")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeChatTab === "ai"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                محادثات الذكاء الاصطناعي
              </button>
            </div>

            <div className="min-h-[150px] bg-muted/20 rounded-lg border border-dashed border-border flex items-center justify-center text-muted-foreground">
              {activeChatTab === "group" && "لا توجد دردشات فريق نشطة"}
              {activeChatTab === "direct" && "لا توجد رسائل خاصة"}
              {activeChatTab === "ai" && "لا توجد محادثات ذكاء اصطناعي"}
            </div>
          </div>

          {/* Backup Management */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-sm">
            <h3 className="text-xl font-extrabold text-primary mb-6 text-center flex items-center justify-center gap-2">
              <i className="fas fa-save"></i> إدارة النسخ الاحتياطية
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 flex items-center justify-center gap-2">
                <i className="fas fa-download"></i> إنشاء نسخة احتياطية
              </button>
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 flex items-center justify-center gap-2">
                <i className="fas fa-cloud-download-alt"></i> تحميل آخر نسخة
              </button>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 flex items-center justify-center gap-2">
                <i className="fas fa-upload"></i> استعادة من ملف
              </button>
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 flex items-center justify-center gap-2">
                <i className="fas fa-file-csv"></i> تصدير CSV
              </button>
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground bg-muted/30 p-2 rounded border border-border">
              <i className="fas fa-info-circle ml-1"></i> لا توجد نسخ احتياطية بعد
            </div>
          </div>

          {/* Settings */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-sm">
            <h3 className="text-xl font-extrabold text-primary mb-6 text-center flex items-center justify-center gap-2">
              <i className="fas fa-cog"></i> إعدادات النظام
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">اسم الموقع</label>
                <input
                  type="text"
                  defaultValue="أرشيف الثقة التجارية"
                  className="w-full bg-background border border-border rounded px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">وصف الموقع</label>
                <textarea
                  defaultValue="منصة شاملة لإدارة المنتجات والموردين"
                  className="w-full bg-background border border-border rounded px-3 py-2 text-sm min-h-[80px]"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">البريد الإلكتروني للتواصل</label>
                <input
                  type="email"
                  defaultValue="admin@trustarchive.com"
                  className="w-full bg-background border border-border rounded px-3 py-2 text-sm"
                />
              </div>
              <button
                type="button"
                className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 flex items-center justify-center gap-2"
              >
                <i className="fas fa-save"></i> حفظ الإعدادات
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

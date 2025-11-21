"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatButtons } from "@/components/chat-buttons"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function AddOperationalAccessoriesPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/add-product.css" />
      <ThemeToggle />
      <Header />

      <div className="product-container">
        <div className="product-card">
          <div className="product-header">
            <h1 className="product-title">
              <i className="fas fa-tools"></i> إضافة مستلزمات التشغيل والمواد المكملة
            </h1>
          </div>

          <div className="product-body">
            <form id="operationalAccessoriesForm" className="product-form">
              <div className="product-section" id="section-1">
                <h2 className="product-section-title">
                  <i className="fas fa-link"></i> ١. معلومات الربط والتصنيف
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="linkedProduct">
                      <i className="fas fa-cube"></i> المنتج الأساسي المُرتبط *
                    </label>
                    <select id="linkedProduct" className="product-form-input" required>
                      <option value="">اختر المنتج الأساسي</option>
                      {/* Dynamic options */}
                    </select>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="accessoryType">
                      <i className="fas fa-folder-open"></i> التصنيف النوعي للمستلزم
                    </label>
                    <select id="accessoryType" className="product-form-input">
                      <option value="">اختر التصنيف</option>
                      <option value="مواد استهلاكية">مواد استهلاكية</option>
                      <option value="ملحقات/أدوات مكملة">ملحقات/أدوات مكملة</option>
                      <option value="مواد أولية">مواد أولية</option>
                    </select>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="accessoryName">
                      <i className="fas fa-tag"></i> اسم المستلزم/الخامة الفني *
                    </label>
                    <input
                      type="text"
                      id="accessoryName"
                      className="product-form-input"
                      placeholder="أدخل الاسم الفني"
                      required
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="referenceNumber">
                      <i className="fas fa-barcode"></i> رقم المرجع (Part Number/SKU)
                    </label>
                    <input
                      type="text"
                      id="referenceNumber"
                      className="product-form-input"
                      placeholder="أدخل رقم المرجع"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="accessoryBrand">
                      <i className="fas fa-copyright"></i> العلامة التجارية (للخامة أو الملحق)
                    </label>
                    <input
                      type="text"
                      id="accessoryBrand"
                      className="product-form-input"
                      placeholder="أدخل العلامة التجارية"
                    />
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-2">
                <h2 className="product-section-title">
                  <i className="fas fa-cogs"></i> ٢. المواصفات الفنية والمادية
                </h2>

                <div className="product-form-group full-width">
                  <label className="product-form-label">
                    <i className="fas fa-sync"></i> التوافق مع موديلات الماكينات
                  </label>
                  <div className="product-dynamic-container" id="compatibilityContainer">
                    <div className="product-field-group">
                      <input
                        type="text"
                        className="product-form-input product-field-input"
                        placeholder="أضف موديل متوافق"
                      />
                      <button type="button" className="product-add-btn">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="functionalPurpose">
                      <i className="fas fa-tasks"></i> الغرض الوظيفي
                    </label>
                    <input
                      type="text"
                      id="functionalPurpose"
                      className="product-form-input"
                      placeholder="مثال: تشحيم، تبريد، قطع، صب"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="measurementUnit">
                      <i className="fas fa-balance-scale"></i> الوحدة الأساسية للقياس
                    </label>
                    <select id="measurementUnit" className="product-form-input">
                      <option value="">اختر الوحدة</option>
                      <option value="لتر">لتر</option>
                      <option value="كجم">كجم</option>
                      <option value="متر">متر</option>
                      <option value="طقم">طقم</option>
                      <option value="وحدة">وحدة</option>
                    </select>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="concentrationPurity">
                      <i className="fas fa-percentage"></i> التركيز أو النقاء (%)
                    </label>
                    <input
                      type="number"
                      id="concentrationPurity"
                      className="product-form-input"
                      placeholder="0"
                      step="0.1"
                      min="0"
                      max="100"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="temperatureViscosity">
                      <i className="fas fa-thermometer-half"></i> درجة الحرارة/اللزوجة
                    </label>
                    <input
                      type="text"
                      id="temperatureViscosity"
                      className="product-form-input"
                      placeholder="لزيوت التشحيم والمواد السائلة"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="density">
                      <i className="fas fa-weight"></i> الكثافة
                    </label>
                    <input type="text" id="density" className="product-form-input" placeholder="للمواد الأولية" />
                  </div>

                  <div className="product-form-group full-width">
                    <label className="product-form-label">
                      <i className="fas fa-ruler-combined"></i> الأبعاد/المقاسات الميكانيكية
                    </label>
                    <div className="product-form-grid grid-2 gap10">
                      <input
                        type="text"
                        id="dimensions"
                        className="product-form-input"
                        placeholder="القطر أو العرض أو السماكة"
                      />
                      <input
                        type="text"
                        id="connectionType"
                        className="product-form-input"
                        placeholder="نوع التوصيل/التركيب"
                      />
                    </div>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="rawMaterial">
                      <i className="fas fa-flask"></i> المادة الخام للمستلزم
                    </label>
                    <input
                      type="text"
                      id="rawMaterial"
                      className="product-form-input"
                      placeholder="مثال: الفولاذ المقاوم، مركب بوليمري"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="estimatedLifespan">
                      <i className="fas fa-clock"></i> العمر الافتراضي المُقدّر أو فترة الصلاحية
                    </label>
                    <input type="text" id="estimatedLifespan" className="product-form-input" placeholder="إن وجدت" />
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-3">
                <h2 className="product-section-title">
                  <i className="fas fa-box"></i> ٣. التعبئة والشحن
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="packagingForm">
                      <i className="fas fa-box-open"></i> شكل التغليف
                    </label>
                    <input
                      type="text"
                      id="packagingForm"
                      className="product-form-input"
                      placeholder="مثال: برميل، كيس، صندوق، لفة"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="packageSizeWeight">
                      <i className="fas fa-weight-hanging"></i> حجم العبوة / الوزن الصافي للوحدة
                    </label>
                    <input
                      type="text"
                      id="packageSizeWeight"
                      className="product-form-input"
                      placeholder="أدخل الحجم أو الوزن"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="moq">
                      <i className="fas fa-boxes"></i> الحد الأدنى لكمية الطلب (MOQ)
                    </label>
                    <input
                      type="number"
                      id="moq"
                      className="product-form-input"
                      placeholder="مثال: 100"
                      step="1"
                      min="1"
                    />
                  </div>

                  <div className="product-form-group full-width">
                    <label className="product-form-label" htmlFor="storageConditions">
                      <i className="fas fa-warehouse"></i> شروط التخزين المطلوبة
                    </label>
                    <input
                      type="text"
                      id="storageConditions"
                      className="product-form-input"
                      placeholder="مثال: درجة حرارة محددة، جفاف"
                    />
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-4">
                <h2 className="product-section-title">
                  <i className="fas fa-money-check-alt"></i> ٤. التسعير والموردين والتوثيق
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="costPrice">
                      <i className="fas fa-money-bill"></i> سعر التكلفة
                    </label>
                    <div className="product-price-input">
                      <span className="product-currency">$</span>
                      <input
                        type="number"
                        id="costPrice"
                        className="product-form-input"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="suggestedSellingPrice">
                      <i className="fas fa-dollar-sign"></i> سعر البيع المقترح
                    </label>
                    <div className="product-price-input">
                      <span className="product-currency">$</span>
                      <input
                        type="number"
                        id="suggestedSellingPrice"
                        className="product-form-input"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="inventoryQuantity">
                      <i className="fas fa-warehouse"></i> الكمية في المخزون
                    </label>
                    <input
                      type="number"
                      id="inventoryQuantity"
                      className="product-form-input"
                      placeholder="مثال: 500"
                      step="1"
                      min="0"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="supplier">
                      <i className="fas fa-truck"></i> المورد الخاص بالخامة/المستلزم
                    </label>
                    <select id="supplier" className="product-form-input">
                      <option value="">اختر من الموردين</option>
                      <option value="custom">إدخال مخصص</option>
                    </select>
                    <input
                      type="text"
                      id="supplierCustom"
                      className="product-form-input hidden mt10"
                      placeholder="أدخل اسم المورد الجديد"
                    />
                  </div>
                </div>

                <div className="product-form-group full-width mt20">
                  <label className="product-form-label" htmlFor="msdsFile">
                    <i className="fas fa-file-pdf"></i> صحيفة بيانات السلامة (MSDS) (ضروري للمواد الكيميائية)
                  </label>
                  <input type="file" id="msdsFile" className="product-file-input" accept=".pdf" />
                  <label htmlFor="msdsFile" className="product-file-label">
                    <i className="fas fa-upload"></i> رفع ملف MSDS
                  </label>
                </div>

                <div className="product-form-group full-width mt20">
                  <label className="product-form-label" htmlFor="usageInstructions">
                    <i className="fas fa-book-open"></i> تعليمات الاستخدام الفني
                  </label>
                  <input type="file" id="usageInstructions" className="product-file-input" accept=".pdf,.doc,.docx" />
                  <label htmlFor="usageInstructions" className="product-file-label">
                    <i className="fas fa-upload"></i> رفع ملف التعليمات
                  </label>
                </div>

                <div className="product-form-group full-width mt20">
                  <label className="product-form-label" htmlFor="accessoryImages">
                    <i className="fas fa-images"></i> صور للمستلزم/العبوة (رفع متعدد)
                  </label>
                  <input type="file" id="accessoryImages" className="product-file-input" multiple accept="image/*" />
                  <label htmlFor="accessoryImages" className="product-file-label p15">
                    <i className="fas fa-cloud-upload-alt"></i> اضغط لرفع الصور
                  </label>
                </div>
              </div>

              <div className="product-form-actions">
                <button type="submit" className="product-submit-btn" id="save-accessory-btn">
                  <i className="fas fa-save"></i> حفظ المستلزم
                </button>
                <button type="reset" className="product-reset-btn">
                  <i className="fas fa-redo"></i> مسح النموذج
                </button>
                <Link href="/" className="product-cancel-btn">
                  <i className="fas fa-times"></i> إلغاء
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ChatButtons />
   
    </>
  )
}

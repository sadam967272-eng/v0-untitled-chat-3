"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatButtons } from "@/components/chat-buttons"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function AddSparePartPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/add-product.css" />
      <ThemeToggle />
      <Header />

      <div className="product-container">
        <div className="product-card">
          <div className="product-header">
            <h1 className="product-title">
              <i className="fas fa-cogs"></i> إضافة قطعة غيار جديدة
            </h1>
          </div>

          <div className="product-body">
            <form id="sparePartForm" className="product-form">
              <div className="product-section" id="section-1">
                <h2 className="product-section-title">
                  <i className="fas fa-link"></i> ٢. الربط بالمنتج الأساسي (الماكينة)
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
                    <label className="product-form-label" htmlFor="spareSubCategory">
                      <i className="fas fa-folder-open"></i> الفئة الفرعية لقطعة الغيار
                    </label>
                    <select id="spareSubCategory" className="product-form-input">
                      <option value="">اختر الفئة الفرعية</option>
                      <option value="كهربائية">كهربائية</option>
                      <option value="ميكانيكية">ميكانيكية</option>
                      <option value="استهلاكية">استهلاكية</option>
                      <option value="هيكلية">هيكلية</option>
                    </select>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partLocation">
                      <i className="fas fa-map-marker-alt"></i> موقع القطعة في المنتج
                    </label>
                    <input
                      type="text"
                      id="partLocation"
                      className="product-form-input"
                      placeholder="مثال: مجموعة الفرامل أو بورد التحكم"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partManualNumber">
                      <i className="fas fa-book"></i> رقم دليل الأجزاء (Part Manual Number) *
                    </label>
                    <input
                      type="text"
                      id="partManualNumber"
                      className="product-form-input"
                      placeholder="أدخل رقم دليل الأجزاء"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-2">
                <h2 className="product-section-title">
                  <i className="fas fa-info-circle"></i> ٢. المعلومات الأساسية لقطعة الغيار
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partName">
                      <i className="fas fa-tag"></i> اسم القطعة *
                    </label>
                    <input
                      type="text"
                      id="partName"
                      className="product-form-input"
                      placeholder="أدخل الاسم الفني للقطعة"
                      required
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partNumber">
                      <i className="fas fa-barcode"></i> رقم القطعة (Part Number/SKU) *
                    </label>
                    <input
                      type="text"
                      id="partNumber"
                      className="product-form-input"
                      placeholder="أدخل رقم القطعة"
                      required
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partBrand">
                      <i className="fas fa-copyright"></i> العلامة التجارية (الخاصة بالقطعة)
                    </label>
                    <input
                      type="text"
                      id="partBrand"
                      className="product-form-input"
                      placeholder="أدخل العلامة التجارية"
                    />
                  </div>
                </div>

                <div className="product-form-group full-width">
                  <label className="product-form-label" htmlFor="partDescription">
                    <i className="fas fa-align-left"></i> وصف القطعة *
                  </label>
                  <textarea
                    id="partDescription"
                    className="product-form-textarea"
                    rows={4}
                    placeholder="شرح مختصر لوظيفتها"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="product-section" id="section-3">
                <h2 className="product-section-title">
                  <i className="fas fa-cogs"></i> ٢. المواصفات الفنية لقطعة الغيار
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partMaterial">
                      <i className="fas fa-flask"></i> المادة المصنوعة منها
                    </label>
                    <input
                      type="text"
                      id="partMaterial"
                      className="product-form-input"
                      placeholder="مثال: نحاس، ستانلس ستيل"
                    />
                  </div>

                  <div className="product-form-group full-width">
                    <label className="product-form-label">
                      <i className="fas fa-ruler-combined"></i> الأبعاد الهامة
                    </label>
                    <div className="product-form-grid grid-3 gap10">
                      <input
                        type="text"
                        id="partDimensionsInner"
                        className="product-form-input"
                        placeholder="القطر الداخلي"
                      />
                      <input
                        type="text"
                        id="partDimensionsOuter"
                        className="product-form-input"
                        placeholder="القطر الخارجي"
                      />
                      <input
                        type="text"
                        id="partDimensionsLength"
                        className="product-form-input"
                        placeholder="الطول / السماكة"
                      />
                    </div>
                  </div>

                  <div className="product-form-group full-width">
                    <label className="product-form-label" htmlFor="electricalSpecs">
                      <i className="fas fa-bolt"></i> المواصفات الكهربائية (إن وجدت)
                    </label>
                    <input
                      type="text"
                      id="electricalSpecs"
                      className="product-form-input"
                      placeholder="مثال: الجهد V، الأمبير A، القوة W"
                    />
                  </div>

                  <div className="product-form-group full-width">
                    <label className="product-form-label">
                      <i className="fas fa-sync"></i> التوافق مع الموديلات
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

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="estimatedLifespan">
                      <i className="fas fa-clock"></i> العمر الافتراضي المُقدّر
                    </label>
                    <input
                      type="text"
                      id="estimatedLifespan"
                      className="product-form-input"
                      placeholder="مثال: عدد ساعات التشغيل أو أشهر"
                    />
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-4">
                <h2 className="product-section-title">
                  <i className="fas fa-money-check-alt"></i> ٢. التسعير والمخزون
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partCost">
                      <i className="fas fa-money-bill"></i> سعر التكلفة (داخلي)
                    </label>
                    <div className="product-price-input">
                      <span className="product-currency">$</span>
                      <input
                        type="number"
                        id="partCost"
                        className="product-form-input"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partPrice">
                      <i className="fas fa-dollar-sign"></i> سعر البيع المقترح
                    </label>
                    <div className="product-price-input">
                      <span className="product-currency">$</span>
                      <input
                        type="number"
                        id="partPrice"
                        className="product-form-input"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partMOQ">
                      <i className="fas fa-boxes"></i> الحد الأدنى لكمية الطلب (MOQ)
                    </label>
                    <input
                      type="number"
                      id="partMOQ"
                      className="product-form-input"
                      placeholder="مثال: 100"
                      step="1"
                      min="1"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partInventoryQuantity">
                      <i className="fas fa-warehouse"></i> الكمية في المخزون
                    </label>
                    <input
                      type="number"
                      id="partInventoryQuantity"
                      className="product-form-input"
                      placeholder="مثال: 500"
                      step="1"
                      min="0"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="partSupplier">
                      <i className="fas fa-truck"></i> المورد الخاص بالقطعة
                    </label>
                    <select id="partSupplier" className="product-form-input">
                      <option value="">اختر من الموردين</option>
                      <option value="custom">إدخال مخصص</option>
                    </select>
                    <input
                      type="text"
                      id="partSupplierCustom"
                      className="product-form-input hidden mt10"
                      placeholder="أدخل اسم المورد الجديد"
                    />
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-5">
                <h2 className="product-section-title">
                  <i className="fas fa-paperclip"></i> ٢. التوثيق والمرفقات
                </h2>

                <div className="product-form-group full-width">
                  <label className="product-form-label" htmlFor="partImages">
                    <i className="fas fa-images"></i> صور للقطعة (من عدة زوايا، رفع متعدد)
                  </label>
                  <input type="file" id="partImages" className="product-file-input" multiple accept="image/*" />
                  <label htmlFor="partImages" className="product-file-label p15">
                    <i className="fas fa-cloud-upload-alt"></i> اضغط لرفع صور القطعة
                  </label>
                </div>

                <div className="product-form-group full-width mt20">
                  <label className="product-form-label" htmlFor="partDiagram">
                    <i className="fas fa-drafting-compass"></i> مخطط القطعة التفصيلي (Diagram)
                  </label>
                  <input type="file" id="partDiagram" className="product-file-input" accept=".pdf,.jpg,.png" />
                  <label htmlFor="partDiagram" className="product-file-label">
                    <i className="fas fa-upload"></i> رفع صورة أو PDF للمخطط
                  </label>
                </div>

                <div className="product-form-group full-width mt20">
                  <label className="product-form-label" htmlFor="installationManual">
                    <i className="fas fa-book-open"></i> دليل التركيب أو الاستبدال (اختياري)
                  </label>
                  <input type="file" id="installationManual" className="product-file-input" accept=".pdf,.doc,.docx" />
                  <label htmlFor="installationManual" className="product-file-label">
                    <i className="fas fa-upload"></i> رفع ملف الدليل
                  </label>
                </div>
              </div>

              <div className="product-form-actions">
                <button type="submit" className="product-submit-btn" id="save-spare-part-btn">
                  <i className="fas fa-save"></i> حفظ القطعة
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
      <Footer />
    </>
  )
}

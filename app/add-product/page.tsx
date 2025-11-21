"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatButtons } from "@/components/chat-buttons"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function AddProductPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/add-product.css" />

      <ThemeToggle />
      <Header />

      <div className="product-container">
        <div className="product-card">
          <div className="product-header">
            <h1 className="product-title">
              <i className="fas fa-cube"></i> إضافة منتج جديد
            </h1>
          </div>

          <div className="product-body">
            <form id="productForm" className="product-form">
              <div className="product-section" id="section-1">
                <h2 className="product-section-title">
                  <i className="fas fa-info-circle"></i> المعلومات الأساسية والتصنيف
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productName">
                      <i className="fas fa-tag"></i> اسم المنتج *
                    </label>
                    <input
                      type="text"
                      id="productName"
                      className="product-form-input"
                      placeholder="أدخل اسم المنتج"
                      required
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productCategory">
                      <i className="fas fa-folder"></i> الفئة الرئيسية
                    </label>
                    <select id="productCategory" className="product-form-input">
                      <option value="">اختر الفئة الرئيسية</option>
                      <option value="البريكاست">البريكاست</option>
                      <option value="الماكينات">الماكينات</option>
                      <option value="خطوط الإنتاج">خطوط الإنتاج</option>
                      <option value="المعدات الصناعية">المعدات الصناعية</option>
                    </select>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productSubCategory">
                      <i className="fas fa-folder-open"></i> الفئة الفرعية
                    </label>
                    <select id="productSubCategory" className="product-form-input">
                      <option value="">اختر الفئة الفرعية</option>
                      <optgroup label="البريكاست">...</optgroup>
                      <optgroup label="الماكينات">...</optgroup>
                    </select>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productBrand">
                      <i className="fas fa-copyright"></i> العلامة التجارية
                    </label>
                    <input
                      type="text"
                      id="productBrand"
                      className="product-form-input"
                      placeholder="أدخل العلامة التجارية"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productModel">
                      <i className="fas fa-cube"></i> الموديل
                    </label>
                    <input
                      type="text"
                      id="productModel"
                      className="product-form-input"
                      placeholder="أدخل موديل المنتج"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productSKU">
                      <i className="fas fa-barcode"></i> الرقم التسلسلي للمخزون (SKU)
                    </label>
                    <input type="text" id="productSKU" className="product-form-input" placeholder="أدخل رقم SKU" />
                  </div>
                </div>

                <div className="product-form-group full-width">
                  <label className="product-form-label" htmlFor="productDescription">
                    <i className="fas fa-align-left"></i> وصف المنتج (الوظيفة والتطبيق) *
                  </label>
                  <textarea
                    id="productDescription"
                    className="product-form-textarea"
                    rows={4}
                    placeholder="وصف المنتج يركز على وظيفته الأساسية وكيف يُستخدم في المجال الصناعي"
                  ></textarea>
                </div>
              </div>

              <div className="product-section" id="section-2">
                <h2 className="product-section-title">
                  <i className="fas fa-cogs"></i> المواصفات الفنية والتقنية
                </h2>

                <div className="product-form-group full-width">
                  <label className="product-form-label">
                    <i className="fas fa-tasks"></i> التطبيق والاستخدامات
                  </label>
                  <div className="product-dynamic-container" id="usagesContainer">
                    <div className="product-field-group">
                      <input
                        type="text"
                        className="product-form-input product-field-input"
                        placeholder="أضف تطبيق أو استخدام رئيسي"
                      />
                      <button type="button" className="product-add-btn">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productWeight">
                      <i className="fas fa-weight-hanging"></i> الوزن الصافي
                    </label>
                    <div className="product-field-group">
                      <input
                        type="number"
                        id="productWeight"
                        className="product-form-input"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                      />
                      <select className="product-form-select w100">
                        <option value="كجم">كجم</option>
                        <option value="طن">طن</option>
                      </select>
                    </div>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="electricalVoltage">
                      <i className="fas fa-bolt"></i> متطلبات الطاقة (الجهد)
                    </label>
                    <div className="product-field-group">
                      <input
                        type="number"
                        id="electricalVoltage"
                        className="product-form-input"
                        placeholder="الجهد (مثال: 380)"
                        step="1"
                        min="0"
                      />
                      <span className="product-unit">V</span>
                    </div>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="electricalConsumption">
                      <i className="fas fa-plug"></i> متطلبات الطاقة (الاستهلاك)
                    </label>
                    <div className="product-field-group">
                      <input
                        type="number"
                        id="electricalConsumption"
                        className="product-form-input"
                        placeholder="الاستهلاك (مثال: 55)"
                        step="0.1"
                        min="0"
                      />
                      <span className="product-unit">kW</span>
                    </div>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productionCapacity">
                      <i className="fas fa-chart-line"></i> السعة / الكفاءة الإنتاجية
                    </label>
                    <input
                      type="text"
                      id="productionCapacity"
                      className="product-form-input"
                      placeholder="مثال: 100 متر مكعب/ساعة"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="mainMaterial">
                      <i className="fas fa-flask"></i> المواد الإنشائية الأساسية
                    </label>
                    <input
                      type="text"
                      id="mainMaterial"
                      className="product-form-input"
                      placeholder="مثال: فولاذ مقاوم للصدأ، ألمنيوم"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productOrigin">
                      <i className="fas fa-globe"></i> بلد المنشأ
                    </label>
                    <input type="text" id="productOrigin" className="product-form-input" placeholder="بلد التصنيع" />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="qualityStandards">
                      <i className="fas fa-certificate"></i> معايير الجودة والاعتماد
                    </label>
                    <input
                      type="text"
                      id="qualityStandards"
                      className="product-form-input"
                      placeholder="مثال: ISO 9001، شهادة CE"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productWarrantyAndSupport">
                      <i className="fas fa-shield-alt"></i> الضمان والدعم الفني
                    </label>
                    <input
                      type="text"
                      id="productWarrantyAndSupport"
                      className="product-form-input"
                      placeholder="مثال: ضمان سنة، دعم فني 24/7"
                    />
                  </div>

                  <div className="product-form-group full-width">
                    <label className="product-form-label" htmlFor="basicComponents">
                      <i className="fas fa-clipboard-list"></i> مكونات المنتج الأساسية (قائمة سريعة)
                    </label>
                    <input
                      type="text"
                      id="basicComponents"
                      className="product-form-input"
                      placeholder="أدخل المكونات مفصولة بفواصل (مثال: محرك، جسم معدني، نظام تحكم PLC)"
                    />
                  </div>
                </div>

                <div className="product-form-group full-width">
                  <label className="product-form-label">
                    <i className="fas fa-ruler-combined"></i> الأبعاد الهندسية (متر)
                  </label>
                  <div className="product-form-grid grid-3 gap10">
                    <input
                      type="number"
                      id="productLength"
                      className="product-form-input"
                      placeholder="الطول (م)"
                      step="0.01"
                      min="0"
                    />
                    <input
                      type="number"
                      id="productWidth"
                      className="product-form-input"
                      placeholder="العرض (م)"
                      step="0.01"
                      min="0"
                    />
                    <input
                      type="number"
                      id="productHeight"
                      className="product-form-input"
                      placeholder="الارتفاع (م)"
                      step="0.01"
                      min="0"
                    />
                  </div>
                </div>

                <div className="product-form-group full-width">
                  <label className="product-form-label">
                    <i className="fas fa-list"></i> الميزات التقنية الإضافية
                  </label>
                  <div className="product-dynamic-container" id="featuresContainer">
                    <div className="product-field-group">
                      <input
                        type="text"
                        className="product-form-input product-field-input"
                        placeholder="أضف ميزة تقنية جديدة"
                      />
                      <button type="button" className="product-add-btn">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="product-form-group full-width">
                  <label className="product-form-label">
                    <i className="fas fa-exclamation-triangle"></i> سلبيات المنتج
                  </label>
                  <div className="product-dynamic-container" id="negativePointsContainer">
                    <div className="product-field-group">
                      <input
                        type="text"
                        className="product-form-input product-field-input"
                        placeholder="أضف سلبية أو نقطة ضعف"
                      />
                      <button type="button" className="product-add-btn">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-3">
                <h2 className="product-section-title">
                  <i className="fas fa-money-check-alt"></i> التسعير والشروط التجارية
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productCost">
                      <i className="fas fa-money-bill"></i> سعر التكلفة (داخلي)
                    </label>
                    <div className="product-price-input">
                      <span className="product-currency">$</span>
                      <input
                        type="number"
                        id="productCost"
                        className="product-form-input"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productPrice">
                      <i className="fas fa-dollar-sign"></i> سعر البيع المقترح
                      <small className="hint">(سعر إرشادي)</small>
                    </label>
                    <div className="product-price-input">
                      <span className="product-currency">$</span>
                      <input
                        type="number"
                        id="productPrice"
                        className="product-form-input"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="pricingUnit">
                      <i className="fas fa-calculator"></i> وحدة التسعير الأساسية
                    </label>
                    <select id="pricingUnit" className="product-form-input">
                      <option value="piece">قطعة</option>
                      <option value="sqm">متر مربع</option>
                      <option value="ton">طن</option>
                      <option value="meter">متر</option>
                      <option value="other">أخرى...</option>
                    </select>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="minimumOrderQuantity">
                      <i className="fas fa-boxes"></i> الحد الأدنى لكمية الطلب (MOQ)
                    </label>
                    <input
                      type="number"
                      id="minimumOrderQuantity"
                      className="product-form-input"
                      placeholder="مثال: 100"
                      step="1"
                      min="1"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productDiscount">
                      <i className="fas fa-percent"></i> الخصم
                    </label>
                    <div className="product-price-input">
                      <span className="product-currency">%</span>
                      <input
                        type="number"
                        id="productDiscount"
                        className="product-form-input"
                        placeholder="0"
                        step="1"
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productTax">
                      <i className="fas fa-receipt"></i> الضريبة
                    </label>
                    <div className="product-price-input">
                      <span className="product-currency">%</span>
                      <input
                        type="number"
                        id="productTax"
                        className="product-form-input"
                        placeholder="0"
                        step="1"
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>
                </div>

                <div className="product-form-group full-width">
                  <label className="product-form-label" htmlFor="paymentTerms">
                    <i className="fas fa-handshake"></i> شروط الدفع المقترحة
                  </label>
                  <select id="paymentTerms" className="product-form-input">
                    <option value="advance">دفع مقدم (Advance Payment)</option>
                    <option value="LC">اعتماد مستندي (L/C)</option>
                    <option value="installments">دفعات على مراحل</option>
                    <option value="T/T">تحويل بنكي (T/T)</option>
                  </select>
                </div>
              </div>

              <div className="product-section" id="section-4">
                <h2 className="product-section-title">
                  <i className="fas fa-paperclip"></i> المرفقات والتوثيق
                </h2>

                <div className="product-form-group full-width">
                  <label className="product-form-label" htmlFor="productImages">
                    <i className="fas fa-images"></i> صور المنتج (رفع متعدد)
                  </label>
                  <input type="file" id="productImages" className="product-file-input" multiple accept="image/*" />
                  <label htmlFor="productImages" className="product-file-label p15">
                    <i className="fas fa-cloud-upload-alt"></i> اضغط لرفع صور المنتج
                  </label>
                </div>

                <div className="product-form-group full-width mt20">
                  <label className="product-form-label" htmlFor="productlink">
                    <i className="fa fa-link" aria-hidden="true"></i> رابط المنتج
                  </label>
                  <input
                    type="url"
                    id="productVideo"
                    className="product-form-input"
                    placeholder="https://www.youtube.com/watch?v=..."
                  />
                </div>

                <div className="product-form-group full-width mt20">
                  <label className="product-form-label" htmlFor="productVideo">
                    <i className="fab fa-youtube"></i> رابط فيديو للمنتج (YouTube)
                  </label>
                  <input
                    type="url"
                    id="productVideo"
                    className="product-form-input"
                    placeholder="https://www.youtube.com/watch?v=..."
                  />
                </div>

                <div className="product-form-grid grid-2">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productCatalogPdf">
                      <i className="fas fa-file-pdf"></i> كاتلوج المنتج (PDF واحد)
                    </label>
                    <input type="file" id="productCatalogPdf" className="product-file-input" accept=".pdf" />
                    <label htmlFor="productCatalogPdf" className="product-file-label">
                      <i className="fas fa-upload"></i> رفع ملف الكاتلوج
                    </label>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="operationManual">
                      <i className="fas fa-book-open"></i> دليل التشغيل والصيانة
                    </label>
                    <input type="file" id="operationManual" className="product-file-input" accept=".pdf,.doc,.docx" />
                    <label htmlFor="operationManual" className="product-file-label">
                      <i className="fas fa-upload"></i> رفع ملف الدليل
                    </label>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="qualityCertificates">
                      <i className="fas fa-medal"></i> شهادات الجودة والاعتماد
                    </label>
                    <input
                      type="file"
                      id="qualityCertificates"
                      className="product-file-input"
                      multiple
                      accept=".pdf,.jpg,.png"
                    />
                    <label htmlFor="qualityCertificates" className="product-file-label">
                      <i className="fas fa-upload"></i> رفع الشهادات (متعدد)
                    </label>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productDrawings">
                      <i className="fas fa-drafting-compass"></i> رسومات ومخططات المنتج
                    </label>
                    <input
                      type="file"
                      id="productDrawings"
                      className="product-file-input"
                      accept=".dwg,.dxf,.cad,.zip"
                    />
                    <label htmlFor="productDrawings" className="product-file-label">
                      <i className="fas fa-upload"></i> رفع ملفات DWG/CAD
                    </label>
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-5">
                <h2 className="product-section-title">
                  <i className="fas fa-truck-loading"></i> الموردين والمخزون
                </h2>

                <div className="product-suppliers-container" id="suppliersContainer">
                  <div className="product-supplier-card">
                    <h3 className="product-supplier-title">
                      <i className="fas fa-star"></i> بيانات المورد والمخزون
                    </h3>

                    <div className="product-form-grid">
                      <div className="product-form-group">
                        <label className="product-form-label" htmlFor="mainSupplierSelect">
                          <i className="fas fa-store"></i> اسم المورد
                        </label>
                        <select className="product-form-select" id="mainSupplierSelect">
                          <option value="">اختر من الموردين المسجلين</option>
                          <option value="custom">إدخال اسم مخصص</option>
                        </select>
                        <input
                          type="text"
                          id="mainSupplierCustom"
                          className="product-form-input hidden mt10"
                          placeholder="أدخل اسم المورد الجديد"
                        />
                      </div>

                      <div className="product-form-group">
                        <label className="product-form-label" htmlFor="supplierPrice">
                          <i className="fas fa-money-bill-alt"></i> سعر الشراء
                        </label>
                        <div className="product-field-group">
                          <input
                            type="number"
                            id="supplierPrice"
                            className="product-form-input"
                            placeholder="0.00"
                            step="0.01"
                            min="0"
                          />
                          <span className="product-unit">USD/CNY</span>
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
                        <label className="product-form-label" htmlFor="inventoryUnit">
                          <i className="fas fa-balance-scale"></i> وحدة المخزون
                        </label>
                        <select id="inventoryUnit" className="product-form-input">
                          <option value="عدد">العدد</option>
                          <option value="متر">المتر</option>
                          <option value="طن">الطن</option>
                          <option value="لفة">اللفة</option>
                          <option value="other">أخرى...</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="button" className="product-add-btn auto p10-15">
                  <i className="fas fa-plus"></i> إضافة مورد آخر / مصدر
                </button>
              </div>

              <div className="product-section" id="section-7">
                <h2 className="product-section-title">
                  <i className="fas fa-search"></i> إعدادات الموقع الإضافية (SEO والرؤية)
                </h2>

                <div className="product-form-group full-width">
                  <label className="product-form-label">
                    <i className="fas fa-eye"></i> إعدادات الرؤية
                  </label>
                  <div className="product-radio-group">
                    <label className="product-radio-label">
                      <input
                        type="radio"
                        name="productVisibility"
                        className="product-radio-input"
                        value="public"
                        defaultChecked
                      />
                      <i className="fas fa-globe"></i> الجميع
                    </label>
                    <label className="product-radio-label">
                      <input type="radio" name="productVisibility" className="product-radio-input" value="private" />
                      <i className="fas fa-lock"></i> أنا فقط
                    </label>
                  </div>
                </div>

                <div className="product-form-group full-width">
                  <label className="product-form-label" htmlFor="seoKeywords">
                    <i className="fas fa-key"></i> الكلمات المفتاحية (SEO)
                  </label>
                  <input
                    type="text"
                    id="seoKeywords"
                    className="product-form-input"
                    placeholder="أدخل كلمات مفتاحية مفصولة بفواصل لتحسين نتائج البحث"
                  />
                </div>

                <div className="product-form-group full-width">
                  <label className="product-form-label" htmlFor="productNotes">
                    <i className="fas fa-sticky-note"></i> ملاحظات إضافية (مساحة نصية للموظفين)
                  </label>
                  <textarea
                    id="productNotes"
                    className="product-form-textarea"
                    rows={3}
                    placeholder="ملاحظات داخلية لا تظهر للعملاء (مثل تاريخ الشراء، تحديثات الصيانة)"
                  ></textarea>
                </div>
              </div>

              <div className="product-form-actions">
                <button type="submit" className="product-submit-btn" id="save-product-btn">
                  <i className="fas fa-save"></i> حفظ المنتج
                </button>
                <button type="reset" className="product-reset-btn">
                  <i className="fas fa-redo"></i> مسح النموذج
                </button>
                <Link href="/" className="product-cancel-btn">
                  <i className="fas fa-times"></i> إلغاء
                </Link>
                <div id="form-message" className="form-message hidden mt10"></div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ChatButtons />
       
    </>
  )
}

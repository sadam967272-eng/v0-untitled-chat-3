export function HonorBoard() {
  return (
    <div className="honor-board">
      <div className="honor-header">
        <h3 className="honor-title">
          <i className="fa-solid fa-award"></i> لوحـــــة التكريـــــم
        </h3>
        <div className="honor-points" id="UserPoints">
          0 نقطة <i className="fa-solid fa-star"></i>
        </div>
      </div>
      <div className="honor-body">
        <img src="/img/tg.png" alt="صورة العضو" className="honor-image" />
        <div className="honor-info">
          <div className="honor-name" id="WeekHonorUdser">
            صادق الداعري
          </div>
          <p className="honor-message">أحسنت العمل هذا الأسبوع! استمر في الإبداع والمشاركة الفعّالة.</p>
          <button className="honor-button">👏 صفق لزميلك</button>
        </div>
      </div>
    </div>
  )
}

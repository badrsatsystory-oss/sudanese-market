document.addEventListener("DOMContentLoaded", () => {
  const productCards = document.querySelectorAll(".product-card");
  const loginForm = document.querySelector("#login-form");
  const listingForm = document.querySelector("#listing-form");
  const paymentForm = document.querySelector("#payment-form");

  productCards.forEach((card) => {
    const button = card.querySelector(".btn-ghost");
    if (button) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "product.html";
      });
    }
  });

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.querySelector("#email").value.trim();
      const password = document.querySelector("#password").value.trim();

      if (!email || !password) {
        alert("يرجى إدخال البريد الإلكتروني وكلمة المرور.");
        return;
      }

      if (password.length < 6) {
        alert("كلمة المرور قصيرة جدًا. استخدم 6 أحرف أو أكثر.");
        return;
      }

      alert("تم تسجيل الدخول بنجاح. مرحبًا بك في سوق السودان.");
      window.location.href = "index.html";
    });
  }

  if (listingForm) {
    listingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const title = document.querySelector("#title").value.trim();
      const price = document.querySelector("#price").value.trim();
      const whatsapp = document.querySelector("#whatsapp").value.trim();

      if (!title || !price || !whatsapp) {
        alert("يرجى ملء جميع الحقول الأساسية قبل النشر.");
        return;
      }

      alert("تم استلام إعلانك بنجاح. الرجاء إتمام دفع رسوم الموقع 300 جنيه سوداني.");
      window.location.href = "payment.html";
    });
  }

  if (paymentForm) {
    paymentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const transferName = document.querySelector("#transferName").value.trim();
      const bankName = document.querySelector("#bankName").value.trim();
      const amount = document.querySelector("#amount").value.trim();

      if (!transferName || !bankName || !amount) {
        alert("يرجى إدخال بيانات التحويل كاملة.");
        return;
      }

      if (Number(amount) < 300) {
        alert("قيمة التحويل أقل من الرسوم المطلوبة وهي 300 جنيه سوداني.");
        return;
      }

      alert("تم إرسال إشعار التحويل بنجاح. سيتم مراجعة الحساب والتحقق من المبلغ في أقرب وقت.");
      window.location.href = "index.html";
    });
  }
});

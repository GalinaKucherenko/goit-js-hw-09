const e=document.querySelector(".feedback-form"),o=e.querySelector('input[name="email"]'),r=e.querySelector('textarea[name="message"]'),a=JSON.parse(localStorage.getItem("feedback-form-state"));a&&(o.value=a.email||"",r.value=a.message||"");e.addEventListener("input",function(n){const t={email:o.value.trim(),message:r.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))});e.addEventListener("submit",function(n){n.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(t),localStorage.removeItem("feedback-form-state"),o.value="",r.value=""});
//# sourceMappingURL=2-form-5b20de7c.js.map

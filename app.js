// ZimShop analytics engine
// This demo logs analytics events to the browser console and localStorage.
// It is deliberately simple so students can see exactly what is being collected.

const SESSION_KEY="zimshop_session";
const USER_KEY="zimshop_user";
const EVENT_KEY="zimshop_events";

if(!sessionStorage.getItem(SESSION_KEY)){
  sessionStorage.setItem(SESSION_KEY,"S"+Date.now());
}
if(!localStorage.getItem(USER_KEY)){
  localStorage.setItem(USER_KEY,"U"+Math.random().toString(36).slice(2,10));
}

function trackEvent(eventName, properties={}){
  const event={
    event:eventName,
    timestamp:new Date().toISOString(),
    user_id:localStorage.getItem(USER_KEY),
    session_id:sessionStorage.getItem(SESSION_KEY),
    page:location.pathname,
    device_width:window.innerWidth,
    ...properties
  };
  const events=JSON.parse(localStorage.getItem(EVENT_KEY)||"[]");
  events.push(event);
  localStorage.setItem(EVENT_KEY,JSON.stringify(events));
  console.log("ANALYTICS EVENT:",event);

  // OPTIONAL WOOPRA INTEGRATION:
  // Once Woopra is installed, this can be changed to:
  // if(window.woopra) woopra.track(eventName, properties);
}

document.addEventListener("DOMContentLoaded",()=>{
  trackEvent("page_view",{title:document.title});
  updateCartCount();
});

function getCart(){
  return JSON.parse(localStorage.getItem("cart")||"[]");
}

function addToCart(product,quantity){
  const cart=getCart();
  const existing=cart.find(x=>x.id===product.id);
  if(existing) existing.quantity+=quantity;
  else cart.push({...product,quantity});
  localStorage.setItem("cart",JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount(){
  const el=document.getElementById("cartCount");
  if(el) el.textContent=getCart().reduce((s,x)=>s+x.quantity,0);
}

// Useful for the lecturer/student during practicals:
// Open browser DevTools → Console and run:
// JSON.parse(localStorage.getItem("zimshop_events"))
function getAnalyticsEvents(){
  return JSON.parse(localStorage.getItem(EVENT_KEY)||"[]");
}

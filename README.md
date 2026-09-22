# ZimShop Analytics Demo

A simple HTML/JavaScript e-commerce website for teaching Web Analytics and Mobile Business Intelligence.

## 1. Run the website

No server or database is required.

Option A:
- Extract the ZIP.
- Double-click `index.html`.

Option B (recommended):
- Open the folder in VS Code.
- Install/use the Live Server extension.
- Right-click `index.html` → Open with Live Server.

## 2. Demonstrate the customer journey

Students should perform:

Home → Products → Search → Product → Add to Cart → Cart → Checkout → Purchase → Confirmation

## 3. Events collected

The demo records:
- page_view
- shop_now
- product_list_view
- search
- product_click
- product_view
- add_to_cart
- cart_view
- begin_checkout
- checkout_view
- purchase
- confirmation_view

Each event includes a timestamp, user ID, session ID, page and relevant event properties.

## 4. View the collected data

Open the browser:
1. Press F12.
2. Select Console.
3. Run:

JSON.parse(localStorage.getItem("zimshop_events"))

You will see the event records.

You can also run:

getAnalyticsEvents()

## 5. Teaching analytics concepts

Ask students to calculate:
- Total visitors/users
- Product views
- Add-to-cart rate
- Checkout rate
- Purchase conversion rate
- Average order value
- Cart abandonment
- Most viewed product
- Most purchased product
- Search terms
- Revenue by product/category
- Revenue by province/payment method

## 6. Woopra

The site is intentionally built with a simple `trackEvent()` function.

After installing/configuring Woopra, the optional section in `app.js` can be connected to the Woopra tracking API. The event names and properties already provide a clean tracking plan.

## 7. Important classroom concept

Business Question
→ Data Requirement
→ Event Tracking
→ Data Collection
→ Analysis
→ Dashboard
→ Business Decision

## 8. Suggested practical

Give students this scenario:

"ZimShop wants to know why many customers view products but do not complete purchases."

Students must:
1. Identify required events.
2. Perform a customer journey.
3. Inspect collected events.
4. Calculate funnel conversion.
5. Identify the abandonment stage.
6. Recommend a business action.
7. Later connect/export the data for Power BI.

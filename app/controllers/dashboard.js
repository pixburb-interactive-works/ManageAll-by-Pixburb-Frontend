import Ember from "ember";

export default Ember.Controller.extend({
  showNotification: false,
  tabSelected: "dashboard",
  tabs: [{
      name: "Dashboard",
      image: "images/dashboard.svg",
      tab: "dashboard"
    },
    {
      name: "Category",
      image: "images/category.svg",
      tab: "category"
    },
    {
      name: "Products",
      image: "images/products.svg",
      tab: "products"
    },
    {
      name: "Orders",
      image: "images/orders.svg",
      tab: "orders"
    },
    {
      name: "Registered Users",
      image: "images/reguser.svg",
      tab: "reguser"
    },
    {
      name: "Discounts/Coupons",
      image: "images/coupons.svg",
      tab: "coupons"
    },
    {
      name: "Push Notifications",
      image: "images/pushnotif.svg",
      tab: "pushnotif"
    }
  ],
  asdf: [
    "Category",
    "Orders",
    "Registered Users",
    "Discounts/Coupons",
    "Push Notifications"
  ],
  actions: {
    showNotification: function () {
      this.set("showNotification", !this.get("showNotification"));
    },
    selectTab: function (tab) {
      this.set("tabSelected", tab);
    }
  }
});
